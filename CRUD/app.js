let http = require("http");
// de esta forma le estamos diciendo a node que necesitamos le modulo http, que ya lo incluye node, acudimos a el mediante el uso de la variable http, si colocamos http. nos mostrara todos los metodos del modulo http

//usaremos createServer para crear nuestro servidor, lo asignamos a una variable llamada servidor

let servidor = http.createServer(function (peticion, respuesta) {
  respuesta.writeHead(200, { "Content-type": "text/html" });
  respuesta.write("<h3>Servidor basico con Node.js</h3>");
  console.log("Estamos haciendo una peticion web");
  respuesta.end();
});

//le estamos indicando en que servidor nos va a escuchar el servidor, usaremos el 3000
servidor.listen(3000);
console.log("Ejecutando un server local con node.js");
