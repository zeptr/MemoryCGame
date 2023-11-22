import React, {useContext} from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import RoundButton from '../components/RoundButton';
import { GameContext } from "../hook/GameContext";


export default function WinnerScreen({navigation}) {
    const {resetGame, player1Name, player2Name, player1Score, player2Score, isPlayer1Turn, winner} = useContext(GameContext);

    let winnerName, winnerScore, runnerUpName, runnerUpScore, isDraw;

    if (winner==player1Name) {
        winnerName = player1Name;
        winnerScore = player1Score;
        runnerUpName = player2Name;
        runnerUpScore = player2Score;
    }
    else if(winner==player2Name){
        winnerName = player2Name;
        winnerScore = player2Score;
        runnerUpName = player1Name;
        runnerUpScore = player1Score;
    } else {
        isDraw = true;
    }
    return (
        <ImageBackground style={styles.background} source={require("../assets/Wallpaper.png")}>
            
            <View style={{flex: 1}}>
                
            </View>

            <View style={styles.viewContent}>
                <Text style={styles.mainText}>{isDraw ? "It's a Draw!" : "Well Done!"}</Text>
                <Text style={styles.playerText}>{isDraw ? '' : winnerName}</Text>
                <Image source={require('../assets/winnerPlayer.png')} style={{width: 180, height: 160}}/>
                <View style={{flexDirection:'row', marginVertical: 20, height: 80}}>
                    <View style ={{flex:1,justifyContent: 'center', alignItems:'center'}}>
                        {/* Conditional rendering based on whether there's a winner or a draw */}
                        {isDraw ? null : <Image source={require('../assets/winnerPlayer.png')} style={{width: 50, height: 60}}/>}
                        {/* ... other components for displaying score and player details */}
                    </View>
                    <View style ={{flex:5, flexDirection: 'row', backgroundColor: '#FFD975', alignItems: 'center', justifyContent: 'space-around', borderRadius: 5}}>
                        <Image source={require('../assets/Player1.png')} style={{width: 50, height: 70}} />
                        <Text style={styles.placeText}>1st Place</Text>
                        <Text style={styles.secondaryText}>{winnerName}</Text>
                        <Text style={styles.secondaryText}>{winnerScore}</Text>
                    </View>
                    <View style ={{flex:1}}>

                    </View>
                </View>
                <View style={{flexDirection:'row', marginBottom: 20, height: 80}}>
                    <View style ={{flex:1,justifyContent: 'center', alignItems:'center'}}>
                        
                    </View>
                    <View style ={{flex:5, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-around', borderRadius: 5}}>
                        <Image source={require('../assets/Player2.png')} style={{width: 60, height: 70}} />
                        <Text style={styles.placeText}>2nd Place</Text>
                        <Text style={styles.secondaryText}>{runnerUpName}</Text>
                        <Text style={styles.secondaryText}>{runnerUpScore}</Text>
                    </View>
                    <View style ={{flex:1}}>

                    </View>
                </View>
            </View>
            <View style={{flex: 1 ,paddingRight: 5, paddingTop: 10}}>
                <RoundButton title="Exit Game" color='red' textColor='white' />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
    },
    topContainer: {
        flexDirection: 'row',
        width: '99%', 
    },
    mainText: {
        fontFamily: "Poppins-Bold",
        fontSize: 32,
        color: 'white',
        alignItems: 'center',
        marginTop: 10
    },
    playerText: {
        fontFamily: "Poppins-Bold",
        fontSize: 38,
        color: 'white',
        alignItems: 'center'
    },
    buttonContainer: {
        //flex: 1,
        alignSelf: 'flex-end'
    },
    viewContent: {
        flex: 4,
        //backgroundColor: '#ffffff',
        borderRadius: 10,
        //width: '75%',
        //height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 25
    },
    placeText: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        color: '#0D4477'
    },
    secondaryText: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        color: '#0D4477'
    }
});
