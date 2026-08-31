const fs = require('fs/promises'); // Importar el módulo fs/promises para trabajar con promesas

console.log('Leyendo el primer archivo.txt...');
fs.readFile('./archivo.txt', 'utf-8')
.then(text => { // Ejecutar el callback cuando se termine de leer el archivo
    console.log('Primer archivo:', text);
})
.catch(err => { // Manejar errores si ocurre alguno
    console.error(err);
});

console.log('----> Hacer mientras lee el archivo...');

console.log('Leyendo el segundo archivo.txt...');
fs.readFile('./archivo2.txt', 'utf-8')
.then(secondText => { // Ejecutar el callback cuando se termine de leer el archivo
    console.log('Segundo archivo:', secondText);
})
.catch(err => { // Manejar errores si ocurre alguno
    console.error(err);
});