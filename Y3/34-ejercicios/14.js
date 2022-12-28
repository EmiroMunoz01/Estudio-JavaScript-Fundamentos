//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto, descuento) => {
  const total = monto - monto * (descuento / 100);
  console.log(`El total a pagar es de: $${total}`);
};
descuento(1000, 10);
