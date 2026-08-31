const fs = require('fs');

console.log('Leyendo el primer archivo.txt...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // Se puede usar 'utf8' en lugar de 'utf-8' Ejecutar el callback cuando se termine de leer el archivo
    if (err) {
        console.error(err);
        return;
    }
    console.log('Primer archivo:', text);
});

console.log('----> Hacer mientras lee el archivo...');

console.log('Leyendo el segundo archivo.txt...');
fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => { // Se puede usar 'utf8' en lugar de 'utf-8' Ejecutar el callback cuando se termine de leer el archivo
    if (err) {
        console.error(err);
        return;
    }
    console.log('Segundo archivo:', secondText);
});