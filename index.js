// Llama la librería express
const express = require("express");

// Crea un objeto para llamar a los métodos de la librería
const app = express();

//usar motor de vistas para fusionar html y js
app.set("view engine", "ejs");

// Configuración del puerto
app.listen(3000, function() {
    console.log("Servidor creado en http://localhost:3000");
});
