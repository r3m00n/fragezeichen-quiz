import React, {useState} from "react"
import {Image, StyleSheet, TouchableOpacity, Text} from "react-native"

import {QuestionType} from "../types/types"

interface SelectableProps {
    title: string
    onSelect: (isSelected: boolean, type: QuestionType) => void
    type: QuestionType
}

export const Selectable = ({title, onSelect, type}: SelectableProps) => {
    const [isSelected, setIsSelected] = useState(false)

    const handlePress = () => {
        setIsSelected(!isSelected)
        onSelect(!isSelected, type)
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.container, !isSelected && styles.unselected]}>
            <Text style={[styles.text, !isSelected && styles.unselected]}>
                {title}
            </Text>
            <Image
                source={
                    isSelected
                        ? require("../assets/icons/check.png")
                        : require("../assets/icons/cross.png")
                }
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        marginVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 15,
        borderWidth: 1.25,
        borderColor: "rgba(255, 255, 255, 0.4)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000"
    },
    text: {
        color: "#fff",
        fontFamily: "RobotoCondensed",
        fontSize: 20
    },
    unselected: {
        opacity: 0.5,
        borderColor: "rgba(255, 255, 255, 0.2)"
    }
})
