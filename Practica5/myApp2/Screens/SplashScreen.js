import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SplashScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Mi aplicación</Text>
            <Text>Cargando...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});