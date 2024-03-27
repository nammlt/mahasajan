import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import LogInScreen from '../components/Register/LogInScreen';
import SignUpScreen from '../components/Register/SignUpScreen';



const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown : false }}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ headerShown : false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown : false }}
      />
    </Stack.Navigator>
  );
}