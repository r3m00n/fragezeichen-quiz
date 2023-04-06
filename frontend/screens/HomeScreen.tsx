import {useNavigation} from "@react-navigation/native"
import React from "react"
import {StyleSheet, SafeAreaView, Text, Pressable} from "react-native"

import {FragezeichenBanner} from "../components/FragezeichenBanner"

export const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <FragezeichenBanner />
            {/* FIXME: https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation */}
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Question")}>
                <Text style={styles.buttonText}>
                    Wir haben Covers,{"\n"}Hörpoben & Summaries!
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    text: {
        fontSize: 24
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black"
    },
    buttonText: {
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: 0.25,
        color: "white",
        textAlign: "center"
    }
})
