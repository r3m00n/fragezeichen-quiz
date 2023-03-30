export interface Episode {
    id: number
    number: number
    title: string
    cover_url: string
    release_date: string
    summary: string
    voice_actors: string
    contributors: string
    mp3_urls: string
    is_new: boolean
}

export interface FormattedEpisode {
    id: number
    numer: number
    title: string
    cover_url: string
    release_date: string
    summary: string
    voice_actors: string[]
    contributors: string[]
    audio_urls: string[]
    is_new: boolean
}

export type Quiz = Question[]

export interface Question {
    id: string
    structure: QuestionStructure
    question: string
    choices?: string[]
    answer: string
    metaData?: QuestionMetaData
}

export interface QuestionStructure {
    id: number
    questionType: QuestionType
    answerType: AnswerType
}

export enum QuestionType {
    audio = "audio",
    cover = "cover",
    default = "default",
    quote = "quote",
    summary = "summary",
    trivia = "trivia",
    truth = "truth"
}

export enum AnswerType {
    string = "string",
    singleChoice = "singleChoice",
    multipleChoice = "multipleChoice"
}

interface QuestionMetaData {
    cover_url?: string
    audio_url?: string
    is_new?: boolean
}
