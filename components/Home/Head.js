import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Head() {
    return (
        <View  style={{flexDirection: 'column', backgroundColor: "paleturquoise"}}>
            <View>
                {/* row1 */}
                <Text style={{fontSize:25, fontWeight:"bold", marginTop:30, marginRight:10, padding:25, color:"deeppink"}}>Mahasajan</Text>
                {/* row2 */}
                <View style={{marginBottom:20}}>
                    <TextInput style={{
                        color:"gray",
                        fontSize:15,
                        backgroundColor:"white", 
                        height:5,
                        width:300,
                        borderRadius: 50,
                        marginTop:3,
                        marginLeft:20, 
                        marginRight:10, 
                        padding:25, 
                        alignItems:"center"}}>
                            <FontAwesome name="search" size={18} color="gray" />
                        What are you looking for?
                    </TextInput>
                </View>
            </View>
        </View>   
    );
}