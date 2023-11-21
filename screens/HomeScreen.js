import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function HomeScreen({navigation}) {

    return (
        <ImageBackground style={styles.background} source={require("../assets/Wallpaper.png")}>
            <SafeAreaView style={{flex:1, justifyContent:'center'}}>
                <View style= {{flex: 1}}>
                    <Text style={styles.mainText}>Memory</Text>
                </View>

                <View style= {{flex: 5}}>

                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    mainText: {
        fontFamily: "Poppins",
        fontSize: 32,
    }

})