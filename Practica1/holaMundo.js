/**Js del lado del servidor */
console.log("Hola Mundo JS con Node");

/*Calculo*/
let edad1=12
let edad2=34

console.log("Edad primedio: ");
console.log((edad1+edad2)/2);
/*Medir el tiempo del proceso */
console.time("Mi proceso");

for(let i=0; i<100000; i++){

}

console.timeEnd("Mi proceso");


/*Objetos tipo tabla*/
let persona = [
    {
        nombre: "Emily",
        edad: 21
    },
    {
        nombre: "Juan",
        edad: 30
    },
];
console.log(persona);
console.table(persona);