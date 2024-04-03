import React, { useEffect, useState } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

export default function CSMovieDetails() {
    const route = useRoute();
    const { id } = route.params;  // Ensure that id is correctly destructured
    const [csmovieDetails, setCSMovieDetails] = useState(null);  // Initialize to null

    const loadCSMovieDetails = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/nammlt/mobile-app/main/CSMovieDetail.js');
            const data = await response.json();
            const movie = data.find(item => item.id === id);  // Find the movie with the matching id
            setCSMovieDetails(movie);
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    useEffect(() => {
        loadCSMovieDetails();
    }, []);

    if (!csmovieDetails) {
        return <Text>Loading...</Text>;  // Add a loading state
    }

    return (
        <ScrollView style={{ marginBottom: 20 }}>
            <View style={{ marginTop: 10 }}>
                <Image
                    style={{ width: 350, height: 200, marginTop: 20, marginBottom: 15, marginLeft: 20, alignContent: "center" }}
                    source={{ uri: csmovieDetails.uri }}
                />
                <Text style={{ fontSize: 25, fontWeight: "700", textAlign: "center" }}>{csmovieDetails.title}</Text>
                <View style={{ flexDirection: "row", alignSelf:"center"}}>
                    <View style={{ backgroundColor: "gray", textAlign: "center", marginTop: 5, borderRadius: 8, padding: 2 }}>
                        <Text style={{ fontSize: 12, color: "white" }}>{csmovieDetails.category1}</Text>
                    </View>
                    {csmovieDetails.category2 && (
                        <View style={{ backgroundColor: "gray", textAlign: "center", marginTop: 5, marginLeft: 5, borderRadius: 8, padding: 2 }}>
                            <Text style={{ fontSize: 12, color: "white" }}>{csmovieDetails.category2}</Text>
                        </View>
                    )}
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ flexDirection: "column", marginLeft: 25, alignItems: "center" }}>
                        <Text style={{ color: "gray" }}>Release Date</Text>
                        <Text style={{ color: "darkturquoise", fontWeight: 700 }}>{csmovieDetails.date}</Text>
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 190, alignItems: "center" }}>
                        <Text style={{ color: "gray" }}>Runtime</Text>
                        <Text style={{ color: "darkturquoise", fontWeight: 700 }}>{csmovieDetails.runtime}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: "orchid" }}>Synopsis</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 3, marginEnd: 20 }}>
                    <Text style={{ fontSize: 15, color: "gray" }}>{csmovieDetails.synopsis}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>Director:</Text>
                    <Text style={{ fontSize: 15, color: "gray" }}> {csmovieDetails.director}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>Writing:</Text>
                    <Text style={{ fontSize: 15, color: "gray" }}> {csmovieDetails.writing}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 5, marginEnd: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>Starring:</Text>
                    <Text style={{ fontSize: 15, color: "gray", marginEnd: 25 }}> {csmovieDetails.starring}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
