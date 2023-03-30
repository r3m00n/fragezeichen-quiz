import chalkAnimation from "chalk-animation"
import * as playwright from "playwright"
import * as fs from "fs"

const WEBSITE_URL = "https://www.dreifragezeichen.de/produktwelt/hoerspiele"
const EPISODE_TITLE_NUMBER_INDEX = 20
const RELEASE_STRING_DATE_INDEX = 24

const main = async () => {
    chalkAnimation.rainbow("??? Scraperino")
    console.log("Start scraping data from dreifragezechen.de")

    const browser = await playwright.chromium.launch({headless: true})
    const page = await browser.newPage()
    await initializePage(page)
    const episodes = await getEpisodes(page)
    await saveEpisodes(episodes)
    await browser.close()
}

const initializePage = async page => {
    await page.goto(WEBSITE_URL)
    await disableCookies(page)
}

const disableCookies = async page => {
    await page.waitForSelector("#onetrust-reject-all-handler")
    await page.locator("#onetrust-reject-all-handler").click()
}

const getEpisodes = async page => {
    const episodes = []
    const lastPageNumber = await getLastPageNumber(page)
    for (
        let currentPageNumber = 1;
        currentPageNumber <= lastPageNumber;
        currentPageNumber++
    ) {
        chalkAnimation.karaoke(
            `Scraping page ${currentPageNumber}/${lastPageNumber}`
        )

        const detailPageUris = await getDetailPageUris(page, currentPageNumber)
        for (let i = 0; i < detailPageUris.length; i++) {
            const episode = await generateEpisode(page, detailPageUris[i])
            if (isValidEpisode(episode)) {
                episodes.push(episode)
            }
        }
    }
    return episodes
}

const getLastPageNumber = async page => {
    const lastPageNumber = await page.evaluate(() => {
        let pageLinks = document.querySelectorAll(".page-link")
        return pageLinks[pageLinks.length - 2].innerHTML
    })
    return lastPageNumber
}

const getDetailPageUris = async (page, pageNumber) => {
    await page.goto(`${WEBSITE_URL}?page=${pageNumber}`)
    const detailPageUris = await page.evaluate(() => {
        const buttons = document.querySelectorAll(".btn-primary")
        console.log("buttons", buttons)
        return [...buttons].map(button => button.href)
    })
    return detailPageUris
}

const generateEpisode = async (page, detailPageUri) => {
    await page.goto(detailPageUri)
    const episodeTitle = await page.locator("h1").innerHTML()
    const number = episodeTitle.slice(EPISODE_TITLE_NUMBER_INDEX)
    const title = await page.locator("h2").innerHTML()
    const is_new = number >= 125
    const releaseDateString = await page
        .getByText("Veröffentlichungsdatum")
        .innerHTML()
    const release_date = releaseDateString.slice(RELEASE_STRING_DATE_INDEX)
    const cover_url = await page.evaluate(() => {
        return document.getElementsByClassName("product-cover")[0].src
    })
    const mp3_urls = await page.evaluate(() => {
        const buttons = document.getElementsByClassName("btn-icon-audio")
        const audioUris = [...buttons].map(button => button.href)
        return audioUris.join(";")
    })
    const summary = await page.locator("p").nth(0).innerHTML()
    const voiceActorsString = await page.locator("p").nth(1).innerHTML()
    const voice_actors = voiceActorsString.split("<br>\n").join(";")
    const contributorsString = await page.locator("p").nth(2).innerHTML()
    const contributors = contributorsString.split("<br>\n").join(";")

    return {
        number,
        title,
        is_new,
        release_date,
        cover_url,
        mp3_urls,
        summary,
        voice_actors,
        contributors
    }
}

const isValidEpisode = episode => {
    const hasEpisodeNumber = !isNaN(episode.number)
    const isNoSteelbook = !episode.title.includes("Steelbook")
    return hasEpisodeNumber && isNoSteelbook
}

const saveEpisodes = async episodes => {
    const jsonData = JSON.stringify({episodes})
    fs.writeFile("./out/episodes.json", jsonData, error => {
        if (error) {
            console.error(error)
            return
        }
        console.log("Successfully written data into episodes.json!")
    })
}

main()
