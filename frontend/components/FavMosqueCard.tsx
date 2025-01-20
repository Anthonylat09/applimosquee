import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

type FavMosqueCardProps = {
    mosqueName: string; // Name of the mosque
    mosqueAddress: string; // Address of the mosque
    mosqueImage?: string; // Optional image URL of the mosque
    mosqueId: string; // Unique ID for the mosque
};

const FavMosqueCard: React.FC<FavMosqueCardProps> = ({ mosqueName, mosqueAddress, mosqueImage, mosqueId }) => {
    const navigation = useNavigation(); // Initialize navigation
    /*
    const handlePress = () => {
        navigation.navigate('MosqueDetails', { mosqueId }); // Navigate to MosqueDetails screen with mosqueId
    };
    */
    return (
        <TouchableOpacity style={styles.container} /*onPress={handlePress}*/>
            {/* Mosque Image */}
            <View style={styles.imageContainer}>
                {mosqueImage ? (
                    <Image source={{ uri: mosqueImage }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder} />
                )}
            </View>

            {/* Mosque Information */}
            <View style={styles.infoContainer}>
                <Text style={styles.mosqueName}>{mosqueName}</Text>
                <Text style={styles.mosqueAddress}>{mosqueAddress}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A5D6A7',
        borderRadius: 10,
        width: '90%',
        height: 90,
        marginVertical: 10,
        alignSelf: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30, // Makes the shape circular
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Ensures the image fits within the circle
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc', // Placeholder color when no image is provided
        borderRadius: 30,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    mosqueName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    mosqueAddress: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default FavMosqueCard;
