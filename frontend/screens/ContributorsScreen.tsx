import {useNavigation} from "@react-navigation/native"
import {StyleSheet, SafeAreaView, View, Text} from "react-native"

import {Headline} from "../components/Headline"
import {Button} from "../components/Button"

import {version} from "../package.json"

export const ContributorsScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Headline text={"Mitwirkende"} />
                <View style={styles.creditsContainer}>
                    <Text style={[styles.text, styles.name]}>Rica Steffen</Text>
                    <Text style={styles.text}>Lead Developer</Text>
                    <Text style={[styles.text, styles.name]}>
                        Merlin Förster
                    </Text>
                    <Text style={styles.text}>Developer</Text>
                    <Text style={[styles.text, styles.name]}>
                        Michael Sieminski
                    </Text>
                    <Text style={styles.text}>Designer</Text>
                    <Text style={[styles.text, styles.name]}>
                        Sony Music Entertainment{"\n"}Germany GmbH
                    </Text>
                    <Text style={styles.text}>Bilder / Inhalte</Text>
                </View>
                <Button
                    text={"Zurück"}
                    isPrimary={true}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
            <Text style={styles.version}>v{version}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        position: "relative"
    },
    buttonContainer: {
        marginTop: 190,
        padding: 30,
        alignSelf: "stretch"
    },
    creditsContainer: {
        marginTop: 12,
        marginBottom: 24
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "RobotoCondensedLight"
    },
    name: {
        fontSize: 20,
        fontFamily: "RobotoCondensed",
        marginTop: 8
    },
    version: {
        position: "absolute",
        bottom: 10,
        right: 30,
        color: "#aaa"
    }
})
