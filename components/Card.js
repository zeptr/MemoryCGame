import React, { useState, useContext } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import cardImages from '../utils/cardImages';
import { GameContext } from '../hook/GameContext';

const Card = ({ card, index }) => {
    const { flipCard, cards } = useContext(GameContext);

    // Calculate position based on index
    const margin = 5;
    const cardWidth = (Dimensions.get('window').width / 18) - 13; // adjust number of cards per row
    const cardHeight = cardWidth * 1.4; // adjust aspect ratio as needed
    const row = Math.floor(index / 18);
    const column = index % 18;

    const flipCardHandler = () => {
        flipCard(card);
    };
    
    const frontImage = cardImages[card.suit][card.rank];
    const backImage = require('../assets/Card_Back.png');
    const isFlipped = cards.find(c => c.rank === card.rank && c.suit === card.suit).isFlipped;
    const imageSource = isFlipped ? frontImage : backImage;

    const cardStyle = StyleSheet.create ({
        cardStyle: {
            position: 'absolute',
            top: (row * cardHeight) + (row * margin * 2), // adjust for margin
            left: (column * cardWidth) + (column * margin * 2), // adjust for margin
            width: cardWidth,
            height: cardHeight,
            opacity: card.isMatched ? 0.5 : 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 15,
        }
        
    });

    return (
        <TouchableOpacity style={cardStyle.cardStyle} onPress={flipCardHandler}>
            <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
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
