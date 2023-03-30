import React, {useState, useEffect} from "react"
import {View, Text, Button, StyleSheet} from "react-native"
import {Audio} from "expo-av"

interface CoverDisplayProps {
    uri: string | undefined
}

export const AudioDisplay = ({uri}: CoverDisplayProps) => {
    if (!uri) {
        return (
            <View>
                <Text style={styles.errorText}>
                    Error Loading Image{"\n"}(no url provided)
                </Text>
            </View>
        )
    }

    const [sound, setSound] = useState<Audio.Sound | null>(null)

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync()
            }
        }
    }, [sound])

    const playSound = async () => {
        try {
            const {sound: newSound} = await Audio.Sound.createAsync(
                {
                    uri: uri!
                },
                {shouldPlay: true}
            )
            setSound(newSound)
        } catch (error) {
            console.warn("Error playing sound:", error)
        }
    }

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync()
            }
        } catch (error) {
            console.warn("Error stopping sound:", error)
        }
    }

    return (
        <View>
            <Button title="Play" onPress={playSound} />
            <Button title="Stop" onPress={stopSound} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        flexShrink: 1
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    overlay: {
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    errorText: {
        color: "red",
        fontSize: 24,
        marginBottom: 8,
        textAlign: "center"
    }
})
