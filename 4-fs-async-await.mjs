const fs = require('fs/promises'); // Importar el módulo fs/promises para trabajar con promesas

import { readFile } from 'fs/promises'; // Importar el módulo fs/promises para trabajar con promesas

// Función asíncrona para leer archivos de manera secuencial, utilizando async/await
// Nota: Se puede novertir el archivo de .js a .mjs para poder usar import/export en lugar de require, pero aquí se mantiene require para compatibilidad con Node.js
console.log('Leyendo el primer archivo.txt...');
const text = await fs.readFile('./archivo.txt', 'utf-8');
console.log('Primer archivo:', text);

console.log('----> Hacer mientras lee el archivo...');

console.log('Leyendo el segundo archivo.txt...');
const secondText = await fs.readFile('./archivo2.txt', 'utf-8');
console.log('Segundo archivo:', secondText);