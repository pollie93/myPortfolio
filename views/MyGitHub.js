import React from "react";
import {SafeAreaView, View} from 'react-native';
import MyPicture from '../components/MyPicture';

const MyGitHub = () => {
    return ( 
        <SafeAreaView>
            <View>
                <MyPicture
                    photo={require('../assets/miFoto.jpg')}
                />
            </View>
        </SafeAreaView>
    ); 
};

export default MyGitHub;
