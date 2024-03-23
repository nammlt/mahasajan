import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function NewMovie(props) {
    const [onlineNewMovie, setOnlineNewMovie] = useState([]);
    
    const loadOnlineNewMovie = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/nammlt/mobile-app/main/NewMovie.json');
            let data = await promise.json();
            // console.log("Load Data : " , data);
          //SET STATE
            setOnlineNewMovie(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }

    useEffect(() => {
        loadOnlineNewMovie();
    }, []); // ใช้แล้วทิ้ง

    return (
        <View style={props.style}>
            <Text style={{fontSize:20, fontWeight:"700", marginTop:15, marginBottom:15, marginLeft:25}}>New Movie</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={onlineNewMovie}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <View style={{flex:1, flexDirection:"row"}}>
                                <View style={{flexDirection:"column"}}>
                                    <View style={{ justifyContent:"space-between", marginLeft:25, marginBottom:50}}>
                                        <Image style={{ width:160, height:200 }} source={{uri: item.uri}} />
                                        <Text style={{ fontSize:12, marginTop:5}}>{item.date}</Text>
                                        <Text style={{ fontSize:18, fontWeight:"bold"}}>{item.title}</Text>
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

                                        <View style={{flexDirection:"row"}}>
                                            <View style={{backgroundColor:"gray", textAligh:"center", marginTop:5, borderRadius:8, padding:2}}>
                                                <Text style={{ fontSize:12, color:"white"}}>{item.category1}</Text>
                                            </View>
                                            {item.category2 && ( // Check if category2 exists
                                                <View style={{backgroundColor:"gray",  textAligh:"center", marginTop:5, marginLeft:5, borderRadius:8, padding:2}}>
                                                    <Text style={{ fontSize:12, color:"white"}}>{item.category2}</Text>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </View>
                                {/* <View style={{flexDirection:"column"}}>
                                    <View style={{marginLeft:25, marginTop:54}}>
                                        <Image style={{ width:160, height:200 }} source={require("../../assets/Feed/Peenak4.jpeg")} />
                                        <Text style={{ fontSize:12, marginTop:5}}>22 Feb 2024</Text>
                                        <Text style={{ fontSize:18, fontWeight:"bold"}}>Pee-Nak 4</Text>
                                        <View style={{ flexDirection : "row" }}>
                                            <FontAwesome name="star" size={18} color="gold" />
                                            <FontAwesome name="star" size={18} color="gold" />
                                            <FontAwesome name="star-half" size={18} color="gold" />
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                            <View style={{backgroundColor:"gray", width:60, height:18, alignItems:"center", marginTop:5, borderRadius:8}}>
                                                <Text style={{ fontSize:12, color:"white"}}>Comedy</Text>
                                            </View>
                                            <View style={{backgroundColor:"gray", width:50, height:18, alignItems:"center", marginTop:5, marginLeft:5, borderRadius:8}}>
                                                <Text style={{ fontSize:12, color:"white"}}>Horror</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View> */}
                            </View>   
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
     
        </View>
    );
}