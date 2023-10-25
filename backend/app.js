// aqui esta el servidor con node js y express es el motor de la aplicacion porque nos va a permitir un tema de rutas y recibir peticiones https y trabajar con el protocolo //
'use strict'
/* Configuracion basica para crear el servidor */


var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors') /* libreria para entrar desde otro dominio */



var app = express();
const whiteList = ['http://localhost:4200']
//['http://192.1.1.218:4200'];


/* RUTAS */


var project_routes = require('./routes/project');

/* MIDDLEWARE son nada mas que una capa que se ejecuta antes de ejecutar la accion de un controlador*/
app.use(bodyParser.urlencoded({ extended:false})) /* metodo para convertir cualquier objeto que reciba en JSON */
app.use(bodyParser.json());
app.use(cors({
    origin: whiteList
}))

/* CONFIGURAR CABECERAS Y CORS */
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin: *'); // al publicar la web cambiar el asterisco por la URL //
    res.set('Access-Control-Request-Private-Network: true');
    res.set('Access-Control-Allow-Private-Network: true');
    res.set('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.set('Allow :GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', project_routes) /* con esto todas las rutas van a llevar /api antes de el nombre de la ruta */

/* EXPORTAR */
module.exports = app;

/* para terminar de crear el servidor nos vamos a index.js y agregar la creacion del servidor */