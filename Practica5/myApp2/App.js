//Zona 1: importación de archivos y componentes.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
//import{Saludo} from './components/Saludo';
//import{Saludo2} from './components/Saludo2';
import{Perfil} from './components/Perfil';

//Zona2: Componentes




//Perfil usando props
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil nombre='Emily Hernández Eulogio' carrera='Ingeniería en Sistemas Computacionales' materia='Programación Móvil' cuatrimestre='9° cuatrimestre' />
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
