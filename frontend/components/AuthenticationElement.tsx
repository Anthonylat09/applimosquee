import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type AuthenticationElementProps = {
    name: string; // Button label, e.g., "Connexion" or "Inscription"
    onPress?: () => void; // Optional callback when the button is pressed
};

const AuthenticationElement: React.FC<AuthenticationElementProps> = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: '80%',
        backgroundColor: '#A5D6A7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Center horizontally within the parent
        marginVertical: 10, // Optional spacing between multiple buttons
    } as ViewStyle,
    buttonText: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Actor',
        fontWeight: 'bold'
    } as TextStyle,
});

export default AuthenticationElement;