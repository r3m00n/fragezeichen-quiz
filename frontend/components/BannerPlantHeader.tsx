import {SafeAreaView, StyleSheet} from "react-native"

import {AnimatedPlant} from "./AnimatedPlant"
import {FragezeichenBanner} from "./FragezeichenBanner"

export const BannerPlantHeader = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FragezeichenBanner />
            <AnimatedPlant />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    }
})
