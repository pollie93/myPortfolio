import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MyPicture = ({photo}) => {
    if (!photo) return null;

    return (
        <View>
            <Image style={styles.photo} source={photo} />
        </View>
    );
};

const styles = StyleSheet.create({
    photo: {
        height: 100,
        width: 100,
        borderRadius: 50,
    }
})

export default MyPicture;
