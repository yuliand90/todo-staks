const express = require('express');//se crea libreria express permite desplegar nuestro servidor web
const api = require('./api');//varaible api instancioa del archivo api.js
const port = process.env.PORT || 3000;// puerto de red del servidor web
const app = express();//variable app, se crea instancia de express

const bodyParser = require('body-parser');
app.use(bodyParser.json());//importar bodyparser captura lo del body un string y lo parsea a .json

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});//funcion nos muestra el mensaje del servidor se esta conectando

app.get('/', function (req, res) {//cuando abrimos el navegador nos arroja hola mundo
    res.send("hello world");
});//navegador colocamos ip :3000
app.use('/api', api);//es la ruta en el navegador al final /api