import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import FavMosqueCard from '@/components/FavMosqueCard'; // Assuming you have this component implemented
import Header from '@/components/Header';

// Define the type for a favorite mosque
type FavMosque = {
    id: string;
    mosqueName: string;
    mosqueAddress: string;
};

// Mock function to fetch favorite mosques
const fetchFavMosques = async (): Promise<FavMosque[]> => {
    // Replace with actual API call
    return [
        { id: '1', mosqueName: 'Mosque A', mosqueAddress: 'Address A' },
        { id: '2', mosqueName: 'Mosque B', mosqueAddress: 'Address B' },
        { id: '3', mosqueName: 'Mosque C', mosqueAddress: 'Address C' },
    ];
};

const Favorites: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication state
    const [favMosques, setFavMosques] = useState<FavMosque[]>([]); // Use the correct type
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            // Fetch the favorite mosques if the user is authenticated
            fetchFavMosques().then((data) => setFavMosques(data));
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        // Render this if the user is not authenticated
        return (
            <View style={styles.notAuthenticatedContainer}>
                <Header />
                <View style={styles.notAuthenticatedContent}>
                    <Text style={styles.message}>
                        Vous pouvez avoir des mosquées favorites uniquement si vous avez un compte.
                    </Text>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={() => router.push('/register')}
                    >
                        <Text style={styles.registerButtonText}>Créer un compte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
          <Header/>
            <Text style={styles.title}>Vos Mosquées Favorites</Text>
            {favMosques.length > 0 ? (
                <FlatList
                    data={favMosques}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FavMosqueCard
                        mosqueName={item.mosqueName}
                        mosqueAddress={item.mosqueAddress} 
                        mosqueId={item.id}                        
                        />
                    )}
                />
            ) : (
                <Text style={styles.noFavoritesMessage}>
                    Vous n'avez pas encore de mosquées favorites.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: '#000',
    },
    notAuthenticatedContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    notAuthenticatedContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    message: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24, // For better readability
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    noFavoritesMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
    },
});

export default Favorites;
