import {AnswerType, Episode, Question, QuestionType, Quiz} from "../types/types"

export const getCoverQuestions = (episodes: Episode[]): Quiz => {
    return episodes.map(episode => {
        return {
            id: `cover_${episode.id}`,
            structure: {
                id: 1,
                questionType: QuestionType.cover,
                answerType: AnswerType.string
            },
            question: "Wie heißt die Folge mit diesem Cover?",
            answer: episode.title,
            metaData: {
                cover_url: episode.cover_url,
                is_new: episode.is_new
            }
        } as Question
    })
}
