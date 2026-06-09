import {View, Text, Image, Button} from 'react-native';


//La funcion de flecha omra de simplificar funciones
export const Saludo2= () =>{
    return(
        <View>
            <Text>Hola RN: Componente Propio!</Text>
            <Image source={require('../assets/wave.png')} /> 
            {/* Los dos puntos indican que se regresa a la carpeta anterior, en este caso a myApp2, y luego se accede a la carpeta assets para obtener la imagen wave.png, para mostrarla en el componente Saludo2. */}
            <Button title='Hola 201!'></Button>
        </View>
        
        
    )
}