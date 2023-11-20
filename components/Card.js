import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Card = ({ rank, suit}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    const frontImage = cardImages[suit][rank];
    const backImage = require('../assets/Card_Back.png')
    const imageSource = isFlipped ? frontImage : backImage;

    return (
        <TouchableOpacity style={styles.card} onPress={flipCard}>
            <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 33.5,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});

export default Card;
