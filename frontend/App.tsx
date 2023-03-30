import * as React from "react"
// Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
// Screens
import {HomeScreen} from "./screens/HomeScreen"
import {TestScreen} from "./screens/QuestionScreen"

const Stack = createNativeStackNavigator()

export default function App() {
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
