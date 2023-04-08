import React, {useState, useEffect} from "react"
import {Image, View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {Audio} from "expo-av"

interface CoverDisplayProps {
    uri: string | undefined
}

export const AudioDisplay = ({uri}: CoverDisplayProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [sound, setSound] = useState<Audio.Sound | null>(null)

    if (!uri) {
        return (
            <View>
                <Text style={styles.errorText}>
                    Error Loading Audio{"\n"}(no uri provided)
                </Text>
            </View>
        )
    }

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync()
            }
        }
    }, [sound])

    useEffect(() => {
        return () => {
            // FIXME: not working :(
            console.log("Component unmounted")
            stop()
        }
    }, [])

    const play = async () => {
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
    const stop = async () => {
        try {
            if (sound) {
                await sound.stopAsync()
            }
        } catch (error) {
            console.warn("Error stopping sound:", error)
        }
    }

    const togglePlaying = () => {
        isPlaying ? stop() : play()
        setIsPlaying(!isPlaying)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {isPlaying ? "Audio stoppen" : "Audio abspielen"}
            </Text>
            <TouchableOpacity onPress={togglePlaying}>
                <Image
                    source={
                        isPlaying
                            ? require("../assets/icons/stop.png")
                            : require("../assets/icons/play.png")
                    }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 255,
        height: 255,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
        // flexShrink: 1
    },
    text: {
        color: "#fff",
        fontSize: 24,
        fontFamily: "HelveticaNeueLTProBdCn"
    },
    errorText: {
        color: "red",
        fontSize: 32,
        marginBottom: 8,
        textAlign: "center"
    }
})
