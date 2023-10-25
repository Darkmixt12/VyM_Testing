'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const creditoSchema = Schema({
    creditoId: Number,
    client : Number,
    agente : String,
    status : String,
    description : String,
    creditoRegDia_db : String,
    location : String
});

module.exports = mongoose.model('credito', creditoSchema);