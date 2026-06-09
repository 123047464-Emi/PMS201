import {View, Text, Button} from 'react-native';
//Declaramos el estado
import React, {useState} from 'react';


//La funcion de flecha omra de simplificar funciones
export const Perfil=({nombre, carrera, materia, cuatrimestre}) =>{ // desestructuración de props, se colocan entre llaves y 
// se asignan a variables, para poder usarlas dentro del componente Perfil.
    const [mostrar, setMostrar]=useState(false); // se declara el estado mostrar, con su función setMostrar, y se inicializa en false.

    return(
        <View>
            <Text>Repaso de Componentes{'\n'} </Text>
            <Text>Nombre: {nombre }{'\n'} </Text>
            {/*Renderizado Condicional, del lado derecho se pone lo que se quiere ocultar o mostrar*/}
            {mostrar && 
            <>
            <Text>Carrera: {carrera } {'\n'} </Text>
            <Text>Materia: {materia }l{'\n'} </Text>
            <Text>Cuatrimestre: {cuatrimestre } {'\n'}</Text>
            </> // Fragment, se usa para agrupar los elementos que se quieren mostrar u ocultar, sin necesidad de usar un View adicional.
             }
             <Button title="Detalles perfil" onPress={() => setMostrar(!mostrar)}/>
            {/*OnPress se encarga de cambiar el estado mostrar, para mostrar u ocultar los detalles del perfil, se puede usar una función flecha para cambiar el estado, por ejemplo: onPress={() => setMostrar(!mostrar)}, esto hace que al presionar el botón, se cambie el estado mostrar a su valor contrario, es decir, si es false, se cambia a true, y si es true, se cambia a false.*/}
        </View>
    )
}