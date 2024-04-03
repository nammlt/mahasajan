import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../hooks/AuthContextProvider";
import AuthService from "../services/AuthService";
import UserTokenStorage from "../storages/UserTokenStorage";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { userToken, setUserToken } = useContext(AuthContext);

    const onLogin = async () => {
        let item = {
          email: email,
          password: password,
          device_name: "test", //ควรดึงข้อมูลจากอุปกรณ์
        };
        let tk = await AuthService.login(item);
        if (tk) {
          console.log(tk);
          setUserToken(tk);
          UserTokenStorage.writeItem(tk);
        } else {
          console.log("username / password are not correct!!!");
        }
      };
    
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: "deeppink"}}>Login</Text>
            <Text style={{ color: "red" }}>{message}</Text>
            <TextInput style={{ width: "90%", padding: 10 }} autoCapitalize="none" placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={{ width: "90%", padding: 10 }} secureTextEntry autoCapitalize="none" placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} />
            <Button title="Login" style={{ padding: 10 }} onPress={onLogin} />
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ padding: 10 }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

