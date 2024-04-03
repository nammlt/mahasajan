import React from "react";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FontAwesome name="user" color={"deeppink"} size={50} />
            <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 700, color: "gray" }}>Welcome</Text>
            <Button title="Log in to your email" onPress={() => { navigation.navigate('LogIn') }} />
        </View>
    );
}