//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numero = (n) => {
  if (n % 2 === 0) {
    console.log(`El número ${n} es par`);
  } else {
    console.log(`El número ${n} es impar`);
  }
};
numero(2);
numero(3);
numero(4);
