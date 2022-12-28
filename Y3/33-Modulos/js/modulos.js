//se hace importante el uso de la terminación js de la importacion de variables
import { variable1, usuario, password, saludar } from "./variables.js";

import { sumar, restar } from "./aritmetica.js";

console.log("Archivo Modulos!!");

console.log(variable1);
console.log(usuario);
console.log(password);

console.log("");

console.log(sumar(2, 3));
console.log(restar(9, 7));
saludar();
