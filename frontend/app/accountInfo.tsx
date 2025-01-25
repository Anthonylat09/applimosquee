import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header'; // Assuming the Header component is already implemented
import AccountInfoElement from '@/components/AccountInfoElement'; // Import the AccountInfoElement component
import BackArrow from '@/components/BackArrow'; // Import the BackArrow component
import { useRouter } from 'expo-router'; // For navigation

const AccountInfo: React.FC = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* BackArrow */}
            <View style={styles.backArrowContainer}>
                <BackArrow onPress={() => router.back()} />
            </View>

            {/* Content */}
            <ScrollView>
                <AccountInfoElement value="Nom"
                                    route="/editName" />
                <AccountInfoElement value="Adresse email" 
                                    route="/editEmail"/>
                <AccountInfoElement value="Mot de passe" 
                                    route="/editPassword"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Light background color
    },
    backArrowContainer: {
        position: 'absolute',
        top: 20, // Adjust according to your header height
        left: 20, // Position it slightly inside the screen
        zIndex: 10, // Ensure it's above the header
    }
});

export default AccountInfo;
