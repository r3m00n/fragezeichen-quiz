import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {HomeScreen} from "./screens/HomeScreen"
import {TestScreen} from "./screens/TestScreen"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tescht" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
