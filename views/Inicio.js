import React from 'react';
import { Text, Pressable, View } from 'react-native';


const Inicio = ({navigation}) => {

    return (
        <View>
            <Text>Paula</Text>

            <Pressable onPress={ () => navigation.navigate("MyGitHub")}>
                <Text>MyGitHub</Text>
            </Pressable>
        </View>
    );

};

export default Inicio;