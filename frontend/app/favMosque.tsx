import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '@/components/Header';
import ServicesContainer from '@/components/ServicesContainer';
import ServiceElement from '@/components/ServiceElement';
import PrayerTime from '@/components/PrayerTime';
import Comment from '@/components/Comment';
import BackArrow from '@/components/BackArrow';
import { useRouter } from 'expo-router';

const FavMosque: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'Horaires' | 'Services' | 'Commentaires'>('Horaires'); // Selected tab state
    const router = useRouter(); // Use router for navigation
    const [comments, setComments] = useState([
        { id: '1', userName: 'John', content: 'Beautiful mosque!', dateTime: '2023-10-01 14:00' },
        { id: '2', userName: 'Jane', content: 'Great services!', dateTime: '2023-10-02 10:30' },
    ]); // Mock comments

    const prayerTimes = [
        { prayerName: 'Subh', prayerTime: '05:00' },
        { prayerName: 'Chourouq', prayerTime: '06:30' },
        { prayerName: 'Dohr', prayerTime: '12:15' },
        { prayerName: 'Asr', prayerTime: '15:30' },
        { prayerName: 'Maghrib', prayerTime: '18:45' },
        { prayerName: 'Isha', prayerTime: '20:15' },
        { prayerName: 'Jumua', prayerTime: '13:30' },
    ]; // Mock prayer times

    const services = [
        { id: '1', serviceName: 'Parking', isAvailable: true, serviceIcon: require('../assets/icons/parking.png') },
        { id: '2', serviceName: 'Salle de prière pour femmes', isAvailable: true, serviceIcon: require('../assets/icons/islamic.png') },
        { id: '3', serviceName: 'Cours de Coran', isAvailable: false, serviceIcon: require('../assets/icons/ablution.png') },
        { id: '4', serviceName: 'Bibliothèque', isAvailable: true, serviceIcon: require('../assets/icons/disabled.png') },
    ]; // Mock services

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* Back Button */}
            <View style={styles.backArrowContainer}>
                <BackArrow onPress={() => router.back()} />
            </View>

            {/* Mosque Name */}
            <Text style={styles.mosqueName}>Mosque Name Placeholder</Text>

            {/* Mosque Picture Placeholder */}
            <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>Image Placeholder</Text>
            </View>

            {/* Mosque Address */}
            <Text style={styles.address}>123 Mosque Street, City</Text>

            {/* Choice Bar */}
            <View style={styles.choiceBar}>
                <TouchableOpacity
                    style={[
                        styles.choiceOption,
                        selectedTab === 'Horaires' && styles.selectedOption,
                    ]}
                    onPress={() => setSelectedTab('Horaires')}
                >
                    <Text style={styles.choiceText}>Horaires</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.choiceOption,
                        selectedTab === 'Services' && styles.selectedOption,
                    ]}
                    onPress={() => setSelectedTab('Services')}
                >
                    <Text style={styles.choiceText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.choiceOption,
                        selectedTab === 'Commentaires' && styles.selectedOption,
                    ]}
                    onPress={() => setSelectedTab('Commentaires')}
                >
                    <Text style={styles.choiceText}>Commentaires</Text>
                </TouchableOpacity>
            </View>

            {/* Conditional Content */}
            <View style={styles.contentContainer}>
                {selectedTab === 'Horaires' && (
                    <ServicesContainer>
                        {prayerTimes.map((prayer) => (
                            <PrayerTime
                                key={prayer.prayerName}
                                prayerName={prayer.prayerName}
                                prayerTime={prayer.prayerTime}
                            />
                        ))}
                    </ServicesContainer>
                )}
                {selectedTab === 'Services' && (
                    <ServicesContainer>
                        {services.map((service) => (
                            <ServiceElement
                                key={service.id}
                                serviceName={service.serviceName}
                                isAvailable={service.isAvailable}
                                serviceIcon={service.serviceIcon}
                            />
                        ))}
                    </ServicesContainer>
                )}
                {selectedTab === 'Commentaires' && (
                    <View>
                        <ServicesContainer>
                        <FlatList
                            data={comments}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Comment
                                    userName={item.userName}
                                    dateTime={item.dateTime}
                                    content={item.content}
                                />
                            )}
                        />
                        </ServicesContainer>
                        <TouchableOpacity style={styles.addCommentButton}>
                            <Text style={styles.addCommentText}>Ajouter un commentaire</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    backArrowContainer: {
        position: 'absolute',
        top: 20, // Adjust based on your header's height
        left: 20,
        zIndex: 10, // Ensure it appears above other content
    },
    mosqueName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#000',
    },
    imagePlaceholder: {
        height: 225,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    placeholderText: {
        color: '#666',
        fontSize: 16,
    },
    address: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: '#000',
    },
    choiceBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#A5D6A7',
        borderRadius: 10,
        marginHorizontal: 20,
        height: 40,
        marginBottom: 10,
    },
    choiceOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: 10,
    },
    selectedOption: {
        backgroundColor: '#2E7D32',
    },
    choiceText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    addCommentButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCommentText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FavMosque;
