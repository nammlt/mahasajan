import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/Home';
import BottomTab from './navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './hooks/AuthContextProvider';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
      {/* <Home /> */}
        <BottomTab />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
