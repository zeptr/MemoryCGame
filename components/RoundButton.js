import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ onPress, title, color }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: color }]} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
        width: auto,
        height: auto,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default RoundButton;
