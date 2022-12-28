//tenemos algunas caracteristicas como los tipos de clases en POO, clases abstractas, los modificadores de acceso, publica, privada, protegida, y que estas caracteristicas impactan en el uso de los atributos y metodos

//En js no podemos crear una clase privada, que una clase tenga atributos o metodos privados significa que solo los podremos utilizar dentro del cuerpo de la clase

//los metodos y atributos privados en JS no existen

//todas las clases que generamos en JS son publicas, por eso no es necesaria la palabra public, porque no existe eso de privado o protegido

//recordemos que las clases no son mas que azucar sintactico

//pero tenemos ciertas caracteristicas que si existen en escritura de clases que nos da JS, una de ellas es los metodos estaticos, un metodo estatico se ´puede ejecutar sin necesidad de instanciar la clase, sin crear el objeto

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
  }
  sonar() {
    console.log("Hago sonidos porque si");
  }
  saludar() {
    console.log(`Hola, mi nombre es: ${this.nombre}`);
  }

  static queEres() {
    console.log(
      "El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo)"
    );
  }

  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

const perro1 = new Animal("firulais", "macho");

perro1.saludar();

//podemos usar la propiedad sin necesitad de usar un objeto, lo hacemos directo desde la clase

Animal.queEres();

//los metodos getters y setters son metodos especiales que nos van a permitir establecer y obtener el valor de un atributo que existe en nuestra clase, pero que como tal a la hora que invoco la creación de la instancia de ese objeto basado en la clase no lo definimos.

//los metodos para modificar u obtener el valor de esa propiedad

//aunque es un metodo obtenedor veamos que JS lo interpreta como una propiedad, y si lo ejecutamos como metodo nos dara error

//lo ejecutaremos como una propiedad, lo imprimimos y nos dice que es un valor null

console.log(perro1.getRaza);

//de esta forma modificamos la raza

perro1.setRaza = "Pincher";

console.log(perro1.getRaza);
console.log(perro1);
