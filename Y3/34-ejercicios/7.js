//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra) => {
  if (typeof palabra === "string") {
    palabra = palabra.toLowerCase();
    let alrevez = palabra.split("").reverse().join("");

    if (palabra === alrevez) {
      console.log(`La palabra ${palabra} y ${alrevez} es palindroma`);
    } else {
      console.log(`La palabra ${palabra} y ${alrevez} no es palindromo`);
    }
  } else {
    console.log("El parametro debe ser una palabra");
  }
};

palindromo("Emiro");
palindromo("OSo");
