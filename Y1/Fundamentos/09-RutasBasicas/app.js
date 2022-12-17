//hemos definido express, como tambien hemos definido en que variable lo vamos a trabajar

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('Soy el server de NODEJS y te saludo')
});

//hemos definido otra ruta
app.get("/contacto", function (req, res) {
  res.send('Soy la pagina de contacto')
});

app.listen(3000, function () {
  console.log("Conectado");
});
