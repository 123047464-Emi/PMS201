//Zona 1: importación de archivos y componentes.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import MenuScreen from './Screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';



//Zona2: Componentes

//Perfil usando props
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MenuScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly', // justifiycontent centra los elementos horizontalmenter
    alignItems: 'center', // Centra los elementos vertical
    flexDirection: 'column' // Cambia la dirección de los elementos a horizontal
    
    }
});
