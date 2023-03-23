import * as playwright from "playwright"
import * as fs from "fs"
import chalkAnimation from "chalk-animation"

// Data to be written to the JSON file
const folgen = []

async function main() {
    chalkAnimation.rainbow("Drei Fragezeichen Scraper")

    const browser = await playwright.chromium.launch({
        headless: true // set this to true to hide ui
    })

    // open browser
    const page = await browser.newPage()

    // go to website
    await page.goto("https://www.dreifragezeichen.de/produktwelt/hoerspiele")

    // // disable cookies
    await page.waitForSelector("#onetrust-reject-all-handler")
    await page.locator("#onetrust-reject-all-handler").click()

    // get total number of pages
    const lastPageNum = await page.evaluate(() => {
        let pagingLinks = document.querySelectorAll(".page-link")
        return document.querySelectorAll(".page-link")[pagingLinks.length - 2].innerHTML
    })

    // viseting all the pages
    for (let currentPage = 1; currentPage <= lastPageNum; currentPage++) {
        chalkAnimation.karaoke(`Scraping Page ${currentPage}/${lastPageNum}`)

        // go to page
        await page.goto(`https://www.dreifragezeichen.de/produktwelt/hoerspiele?page=${currentPage}`)

        // getting links for detail pages
        const cardLinks = await page.evaluate(() => {
            let links = []
            let buttons = document.querySelectorAll(".btn-primary")
            buttons.forEach(button => {
                links.push(button.href)
            })
            return links
        })

        // visiting detail pages
        for (let i = 0; i < cardLinks.length; i++) {
            await page.goto(cardLinks[i])

            let folge = {}

            folge.nummer = (await page.locator("h1").innerHTML()).slice(20)

            folge.titel = await page.locator("h2").innerHTML()

            folge.bild_url = await page.evaluate(
                () => document.getElementsByClassName("product-cover")[0].src
            )

            folge.veroeffentlichung = (await page.getByText("Veröffentlichungsdatum").innerHTML()).slice(24)

            folge.inhalt = await page.locator("p").nth(0).innerHTML()

            folge.sprecher = (await page.locator("p").nth(1).innerHTML()).split("<br>\n").join(";")

            folge.detailinformationen = (await page.locator("p").nth(2).innerHTML()).split("<br>\n").join(";")

            folge.mp3_urls = await page.evaluate(() => {
                let previews = []
                let previewButtons = document.getElementsByClassName("btn-icon-audio")
                for (let i = 0; i < previewButtons.length; i++) {
                    previews.push(previewButtons[i].href)
                }
                return previews.join(";")
            })

            folgen.push(folge)
        }
    }
    await browser.close()

    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(folgen)

    // Write the JSON string to a file
    fs.writeFile("folgen.json", jsonData, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log("Data written to file successfully!")
    })
}

main()
