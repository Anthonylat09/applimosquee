import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import from expo-linear-gradient
import BackArrow from '@/components/BackArrow';
import AuthenticationFormElement from '@/components/AuthenticationFormElement';
import AuthenticationButton from '@/components/AuthenticationButton';
import { useRouter } from 'expo-router';

const Login: React.FC = () => {
    const router = useRouter();

    return (
        <LinearGradient
            colors={['#F9FBE7', '#4CAF50', '#2E7D32']}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Back Arrow */}
                <View style={styles.backArrowContainer}>
                    <BackArrow onPress={() => router.back()} />
                </View>

                {/* Logo and App Name */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logo-secondary.png')} // Replace with your logo path
                        style={styles.logo}
                    />
                    <Text style={styles.appName}>Mosquee24</Text>
                </View>

                {/* Form Elements */}
                <View style={styles.formContainer}>
                    <AuthenticationFormElement placeholder="Adresse email" />
                    <AuthenticationFormElement placeholder="Mot de passe" />
                </View>

                {/* Login Button */}
                <AuthenticationButton name="Se connecter" />

                {/* No Account Message */}
                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text style={styles.registerMessage}>
                        Pas de compte?{' '}
                        <Text style={styles.registerLink}>Inscription</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backArrowContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    formContainer: {
        width: '100%',
        maxWidth: 300,
        marginBottom: 20,
    },
    registerMessage: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
    registerLink: {
        color: '#81D4FA',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});

export default Login;
