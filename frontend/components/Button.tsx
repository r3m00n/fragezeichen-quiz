import {Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"

interface ButtonProps {
    text: string | undefined
    isPrimary: boolean | undefined
    onPress: () => void
}

export const Button = ({
    text = "Click me",
    isPrimary = true,
    onPress
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                !isPrimary && styles.notPrimaryContainer
            ]}>
            <Text style={[styles.text, !isPrimary && styles.notPrimaryText]}>
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
        backgroundColor: "#000",
        marginBottom: 16 // FIXME: scheiße, das hier drin zu machen
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
    }
})
