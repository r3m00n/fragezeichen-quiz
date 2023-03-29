import React, {useCallback, useEffect, useMemo, useRef, useState} from "react"
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView
} from "react-native"

import {CoverDiaplay} from "../components/CoverDiaplay"

import {isValideAnswer} from "../helpers/validateEpisodeAnswerHelper"
import {getQuiz} from "../helpers/quizHelper"
import {QuestionType} from "../types/types"

export const TestScreen = () => {
    const refInput = useRef()
    const quiz = useMemo(() => getQuiz([QuestionType.cover]), [])
    const [question, setQuestion] = useState(quiz[0])
    const [inputText, setInputText] = useState("")
    const [score, setScore] = useState(0)
    const [numberQuestions, setNumberQuestions] = useState(0)

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

        setNumberQuestions(numberQuestions + 1)
        if (isValideAnswer(inputText, question.answer)) {
            setScore(score + 1)
        } else {
        }

        setQuestion(quiz[numberQuestions + 1]) // FIXME: das kann sich doch keiner geben
        setInputText("")
        refInput.current.focus()
        console.log(question.answer)
    }, [inputText])

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text>
                {score}/{numberQuestions}{" "}
                {/* {question.metaData?.is_new ? "new" : "old"} */}
            </Text>
            <Text style={styles.header}>
                Wie heißt die Folge{"\n"}
                mit diesem Cover?
            </Text>
            <CoverDiaplay
                uri={question.metaData?.cover_url}
                isNew={question.metaData?.is_new}
            />
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={handleInputChange}
                onSubmitEditing={handleSubmit}
                placeholder="Answer here pls"
                // autoFocus={true}
                returnKeyType="next"
                ref={refInput}
                blurOnSubmit={false}
            />
            <Button title="Checkerino" onPress={handleSubmit} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    header: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 8
    },
    input: {
        height: 40,
        width: "80%",
        borderRadius: 6,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})
