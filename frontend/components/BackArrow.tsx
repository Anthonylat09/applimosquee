import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';

type BackArrowProps = {
    onPress?: () => void; // Optional callback when the back arrow is pressed
};

const BackArrow: React.FC<BackArrowProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.circle} onPress={onPress}>
            <IconSymbol
                size={28}
                name="arrow.backward" 
                color={'black'}            
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#F9FBE7',
        width: 50,
        height: 50,
        borderRadius: 25, // Makes the shape a perfect circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 20, // Adjust the size of the arrow as needed
        height: 20,
        tintColor: '#000', // Optional: Change the arrow color
    },
});

export default BackArrow;
