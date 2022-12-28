//Estos operadores funcionan agregando dos condiciones, ya sea con el operador logico or o and

//Cortocircuito con OR, cuando el valor de la izquierda en la expresion siempre pueda validar a true es el valor que cargara por defecto

function saludar(nombre) {
  //si nombre no se define dira hola Desconocido
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar();

//el valor es verdadero, pero tomara primero el de la izquiera y evaluara
console.log("Cadena" || "Valor de la derecha");

console.log(null && "Valor de la derecha");
