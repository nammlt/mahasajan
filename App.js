import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/Home';
import BottomTab from './navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    {/* <Home /> */}
      <BottomTab />
    </NavigationContainer>
  );
}
