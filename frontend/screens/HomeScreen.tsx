import React from "react"
import {StyleSheet, View, Text, Button} from "react-native"

export const HomeScreen = ({navigation}: {navigation: any}) => {
    return (
        <View style={styles.container}>
            <Text>Hey Hoes let's Goes</Text>
            <Button
                title="Let's guess some of dem Covers, yo!"
                onPress={() => navigation.navigate("Tescht")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    }
})
