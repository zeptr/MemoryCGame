import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ onPress, title, color, textColor}) => {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: color }]} 
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        width: 'auto',
        height: 'auto'
        
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    }
});

export default RoundButton;
