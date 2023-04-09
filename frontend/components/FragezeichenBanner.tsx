import {Text, StyleSheet, Platform, StatusBar, View} from "react-native"
import React from "react"

export const FragezeichenBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Die drei ?<Text style={styles.red}>?</Text>
                <Text style={styles.blue}>?</Text> Quiz
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    },
    text: {
        textAlign: "center",
        fontSize: 48,
        color: "#fff",
        fontFamily: "HelveticaNeueLTProBdCn"
    },
    red: {color: "#E91B24"},
    blue: {color: "#02ABEB"}
})
