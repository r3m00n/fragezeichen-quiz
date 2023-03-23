import * as playwright from "playwright"
import * as fs from "fs"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

// Data to be written to the JSON file
const folgen = []

const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

async function main() {
    const consoleTitle = chalkAnimation.rainbow("Drei Fragezeichen Scraper")

    const browser = await playwright.chromium.launch({
        headless: false // set this to true to hide ui
    })

    // open browser
    const page = await browser.newPage()

    // go to website
    await page.goto("https://www.dreifragezeichen.de/produktwelt/hoerspiele")

    // // disable cookies
    await page.waitForSelector("#onetrust-reject-all-handler")
    await page.locator("#onetrust-reject-all-handler").click()

    // // get number pages
    // const pageLinks = await page.locator(".page-link").all()
    // const lastPageNum = await pageLinks[pageLinks.length - 2].innerHTML()
    const lastPageNum = 20

    // viseting all the pages
    // for (let currentPage = 1; currentPage <= lastPageNum; currentPage++) {
    //     console.log(`Scraping Page ${currentPage}/${lastPageNum}`)

    // go to page
    await page.goto(
        // `https://www.dreifragezeichen.de/produktwelt/hoerspiele?page=${currentPage}`
        `https://www.dreifragezeichen.de/produktwelt/hoerspiele?page=${22}`
    )

    const allCardExpanders = await page.locator(".card-expander").all()
    const allCardExpandables = await page.locator(".card-expandable").all()
    // console.log(allCards)

    for (let i = 0; i < allCardExpandables.length; i++) {
        // expand
        await page
            .locator(".card-expandable")
            .nth(i)
            .locator(".btn-icon-more")
            .click()

        // click on "Mehr Infos"
        await page.locator(".card-expander").nth(0).locator("a").first().click()

        let folge = {}

        folge.folge = (await page.locator("h1").innerHTML()).slice(20)

        folge.titel = await page.locator("h2").innerHTML()

        folge.veroeffentlichung = (
            await page.getByText("Veröffentlichungsdatum").innerHTML()
        ).slice(24)

        folge.inhalt = await page.locator("p").nth(0).innerHTML()

        folge.sprecher = (await page.locator("p").nth(1).innerHTML())
            .split("<br>\n")
            .join(";")

        folge.detailinformationen = (await page.locator("p").nth(2).innerHTML())
            .split("<br>\n")
            .join(";")

        folgen.push(folge)
        console.log(folgen)

        await page.goBack()
    }
    // scape
    await page.waitForTimeout(1000) // wait
    await browser.close()
}

main()

// // Convert the data object to a JSON string
// const jsonData = JSON.stringify(data)

// // Write the JSON string to a file
// fs.writeFile("data.json", jsonData, err => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log("Data written to file successfully!")
// })
