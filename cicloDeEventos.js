// Correr con en terminal como 'node cicloDeEventos'
console.log('Inicio del programa'); // Primero en imprimir

setTimeout(() => {
    console.log('Primer TimeOut') // ultimo en Imprimir
}, 3000);

setTimeout(() => {
    console.log('Segundo TimeOut') // tercero en Imprimir
}, 0);

setTimeout(() => {
    console.log('Tercer TimeOut') // cuarto en Imprimir
}, 0);

console.log('Fin del programa'); // Segundo en Imprimir