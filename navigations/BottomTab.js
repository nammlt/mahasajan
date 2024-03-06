import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import Communities from '../screens/Communities';
import Promotion from '../screens/Promotion';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }} >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Communities"
                component={Communities}
                options={{
                    tabBarLabel: "Communities",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="users" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Promotion"
                component={Promotion}
                options={{
                    tabBarLabel: "Promotion",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="tags" color={color} size={size} />),
                }}
            />
        </Tab.Navigator>
    );
}