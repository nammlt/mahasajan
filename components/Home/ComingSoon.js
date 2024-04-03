import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function ComingSoon(props) {
    const navigation = useNavigation();
    const [onlineComingSoon, setOnlineComingSoon] = useState([]);
    
    const loadOnlineComingSoon = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/nammlt/mobile-app/main/ComingSoon.json');
            let data = await promise.json();
            // console.log("Load Data : " , data);
          //SET STATE
            setOnlineComingSoon(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }

    useEffect(() => {
        loadOnlineComingSoon();
    }, []); // ใช้แล้วทิ้ง

    const CSMovie = ({ item, index })=>(
        <TouchableOpacity onPress={() => navigation.navigate("CSMovieDetail", { "id": item.id })}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ justifyContent: "space-between", marginLeft: 25, marginBottom: 50 }}>
                        <Image style={{ width: 160, height: 200 }} source={{ uri: item.uri }} />
                        <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", maxWidth: 160 }} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ backgroundColor: "gray", textAligh: "center", marginTop: 5, borderRadius: 8, padding: 2 }}>
                                <Text style={{ fontSize: 12, color: "white" }}>{item.category1}</Text>
                            </View>
                            {item.category2 && ( // Check if category2 exists
                                <View style={{ backgroundColor: "gray", textAligh: "center", marginTop: 5, marginLeft: 5, borderRadius: 8, padding: 2 }}>
                                    <Text style={{ fontSize: 12, color: "white" }}>{item.category2}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={props.style}>
            <Text style={{fontSize:20, fontWeight:"700", marginTop:15, marginBottom:15, marginLeft:25}}>Coming soon</Text>
            <FlatList
                horizontal={true}
                data={onlineComingSoon}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item, index }) => (<CSMovie item={item} />)}                
            />
        </View>
    );
}