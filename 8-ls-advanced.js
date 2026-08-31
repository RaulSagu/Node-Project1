const fs = require("node:fs/promises");
const path = require("node:path");
const picocolors = require("picocolors");

const folder = process.argv[2] ?? "."; // Obtener el nombre de la carpeta desde los argumentos de línea de comandos, o usar el directorio actual por defecto

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(
      picocolors.red(
        `❌ Error al leer el directorio. No se pudo leer ${folder}`,
      ),
    );
    process.exit(1);
  }

  // Recorrer los archivos y obtener información adicional, por medio de las promesas
  const fileInfoPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath); // brinda el status o la información del archivo
    } catch {
      console.error(
        picocolors.red(
          `❌ Error al obtener información, no de puede obtener el archivo ${filePath}`,
        ),
      );
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "directorio" : " - archivo -";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString(); // Obtener la fecha de modificación del archivo
    return `${picocolors.blue(fileType)} ${picocolors.green(file.padEnd(20))} ${picocolors.yellow(fileSize.toString().padStart(15))} ${picocolors.magenta(fileModified)}`;
  });
  const fileInfo = await Promise.all(fileInfoPromises); // obtenemos toda l ainformacion de los archivos y directorios en un array
  fileInfo.forEach((fileInfo) => console.log(fileInfo)); // Imprimir la información de cada archivo y directorio
}
ls(folder); // Llamar a la función ls con el directorio especificado
