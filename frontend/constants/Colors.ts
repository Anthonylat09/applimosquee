/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const greenPrimary = '#4CAF50'; // Vert principal - For buttons and key elements
const greenLight = '#A5D6A7'; // Vert clair - Hover and light background
const greenDark = '#2E7D32'; // Vert foncé - Main text and accents
const offWhite = '#F9FBE7'; // Blanc cassé - General background
const softGray = '#BDBDBD'; // Gris doux - Secondary text
const lightGold = '#FFD54F'; // Doré clair - Spiritual details
const pastelBlue = '#81D4FA'; // Bleu pastel - Soft contrast

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primaryButton: greenPrimary,
    primaryHover: greenLight,
    primaryText: greenDark,
    secondaryText: softGray,
    spiritualAccent: lightGold,
    contrastSoft: pastelBlue,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primaryButton: greenPrimary,
    primaryHover: greenLight,
    primaryText: greenDark,
    secondaryText: softGray,
    spiritualAccent: lightGold,
    contrastSoft: pastelBlue,
  },
};
