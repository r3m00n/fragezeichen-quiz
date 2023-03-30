import {useNavigation} from "@react-navigation/native"
import React, {useLayoutEffect} from "react"
import {StyleSheet, SafeAreaView, Text, Button} from "react-native"

export const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>??? Quiz dies das</Text>
            <Button
                title="Let's guess some of dem Covers, yo!"
                onPress={() => navigation.navigate("Question")} // FIXME: https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 20
    },
    text: {
        fontSize: 24
    }
})
