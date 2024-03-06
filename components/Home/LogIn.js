import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export default function LogIn({ navigation }) {
    const handlePress = () => {
        navigation.navigate('LogIn'); // Navigate to the login screen
      };
    return (
        <TouchableOpacity onPress={handlePress} style={{ flexDirection: "row", alignItems: "center", marginLeft: 25, backgroundColor: "plum", width: 340, height: 50, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, color: "palegreen" }}>Log in / Sign up</Text>
            <AntDesign name="right" size={18} color="palegreen" />
        </TouchableOpacity>
    );
}
