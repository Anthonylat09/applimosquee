import React from 'react';
import { View, StyleSheet } from 'react-native';

// Horizontal Separator Component
export const HorizontalSeparator: React.FC = () => {
    return <View style={styles.horizontal} />;
};

// Vertical Separator Component
export const VerticalSeparator: React.FC = () => {
    return <View style={styles.vertical} />;
};

const styles = StyleSheet.create({
    horizontal: {
        height: 1,
        backgroundColor: '#000', // Black color for the separator
        width: '100%',
    },
    vertical: {
        width: 1,
        backgroundColor: '#000', // Black color for the separator
        height: '100%',
    },
});