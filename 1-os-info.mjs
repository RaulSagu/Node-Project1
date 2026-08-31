//import { platform, type, release, arch, cpus, hostname, totalmem, freemem, uptime } from 'node:os';
import * as os from 'node:os';

console.log("Información del sistema operativo:");
console.log('-----------------------------');

console.log("Nombre de la plataforma: " + os.platform());
console.log(`Nombre del sistema operativo: ${os.type()}`);
console.log(`Versión del sistema operativo: ${os.release()}`);
console.log(`Arquitectura del sistema operativo: ${os.arch()}`);
console.log(`Número de CPUs: ${os.cpus().length}`); // Nos va a servir para escalar procesos en Node
console.log('Número de CPUs:', os.cpus());
console.log("Nombre del host: " + os.hostname());
console.log(`Memoria total: ${Math.round(os.totalmem() / (1024 * 1024 * 1024) * 100) / 100} GB`);
console.log(`Memoria libre: ${Math.round(os.freemem() / (1024 * 1024 * 1024) * 100) / 100} GB`);
console.log(`Memoria total: ${os.totalmem()} bytes`);
console.log(`Memoria libre: ${os.freemem()} bytes`);
console.log("Tiempo de actividad del sistema: ", os.uptime() + " segundos");
console.log("Tiempo de actividad del sistema: ", os.uptime() / 60 + " minutos");
console.log("Tiempo de actividad del sistema: ", os.uptime() / 60 / 60 + " horas");