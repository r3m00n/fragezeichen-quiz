import React from "react"
import {StyleSheet, View, Text} from "react-native"

import {CoverDiaplay} from "../components/CoverDiaplay"

export const TestScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Wie heißt die Folge mit diesem Cover?</Text>
            <CoverDiaplay />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    }
})
