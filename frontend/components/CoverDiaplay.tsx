import {StyleSheet, View, Text, Image} from "react-native"
import {ReactNativeZoomableView} from "@openspacelabs/react-native-zoomable-view"
// import React from "react"

interface CoverDisplayProps {
    uri: string | undefined
    isNew: boolean | undefined
}

export const CoverDiaplay = ({uri, isNew = true}: CoverDisplayProps) => {
    if (!uri) {
        return (
            <View>
                <Text style={styles.errorText}>
                    Error Loading Image{"\n"}(no url provided)
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* FIXME: idk y aber er kommt manchmal nicht auf die Styles klar */}
            <ReactNativeZoomableView
                initialOffsetX={isNew ? -22 : 2}
                initialOffsetY={isNew ? -38 : -40}
                initialZoom={isNew ? 1.38 : 1.48}>
                <Image style={styles.image} source={{uri}} />
            </ReactNativeZoomableView>
            <View style={styles.overlay} />
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
