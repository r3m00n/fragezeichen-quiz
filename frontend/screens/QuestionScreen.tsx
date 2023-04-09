import React, {useCallback, useEffect, useMemo, useState} from "react"
import {
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native"

import {isValideAnswer} from "../helpers/validateEpisodeAnswerHelper"

import {QuestionType} from "../types/types"
import {getQuiz} from "../helpers/quizHelper"
import {Button} from "../components/Button"
import {AudioDisplay} from "../components/AudioDisplay"
import {CoverDisplay} from "../components/CoverDisplay"
import {SummaryDisplay} from "../components/SummaryDisplay"

type DetailsScreenProps = {
    route: {
        params: {
            questionTypes: QuestionType[]
        }
    }
}

export const QuestionScreen = ({
    route: {
        params: {questionTypes = [QuestionType.cover]}
    }
}: DetailsScreenProps) => {
    const quiz = useMemo(() => getQuiz(questionTypes), [])
    const [question, setQuestion] = useState(quiz[0])
    const [score, setScore] = useState(0)
    const [numberQuestions, setNumberQuestions] = useState(0)
    const [inputText, setInputText] = useState("")
    const [inputColor, setInputColor] = useState("#fff")

    useEffect(() => {
        console.log(question.answer)
    }, [question])

    const handleInputChange = useCallback(
        (text: string) => {
            setInputText(text)
        },
        [setInputText]
    )

    const handleSubmit = useCallback(() => {
        if (!inputText) return

        console.log("Input:", inputText) // FIXME: delete

        // Keyboard.dismiss()
        setNumberQuestions(numberQuestions + 1)
        if (isValideAnswer(inputText, question.answer)) {
            setScore(score + 1)
            setInputColor("#02ABEB")
        } else {
            setInputColor("#E91B24")
            setInputText(question.answer)
        }

        setTimeout(() => {
            setQuestion(quiz[numberQuestions + 1]) // TODO: check if right
            setInputText("")
            setInputColor("#fff")
        }, 2000)
    }, [inputText])

    // TODO: als Component (hier drin) machen
    const questionContent = useMemo(() => {
        switch (question.structure.questionType) {
            case QuestionType.audio:
                return <AudioDisplay uri={question.metaData?.audio_url} />
            case QuestionType.cover:
                return (
                    <CoverDisplay
                        uri={question.metaData?.cover_url}
                        isNew={question.metaData?.is_new}
                    />
                )
            case QuestionType.summary:
                return <SummaryDisplay summary={question.metaData?.summary} />
        }
    }, [question])

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={[styles.text, styles.score]}>
                    Score: {score}/{numberQuestions}
                </Text>
                <View style={styles.action}>{questionContent}</View>
                <TextInput
                    style={[styles.input, {color: inputColor}]}
                    placeholder="Rein mit der Antwort"
                    value={inputText}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleSubmit}
                    blurOnSubmit={false}
                    autoComplete="off"
                    onBlur={() => Keyboard.dismiss()} // FIXME: shit ain't working
                />
            </View>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Button
                    text="Bestätigen"
                    isPrimary={true}
                    style={{alignSelf: "stretch"}}
                    onPress={handleSubmit}
                />
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-between"
    },
    container: {
        paddingHorizontal: 30,
        display: "flex",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        textAlign: "center"
    },
    score: {
        fontSize: 24,
        fontFamily: "HelveticaNeueLTProBdCn"
    },
    action: {
        alignSelf: "stretch",
        height: 255,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        height: 50,
        alignSelf: "stretch",
        marginTop: 10,
        padding: 10,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 15,
        color: "#fff",
        fontSize: 16,
        fontFamily: "RobotoCondensed"
    }
})
