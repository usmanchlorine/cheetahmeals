import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar, SearchbarProps } from 'react-native-paper';
import { COLORS } from '../theme/colors';
import { useLocationContext } from '../service/location/location.context';
import { locationCities } from '../service/location/location.service';

interface searchBarProps extends SearchbarProps {}

const AppSearchBar: React.FC<searchBarProps> = () => {
  const locationContext = useLocationContext();
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);

  return (
    <Searchbar
      placeholder="Search for location"
      onChangeText={setSearchQuery}
      onSubmitEditing={() => {
        locationContext.search(searchQuery as locationCities);
      }}
      value={searchQuery}
      mode="bar"
      style={{ backgroundColor: COLORS.white }}
    />
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({});
