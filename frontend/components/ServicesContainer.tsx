import React from 'react';
import { View, StyleSheet } from 'react-native';

type ServicesContainerProps = {
    children?: React.ReactNode; // Allows you to pass child components like `ServiceElement` inside the container
};

const ServicesContainer: React.FC<ServicesContainerProps> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 300,
        backgroundColor: '#A5D6A7', // Container color
        borderRadius: 10, // Rounded corners
        padding: 15, // Padding inside the container for child components
        justifyContent: 'center', // Center child components vertically
        shadowColor: '#000', // Optional: Add a shadow for better appearance
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});

export default ServicesContainer;
