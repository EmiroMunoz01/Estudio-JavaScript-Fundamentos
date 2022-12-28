//cuando crearmos una funcion expresada, una funcion expresada se genera cuando a una variable le asignamos el valor de una funcion anonima

//funcion declarada

//cuando tengo una funcion declarada la invocacion puede ser incluso antes de declarar la función

function saludar1() {
  console.log("Función declarada");
}

//funcion no declarada, es una función expresada,

const saludar = function () {
  console.log("Hola Emiro");
};

saludar();

//una arrow function es simplemete quitar la palabra function y entre el parentesis y la llave usar =>

//cuando tenemos una sola linea podemos omitir las llaves

const saludarFlecha = () => console.log("Hola Emiro");

saludarFlecha();

//para recibir parametros los colocamos en el parentesis

//las funciones flecha tienen un return explicito, así como nos evitamos escribir la palabra function tambien nos ahorramos colocar la palabra return

const saludarFlecha1 = (nombre) => console.log(`Hola ${nombre}`);

const sumar = (a, b) => a + b;
//****************************** */
const numeros = [1, 2, 3, 4, 5];
//esto lo podemos transformar a una función flecha

numeros.forEach(function (el, index) {
  console.log(`El elemento ${el} esta en la posición ${index}`);
});

//tenemos lo siguiente

numeros.forEach((el, index) =>
  console.log(`El elemento ${el} esta en la posición ${index}`)
);

//
//al usar el this dentro de una función dentro de un objeto tenemos por pantalla los elementos que contiene el objeto que contiene a la funcion

const gato = {
  nombre: "Pirulo",
  //al nosotros usar esto así, nos arrojara los elementos del objeto
  maullar: function () {
    console.log(this);
  },
  //al usar la funcion en formato flecha, arropara el contexto global, ya no imprimira los elemetos del objeto, sino los elementos del DOM de la ventana.

  //por ello se debe tener en cuenta el declarar objetos literales, porque podemos tener este pequeño problema

  //la funcion normal respeta la función en donde esta, pero con la flecha no respeta este parametro, sale derecho a usar el this pero en el contexto global, se salta el contexto del objeto para salir al contexto global
  maullar1: () => {
    console.log(this);
  },
};

gato.maullar1();

//pero tenemos una forma en que respeta la regla del contexto, y esto es usando un objeto literal, esto lo logramos así:

const caballo = {
    nombre: "Pirulo",
    comer(){
      console.log(this)
    }
}
  
caballo.comer();