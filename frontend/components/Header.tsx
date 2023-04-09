import {SafeAreaView, StyleSheet} from "react-native"

import {AnimatedPlant} from "./AnimatedPlant"
import {FragezeichenBanner} from "./FragezeichenBanner"

interface HeaderProps {
    showPlant?: boolean
}

export const Header = ({showPlant = false}: HeaderProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <FragezeichenBanner />
            {showPlant && <AnimatedPlant />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
        // paddingTop: 25
    }
})
