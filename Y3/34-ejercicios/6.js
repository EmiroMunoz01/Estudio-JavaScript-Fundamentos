//Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const veces = (cadena, texto) => {
  if (typeof cadena === "string") {
    if (typeof texto === "string") {
      let i = 0;
      contador = 0;
      while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
          i++;
          contador++;
        }
      }
      console.log(`La palabra ${texto} se repite ${contador} veces`);
    } else {
      console.log("Verifique que la palabra a buscar sea un String");
    }
  } else {
    console.log("Verifique que la cadena ingresada sea un String");
  }
};

veces("Emiro Emiro Emiro", "Emiro");
