import {useNavigation} from "@react-navigation/native"
import React, {useLayoutEffect} from "react"
import {StyleSheet, SafeAreaView, Text, Button} from "react-native"

export const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hey Hoes let's Goes</Text>
            <Button
                title="Let's guess some of dem Covers, yo!"
                onPress={() => navigation.navigate("Test")} // FIXME: https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation
            />
        </SafeAreaView>
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
