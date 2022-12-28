function Vehiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Vehiculo.prototype.sonidoAuto = function () {
  console.log(`Soy un auto, brrrrrrrm!`);
};

function Camioneta(marca, modelo, motor) {
  //manda a llamar el constructor del elemento de la clase padre, la palabra super
  //lo que haremos es crear una variable que colgara del this
  //esta es la clase constructora Animal
  this.super = Vehiculo;
  this.super(marca, modelo);
  this.motor = motor;
}
//Camioneta esta herendando de Vehiculo

Camioneta.prototype = new Vehiculo();
Camioneta.prototype.constructor = Camioneta;

//estamos reescribiendo el metodo
Camioneta.prototype.sonidoAuto = function () {
  console.log("Soy una camioneta");
};

//crearemos un metodo que no existe en la clase Vehiculo
Camioneta.prototype.detalles = function () {
  console.log(`El tamaño del motor es de: ${this.motor}`);
};

const laMamalona = new Camioneta("Toyota", 2020, 1500);

//al imprimir el prototipo no sera Vehiculo, sera Camioneta
console.log(laMamalona)
laMamalona.sonidoAuto()
laMamalona.detalles();
