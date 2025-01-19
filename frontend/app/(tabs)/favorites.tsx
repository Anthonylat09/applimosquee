import { StyleSheet, Image, Platform } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';

export default function FavoritesScreen() {
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
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
