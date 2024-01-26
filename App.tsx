import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Home from './src/screen/Home';
import { COLORS } from './src/theme/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import TabNavigator from './src/utils/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { RestaurantContextProvider } from './src/service/restaurant/restaurant.context';
const App = () => {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RestaurantContextProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <TabNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </RestaurantContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.backGroundColor,
  },
});
