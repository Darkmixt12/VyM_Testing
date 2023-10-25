'use strict';
/* importar moment para poder usar las fechas */
const moment = require('moment/moment');
/* controladores podriamos decir que es la funcionalidad de la web GET, POST, DELETE, UPDATE ETC ETC ETC */
var Facturas = require('../models/facturas') /* importamos el modelo  que es una referencia a la base de datos */;

const NotaCredito = require('../models/credito');

var controller = {
    /* METODO PARA GUARDAR DATOS EN LA BASE DE DATOS */
    facturaSaveCheck: async function (req, res) {
        var factura = new Facturas();
        var params = req.body;
        let hora = moment().format('LT');
        let dia = moment().format('L');

        factura.facturasId = params.facturasId;
        factura.numPedido = params.numPedido;
        factura.client = params.client;
        factura.fechaReg = params.fechaReg;
        factura.fechaRegHora_db = hora;
        factura.fechaRegDia_db = dia;
        factura.pushMoney = params.pushMoney
        factura.nomAlistador = params.nomAlistador;
        factura.nomChequeador = params.nomChequeador;
        factura.fechaAlistado = params.fechaAlistado;
        factura.fechaChequeo = params.fechaChequeo;
        factura.numMesa = params.numMesa;
        factura.horaChequeo = params.horaChequeo
        factura.agente = params.agente;
        factura.push50 = params.push50
        factura.push100 = params.push100
        factura.push1000 = params.push1000
        factura.push5000 = params.push5000
        factura.push500 = params.push500


        let resultNumPedido = await Facturas.find({numPedido: params.numPedido})
        let resultFacturas = await Facturas.find({facturasId: params.facturasId});
        if(resultFacturas.length > 0 || resultNumPedido.length >0) {
            return res.status(500).send({message: 'Numero de factura ya utilizado'})
        }
        
        await factura.save();
        console.log(factura);
        return res.status(200).send(factura)
    },

    /* METODO PARA MOSTRAR DATOS DE LA BASE DE DATOS */
    getFacturasInfo: async function (req, res) {
        const {id} = req.params /* trae la id de la base de datos */
    
        try {
        let ListFactura = await Facturas.findById(id);
        console.log(id);
            return res.status(200).send({ListFactura})
        }catch(err) {
            return res.status(500).send({message: 'Factura no encontrada'})
        }

    },

    getCreditosInfo: async function (req, res) {
        const {id} = req.params 
        try{
            let credito = await NotaCredito.findById(id);
            console.log(id);
            return res.status(200).send({credito})
        }catch(err) {
            return res.status(500).send({message: 'No se encontro la nota de credito'})
        }
            
    },

    getCreditosList: async function(req,res) {
        try{
            let creditosInfo = await NotaCredito.find({}).sort('creditoId');
                return res.status(200).send({creditosInfo})

        }catch(err){
            return res.status(500).send({message: 'error al cargar las notas de credito'})
        }
    },

    /* LANZAR UN LISTADO DE TODAS LAS FACTURAS EN LA BASE DE DATOS */
    getFacturaList: async function(req, res) {
        try{
        let facturasInfo = await Facturas.find({}).sort('facturasId');
            return res.status(200).send({facturasInfo})
        }catch(err) {
            return res.status(500).send({message: 'Error al conectar con la base de'})
        }
        
    },
    /* ACTUALIZAR DATOS DE LA BASE DE DATOS */
    updateFactura: async function (req, res){
        let facturaId = req.params.id;
        let update = req.body;
        console.log(req.params.facturaId)
        try{
            let facturaUpdated = await Facturas.findByIdAndUpdate(facturaId, update, {new:true}).exec();
            return res.status(200).send({factura: facturaUpdated})
        }catch(err){
            return res.status(500).send({message: 'Ninguna factura esta relacionada a ese ID'})
        }
        
    },

    updateCredito: async function (req, res){
        let creditoId = req.params.id;
        let update = req.body;
        console.log(req.params.creditoId)
        try{
            let creditoUpdated = await NotaCredito.findByIdAndUpdate(creditoId, update, {new:true}).exec();
            return res.status(200).send({credito: creditoUpdated})
        }catch(err){
            return res.status(500).send({message: 'Niguna nota de credito esta relacionada a ese numero de ID'})
        }
    },
    /* ELIMINAR FACTURAS DE LA BASE DE DATOS */
    deletedFactura: async function (req, res) {
        let facturaId = req.params.id;

        try{
        let facturasDeleted = await Facturas.findByIdAndRemove(facturaId).exec();
            return res.status(200).send({factura: facturasDeleted})
        }catch(err){
                res.status(500).send({message: err.message})
            }
    
    },

    ////////////////////////////////////////// CONTROLADORES PARA LA APLICACION DE NOTAS DE CREDITO ////////////////////////////////////////////////////////////////////////////////

    creditoSaveCheck: async function (req, res) {
        var credito = new NotaCredito();
        var params = req.body;
        
        let dia = moment().format('L');
        
        

        credito.creditoId = params.creditoId;
        credito.client = params.client;
        credito.status = params.status;
        credito.agente = params.agente
        credito.description = params.description;
        credito.location = params.location;
        credito.creditoRegDia_db = dia;


        let resultCredito = await NotaCredito.find({creditoId: params.creditoId})
        if(resultCredito.length > 0){
            return res.status(500).send({message: 'Numero de nota de credito ya utilizado'})
        }else{
            await credito.save();
            console.log(credito);
            return res.status(200).send(credito)
        }
    },

    deletedCredito: async function (req, res) {
        let creditoId = req.params.id;

        try{
        let creditoDeleted = await NotaCredito.findByIdAndRemove(creditoId).exec();
            return res.status(200).send({credito: creditoDeleted})
        }catch(err){
                res.status(500).send({message: err.message})
            }
    
    },


}

module.exports = controller;


