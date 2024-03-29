import {useNavigation} from "@react-navigation/native"
import {StyleSheet, SafeAreaView, View, Text} from "react-native"

import {Headline} from "../components/Headline"
import {Button} from "../components/Button"

export const DisclaimerScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Headline text={"Haftungsausschluss"} />
                <Text style={styles.text}>
                    Die in dieser App verwendeten Inhalte sind urheberrechtlich
                    geschützt und Eigentum von Sony Music Entertainment Germany
                    GmbH. Die App wurde von Rica Steffen und Merlin Förster
                    lediglich programmiert und hat keinerlei Eigentumsrechte an
                    den Inhalten. Jegliche unautorisierte Verwendung,
                    Reproduktion oder Verbreitung der Inhalte ist untersagt und
                    kann rechtliche Konsequenzen nach sich ziehen.
                </Text>
                <Button
                    text={"Zurück"}
                    isPrimary={true}
                    onPress={() => navigation.navigate("Home" as never)}
                />
            </View>
        </View>
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
        paddingHorizontal: 30,
        flex: 1,
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between"
    },
    text: {
        marginVertical: 24,
        color: "#fff",
        textAlign: "justify",
        fontSize: 18,
        fontFamily: "RobotoCondensedLight",
        overflow: "scroll"
    }
})
