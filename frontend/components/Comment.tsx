import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VerticalSeparator } from './ui/Separator';

type CommentProps = {
    userName: string;
    dateTime: string;
    content: string;
};

const Comment: React.FC<CommentProps> = ({ userName, dateTime, content }) => {
    return (
        <View style={styles.container}>
            {/* Left Section */}
            <View style={styles.leftSection}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.dateTime}>{dateTime}</Text>
            </View>

            {/* Vertical Separator */}
            <VerticalSeparator />

            {/* Right Section */}
            <View style={styles.rightSection}>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    leftSection: {
        flex: 1,
        paddingRight: 10,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    dateTime: {
        fontSize: 12,
        color: '#666',
    },
    rightSection: {
        flex: 3,
        paddingLeft: 10,
    },
    content: {
        fontSize: 14,
        color: '#333',
    },
});

export default Comment;
