import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import TarjetasScreen from './TarjetasScreen';
import ComponenteAlert from './ComponenteAlerta';
import Practica1 from './Componente1'; 
import PressableScreen from './ComponentePressable';
import SwitchScreen from './SwitchScreen';
import { Componente4_0 } from './Componente4_0';
import  FlatListScreen  from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import SplashScreen from './SplashScreen';
import { ImagenFondo } from './ImagenFondo';
import { Home } from './Home';
import ComponentesNativosScreen from './ComponentesNativosScreen';

export default function App() {
  const [screen, setScreen] = useState('menu');
  useEffect(() => {
    if (screen === 'SplashScreen') {
      const timer = setTimeout(() => {
        setScreen('home');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

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
    case 'Componente4_0':
      return <Componente4_0/>;
    case 'FlatListScreen':
      return <FlatListScreen />;
    case 'SectionListScreen':
      return <SectionListScreen/>
    case 'SplashScreen':
      return <SplashScreen/>;
    case 'ImagenFondo':
      return <ImagenFondo/>;
    case 'home':
      return <Home/>;
    case 'ComponentesNativosScreen':
      return <ComponentesNativosScreen/>;
    default:
      return (
        <View style={styles.container}>
          <Text>Aquí va la primera práctica de componentes nativos</Text>
          <Button title="Práctica Tarjetas" onPress={() => setScreen('TarjetasScreen')} />
          <Button title="Práctica Componente Alert" onPress={() => setScreen('ComponenteAlert')} />
          <Button title="Práctica SafeAreaView" onPress={() => setScreen('Practica1')} />
          <Button title="Práctica Pressable" onPress={() => setScreen('PressableScreen')} />
          <Button title="Práctica Switch" onPress={() => setScreen('SwitchScreen')} />
          <Button title='Práctica TextInput' onPress={()=> setScreen('Componente4_0')}/>
          <Button title='Práctica FlatList' onPress={()=> setScreen('FlatListScreen')}/>
          <Button title='Práctica SectionList' onPress={()=> setScreen('SectionListScreen')}/>
          <Button title='Práctica Splash' onPress={()=>setScreen('SplashScreen')}/>
          <Button title='Práctica Imagen fondo' onPress={()=>setScreen('ImagenFondo')}/>
          <Button title='Práctica Componentes Nativos' onPress={()=>setScreen('ComponentesNativosScreen')}/>
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* Tanto para alignItems y alignItems ambos dependen del valor de flexDirection */
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    /* 
    flexDirection: 'column'
    justifyContent: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'flex-end',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    justifyContent: 'space-evenly',
    */
  },
  botones: {
    padding: 15,
    margin: 15
  }
});
