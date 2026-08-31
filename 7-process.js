//Este es un objeto global que contiene información sobre el proceso actual de Node.js
//El objeto process proporciona información y control sobre el proceso de Node.js en ejecución
//Algunas propiedades y métodos útiles del objeto process incluyen:
//process.argv: Un array que contiene los argumentos de la línea de comandos pasados al script de Node.js
//process.env: Un objeto que contiene las variables de entorno del sistema
//process.exit(): Un método que finaliza el proceso de Node.js con un código de salida específico
//process.on('exit', callback): Un evento que se dispara cuando el proceso está a punto de salir, permitiendo ejecutar código antes de finalizar

console.log('Información del proceso actual:', process.argv); // Argumentos de la línea de comandos
console.log('Información del proceso actual:'); // Información del proceso actual
console.log('ID del proceso:', process.pid); // ID del proceso actual
console.log('Directorio actual:', process.cwd()); // Directorio de trabajo actual
console.log('Versión de Node.js:', process.version); // Versión de Node.js
console.log('Argumentos de la línea de comandos:', process.argv); // Argumentos de la línea de comandos
console.log('Variables de entorno:', process.env); // Variables de entorno

//Ejemplo de cómo finalizar el proceso con un código de salida específico
//process.exit(0); // Finaliza el proceso con un código de salida 0 (éxito)
//process.exit(1); // Finaliza el proceso con un código de salida 1 (error)

//Ejemplo de cómo escuchar el evento 'exit' para ejecutar código antes de finalizar
process.on('exit', (code) => {
  console.log(`El proceso está a punto de salir con el código: ${code}`);
});