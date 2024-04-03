import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const onRegister = () => {  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: "deeppink"}}>Sign Up</Text>
      <Text style={{ color: "red" }}>{message}</Text>
      <TextInput style={{ width: "90%", padding: 10 }} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)} value={email} />
      <TextInput style={{ width: "90%", padding: 10 }} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
      <Button title="Register" style={{ padding: 10 }} onPress={onRegister} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ padding: 10 }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}