const http = require('node:net');
function findAvailablePort(desiredPort){
    return new Promise((resolve, reject) => {
        const server = http.createServer(); // Creo un servidor HTTP sin manejar solicitudes
        server.listen(desiredPort, () => {
            const {port} = server.address();
            server.close(() => {
                resolve(port); // Resuelvo la promesa con el puerto disponible
            })
        })
        server.on('error', (err) => { // Manejo el error si el puerto está en uso
            if (err.code === 'EADDRINUSE') {
                //findAvailablePort(desiredPort + 1).then(resolve).catch(reject); // Intento con el siguiente puerto
                findAvailablePort(0).then(port => resolve(port)); // Intento con el siguiente puerto
                //reject(new Error(`Port ${desiredPort} is already in use.`));
            } else {
                reject(err);
            }
        })
    })
}

module.exports = {findAvailablePort};

// Lo vamos a utilizar en otro archivo, por eso lo exportamos. 9-http-respuesta.js