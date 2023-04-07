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
        width: "100%",
        height: 250,
        top: 130,
        alignSelf: "stretch",
        position: "absolute",
        transform: [{scale: 0.8}],
        display: "flex",
        alignItems: "center"
    },
    image: {
        position: "absolute"
    }
})
