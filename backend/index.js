'use strict'

var mongoose = require('mongoose') // importar modulo de mongoose //
var port = 3700; /* puerto que va a tener nuestro servidor */
var app = require('./app'); /* archivo extraido de app.js */
const hbs =require('hbs')

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://0.0.0.0:27017/Facturas-Page') // crear la conexion con la base de datos en este caso FACTURAS-PAGE //
mongoose.connect('mongodb://localhost:27017/Facturas-Page')
.then(()=> {
        console.log('Conexion con la base de datos establecida Facturas-Page...');

        //Creacion del Servidor
        app.listen(port, () => {
            console.log('SERVER esta corriendo en Localhost:3700');
        })
    })
    .catch(err => console.log(err));