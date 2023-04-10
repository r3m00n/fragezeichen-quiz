import {StyleSheet, View, Text, ScrollView} from "react-native"
// import React from "react"

interface CoverDisplayProps {
    summary: string | undefined
}

export const SummaryDisplay = ({
    summary = "No Summary provided :/"
}: CoverDisplayProps) => {
    return (
        <ScrollView style={styles.container} bounces={false}>
            <Text style={styles.summary}>{summary}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        // alignSelf: "stretch",
        // width: 255,
        padding: 10,
        paddingLeft: 0,
        backgroundColor: "#000"
    },
    summary: {
        fontSize: 16,
        textAlign: "justify",
        color: "#fff",
        marginBottom: 10
    },
    errorText: {
        color: "red",
        fontSize: 24,
        marginBottom: 8,
        textAlign: "center"
    }
})
