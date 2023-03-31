import {StyleSheet, View, Text, Image} from "react-native"
// import React from "react"

interface CoverDisplayProps {
    summary: string | undefined
}

export const SummaryDisplay = ({summary}: CoverDisplayProps) => {
    if (!summary) {
        return (
            <View>
                <Text style={styles.errorText}>
                    No Summary provided{"\n"}Next Question please
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.summary}>{summary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        flexShrink: 1
    },
    summary: {
        fontSize: 16,
        textAlign: "justify"
    },
    errorText: {
        color: "red",
        fontSize: 24,
        marginBottom: 8,
        textAlign: "center"
    }
})
