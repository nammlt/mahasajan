import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function NewMovie(props) {
    const navigation = useNavigation();
    const [onlineNewMovie, setOnlineNewMovie] = useState([]);

    const loadOnlineNewMovie = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/nammlt/mobile-app/main/NewMovie.json');
            let data = await promise.json();
            setOnlineNewMovie(data);
        } catch (error) {
            console.log("ERROR : " , error);
        }
    }

    useEffect(() => {
        loadOnlineNewMovie();
    }, []);

    const NewMovie = ({ item, index })=>(
        <TouchableOpacity onPress={() => navigation.navigate("NewMovieDetail", { "id": item.id })}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ justifyContent: "space-between", marginLeft: 25, marginBottom: 50 }}>
                        <Image style={{ width: 160, height: 200 }} source={{ uri: item.uri }} />
                        <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                        <View style={{ flexDirection: "row" }}>
                            {Array.from({ length: Math.floor(item.star) }, (_, index) => (
                                <FontAwesome key={index} name="star" size={18} color="gold" />
                            ))}
                            {item.star % 1 !== 0 && (
                                <FontAwesome name="star-half" size={18} color="gold" />
                            )}
                            {Array.from({ length: 5 - Math.ceil(item.star) }, (_, index) => (
                                <FontAwesome key={index} name="star-o" size={18} color="gold" />
                            ))}
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ backgroundColor: "gray", textAlign: "center", marginTop: 5, borderRadius: 8, padding: 2 }}>
                                <Text style={{ fontSize: 12, color: "white" }}>{item.category1}</Text>
                            </View>
                            {item.category2 && (
                                <View style={{ backgroundColor: "gray", textAlign: "center", marginTop: 5, marginLeft: 5, borderRadius: 8, padding: 2 }}>
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
            <Text style={{fontSize:20, fontWeight:"700", marginTop:15, marginBottom:15, marginLeft:25}}>New Movie</Text>
            <FlatList
                horizontal={true}
                data={onlineNewMovie}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <NewMovie item={item} /> ) }
            />
        </View>
    );
}
