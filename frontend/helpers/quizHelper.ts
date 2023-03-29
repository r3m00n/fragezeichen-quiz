import {episodes} from "../data/episodes.json"

import {Episode, QuestionType, Quiz} from "../types/types"

import {getAudioQuestions} from "./audioQuestionHelper"
import {getCoverQuestions} from "./coverQuestionHelper"
import {getDefaultQuestions} from "./defaultQuestionHelper"
import {getQuoteQuestions} from "./quoteQuestionHelper"
import {getTriviaQuestions} from "./triviaQuestionHelper"

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
