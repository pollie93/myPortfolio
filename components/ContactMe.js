import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ContactMe = ({ datos }) => {
    if (!datos) return null;
    
    const { Telefono, DNI, Email, Fecha } = datos;

    return(
        <View>
            {!!Fecha && <Text style={globalStyles.descriptionText}>Fecha de nacimiento: {Fecha}</Text>}
            {!!DNI && <Text style={globalStyles.descriptionText}>Mi DNI es: {DNI}</Text>}
            {(!!Email || !!Telefono) && <Text style={globalStyles.descriptionText}>Mis datos de contacto son:</Text>}
            {!!Email && <Text style={globalStyles.descriptionText}>{Email}</Text>}
            {!!Telefono && <Text style={globalStyles.descriptionText}>{Telefono}</Text>}
        </View>
    );

}

export default ContactMe;
