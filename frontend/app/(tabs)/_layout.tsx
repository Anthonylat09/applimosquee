import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD54F', // Active color
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint, // Default color for inactive tabs
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: Colors[colorScheme ?? 'light'].primaryText
          },
          default: {
            backgroundColor: Colors[colorScheme ?? 'light'].primaryText
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Carte',
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={28}
              name="map.fill"
              color={focused ? '#FFD54F' : Colors[colorScheme ?? 'light'].tint} // Active and inactive colors
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={28}
              name="star.fill"
              color={focused ? '#FFD54F' : Colors[colorScheme ?? 'light'].tint} // Active and inactive colors
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={28}
              name="person.fill"
              color={focused ? '#FFD54F' : Colors[colorScheme ?? 'light'].tint} // Active and inactive colors
            />
          ),
        }}
      />
    </Tabs>
  );
}
