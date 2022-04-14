import React from 'react';
import { Text, Pressable, View, Image, SafeAreaView, StyleSheet} from 'react-native';
import globalStyles from '../styles/globalStyles';
import MyPicture from '../components/MyPicture';




const Inicio = ({navigation}) => {


    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <MyPicture 
                photo={require('../assets/miFoto.jpg')}
            />
            <Text style={globalStyles.title}>
                Paula
            </Text>
           
            <Text style={globalStyles.descriptionText}>Hola me llamo Paula Belén Rodriguez</Text>

            <Pressable onPress={ () => navigation.navigate("MyGitHub")}>
                <Text style={globalStyles.subtitle}>MyGitHub</Text>
            </Pressable>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1
    }
});

export default Inicio;