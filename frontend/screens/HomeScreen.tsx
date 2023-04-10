import {useNavigation} from "@react-navigation/native"
import {StyleSheet, SafeAreaView, View} from "react-native"
import {Button} from "../components/Button"

export const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    text={"Jetzt spielen"}
                    isPrimary={true}
                    onPress={() => navigation.navigate("Selection" as never)}
                    style={styles.button}
                />
                <Button
                    text={"Mitwirkende"}
                    onPress={() => navigation.navigate("Contributors" as never)}
                    style={styles.button}
                />
                <Button
                    text={"Haftungsausschluss"}
                    onPress={() => navigation.navigate("Disclaimer" as never)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    buttonContainer: {
        paddingHorizontal: 30
    },
    button: {
        marginBottom: 16
    }
})
