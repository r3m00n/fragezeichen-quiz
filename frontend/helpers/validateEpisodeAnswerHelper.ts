import {similarity} from "./stringComparisonHelper"

const wordsToIgnore = [
    "der",
    "die",
    "das",
    "drei",
    "fragezeichen",
    "???",
    "und"
]

const percentageToPass = 0.8

export const isValideAnswer = (input: string, answer: string): boolean => {
    // console.log("format(input)", format(input))
    // console.log("format(answer)", format(answer))
    console.log(
        "Similarity: ",
        (similarity(format(input), format(answer)) * 100).toFixed(2),
        "%"
    ) //FIXME: delete
    return similarity(format(input), format(answer)) >= percentageToPass
}

const format = (str: string): string => {
    // convert the string to an array of words (all lowercased)
    const wordsArray = str.toLocaleLowerCase().split(" ")

    // create a new array that excludes the words to remove
    const filteredArray = wordsArray.filter(
        word => !wordsToIgnore.includes(word)
    )

    // convert the filtered array back to a string and return
    return filteredArray.join(" ")
}
