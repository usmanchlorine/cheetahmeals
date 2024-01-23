import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar, SearchbarProps } from 'react-native-paper';

interface searchBarProps extends SearchbarProps {}

const AppSearchBar: React.FC<searchBarProps> = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <Searchbar
      placeholder="Search your favourite restaurant"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="bar"
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({});
