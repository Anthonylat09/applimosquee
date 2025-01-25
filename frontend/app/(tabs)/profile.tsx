import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import AuthenticationElement from '@/components/AuthenticationElement';
import ProfileElement from '@/components/ProfileElement';
import { useRouter } from 'expo-router';

const Profile: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // User authentication state
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* Conditional Rendering */}
            {isAuthenticated ? (
                // If authenticated
                <View style={styles.authenticatedContainer}>
                  <View>
                    <ProfileElement
                        name="Mon Compte"
                        icon="person.fill" // Replace with the correct icon name
                        onPress={() => router.push('/accountInfo')}
                    />
                    <ProfileElement
                        name="Paramètres"
                        icon="gear" // Replace with the correct icon name
                        onPress={() => console.log('Paramètres pressed')}
                    />
                    <ProfileElement
                        name="Contact"
                        icon="mail.fill" // Replace with the correct icon name
                        onPress={() => console.log('Contact pressed')}
                    />
                  </View>
                    {/* Deconnexion Button */}
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => {
                            console.log('Deconnexion pressed');
                            setIsAuthenticated(false); // Log out the user
                        }}
                    >
                        <Text style={styles.logoutButtonText}>Déconnexion</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // If not authenticated
                <View style={styles.notAuthenticatedContainer}>
                    <AuthenticationElement
                        name="Inscription"
                        onPress={() => router.push('/register')}
                    />
                    <AuthenticationElement
                        name="Connexion"
                        onPress={() => router.push('/login')}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  authenticatedContainer: {
    flex: 1,
    justifyContent:'space-between',
      paddingHorizontal: 20,
      paddingTop: 20, // Ensures elements start at the top
  },
  notAuthenticatedContainer: {
      paddingHorizontal: 20,
      paddingTop: 20, // Ensures elements start at the top
  },
  logoutButton: {
      marginBottom: 100,
      backgroundColor: '#F66E70',
      borderRadius: 10,
      height: 45,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
  },
  logoutButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
  },
});

export default Profile;
