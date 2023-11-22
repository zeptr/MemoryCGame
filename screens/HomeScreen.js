import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useIsFocused } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import RoundButton from '../components/RoundButton';
import PlayersModal from "../components/PlayersModal";


export default function HomeScreen({navigation}) {
    const [isVisible, setIsVisible] = useState(false);
    const isFocused = useIsFocused()

    // useEffect(() => {        
    //     setIsVisible(isFocused);
        
    // }, [isFocused])

    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/PoppinsFont/Poppins-Bold.ttf')
    });
    
    
    if (!loaded) {
        return null;
    }
   
    return (
        <ImageBackground style={styles.background} source={require("../assets/Wallpaper.png")}>
            
            <View style={styles.topContainer}>
                <View style={{flex: 1 ,paddingRight: 5, paddingTop: 10}}>
                    
                </View>
                <View style= {{flex: 5, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={styles.mainText}>Memory</Text>
                </View>    
                <View style={{flex: 1 ,paddingRight: 5, paddingTop: 10}}>
                    <RoundButton title="Exit Game" color='red' textColor='white'/>
                </View>
            </View>

            
                <PlayersModal isVisible={isFocused} navigation={navigation}/>
            
            
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
        flexDirection: 'row',
        width: '99%', 
        marginTop: 8
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
