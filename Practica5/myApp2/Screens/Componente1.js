//1. Importamos las librerías necesarias
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';

//2. Creamos la función principal
const Practica1 = () => {

  //3. Estado con lista de tareas
  const [tareas, setTareas] = useState([
    'Ir al gimnasio',
    'Asistir a clases',
    'Pasar lista en el charlees',
    'Ver a la novia',
    'Dormir temprano'
  ]);

  //4. Función para agregar tareas
  const agregarTarea = () => {
    setTareas([...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  //5. Render de la interfaz
  return (
    <SafeAreaView style={styles.container}>
      
      <Button title="Agregar tarea" onPress={agregarTarea} />

      <ScrollView 
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {tareas.map((tarea, index) => (
          <View key={index} style={styles.item}>
            <Text>{tarea}</Text>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

//6. Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 30,
  },
  item: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'pink',
  }
});

export default Practica1;