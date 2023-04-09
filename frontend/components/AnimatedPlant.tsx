import React, {useEffect, useRef} from "react"
import {Animated, Image, StyleSheet, View} from "react-native"

export const AnimatedPlant = () => {
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
        <View style={styles.imageContainer} pointerEvents="none">
            <Image source={require("../assets/plant/main.png")} />
            <Animated.Image
                style={[styles.pine, {transform: [{rotate: spin}]}]}
                source={require("../assets/plant/pine.png")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        transform: [{scale: 0.8}],
        display: "flex",
        alignItems: "center",
        marginBottom: -40 // FIXME: besser wäre ohne
    },
    pine: {
        position: "absolute"
    }
})
