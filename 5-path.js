const path= require('node:path');

//Barra separadora de carpetas según el sistema operativo
console.log('Separador de carpetas:', path.sep);

//Ruta absoluta del archivo actual
console.log('Ruta absoluta del archivo actual:', path.resolve(__filename));

//Nombre del archivo actual
console.log('Nombre del archivo actual:', path.basename(__filename));

//Directorio del archivo actual
console.log('Directorio del archivo actual:', path.dirname(__filename));

//Extensión del archivo actual
console.log('Extensión del archivo actual:', path.extname(__filename));

//Unir rutas de archivos
const filePath = path.join('content', 'subcarpeta', 'archivo.txt');
console.log('Ruta unida:', filePath);

//El Nombre de un archivo
const base = path.basename('/temp/midu-secret-files/password.txt');
console.log('Nombre del archivo:', base);

//El Nombre de un archivo sin la extensión
const baseWithoutExt = path.basename('/temp/midu-secret-files/password.txt', '.txt');
console.log('Nombre del archivo sin extensión:', baseWithoutExt);

//El directorio de un archivo
const dir = path.dirname(filePath);
console.log('Directorio del archivo:', dir);

//La extensión de un archivo
const ext = path.extname(filePath);
console.log('Extensión del archivo:', ext);