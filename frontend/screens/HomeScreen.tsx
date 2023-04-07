import {useNavigation} from "@react-navigation/native"
import React, {useState, useEffect, useRef} from "react"
import {
    Image,
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Pressable,
    Animated,
    Easing
} from "react-native"

import {Button} from "../components/Button"

export const HomeScreen = () => {
    const navigation = useNavigation()

    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 3000,
                    // easing: Easing.ease,
                    useNativeDriver: true
                }),
                Animated.timing(rotateAnim, {
                    toValue: 0,
                    duration: 3000,
                    // easing: Easing.ease,
                    useNativeDriver: true
                })
            ])
        ).start()
    }, [rotateAnim])

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["-15deg", "5deg"]
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    text={"Jetzt spielen"}
                    isPrimary={true}
                    // FIXME: https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation
                    onPress={() => navigation.navigate("Question")}
                />
                <Button
                    text={"Mitwirkende"}
                    onPress={() => navigation.navigate("Contributors")}
                />
                <Button
                    text={"Haftungsausschluss"}
                    onPress={() => navigation.navigate("Disclaimer")}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        position: "relative"
    },
    buttonContainer: {
        marginTop: 190,
        padding: 30,
        marginBottom: 10,
        alignSelf: "stretch"
    }
})
