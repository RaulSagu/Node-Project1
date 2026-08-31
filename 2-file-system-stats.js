const fs = require('node:fs'); // Apartir de Node 18, se puede usar import fs from 'node:fs' en lugar de require
const stats = fs.statSync('./archivo.txt'); 
console.log(
    stats.isFile(), // Si es un archivo
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbólico
    stats.isBlockDevice(), // Si es un dispositivo de bloque
    stats.isCharacterDevice(), // Si es un dispositivo de caracteres
    stats.size, // Tamaño del archivo en bytes
    stats.isFIFO(), // Si es un FIFO
    stats.isSocket()
); // true, false