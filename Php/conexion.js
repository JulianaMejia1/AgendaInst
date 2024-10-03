//Se llama libreria 
let mysql = require("mysql");

//Se usa metodo (createConn...) para crear un objeto con las propiedades
let conexion = mysql.createConnection({
    host: "localhost",
    database: "mydb",
    user: "root",
    password: ""
});

//Verificacion de conexion
conexion.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
});

//cerrar conexion con metodo end
conexion.end();