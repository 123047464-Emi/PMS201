import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    FlatList,
    Alert,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

import LibroItem from '../components/LibroItem';

const fondo = require('../assets/imagen.png');

export default function HomeScreen() {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(false);

    const agregarLibro = () => {

        // VALIDACIÓN
        if (!titulo || !autor || !genero) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        setLoading(true);

        setTimeout(() => {

            const nuevoLibro = {
                id: Date.now().toString(),
                titulo,
                autor,
                genero
            };

            setLibros([...libros, nuevoLibro]);

            // LIMPIAR
            setTitulo('');
            setAutor('');
            setGenero('');

            setLoading(false);

            Alert.alert('Éxito', 'Libro guardado correctamente');

        }, 4000);
    };

    return (
        <ImageBackground
            source={fondo}
            style={styles.container}
            resizeMode='cover'
            imageStyle={{ opacity: 0.8 }}
            blurRadius={3}
        >

            <Text style={styles.titulo}>Catálogo de Libros</Text>

            <TextInput
                placeholder="Título del libro"
                value={titulo}
                onChangeText={setTitulo}
                style={styles.input}
            />

            <TextInput
                placeholder="Autor"
                value={autor}
                onChangeText={setAutor}
                style={styles.input}
            />

            <TextInput
                placeholder="Género"
                value={genero}
                onChangeText={setGenero}
                style={styles.input}
            />

            <Pressable style={styles.boton} onPress={agregarLibro}>
                <Text style={{ color: '#fff' }}>Agregar Libro</Text>
            </Pressable>

            {loading && <ActivityIndicator size="large" color="#000" />}

            <Text>Total de libros: {libros.length}</Text>

            <FlatList
                data={libros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LibroItem
                        titulo={item.titulo}
                        autor={item.autor}
                        genero={item.genero}
                    />
                )}
            />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    boton: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    }
});