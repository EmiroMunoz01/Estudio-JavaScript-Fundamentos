let mysql = require("mysql");

//creamremos la conexion

let conexion = mysql.createConnection({
  host: "localhost",
  database: "empleados",
  user: "root",
  password: "root",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion exitosa");
  }
});

conexion.query("SELECT * from caja", function (error, results, fields) {
  if (error) {
    throw error;
  }
  results.forEach((result) => {
    console.log(result);
  });
});

conexion.end();
