import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    title: {
        textAlign:'center',
        fontSize: 24,
        color: 'blue',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        textDecorationLine: 'underline',
    },
    descriptionText: {
       color: 'black',
       fontSize: 15
    }
});

export default globalStyles;