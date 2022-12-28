//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversor = (grados, tipo) => {
  if (tipo === "f" || tipo === "F") {
    const t = (grados - 32) / 1.8;
    console.log(`${t}°C`);
  } else if (tipo === "c" || tipo === "C") {
    const t = grados * 1.8 + 32;
    console.log(`${t}°F`);
  } else {
    console.log("La opcion no es valida");
  }
};

conversor(0, "C");
