//Asincrono secuencial paralelo, paralelizando la lectura de archivos con Promise.all y la sincronia
import { readFile } from 'fs/promises'; // Importar el módulo fs/promises para trabajar con promesas
promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
])
.then(([text, secondText]) => {
    console.log('Primer archivo:', text);
    console.log('Segundo archivo:', secondText);
})
.catch(err => {
    console.error('Error al leer los archivos:', err);
});