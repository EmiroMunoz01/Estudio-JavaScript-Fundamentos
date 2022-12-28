let cadena = "Mi nombre es Emiro Muñoz Rojas y mi mamá me mima"
//solicita patron y banderas, las banderas son lineas que me van a permitir modificar mi expresion regular
//si no tenemos la bandera g, en la primer coincidencia se va a detener, justo en el inicio, y si hubieran mas coincidencias las ignorara y se quedara con la primera

//la bandera g le dice que busque todas las coincidencias
let expReg = new RegExp("Emiro","g");