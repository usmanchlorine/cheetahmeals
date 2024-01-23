import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import React from 'react';
import { COLORS } from '../theme/colors';
import { SPACERS } from '../theme/spacers';
import AppSearchBar from '../components/AppSearchBar';
import SafeAreaView from 'react-native-safe-area-view';
import RestaurantInfoCard from '../components/restaurant/Restaurant.info-card';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <AppSearchBar value="" />
      </View>
      <View style={styles.contentBar}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.textFieldBackgroundColor,
  },
  searchBarContainer: {
    padding: 16,
  },

  contentBar: {
    flex: 1,
    padding: SPACERS.small,
  },
});
