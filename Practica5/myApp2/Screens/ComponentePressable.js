//Zona 1: importación de archivos y componentes.
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

//Zona2: Componentes
export default function PressableScreen() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Componente Pressable</Text>

      <Pressable
        onPress={() => setContador(contador + 1)}
        onLongPress={() => {
          setContador(0);
          setMensaje('Contador reiniciado');
        }}
        onPressIn={() => setMensaje('Botón presionado...')}
        onPressOut={() => setMensaje('Botón liberado')}
        style={({ pressed }) => [
          styles.boton,
          pressed ? styles.botonPresionado : styles.botonNormal,
        ]}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>

      <Text style={styles.texto}>Contador: {contador}</Text>
      <Text style={styles.texto}>Estado: {mensaje}</Text>
      <Text>Mantén presionado el botón para reiniciar el contador</Text>
    </View>
  );
}

//Zona3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boton: {
    padding: 15,
    borderRadius: 10,
    width: 180,
    alignItems: 'center',
  },
  botonNormal: {
    backgroundColor: '#2196f3',
  },
  botonPresionado: {
    backgroundColor: '#1976d2',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
  },
});
