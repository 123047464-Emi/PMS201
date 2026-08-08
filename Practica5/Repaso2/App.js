import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import Home from './Screens/HomeScreen';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [splash, setSplash]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false);
    }, 2000);
  }, []);

  return splash ? <SplashScreen/> : <Home/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
