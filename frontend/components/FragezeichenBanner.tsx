import {SafeAreaView, Text, StyleSheet} from "react-native"
import React from "react"

export const FragezeichenBanner = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Die drei ?<Text style={styles.red}>?</Text>
                <Text style={styles.blue}>?</Text> Quiz
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 32
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        color: "#fff",
        fontFamily: "HelveticaNeueLTProBdCn",
        fontWeight: "700" // useless
    },
    red: {color: "#E91B24"},
    blue: {color: "#02ABEB"}
})
