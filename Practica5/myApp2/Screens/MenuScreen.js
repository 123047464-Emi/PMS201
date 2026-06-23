import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import ComponenteAlert from './Componente4_1';
import Practica1 from './Componente1'; 

export default function App() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;
    case 'Componente4_1':
      return <ComponenteAlert />;
    case 'Componente1':
      return <Componente1 />;
    case 'Practica1':
      return <Practica1 />;
    default:
      return (
        <View style={styles.container}>
          <Text>Aquí va la primera práctica de componentes nativos</Text>
          <Button title="Práctica Tarjetas" onPress={() => setScreen('tarjetas')} />
          <Button title="Práctica Componente1" onPress={() => setScreen('Componente1')} />
          <Button title="Práctica Componente Alert" onPress={() => setScreen('Componente4_1')} />
          <Button title="Práctica 1" onPress={() => setScreen('Practica1')} />
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
