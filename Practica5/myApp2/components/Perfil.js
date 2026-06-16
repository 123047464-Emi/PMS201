import {View, Text, Button, StyleSheet} from 'react-native';
//Declaramos el estado
import React, {useState} from 'react';


//La funcion de flecha omra de simplificar funciones
export const Perfil=({nombre, carrera, materia, cuatrimestre, style}) =>{ // desestructuración de props, se colocan entre llaves y 
// se asignan a variables, para poder usarlas dentro del componente Perfil.
    const [mostrar, setMostrar]=useState(false); // se declara el estado mostrar, con su función setMostrar, y se inicializa en false.

    return(
        <View style={[estilos.tarjeta, style]}>
            <Text>Repaso de Componentes{'\n'} </Text>
            <Text style={estilos.nombre}>Nombre: {nombre }{'\n'} </Text>
            {/*Renderizado Condicional, del lado derecho se pone lo que se quiere ocultar o mostrar*/}
            {mostrar && 
            <>
            <Text style={estilos.carrera}> Carrera: {carrera } {'\n'} </Text>
            <Text style={estilos.otroTexto}> Materia: {materia } {'\n'} </Text>
            <Text style={estilos.otroTexto}> Cuatrimestre: {cuatrimestre } {'\n'}</Text>
            </> // Fragment, se usa para agrupar los elementos que se quieren mostrar u ocultar, sin necesidad de usar un View adicional.
             }
             <Button title="Detalles perfil" onPress={() => setMostrar(!mostrar)}/>
            {/*OnPress se encarga de cambiar el estado mostrar, para mostrar u ocultar los detalles del perfil, se puede usar una función flecha para cambiar el estado, por ejemplo: onPress={() => setMostrar(!mostrar)}, esto hace que al presionar el botón, se cambie el estado mostrar a su valor contrario, es decir, si es false, se cambia a true, y si es true, se cambia a false.*/}
        </View>
    )
}

const estilos=StyleSheet.create({
    nombre:{
        fontSize: 24, 
        fontWeight: 600, //Negritas
        textTransform: 'uppetcase',

    }, 
    carrera:{
        fontSize: 18,
        color: "white", 
        fontFamily: "Poppins-Regular",

    }, 
    otroTexto: {
        fontSize: 12,
        fontFamily:"Courier",
        fontStyle: "italic",
    }, 
    tarjeta: {
        borderWidth: 2, // Borde de la tarjeta
        padding: 25, // Espacio entre el borde y el contenido
        margin: 20, // Margen externo
        backgroundColor: "pink",
    },
}); 