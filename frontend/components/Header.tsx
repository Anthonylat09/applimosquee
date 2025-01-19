import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// Get the screen width
const { width: screenWidth } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={[styles.header, { width: screenWidth }]}>
      <View style={styles.content}>
        <Image source={require('../assets/images/logo-secondary.png')} style={styles.logo} />
        <Text style={styles.title}>Mosquee24</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70, // Rectangle height
    backgroundColor: '#4CAF50', // Rectangle color
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center', // Center content horizontally
  },
  content: {
    flexDirection: 'row', // Position logo and text next to each other
    alignItems: 'center', // Center vertically
  },
  logo: {
    width: 30, // Adjust based on your logo size
    height: 30, // Adjust based on your logo size
    marginRight: 8, // Space between logo and text
  },
  title: {
    fontFamily: 'JujuGothic', // Custom font
    fontSize: 20, // Font size
    color: '#FFFFFF', // Text color (white for contrast)
  },
});

export default Header;
