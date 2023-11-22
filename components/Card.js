import React, { useState, useContext } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import cardImages from '../utils/cardImages';
import { GameContext } from '../hook/GameContext';

const Card = ({ card }) => {
    const { flipCard, cards } = useContext(GameContext);

    const flipCardHandler = () => {
        flipCard(card);
    };
    
    const frontImage = cardImages[card.suit][card.rank];
    const backImage = require('../assets/Card_Back.png');
    const isFlipped = cards.find(c => c.rank === card.rank && c.suit === card.suit).isFlipped;
    const imageSource = isFlipped ? frontImage : backImage;

    return (
        <TouchableOpacity style={styles.card} onPress={flipCardHandler}>
            <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
        width: 45,
        height: 68.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        
    },
    cardImage: {
        width: '100%',
        height: '100%',
        //borderRadius: 10,
    },
});

export default Card;
