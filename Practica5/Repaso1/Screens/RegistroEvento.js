import React, {useState} from 'react';
import{Text, View, Button, StyleSheet, Alert, TextInput, Switch, Pressable} from 'react-native';


export default function Repaso1(){
    //Estados 
    const[nombre, setNombre]=useState('');
    const[carrera, setCarrera]=useState('');
    const[semestre, setSemestre]=useState('');
    const[taller, setTaller]=useState(false);
    const[constancia, setConstancia]=useState(false);
    const[deportes, setDeporte]=useState(false);

    //Funcion para evitar registros
    const evitarRegistros=()=>{
        //Validar que no existen valores vacios
        if(!nombre.trim() || !carrera.trim() || !semestre.trim()){ //trim elimina espacios en blanco
            Alert.alert('Error',  'Debes de rellenar todos los campos');
            return;
        }
        //Validar que semestre sea numerico
        if(isNaN(semestre)){
            Alert.alert('Error', 'El semestre debe de ser numerico');
            return;
        }

        //Creamos la alerta para mostrar el lesultado
        Alert.alert('Registro enviado', 
            `Nombre: ${nombre}
            Carrera: ${carrera}
            Semestre: ${semestre} 
            
            Taller: ${taller ? 'Si' : 'No'}
            Constancia: ${constancia ? 'Si' : 'No'}
            Deportes: ${deportes ? 'Si' : 'No'}`
        );
    };

    return(
        <View style={styles.container}>
            {/*Titulo de pantalla */}
            <Text style={styles.title}> Registro de un evento Universitario</Text>

            <TextInput
                placeholder='Escribe tu nombre aqui..'
                value={nombre}
                onChangeText={setNombre}
                autoCapitalize='words'
                style={styles.input}
            />
            <TextInput
                placeholder='Escribe tu carrera aqui...'
                value={carrera}
                onChangeText={setCarrera}
                autoCapitalize='words'
                style={styles.input}
            />
            <TextInput
                placeholder='Escribe tu semestre aqui...'
                value={semestre}
                onChangeText={(text) => setSemestre(text.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                maxLength={2}
                style={styles.input}
            />

            <Text style={styles.subtitle}> Opciones</Text>
            <View style={styles.optionRow}>
                <Text>¿Asistirá al taller?</Text>
                <Switch
                    value={taller}
                    onValueChange={setTaller}
                    trackColor={{false : '#ccc', true: '#81b0ff'}}
                    thumbColor={taller ? '#2196f3' : '#f4f3f4'}
                />
            </View>

            <View style={styles.optionRow}>
                <Text>¿Requiere constancia?</Text>
                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                    trackColor={{false : '#ccc', true: '#81b0ff'}}
                    thumbColor={taller ? '#2196f3' : '#f4f3f4'}
                />
            </View>

            <View style={styles.optionRow}>
                <Text>¿Participará en deportes?</Text>
                <Switch
                    value={deportes}
                    onValueChange={setDeporte}
                    trackColor={{false : '#ccc', true: '#81b0ff'}}
                    thumbColor={taller ? '#2196f3' : '#f4f3f4'}
                />
            </View>

            <Pressable style={styles.button} onPress={evitarRegistros}>
                <Text style={styles.buttonText}>Enviar Registro</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15
  },

  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

  button: {
    marginTop: 20,
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});