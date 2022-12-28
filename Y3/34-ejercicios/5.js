//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".



const reversa = (palabra) =>{
    if (typeof palabra === "string"){
        let arrayPalabras = palabra.split("");
        console.log(arrayPalabras.reverse().join(""));
    }else{
        console.log(
            "El primer parametro debe ser una palabra, y el segundo debe ser un número, verifique nuevamente"
          );
    }
  
}

reversa("Emiro Muñoz")