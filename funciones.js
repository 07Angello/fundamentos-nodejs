// correr con 'node funciones.js'

// Function tradicional
function saludar(nombre) {
    let mensaje = `Hola ${nombre}`;
    return mensaje;
}

// Arrow function
const despedirse = (nombre) => {
    let mensaje = `Adios ${nombre}`;
    return mensaje;
}

// arror function en una linea
const hablar = (nombre) => `Hola nuevamente ${nombre}`;

// impletaciones
let saludo = saludar('angello');
let adios = despedirse('angello');
let hablo = hablar('angello');

// outputs
console.log(saludo);
console.log(adios);
console.log(hablo);