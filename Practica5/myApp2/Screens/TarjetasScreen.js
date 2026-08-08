//Zona 1: importación de archivos y componentes.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Perfil} from '../components/Perfil'; 


//Zona2: Componentes




//Perfil usando props
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetaRosa}nombre='Emily Hernández Eulogio' carrera='Ingeniería en Sistemas Computacionales' materia='Programación Móvil' cuatrimestre='9° cuatrimestre' />

      <Perfil style={styles.tarjetaRosa}nombre='Emily Hernández Eulogio' carrera='Ingeniería en Sistemas Computacionales' materia='Programación Móvil' cuatrimestre='9° cuatrimestre' />

      <Perfil style={styles.tarjetaMorada} nombre='Mairin Hernández Eulogio' carrera='Ingeniería en Meca' materia='Programación Móvil' cuatrimestre='9° cuatrimestre' />
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly', // justifiycontent centra los elementos horizontalmenter
    alignItems: 'center', // Centra los elementos vertical
    flexDirection: 'row', // Cambia la dirección de los elementos a horizontal
    
    },

  tarjetaRosa: {
    backgroundColor: "pink",
  },
  tarjetaMorada:{
    backgroundColor: "purple",
  },
});
