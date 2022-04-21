import React from 'react';
import {Text, Pressable, StyleSheet, View, Modal } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ModalADT = ({modalVisible, setModalVisible}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[globalStyles.subtitle, styles.separator]}>ADT</Text>
                        <Text style={[globalStyles.descriptionText, styles.modalText]}>
                            Atención al cliente: Cargo Administrativo. Back Office. | Asesora técnica en alarmas de seguridad.
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar Experiencia ADT</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )

}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff2f3',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    separator: {
        marginBottom: 10
    }
});

export default ModalADT;