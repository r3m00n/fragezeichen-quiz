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
                    isPrimary={false}
                    onPress={() => console.log("Mitwirkende")}
                />
                <Button
                    text={"Haftungsausschluss"}
                    isPrimary={false}
                    onPress={() => console.log("Haftungsausschluss")}
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
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        margibVertical: 80
    },
    imageContainer: {
        height: 250,
        left: 32,
        alignSelf: "stretch",
        position: "relative"
    },
    image: {
        position: "absolute",
        top: 150
    },
    tendril: {
        zIndex: 10
    },
    buttonContainer: {
        marginTop: 240,
        padding: 30,
        marginBottom: 10,
        alignSelf: "stretch"
    }
})
