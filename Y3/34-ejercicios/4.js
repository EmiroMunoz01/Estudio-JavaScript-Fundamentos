//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetir(palabra, veces) {
  if (typeof palabra === "string") {
    if (typeof veces === "number") {
      for (var i = 1; i <= veces; i++) {
        console.log(palabra);
      }
    }
  } else {
    console.log(
      "El primer parametro debe ser una palabra, y el segundo debe ser un número, verifique nuevamente"
    );
  }
}

repetir("Emiro", 10);
repetir(3, 3);

