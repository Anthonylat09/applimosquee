import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';

type ProfileElementProps = {
    name: string; // The name of the element (e.g., Mon compte)
    icon: any; // The icon source for the element (e.g., user icon)
    onPress?: () => void; // Optional callback for when the element is pressed
};

const ProfileElement: React.FC<ProfileElementProps> = ({ name, icon, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Left Section: Icon and Name */}
            <View style={styles.leftSection}>
                <IconSymbol
                    size={28}
                    name={icon} 
                    color={'black'}            
                />
                <Text style={styles.name}>{name}</Text>
            </View>

            {/* Right Section: Chevron */}
            <IconSymbol
                size={28}
                name="chevron.right"
                color={'black'}            
            />
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
        paddingHorizontal: 15,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: '#000', // Optional: Adjust the icon color
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    chevron: {
        width: 20,
        height: 20,
        tintColor: '#000', // Optional: Adjust the chevron color
    },
});

export default ProfileElement;
