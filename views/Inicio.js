import React from 'react';
import { Text, Pressable, View } from 'react-native';
import globalStyles from '../styles/globalStyles';


const Inicio = ({navigation}) => {

    return (
        <View>
            <Text style={globalStyles.title}>
                Paula
            </Text>
            <Text style={globalStyles.descriptionText}>Hola me llamo Paula Belén Rodriguez</Text>

            <Pressable onPress={ () => navigation.navigate("MyGitHub")}>
                <Text style={globalStyles.subtitle}>MyGitHub</Text>
            </Pressable>
        </View>
    );

};

export default Inicio;