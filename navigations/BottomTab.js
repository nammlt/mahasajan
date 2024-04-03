import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import Task from '../screens/Task';
import AuthStack from './AuthStack';

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
                name="Bookmarks"
                component={Task}
                options={{
                    tabBarLabel: "Bookmarks",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="book" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Login"
                component={AuthStack}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}