//objetos literales, nueva forma de escribir atributos y metodos, como tambien asignarlos



const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("wow wow");
  },
};

console.log(perro);
perro.ladrar();

//************************************ */

//prestar atencion a la forma de asignar las variables existentes

let nombre = "Emiro";
let edad = 21;

const dog = {
  nombre,
  edad,
  speak() {
    console.log("I'm a dog very good");
  },
};

