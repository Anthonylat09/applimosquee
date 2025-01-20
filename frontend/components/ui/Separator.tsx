import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator: React.FC = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',
    },
});

export default Separator;