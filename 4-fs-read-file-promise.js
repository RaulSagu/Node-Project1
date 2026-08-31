const fs = require('node:fs');
const { promisify} = require('node:until');

const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo.txt...');
const text = fs.readFilePromise('./archivo.txt', 'utf-8')
.then(text => { // Ejecutar el callback cuando se termine de leer el archivo
    console.log('Primer archivo:', text);
})
.catch(err => { // Manejar errores si ocurre alguno
    console.error(err);
});


console.log('Leyendo el segundo archivo.txt...');
const secondText = fs.readFilePromise('./archivo2.txt', 'utf-8')
.then(secondText => { // Ejecutar el callback cuando se termine de leer el archivo
    console.log('Segundo archivo:', secondText);
})
.catch(err => { // Manejar errores si ocurre alguno
    console.error(err);
});