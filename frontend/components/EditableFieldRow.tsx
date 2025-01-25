import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type EditableFieldRowProps = {
    label: string; // Literal text to display on the left
    value: string; // Current value of the text field
    onChange: (text: string) => void; // Callback to update the value
};

const EditableFieldRow: React.FC<EditableFieldRowProps> = ({ label, value, onChange }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder={`Edit ${label}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#000',
        flex: 1, // Take up available space
    },
    input: {
        backgroundColor: '#A5D6A7',
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
        flex: 2, // Larger input field
    },
});

export default EditableFieldRow;
