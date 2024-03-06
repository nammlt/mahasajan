import React from 'react';
import { ScrollView,  View } from 'react-native';
import Head from '../components/Home/Head';
import NewMovie from '../components/Home/NewMovie';
import LogIn from '../components/Home/LogIn';
import ComingSoon from '../components/Home/ComingSoon';



export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Head /> 
                <NewMovie />
                <LogIn navigation={navigation} />
                <ComingSoon />
            </View>
        </ScrollView>
    );
}
