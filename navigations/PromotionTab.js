import React from 'react';
import { View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function PokemonTab() {

    return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
      <Tab.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{
            tabBarLabel: "Pikachu",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="bolt" color={color} size={size} /> ),
            headerShown : false
        }}
      />
      <Tab.Screen
        name="FlameScreen"
        component={FlameScreen}
        options={{
            tabBarLabel: "Charmander",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="fire" color={color} size={size} /> ),
            headerShown : false
        }}
      />
      <Tab.Screen
        name="LeafScreen"
        component={LeafScreen}
        options={{
            tabBarLabel: "Ivysour",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="leaf" color={color} size={size} /> ),
            headerShown : false
        }}
      />
    </Tab.Navigator>  
    );
}
