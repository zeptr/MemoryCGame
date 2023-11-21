import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from 'expo-font';
import RoundButton from '../components/RoundButton';
import PlayersModal from "../components/PlayersModal";


export default function GameScreen({navigation}) {


    return (
        <ImageBackground style={styles.background} source={require("../assets/Wallpaper.png")}>
            
            <View style={styles.topContainer}>
                <View style={{flex: 1 ,paddingRight: 5, paddingTop: 10}}>
                    
                </View>
                <View style= {{flex: 2, justifyContent: 'flex-end', alignItems: 'center', paddingTop: 15 }}>
                    <Text style={styles.mainText}>Memory</Text>
                </View>    
                <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', paddingTop: 15 }}>
                    <RoundButton title="Restart Game" color='#F4A236' textColor='white' />
                    <RoundButton title="Exit Game" color='red' textColor='white' />
                </View>
            </View>

            <View style={styles.gameView}>
                
            </View>

            <View style={{ flex: 1, flexDirection: 'row'}}>
                <View style={styles.playerView}>
                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                        <Image source={require('../assets/Player1.png')} style={{width: 50, height: 70}} />
                    </View>
                    <View style={styles.scoreView}>
                        <Text style={styles.scoreText}>Player1</Text>
                    </View>
                    <View style={styles.scoreView}>
                        <RoundButton title="It's Your Turn" color="white" textColor="#489DDA"/>
                    </View>
                    <View style={styles.scoreView}>
                    <Text style={styles.scoreText}>0</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.scoreText}>Score</Text>
                </View>
                <View style={styles.playerView2}>
                    <View style={{justifyContent: 'center', marginRight: 5}}>
                        <Image source={require('../assets/Player2.png')} style={{width: 58, height: 70}} />
                    </View>
                    <View style={styles.scoreView}>
                        <Text style={styles.scoreText}>Player2</Text>
                    </View>
                    <View style={styles.scoreView}>
                        <RoundButton title="It's Your Turn" color="white" textColor="#489DDA"/>
                    </View>
                    <View style={styles.scoreView}>
                    <Text style={styles.scoreText}>0</Text>
                    </View>
                </View>
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
    gameView: {
        flex: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 20,
        marginHorizontal: 15,
        borderRadius: 10
    },
    playerView: {
        flex: 6,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'space-around'
    },
    playerView2: {
        flex: 6,
        flexDirection: 'row-reverse',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'space-around'
    },
    scoreView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreText: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        color: 'white'
    }
});
