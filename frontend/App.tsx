import React, {useState} from "react"
import * as Font from "expo-font"
// Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
// Screens
import {ContributorsScreen} from "./screens/ContributorsScreen"
import {DisclaimerScreen} from "./screens/DisclaimerScreen"
import {HomeScreen} from "./screens/HomeScreen"
import {SelectionScreen} from "./screens/SelectionScreen"
import {QuestionScreen} from "./screens/QuestionScreen"
// Header
import {Header} from "./components/Header"

const Stack = createNativeStackNavigator()

export default function App() {
    // importing fonts  TODO: schauen ob man das auch auslagern kann
    const [fontLoaded, setFontLoaded] = useState(false)

    const loadFonts = async () => {
        await Font.loadAsync({
            HelveticaNeueLTProBdCn: require("./assets/fonts/HelveticaNeueLTProBdCn.otf")
        })
        await Font.loadAsync({
            RobotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf")
        })
        await Font.loadAsync({
            RobotoCondensedLight: require("./assets/fonts/RobotoCondensed-Light.ttf")
        })
        setFontLoaded(true)
    }

    if (!fontLoaded) {
        loadFonts()
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        animation: "none",
                        header: () => <Header showPlant={true} />
                    }}
                    // options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Selection"
                    component={SelectionScreen}
                    options={{
                        animation: "fade",
                        header: () => <Header showPlant={true} />
                    }}
                />
                <Stack.Screen
                    name="Question"
                    component={QuestionScreen}
                    options={{
                        animation: "fade",
                        header: () => <Header />
                    }}
                />
                <Stack.Screen
                    name="Contributors"
                    component={ContributorsScreen}
                    options={{
                        animation: "fade",
                        header: () => <Header showPlant={true} />
                    }}
                />
                <Stack.Screen
                    name="Disclaimer"
                    component={DisclaimerScreen}
                    options={{
                        animation: "fade",
                        header: () => <Header showPlant={true} />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
