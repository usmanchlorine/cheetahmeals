import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import { COLORS } from '../theme/colors';
import { SPACERS } from '../theme/spacers';
import AppSearchBar from '../components/AppSearchBar';
import SafeAreaView from 'react-native-safe-area-view';
import RestaurantInfoCard from '../components/restaurant/Restaurant.info-card';
import { useRestaurantContext } from '../service/restaurant/restaurant.context';
import { ActivityIndicator } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const Home = () => {
  const { restaurant, isLoading } = useRestaurantContext();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <AppSearchBar value="" />
      </View>
      <View style={[styles.contentBar, { flex: isLoading ? 1 : 0 }]}>
        {isLoading ? (
          <ActivityIndicator
            size={40}
            color={COLORS.chip.promotion}
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
          />
        ) : (
          <FlatList
            data={restaurant}
            renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            contentContainerStyle={{
              padding: 1,
              paddingBottom: SPACERS.medium,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.backGroundColor,
  },
  searchBarContainer: {
    paddingHorizontal: SPACERS.large,
    paddingBottom: SPACERS.extraTiny,
  },

  contentBar: {
    flex:1,
    padding: SPACERS.tiny,
    paddingBottom:SPACERS.large
  },
});
