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

import {QuestionType} from "../types/types"
import {getQuiz} from "../helpers/quizHelper"
import {Button} from "../components/Button"

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

    useEffect(() => {
        console.log(question.answer) // FIXME: nur 1x/Frage anzeigen
    }, [question])

    const handleInputChange = useCallback(
        (text: string) => {
            setInputText(text)
        },
        [setInputText]
    )

    const handleBlur = () => {
        // console.log("blures")
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={[styles.text, styles.score]}>
                    Score: {score}/{numberQuestions}
                </Text>
                <View style={styles.action}></View>
                <TextInput
                    style={styles.input}
                    placeholder="Rein mit der Antwort"
                    value={inputText}
                    onChangeText={handleInputChange}
                    onBlur={handleBlur}
                />
            </View>
            <KeyboardAvoidingView style={styles.container}>
                <Button
                    text="Bestätigen"
                    isPrimary={true}
                    style={{alignSelf: "stretch"}}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
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
        // fontFamily: "RobotoCondensed"
    },
    action: {
        width: 255,
        height: 255,
        backgroundColor: "#0f0",
        borderRadius: 12
    },
    input: {
        height: 50,
        // width: 255,
        alignSelf: "stretch",
        marginTop: 10,
        padding: 10,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 15,
        color: "#fff",
        fontSize: 16
    }
})
