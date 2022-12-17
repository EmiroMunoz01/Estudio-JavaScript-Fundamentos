require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();
const main = async () => {
  console.log("Hola Emiro");

  mostrarMenu();
  pausa();
};

main();

//recibiremos un input por parte del usuario en consola
//stdin, stdout, readline
