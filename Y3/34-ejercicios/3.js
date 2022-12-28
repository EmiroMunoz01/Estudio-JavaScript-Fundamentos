// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function arreglo(frase) {
  if (typeof frase === "string") {
    const arr = frase.split(" ");
    console.log(arr);
  } else {
    console.log("Esto no es un String, intente nuevamente");
  }
}

arreglo("Soy Emiro Muñoz Rojas");
arreglo(123);
