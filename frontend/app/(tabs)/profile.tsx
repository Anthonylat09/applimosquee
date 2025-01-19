import { Image, StyleSheet, Platform, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});