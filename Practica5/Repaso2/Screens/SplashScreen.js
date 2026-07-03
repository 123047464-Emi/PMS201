//Venatana que muestra el una imagen en pantalla, espera dos segundos y dirige a la pantalla
import React from 'react';
import {Text,View, StyleSheet} from 'react-native';


//funcion para mostrar la pantalla de carga
export default function SplashScreen({navigation}){//Agregamos navigation para poder navegar a otra pantalla
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido Repaso 2</Text>
            <Text> Cargando....</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

