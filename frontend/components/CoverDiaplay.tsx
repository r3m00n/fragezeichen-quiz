import {StyleSheet, View, Text, Image} from "react-native"
import {ReactNativeZoomableView} from "@openspacelabs/react-native-zoomable-view"
// import React from "react"

const CoverDiaplay = () => {
    return (
        <View
            style={{
                // borderWidth: 5,
                flexShrink: 1,
                height: 300,
                width: 300,
                borderWidth: 5
                // backgroundColor: "red"
            }}>
            <ReactNativeZoomableView
                // contentWidth={300}
                // contentHeight={300}
                // zoomEnabled={false}
                // disablePanOnInitialZoom={true}

                // new covers
                // initialOffsetX={-10}
                // initialOffsetY={-40}
                // initialZoom={1.5}>

                // old covers
                initialOffsetX={-0}
                initialOffsetY={-40}
                initialZoom={1.5}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain"
                    }}
                    source={{
                        // uri: "https://cdn.smehost.net/hcmssmeappscom-delabelsprod/produkte/hoerspiele/ddf_cd_003.jpg"
                        uri: "https://cdn.smehost.net/hcmssmeappscom-delabelsprod/produkte/hoerspiele/01_ab_213/01_ddf_216_cover_digital.jpg"
                    }}
                />
            </ReactNativeZoomableView>
            <View
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        height: 300,
        width: 300,
        borderWidth: 5
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
})

export default CoverDiaplay
