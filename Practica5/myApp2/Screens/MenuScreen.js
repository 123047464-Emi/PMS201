import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import ComponenteAlert from './ComponenteAlerta';
import Practica1 from './Componente1'; 
import PressableScreen from './ComponentePressable';
import SwitchScreen from './SwitchScreen';

export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'TarjetasScreen':
      return <TarjetasScreen />;
    case 'ComponenteAlert':
      return <ComponenteAlert />;
    case 'Componente1':
      return <Componente1 />;
    case 'Practica1':
      return <Practica1 />;
    case 'PressableScreen':
      return <PressableScreen />;
    case 'SwitchScreen':
      return <SwitchScreen />;
    default:
      return (
        <View style={styles.container}>
          <Text>Aquí va la primera práctica de componentes nativos</Text>
          <Button title="Práctica Tarjetas" onPress={() => setScreen('TarjetasScreen')} />
          <Button title="Práctica Componente Alert" onPress={() => setScreen('ComponenteAlert')} />
          <Button title="Práctica SafeAreaView" onPress={() => setScreen('Practica1')} />
          <Button title="Práctica Pressable" onPress={() => setScreen('PressableScreen')} />
          <Button title="Práctica Switch" onPress={() => setScreen('SwitchScreen')} />
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
