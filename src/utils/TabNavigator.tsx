import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, Icon } from 'react-native-paper';
import Home from '../screen/Home';
import { ROUTES } from '../Routes';
import { COLORS } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.SceneContainer,
        tabBarActiveTintColor: COLORS.chip.promotion,
      }}
    >
      <Tab.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                source="silverware"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.map}
        component={MapScreen}
        options={{
          tabBarLabel: ROUTES.map,
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                source="map"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.setting}
        component={SettingsScreen}
        options={{
          tabBarLabel: ROUTES.setting,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                source={focused ? 'cog' : 'cog-outline'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Map !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SceneContainer: {
    backgroundColor: COLORS.white,
  },
});
