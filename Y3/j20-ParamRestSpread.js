function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2, 3));

//operador de propagación, cuando una expresion la tengamos que expandir para guardar multiples argumentos lo podamos hacer

//tenemos un arreglo con x elementos, pero en cierto momento recibimos ciertos parametros, en lugar de estar haciendo concatenaciones o push a nuestro arreglo simplemente agregamos con el spread operator.
//el operador de propagación se puede estar ejecutando en cualquier sentencia del codigo

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

//debemos crear un tercer 
//arreglo a partir de estos 
//dos arreglos

const arr3 = [...arr1, ...arr2];

console.log(arr3)


