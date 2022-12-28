function contar(palabra) {
  if (typeof palabra === "string") {
    const totalCaracteres = palabra.length;
    console.log(
      `La palabra ${palabra} tiene un total de ${totalCaracteres} caracteres`
    );
  } else {
    console.log("Error, debe ingresar una palabra");
  }
}

contar("Hola");
contar(31312);

//funcion expresada
const contarCaracteres = (palabra) => {
  typeof palabra === "string"
    ? console.log(
        `La palabra ${palabra} tiene un total de ${palabra.length} caracteres`
      )
    : console.log("Error, debe ingresar una palabra");
};

contarCaracteres("Helloo");
