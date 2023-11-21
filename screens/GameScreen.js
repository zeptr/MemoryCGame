import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useFonts } from 'expo-font';
import RoundButton from '../components/RoundButton';
import PlayersModal from "../components/PlayersModal";


export default function GameScreen({navigation}) {


    return (
        <ImageBackground style={styles.background} source={require("../assets/Wallpaper.png")}>
            
            <View style={styles.topContainer}>
                <View style={{flex: 1 ,paddingRight: 5, paddingTop: 10}}>
                    
                </View>
                <View style= {{flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={styles.mainText}>Memory</Text>
                </View>    
                <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', paddingTop: 15 }}>
                    <RoundButton title="Restart Game" color='#F4A236' textColor='white' />
                    <RoundButton title="Exit Game" color='red' textColor='white' />
                </View>
            </View>

            <View style={{ flex: 3 }}>
                
            </View>

            <View style={{ flex: 1 }}>
                
            </View>
            
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'column',
    },
    topContainer: {
        flex: 0.5,
        flexDirection: 'row',
        width: '99%', 
    },
    mainText: {
        fontFamily: "Poppins-Bold",
        fontSize: 32,
        color: 'white',
        alignItems: 'center'

    },
    buttonContainer: {
        //flex: 1,
        alignSelf: 'flex-end'
    },
});
