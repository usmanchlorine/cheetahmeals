import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screen/Home';
import { COLORS } from './src/theme/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const App = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.textFieldBackgroundColor,
  },
});
