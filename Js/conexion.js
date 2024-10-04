// Importa el módulo 'mysql'
const mysql = require("mysql");

// Configura los detalles de la conexión
const conexion = mysql.createConnection({
    host: "localhost",
    database: "mydb", 
    user: "root", 
    password: ""
});

// Intenta conectar a la base de datos
conexion.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
});

export default conexion;

//Se cierra conexion
//conexion.end();

