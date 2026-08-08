import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export const Componente4_0 = () => {  

  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Hola RN: Componente propio </Text>
      <Text style={styles.subtitle}>Ejemplo de varios TextInput con State</Text>

      <TextInput
        placeholder="Escribe algo..."
        value={texto}
        onChangeText={setTexto}
        maxLength={20}
        autoCapitalize="words"
        style={styles.input}
      />

      <TextInput
        placeholder="Ingresa un número"
        value={numero}
        onChangeText={(text) => setNumero(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
      />

      <TextInput
        placeholder="Ingresa tu correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        style={styles.input}
      />

      <TextInput
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.subtitle}>Valores almacenados:</Text>
      <Text style={styles.result}>Texto: {texto}</Text>
      <Text style={styles.result}>Número: {numero}</Text>
      <Text style={styles.result}>Correo: {correo}</Text>
      <Text style={styles.result}>Contraseña: {password}</Text>

    </View>
  );
};

