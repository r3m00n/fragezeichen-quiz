import {
    AnswerType,
    Episode,
    Question,
    QuestionType,
    Quiz
} from "../../types/types"

export const getSummaryQuestions = (episodes: Episode[]): Quiz => {
    return episodes.map(episode => ({
        id: `summary_${episode.id}`,
        structure: {
            id: 3,
            questionType: QuestionType.summary,
            answerType: AnswerType.string
        },
        question: "Wie heißt die Folge mit dieser Beschreibung?",
        answer: episode.title,
        metaData: {
            summary: episode.summary
        }
    })) as Question[]
}
