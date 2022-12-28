//hacer calculos matematicos especiales, el objeto math es estatico, cada vez que querramos utilizarlo debemos improtar al prototipo

console.log(Math);
console.log(Math.PI);
//metodos clave de entender, de ahí derivan calculos o ejercicios

//valor absoluto de un numero
console.log(Math.abs(-3));

//redondear numeros, aproxima al numero entenero mayor
console.log(Math.ceil(7.2));

//redonder numero, aproxima al numero entero menor
console.log(Math.floor(7.9));

//redondear numero, al numero entero justo
console.log(Math.round(7.4));

//raiz cuadrada
console.log(Math.sqrt(25));

//elevar potencias
console.log(Math.pow(2, 3));

//saber si el numero es positivo, negativo o cero

console.log(Math.sign(-3));

//metodo para obtener un valor aleatorio con un rango entre 0 y 1

console.log(Math.random())

//necesitamos un numero aleatorio entre 0 y 1000, ademas redondeamos el valor
console.log(Math.round(Math.random()*1000))

