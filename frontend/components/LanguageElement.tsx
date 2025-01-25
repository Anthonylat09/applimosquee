import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type LanguageElementProps = {
    language: string; // The name of the language
    isSelected: boolean; // Whether this language is currently selected
    onSelect: () => void; // Callback when the language is selected
};

const LanguageElement: React.FC<LanguageElementProps> = ({ language, isSelected, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Text style={styles.languageText}>{language}</Text>
            {isSelected && (
                <Image
                    source={require('../assets/icons/check.png')} // Replace with the path to your check image
                    style={styles.checkIcon}
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#A5D6A7',
        borderRadius: 10,
        height: 50,
        width: '90%',
        paddingHorizontal: 15,
        marginVertical: 10,
        alignSelf: 'center',
    },
    languageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    checkIcon: {
        width: 20,
        height: 20,
        tintColor: '#000', // Optional: Adjust the color of the check image
    },
});

export default LanguageElement;
