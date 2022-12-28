//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortar(palabra, numero) {
  if (typeof palabra === "string") {
    if (typeof numero === "number") {
      const recorte = palabra.slice(0, numero);
      console.log(recorte);
    }
  } else {
    console.log(
      "El primer parametro debe ser una palabra, y el segundo debe ser un número, verifique nuevamente"
    );
  }
}

recortar("Emiro", 2);
recortar(3, 2);
