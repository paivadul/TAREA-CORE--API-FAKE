//LLAMO A LA BIBLIOTECA EXPRESS Y FAKER
const express = require("express");
const routesFake = require("./routes/routesFake");

//INSTANCIA DE EXPRESS Y FAKER
const app = express();
const port = 8080;

//PERMITE PODER LEER EN UN FORMATO EL BODY
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use('/api', routesFake) //Ruta api: Principal. Contiene rutas hijos

// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );