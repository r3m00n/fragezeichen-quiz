import {AnswerType, Episode, Question, QuestionType, Quiz} from "../types/types"

export const getAudioQuestions = (episodes: Episode[]): Quiz => {
    const episodesWithAudio = episodes.filter(e => e.mp3_urls.length)
    return episodesWithAudio.flatMap(episode =>
        episode.mp3_urls.split(";").map((url, index) => ({
            id: `audio_${episode.id}.${index}`,
            structure: {
                id: 2,
                questionType: QuestionType.audio,
                answerType: AnswerType.string
            },
            question: "Wie heißt die zu hörende Folge?",
            answer: episode.title,
            metaData: {
                audio_url: url
            }
        }))
    )
}
