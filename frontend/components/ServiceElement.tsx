import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ServiceElementProps = {
    serviceName: string; // Name of the service (e.g., "WiFi", "Parking")
    serviceIcon: any; // Image source for the service icon
    isAvailable: boolean; // Boolean indicating whether the service is available
};

const ServiceElement: React.FC<ServiceElementProps> = ({ serviceName, serviceIcon, isAvailable }) => {
    return (
        <View style={styles.container}>
            {/* Service Icon */}
            <Image source={serviceIcon} style={styles.icon} />

            {/* Service Name and Availability */}
            <View style={styles.textContainer}>
                <Text style={styles.serviceName}>{serviceName}</Text>
                <Text style={styles.availability}>{isAvailable ? 'oui' : 'non'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 10,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    availability: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default ServiceElement;
