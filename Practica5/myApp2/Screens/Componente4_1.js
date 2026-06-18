//Zona 1: importación de archivos y componentes.
import { StyleSheet, Text, View, Alert, Button} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; //Evita que los elementos se superpongan con la barra de estado del dispositivo


//Zona2: Componentes
//Creamos una funcion para mostrar una alerta
const ComponenteAlert=()=>{ //Esta funcion se ejecuta cada vez que se renderiza el componente
    const [message, setMessage ]=useState('Sin acción'); //Creamos un estado con un valor inicial 
    const createTwoButtonAlert=()=> //Esta funcion se ejecuta cuando se presiona un boton
        Alert.alert('Alerta de 2 botones', 'Elige una opción', [ //Creamos una alerta que continene título, mensaje y lista de botones
            {
                text: 'Cancelar', //Texto del boton
                onPress:()=>{
                    console.log('Presiona para cancelar');
                    setMessage('Presionaste cancelar'); //Actualizamos el estado con el mensaje de cancelado
                }, 
                style:'cancel',
            },
            {
                text: 'Aceptar', 
                onPress:()=>{
                    console.log('Presionaste aceptar');
                    setMessage('Presionaste aceptar'); //Actualizamos el estado con el mensaje de aceptado
                }
            }

        ]);
    const createThreeButtonAlert=()=>
        Alert.alert('Alerta de 3 botones', 'Elige una opción', [
            {
                text: 'Preguntame más tarde', 
                onPress:()=>{ 
                    setMessage('Preguntame más tarde'); //Actualizamos el estados con el mensaje de preguntame más tarde
                }, 
            },
            {
                text: 'Cancelar', //Texto del boton
                onPress:()=>{
                    console.log('Presiona para cancelar');
                    setMessage('Presionaste cancelar'); //Actualizamos el estado con el mensaje de cancelado
                }, 
                style:'cancel',
            },
            {
                text: 'Aceptar', 
                onPress:()=>{
                    console.log('Presionaste aceptar');
                    setMessage('Presionaste aceptar'); //Actualizamos el estado con el mensaje de aceptado
                }
            }

        ]);
    return( //
        <SafeAreaProvider> {/*Activamos el area segura para evitar que los elementos se superpongan con la barra de estado del dispositivo*/}
            <SafeAreaView style={styles.container}> {/*Creamos un contenedor para los elementos de la pantalla y le aplicamos estilos*/}
                <Text>Estado actual: {message}</Text> {/*muestra en pantalla el valor del mensaje*/}
                {/*Creamos el boton para mostrar la alerta de 2 botones*/}
                <Button
                    title='Alerta de dos botones'
                    onPress={() => {
                        console.log("CLICK BOTÓN 2");
                        createTwoButtonAlert();
                    }} //Cuando se presiona el boton se ejecuta la funcion createTwoButtonAlert
                />
                {/*CReamos el boton para mostrar la alarma de tres botones*/}
                <Button
                    title='Alerta de 3 botones'
                    onPress={() => {
                        console.log("CLICK BOTÓN 3");
                        createThreeButtonAlert();
                    }}
                />

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around', // justifiycontent centra los elementos horizontalmenter
    alignItems: 'center', // Centra los elementos vertical
    flexDirection: 'column', // Cambia la dirección de los elementos a horizontal
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default ComponenteAlert; //Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación