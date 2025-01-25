import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '@/components/Header';

const Index: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [mosques, setMosques] = useState([
        { id: '1', name: 'Mosque A', latitude: 37.7749, longitude: -122.4194 },
        { id: '2', name: 'Mosque B', latitude: 37.7849, longitude: -122.4094 },
        { id: '3', name: 'Mosque C', latitude: 37.7649, longitude: -122.4294 },
    ]); // Example mosque data

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Rechercher une mosquée"
                    placeholderTextColor="#B3B3B3"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            {/* Map */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.7749,
                    longitude: -122.4194,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                {mosques.map((mosque) => (
                    <Marker
                        key={mosque.id}
                        coordinate={{
                            latitude: mosque.latitude,
                            longitude: mosque.longitude,
                        }}
                        title={mosque.name}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    searchBarContainer: {
        position: 'absolute',
        top: 90, // Below the header
        left: 20,
        right: 20,
        zIndex: 10, // Ensure it appears above the map
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    searchBar: {
        height: 40,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
    },
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Index;
