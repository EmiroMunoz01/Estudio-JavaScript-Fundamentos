const { response } = require("express");
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

const keys = require("./settings/keys");

app.set("key", keys.key);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

app.listen(3000, () => console.log("Servidor UP en http://localhost:3000"));

app.post("/login", (req, res) => {
  if (req.body.usuario == "admin" && req.body.pass == "12345") {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, app.get("key"), {
      expiresIn: "1d",
    });
    res.json({
      message: "¡AUTENTICACIÓN EXITOSA!",
      token: token,
    });
  } else {
    res.json({
      message: "Usuario y/o password son incorrectas",
    });
  }
});

const verificacion = express.Router();

//lo que hace next es continuar con lo que esta haciendo
verificacion.use((req, res, next) => {
  //una de las verificaciones es el tipo de acceso y el tipo de autorizacion para el token.
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    res.status(401).send({
      error: "Es necesario el token para la autenticación",
    });
    return;
  }
  if (token.startsWith("Bearer")) {
    token = token.slice(7, token.length);
    console.log(token);
  }
  if (token) {
    jwt.verify(token, app.get("key"), (error, decoded) => {
      if (error) {
        return res.json({
          message: "El token no es valido",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

app.get("/info", verificacion, (req, res) => {
  res.json("INFORMACION IMPORTANTE ENTREGADA");
});
