require("colors");

const mostrarMenu = () => {
  console.clear();
  console.log("======================".red);
  console.log("Seleccione una opcion".red);
  console.log("======================\n".red);

  console.log(`${"1.".red} Crear tarea`);
  console.log(`${"2.".red} Listar tarea`);
  console.log(`${"3.".red} Listar tarea completada`);
  console.log(`${"4.".red} Listar tarea pendiente`);
  console.log(`${"5.".red} Completar tarea`);
  console.log(`${"6.".red} Borrar tarea`);
  console.log(`${"0.".red} Salir\n`);

  //recibiremos informacion del usuario
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Seleccione una opición: ", (opt) => {
    readline.close();
  });
};

const pausa = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`\nPresione ${'ENTER'.red} para continuar\n`, (opt) => {
    readline.close();
  });
};

module.exports = {
  mostrarMenu,
  pausa
};
