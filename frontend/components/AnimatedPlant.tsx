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
            <Image
                style={styles.image}
                source={require("../assets/plant/main.png")}
            />
            <Animated.Image
                style={[styles.image, {transform: [{rotate: spin}]}]}
                source={require("../assets/plant/pine.png")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 250,
        left: 32,
        alignSelf: "stretch",
        position: "absolute"
    },
    image: {
        position: "absolute",
        top: 150,
        zIndex: 0
    },
    tendril: {
        zIndex: 10
    }
})
