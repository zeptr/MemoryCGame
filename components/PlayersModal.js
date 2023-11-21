import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput, Animated, Image, StatusBar} from 'react-native';
import { GameContext } from '../hook/GameContext';
import RoundButton from './RoundButton';

const PlayersModal = ({isVisible, onClose}) => {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');

    const [show, setShow] = useState(isVisible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    }, [isVisible, toggleModal]);
    
    const toggleModal = () => {
        if (isVisible) {
            setShow(true);
            Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            }).start(() => setShow(false));
        }
    };

    const renderContent = () => {
        return (
            
            <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}>
                <StatusBar hidden={true} />
                <Text style={styles.modalTitle}>Are You Ready to Play?</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30}}>
                    <View style={{flex:1 ,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15}}>
                        <Image source={require('../assets/Player1.png')} style={{width: 180, height: 225}} />
                        <TextInput
                            style={styles.input}
                            value={player1Name}
                            onChangeText={setPlayer1Name}
                            autoCorrect={false}
                            placeholder='Name of Player 1'
                        />
                    </View>
                    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                        <Image source={require('../assets/Player2.png')} style={{width: 190, height: 220}}/>
                        <TextInput
                            style={styles.input}
                            value={player2Name}
                            onChangeText={setPlayer2Name}
                            autoCorrect={false}
                            placeholder='Name of Player 2'
                        />
                    </View>
                </View>
                <RoundButton title="LET'S PLAY!" color="#A7DAFF" textColor="#164464"/>
            </Animated.View>
        )
    }

    return (
        <Modal visible={show} animationType="fade" transparent={true} onRequestClose={onClose}>
            <View style={styles.modalContainer}>{renderContent()}</View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '75%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    modalTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: 'white',
        marginVertical: 10,
        alignSelf: 'center',
    },
    input: {
        marginTop: 10,
        width: 188,
        height: 36,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white'
      },
});

export default PlayersModal;