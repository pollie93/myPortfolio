import React, {useState} from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';
import MyPicture from '../components/MyPicture';
import ContactMe from '../components/ContactMe';
import ModalAsap from '../components/ModalAsap';
import ModalADT from '../components/ModalADT';
import ModalKonecta from '../components/ModalKonecta';

const Introduccion = ({navigation}) => {
    const [showAsapModal, setShowAsapModal] = useState(false);
    const [showADTModal, setShowADTModal] = useState(false);
    const [showKonectaModal, setShowKonectaModal] = useState(false);

    const datos = {
        DNI: 37360800,
        Telefono: 1530178039,
        Email: 'paularodriguez@gmail.com'
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <ModalAsap
                modalVisible={showAsapModal}
                setModalVisible={setShowAsapModal}        
            />
            
            <ModalADT
                modalVisible={showADTModal}
                setModalVisible={setShowADTModal}
            />

            <ModalKonecta
                modalVisible={showKonectaModal}
                setModalVisible={setShowKonectaModal}
            />
            <View style={styles.backgroundDesing}>
                <Text style={globalStyles.title}>
                    Yo soy
                </Text>
            </View>

            
            <View style={styles.contenedor}>
                <MyPicture 
                    photo={require('../assets/miFoto.jpg')}
                />
                
                <View>
                    <Text style={globalStyles.descriptionText}>Paula Belén Rodriguez</Text>

                    <ContactMe 
                        datos={datos}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={globalStyles.descriptionText}>
                    Soy una persona responsable, puntual, autodidácta, comprometida con el trabajo. Tengo una actitud proactiva, con facilidad de adaptación y capacidad de trabajar tanto individualmente como de forma grupal. Mi objetivo es conseguir un resultado óptimo en la labor y área designada. 
                </Text>
                <View>
                    <Text style={[globalStyles.subtitle, styles.separator]}>Experiencia Laboral</Text>
                    <Text onPress={() => setShowAsapModal(true)} style={[globalStyles.descriptionText, styles.textClickeable]}>
                        Asap Consulting - Enero 2021- Actualidad
                    </Text>
                    <Text style={[globalStyles.descriptionText, styles.bottomSpace]}>
                        Asistente administrativo
                    </Text>
                    
                    <Text onPress={() => setShowADTModal(true)} style={[globalStyles.descriptionText, styles.textClickeable]}>
                        ADT Security Services, S.A - Octubre 2018 - Enero 2021
                    </Text>
                    <Text style={[globalStyles.descriptionText, styles.bottomSpace]}>
                        Atención al cliente
                    </Text>

                    <Text onPress={() => setShowKonectaModal(true)} style={[globalStyles.descriptionText, styles.textClickeable]}>
                        Grupo Konecta - Stratton Nea S.A - Febrero 2017 - Mayo 2018
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Soporte técnico y atención al cliente
                    </Text>
                </View>

                <View>
                    <Text style={[globalStyles.subtitle, styles.separator]}>
                        Formación Académica
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Cursos Udemy
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        HTML, CSS, JavaScript
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        ReactNative, React
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Clases individuales con un desarrollador Ssr.
                    </Text>
                </View>

                <View>
                    <Text style={globalStyles.descriptionText}>
                        Otros conocimientos
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Diplomatura en Asistente Administrativo Contable
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Manejo Sistema Tango/Bejerman
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Curso Liquidación de sueldos y jornales
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Manejo de Paquete Office
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Inglés nivel Intermedio
                    </Text>
                </View>
                <View>
                    <Text style={[globalStyles.subtitle, styles.separator]}>
                        Hobbies
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Música (Violín)
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Leer
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        Jueguitos!! 🤓
                    </Text>
                </View>
            </ScrollView>
           <View style={styles.desingViewTouchableOpacity}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("MyGitHub")}
                    style={styles.designTouchable}
                >
                    <Text 
                        style={[globalStyles.subtitle, styles.separator, styles.desingTextTouchable]}>
                            MyGitHub
                    </Text>
                </TouchableOpacity>
           </View>
           

           
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ffe0e3',
    },
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10
    },
    scrollView: {
        backgroundColor: '#fff2f3',
        borderRadius: 30,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    separator: {
        marginVertical: 10,
    },
    bottomSpace: {
        marginBottom: 10
    },
    textClickeable: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    backgroundDesing: {
        backgroundColor: '#fff2f3',
        borderRadius: 50,
        marginBottom: 15,
        marginTop: 5
    },
    designTouchable: {
        backgroundColor: '#fff2f3',
        borderRadius: 40,
        marginVertical: 10,
        height: 50,
        width: 120,
    },
    desingTextTouchable: {
        textAlign: 'center'
    },
    desingViewTouchableOpacity: {
        alignItems: 'flex-end'
    }
});

export default Introduccion;