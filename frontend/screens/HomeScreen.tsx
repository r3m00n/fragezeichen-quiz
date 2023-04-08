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
                    onPress={() => navigation.navigate("Selection" as never)}
                    style={{marginBottom: 16}}
                />
                <Button
                    text={"Mitwirkende"}
                    onPress={() => navigation.navigate("Contributors" as never)}
                    style={styles.button}
                />
                <Button
                    text={"Haftungsausschluss"}
                    onPress={() => navigation.navigate("Disclaimer" as never)}
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
    },
    button: {
        marginBottom: 16
    }
})
