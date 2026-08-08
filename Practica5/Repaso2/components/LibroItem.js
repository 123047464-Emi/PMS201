import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function LibroItem({titulo, autor, genero}){
    return(
        <View style={styles.card}>
            <Text>{titulo}</Text>
            <Text>Autor: {autor}</Text>
            <Text>Género: {genero}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
});


