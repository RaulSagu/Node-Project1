//Asincrono con callbacks
const fs = require('fs');

console.log('Leyendo el primer archivo.txt...');
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // Se puede usar 'utf8' en lugar de 'utf-8'
console.log('Primer archivo:', text);


console.log('Leyendo el segundo archivo.txt...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8'); // Se puede usar 'utf8' en lugar de 'utf-8'
console.log('Segundo archivo:', secondText);