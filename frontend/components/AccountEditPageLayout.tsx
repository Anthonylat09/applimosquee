import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import BackArrow from '@/components/BackArrow';

type AccountEditPageLayoutProps = {
    children: React.ReactNode; // Form elements or content inside the green rectangle
    onBack: () => void; // Callback for the back arrow
};

const AccountEditPageLayout: React.FC<AccountEditPageLayoutProps> = ({ children, onBack }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* BackArrow */}
            <View style={styles.backArrowContainer}>
                <BackArrow onPress={onBack} />
            </View>

            {/* Content */}
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.greenRectangle}>{children}</View>

                {/* Confirm Button */}
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirmer</Text>
                </TouchableOpacity>
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
        top: 20, // Adjust to match header height
        left: 20,
        zIndex: 10,
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    greenRectangle: {
        backgroundColor: '#A5D6A7',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AccountEditPageLayout;
