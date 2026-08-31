const fs = require('node:fs/promises'); // Importar el módulo fs/promises para trabajar con promesas

// Función asíncrona para leer archivos de manera secuencial, utilizando async/await    
fs.readdir('.')
  .then(files => {
    console.log('Archivos en el directorio actual:');
    files.forEach(file => {
      console.log('- ', file);
    });
  })
  .catch(err => {
    console.error('Error al leer el directorio:', err);
  });