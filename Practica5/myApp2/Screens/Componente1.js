//Zona 1: importación de archivos y componentes.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


//Zona2: Componentes

//Perfil usando props
export default function App() {
  return (
    <View>
        <Text>Aquí va la primera practica de componentes nativos</Text>
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly', // justifiycontent centra los elementos horizontalmenter
    alinItems: 'space-evenly', // Centra los elementos vertical
    flexDirection: 'row', // Cambia la dirección de los elementos a horizontal
    
    }
});