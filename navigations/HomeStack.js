import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import NewMovieDetail from '../components/Home/NewMovieDetail';
import NewMovie from '../components/Home/NewMovie';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ComingSoon from '../components/Home/ComingSoon';
import CSMovieDetail from '../components/Home/CSMovieDetail';



const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewMovie"
        component={NewMovie}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewMovieDetail"
        component={NewMovieDetail}
        options={{ title: "Movie Detail" }}
      />
      <Stack.Screen
        name="CSMovie"
        component={ComingSoon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CSMovieDetail"
        component={CSMovieDetail}
        options={{ title: "Movie Detail" }}
      />
    </Stack.Navigator>
  );
}