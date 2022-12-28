//desde el 2015 el estandar de JS nos ha dado azucar sintactico, ya podemos escribir clases, así escribamos clases JS por detras procesara prototipos
//las clases no reciben parametros, para poder recibirlos al momento de crear un objeto de este tipo de clase tenemos que usar el metodo constructor

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("Hago sonidos porque si");
  }
  saludar() {
    console.log(`Mi nombre es: ${this.nombre}`);
  }
}

//********************************* */
//para agregar la herencia usamos la palabra extends
class Perro extends Animal {
  constructor(nombre, genero, tamaño) {
    super(nombre, genero);
    this.tamaño = tamaño;
  }
  sonar() {
    console.log("Soy un perro y ladro");
  }
  ladrar() {
    console.log("Wau wau");
  }
}


const mimi = new Animal("mimi", "femenino");
mimi.saludar();


//super es una clase especial en POO que me permite invocar al constructor de la clase del cual herede

//al imprimir nos dira que sigue siendo el mismo prototipo, Animal
console.log(mimi);
mimi.sonar();

const firulais = new Perro("firulais", "macho", "grande");
firulais.sonar();


console.log("********");
//podemos evidenciar que firulais deriba de Perro
console.log(firulais);
firulais.sonar();
