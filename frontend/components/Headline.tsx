import {StyleSheet, Text, View} from "react-native"
import React from "react"

interface HeadlineProps {
    text?: string
}

export const Headline = ({text}: HeadlineProps) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 10,
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1.25,
        borderColor: "rgba(255, 255, 255, 0.08)",
        shadowColor: "#888",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    text: {
        fontSize: 32,
        textAlign: "center",
        color: "#fff",
        fontFamily: "RobotoCondensed"
    }
})
