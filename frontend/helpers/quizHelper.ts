import {episodes} from "../data/episodes.json"

import {Episode, QuestionType, Quiz} from "../types/types"

import {getAudioQuestions} from "./questions/audioQuestionHelper"
import {getCoverQuestions} from "./questions/coverQuestionHelper"
import {getDefaultQuestions} from "./questions/defaultQuestionHelper"
import {getQuoteQuestions} from "./questions/quoteQuestionHelper"
import {getSummaryQuestions} from "./questions/summaryQuestionHelper"
import {getTriviaQuestions} from "./questions/triviaQuestionHelper"

export const getQuiz = (types: QuestionType[]): Quiz => {
    if (types.length == 0) {
        types = Object.values(QuestionType)
    }

    const quiz = types.map(type => {
        switch (type) {
            case QuestionType.audio:
                return getAudioQuestions(episodes)
            case QuestionType.cover:
                return getCoverQuestions(episodes)
            case QuestionType.quote:
                return getCoverQuestions(episodes)
            // return getQuoteQuestions()
            case QuestionType.summary:
                return getSummaryQuestions(episodes)
            case QuestionType.trivia:
                return getCoverQuestions(episodes)
            // return getTriviaQuestions()
            default:
                return getCoverQuestions(episodes)
            //     return getDefaultQuestions(episodes)
        }
    })

    return shuffleQuestions(quiz.flat())
}

const shuffleQuestions = (quiz: Quiz): Quiz => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[quiz[i], quiz[j]] = [quiz[j], quiz[i]]
    }
    return quiz
}
