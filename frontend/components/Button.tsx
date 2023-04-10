import {Text, StyleSheet, TouchableOpacity, ViewStyle} from "react-native"
import React from "react"

interface ButtonProps {
    text?: string
    isPrimary?: boolean
    onPress?: () => void
    style?: ViewStyle
    isInactive?: boolean
}

export const Button = ({
    text = "Click me",
    isPrimary = false,
    onPress,
    style,
    isInactive = false
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                !isPrimary && styles.notPrimaryContainer,
                style,
                isInactive && styles.inactive
            ]}>
            <Text
                style={[
                    styles.text,
                    !isPrimary && styles.notPrimaryText,
                    isInactive && styles.inactive
                ]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1.25,
        borderColor: "rgba(255, 255, 255, 0.5)",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000"
    },
    notPrimaryContainer: {
        borderColor: "rgba(255, 255, 255, 0.3)"
    },
    text: {
        fontSize: 32,
        textAlign: "center",
        color: "#fff",
        fontFamily: "RobotoCondensed"
    },
    notPrimaryText: {
        fontSize: 24,
        fontFamily: "RobotoCondensedLight",
        color: "rgba(255, 255, 255, 0.6)"
    },
    inactive: {
        color: "rgba(255, 255, 255, 0.3)",
        borderColor: "rgba(255, 255, 255, 0.2)"
    }
})
