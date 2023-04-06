import React, {useState} from "react"
import * as Font from "expo-font"
// Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
// Screens
import {HomeScreen} from "./screens/HomeScreen"
import {TestScreen} from "./screens/QuestionScreen"

const Stack = createNativeStackNavigator()

export default function App() {
    // importing fonts
    const [fontLoaded, setFontLoaded] = useState(false)

    const loadFonts = async () => {
        await Font.loadAsync({
            HelveticaNeueLTProBdCn: require("./assets/fonts/HelveticaNeueLTProBdCn.otf")
        })
        await Font.loadAsync({
            RobotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf")
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
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Question"
                    component={TestScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
