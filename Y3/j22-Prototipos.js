console.log("")
const perro = {
  nombre: "Kaiser",
  sonar() {
    console.log("Wao wao");
  },
};

const gato = {
  nombre: "Misifus",
  sonar() {
    console.log("Mew mew");
  },
};

console.log(perro);

//generaremos un prototipo para n animales

//crearemos una funcion constructora, la hacemos una sola vez, a partir de ella creamos mas instancias, la funcion en si genera un prototipo vacio

//regla, la primer inicial es en mayusculas

//de esta funcion constructora crearemos un prototipo

//si necesito pasar propiedades, estos iran en los parametros de la misma funcion

function Animal(nombre, genero) {
  //atributos de mi funcion constructora
  this.nombre = nombre;
  this.genero = genero;

  //para que el metodo forme parte del constructor debemos usar tambien el this

  //metodos
  this.sonar = function () {
    console.log("Hago sonidos porque si");
  };
}

//la palabra new me permite crear una nueva instancia, un nuevo objeto del tipo que especificamos


const winipu = new Animal("Winipu", "Macho");



const piglet = new Animal("Piglet", "Macho");
console.log("")


console.log(winipu);

//al nosotros imprimir esto empezara por Animal {...} Pero imprimiendo el objeto del inicio ira directo por las {...} sin nada. No tiene nada porque su prototipo es el objeto, pero con el constructor Animal si, Animal es el prototipo

//tengamos en cuenta que el metodo que tenemos en el constructor sera el mismo para todas sus instancias por ahora, si tenemos 1000 animales sera un problema

//lo ideal es que las funciones constructoras solo tengan los atributos, y los metodos los saquemos de la funcion para pegarlos al prototipo

//funcion constructora donde se asignan los atributos al prototipo, no a la funcion como tal
function Auto(color, marca) {
  this.color = color;
  this.marca = marca;
}

//metodos agregados al prototipo de la funcion constructora
Auto.prototype.marcaVehiculo = function () {
  console.log(`La marca del vehiculo es: ${this.marca}`);
};

//cada vez que generemos una variable del prototipo auto, la funcion solo tiene la asignacion de los atributos, los metodos quedaran solo al prototipo Auto, evitara que las instancias esten duplicando los metodos internamente. Mejoras en rendimiento y uso de memoria a nivel de hardware

const rojo = new Auto("Azul", "Toyota");

rojo.marcaVehiculo();

//dentro del prototipo de la funcion constructora Auto hemos pegado el metodo marcaVehiculo, ahí ya no tendremos metodos duplicados. Los metodos estan asignados al prototipo

//esta es la base de POO en este lenguaje, JS, sigue funcionando de esta forma así existan las clases en JS
