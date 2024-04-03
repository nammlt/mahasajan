import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../hooks/AuthContextProvider";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function AuthStack() {
    // const userToken = "XK52P1jV7oBk6K1DaXbtQlA7XAbe0lSICxtC9rQp";
    const {userToken, setUserToken} = useContext(AuthContext);

    if (userToken) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="LogIn" component={Login} options={{ title: "Login" }} />
                <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
            </Stack.Navigator>
        );
    }
}