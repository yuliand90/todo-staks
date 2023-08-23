const express = require('express');//se crea libreria express permite desplegar nuestro servidor web
const port = process.env.PORT || 3000;// puerto de red del servidor web
const app = express();//variable app, se crea instancia de express

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});//funcion nos muestra el mensaje del servidor se esta conectando

app.get('/', function (req, res) {//cuando abrimos el navegador nos arroja hola mundo
    res.send("hello world");
});//navegador colocamos ip :3000