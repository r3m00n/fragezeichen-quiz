import {useNavigation} from "@react-navigation/native"
import {StyleSheet, SafeAreaView, View, Text} from "react-native"
import React, {useEffect, useState} from "react"

import {QuestionType} from "../types/types"
// FIXME: importieren statt hardcoden
const GAMEMODES = [
    {id: 1, title: "Cover", type: QuestionType.cover},
    {id: 2, title: "Audio", type: QuestionType.audio},
    {id: 3, title: "Summary", type: QuestionType.summary}
]

import {Headline} from "../components/Headline"
import {Button} from "../components/Button"
import {Selectable} from "../components/Selectable"

export const SelectionScreen = () => {
    const navigation = useNavigation()
    const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([])
    const [isHighlighted, setIsHighlighted] = useState(false)

    useEffect(() => {
        setSelectedTypes(GAMEMODES.map(g => g.type))
    }, [])

    const handleSelect = (selected: boolean, type: QuestionType) => {
        if (selected) {
            setSelectedTypes([...selectedTypes, type])
        } else {
            setSelectedTypes(selectedTypes.filter(t => t != type))
        }
    }

    const handleStart = () => {
        if (!selectedTypes.length) {
            setIsHighlighted(true)
            setTimeout(() => {
                setIsHighlighted(false)
            }, 1000)
        } else {
            navigation.navigate(
                "Question" as never,
                {
                    questionTypes: selectedTypes
                } as never
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.selectionContainer}>
                <Headline text={"Spielkategorien"} />
                <Text style={[styles.text, styles.topText]}>
                    Wähle die Kategorien, von denen du{"\n"}die Folgen erraten
                    möchtest.
                </Text>
                {GAMEMODES.map(g => (
                    <Selectable
                        key={g.id}
                        title={g.title}
                        type={g.type}
                        onSelect={handleSelect}
                    />
                ))}
                {!selectedTypes.length && (
                    <Text
                        style={[
                            styles.text,
                            isHighlighted && {color: "#E91B24"}
                        ]}>
                        Zum starten mindestens eine Kategorie auswählen.
                    </Text>
                )}
                <Button
                    text={"Quiz starten"}
                    isPrimary={true}
                    onPress={handleStart}
                    style={styles.button}
                    isInactive={!selectedTypes.length}
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
    selectionContainer: {
        marginTop: 190,
        padding: 30,
        alignSelf: "stretch",
        marginBottom: 24
    },
    text: {
        marginVertical: 6,
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "RobotoCondensedLight"
    },
    topText: {
        marginTop: 10,
        marginVertical: 4
    },
    button: {marginTop: 8}
})
