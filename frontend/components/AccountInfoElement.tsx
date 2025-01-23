import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { HorizontalSeparator } from './ui/Separator'; // Import the Separator component
import { useRouter } from 'expo-router';

type AccountInfoElementProps = {
    value: string; // The value to display (e.g., name or information)
    route: '/editName' | '/editEmail' | '/editPassword'; // Valid routes
};

const AccountInfoElement: React.FC<AccountInfoElementProps> = ({ value, route }) => {
    const router = useRouter();

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => router.push(route)} // Navigate to the route
            >
                <Text style={styles.text}>{value}</Text>
                <Image
                    source={require('../assets/icons/pencil.png')} // Replace with your actual edit icon path
                    style={styles.icon}
                />
            </TouchableOpacity>
            <HorizontalSeparator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#A5D6A7',
        paddingHorizontal: 10,
        height: 50,
    },
    text: {
        fontSize: 16,
        color: '#000',
        flex: 1, // Ensures the text takes up available space
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#000', // Optional: adjust the icon color
    },
});

export default AccountInfoElement;
