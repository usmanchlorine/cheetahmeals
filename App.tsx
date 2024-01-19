import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from './src/theme/colors';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>hello this is usman </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textFieldBackgroundColor,
  },
});
