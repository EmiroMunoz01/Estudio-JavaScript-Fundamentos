const numeros = [1, 2, 3];

//sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

//con destructuracion
const [one, two, three] = numeros;

//*************************************** */

let persona = {
  nombre: "Emiro",
  apellido: "Muñoz",
  edad: 21,
};

let { nombre, apellido, edad } = persona;


