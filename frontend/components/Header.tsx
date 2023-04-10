import {SafeAreaView} from "react-native"

import {AnimatedPlant} from "./AnimatedPlant"
import {FragezeichenBanner} from "./FragezeichenBanner"

interface HeaderProps {
    showPlant?: boolean
}

export const Header = ({showPlant = false}: HeaderProps) => {
    return (
        <SafeAreaView>
            <FragezeichenBanner />
            {showPlant && <AnimatedPlant />}
        </SafeAreaView>
    )
}
