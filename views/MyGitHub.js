import React from "react";
import {SafeAreaView, View, Linking, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import MyPicture from '../components/MyPicture';
import globalStyles from '../styles/globalStyles';



const MyGitHub = () => {

    const projects = [
        {
            link: 'https://github.com/pollie93/desarrollo-freelancer',
            title: 'Desarrollo Freelancer',
            tecnology: 'HTML, CSS',
        },
        {
            link: 'https://github.com/pollie93/frontendStore',
            title: 'Frontend Store',
            tecnology: 'HTML, CSS',
        },
        {
            link: 'https://github.com/pollie93/blogDeCafe',
            title: 'Blog de Cafe',
            tecnology: 'HTML, CSS',
        },
        {
            link: 'https://github.com/pollie93/citasVeterinaria',
            title: 'Citas Veterinaria',
            tecnology: 'React Native',
        },
        {
            link: 'https://github.com/pollie93/Criptomonedas',
            title: 'Criptomonedas',
            tecnology: 'React Native',
        },
        {
            link: 'https://github.com/pollie93/aplicacionDeClima',
            title: 'Aplicacion De Clima',
            tecnology: 'React Native',
        },
        {
            link: 'https://github.com/pollie93/administracionDeClientes',
            title: 'Administración de clientes',
            tecnology: 'React Native',
        },
        {
            link: 'https://github.com/pollie93/myPortfolio',
            title: 'Mi Portfolio',
            tecnology: 'React Native',
        },
    ]

    const OpenURLButton = async (url) => {
        
        return await Linking.openURL(url); // el return corta. Recibe una URL y la abre
        // const supported = await Linking.canOpenURL(url); // preg si es una URL valida
        // console.log(supported);
        // if (supported) { 
        // } else {
        //     Alert.alert(`Don't know how to open this URL: ${url}`);
        // }
    }

    return ( 
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.infoBox}>
                <MyPicture
                    photo={require('../assets/github.png')}
                />
                <View style={styles.info}>
                    <Text style={globalStyles.descriptionText}>A continuación, detallo los proyectos realizados con sus respectivos repositorios públicos.</Text>
                </View>
            </View>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.link}
                renderItem={({item}) => {
                    
                    return(
                        <TouchableOpacity style={styles.buttomProject} onPress={() => OpenURLButton(item.link)}>
                            <Text style={[globalStyles.descriptionText]}>{item.title}</Text>
                            <Text style={[globalStyles.descriptionText]}>{item.tecnology}</Text>
                        </TouchableOpacity>
                    )
                } }
            />
        </SafeAreaView>
    ); 
};

const styles=StyleSheet.create ({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffe0e3',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    separator: {
        marginVertical: 10,
    },
    backgroundDesing: {
        backgroundColor: '#fff2f3',
        borderRadius: 50,
        marginBottom: 15,
        marginTop: 5
    },
    textClickeable: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    buttomProject: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff2f3',
        marginVertical: 8,
        paddingVertical: 8
    },  
    infoBox: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 15
    }
})

export default MyGitHub;
