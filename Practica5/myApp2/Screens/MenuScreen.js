//Zona 1: importación de archivos y componentes.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import ComponenteAlert from './Componente4_1';

//Zona2: Componentes




//Perfil usando props
export default function App() {
    const [screen, setScreen]=useState('menu'); //Menu se encarga de ser el switch entre las pantallas, se inicializa en menu para que sea la pantalla de inicio
    switch (screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1': 
            return<Componente1/>;
        case 'Componente4_1':
            return <ComponenteAlert/>;;
        case 'menu':
            default:
            return (
                <View>
                    <Text>Aquí va la primera practica de componentes nativos</Text>
                    <Button title= 'Practica Tarjetas' onPress={()=>setScreen('tarjetas')}/>
                    <Button title= 'Practica Componente1' onPress={()=>setScreen('componente1')}/>
                    <Button title='Practica Componente4_1' onPress={()=>setScreen('Componente4_1')}/>

                </View>
            ); //Return
    } //switch 
} //Funcion

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly', // justifiycontent centra los elementos horizontalmenter
    alignItems: 'center', // Centra los elementos vertical
    flexDirection: 'column', // Cambia la dirección de los elementos a horizontal
    
    }
});