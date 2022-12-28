//esto es nativo de JS
//sabremos la hora y fecha de nuestro pais

let fecha = new Date();
console.log(fecha);
//día del mes
console.log(fecha.getDate());
//el numero representara el día de la semana
console.log(fecha.getDay());

console.log(fecha.getMonth());
//así podremos obtener horas, minutos y segundos

//tenemos metodos para obtener fecha de forma entendible

console.log(fecha.toDateString());

