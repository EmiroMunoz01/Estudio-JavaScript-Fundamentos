//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero) => {
  if (numero === 0) return console.log("El número no puede ser 0");
  if (numero === 1) return console.log("El número no puede ser 1");
  if (numero < 0) return console.log("El número no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  if (divisible === true) {
    console.log(`El numero ${numero} no es primo`);
  } else {
    console.log(`El numero ${numero} SI es primo`);
  }
};

numeroPrimo(2);
numeroPrimo(10);
numeroPrimo(0);
