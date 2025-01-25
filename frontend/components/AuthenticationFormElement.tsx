import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, StyleSheet } from 'react-native';

type AuthenticationFormElementProps = {
    placeholder: string;
};

const AuthenticationFormElement: React.FC<AuthenticationFormElementProps> = ({ placeholder }) => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={placeholder}
                placeholderTextColor="#B3B3B3"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '100%',
        maxWidth: 300,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    input: {
        width: '90%',
        height: '80%',
        borderWidth: 0,
        fontSize: 16,
        color: '#000',
        fontStyle: 'italic',
    },
});

export default AuthenticationFormElement;
