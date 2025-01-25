import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HorizontalSeparator } from './ui/Separator'; // Import your reusable HorizontalSeparator component

type PrayerTimeProps = {
    prayerName: string; // Name of the prayer (e.g., Fajr, Dhuhr)
    prayerTime: string; // Time of the prayer (e.g., 05:30 AM, 12:45 PM)
};

const PrayerTime: React.FC<PrayerTimeProps> = ({ prayerName, prayerTime }) => {
    return (
        <View>
            <View style={styles.container}>
                {/* Prayer Name */}
                <Text style={styles.prayerName}>{prayerName}</Text>
                {/* Prayer Time */}
                <Text style={styles.prayerTime}>{prayerTime}</Text>
            </View>
            {/* Horizontal Separator */}
            <HorizontalSeparator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:35,
    },
    prayerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    prayerTime: {
        fontSize: 16,
        color: '#666',
    },
});

export default PrayerTime;
