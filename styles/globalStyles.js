import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    title: {
        textAlign:'center',
        fontSize: 24,
        color: 'blue',
        fontWeight: 'bold',
        marginVertical: 10
    },
    subtitle: {
        fontSize: 19,
        color: 'black',
        textDecorationLine: 'underline',
        marginVertical: 15
    },
    descriptionText: {
       color: 'black',
       fontSize: 15
    }
});

export default globalStyles;