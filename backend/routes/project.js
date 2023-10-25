/* RUTAS DE LA APLICACION WEB */
'use strict'

var express = require('express')
var ProjectController = require('../controllers/data.js')

var router = express.Router();

router.get('/facturas/:id', ProjectController.getFacturasInfo) /* si quiero que el parametro de id sea opcional es id? */
router.get('/facturas-list', ProjectController.getFacturaList)
router.put('/facturas-updated/:id', ProjectController.updateFactura)
router.delete('/facturas-deleted/:id', ProjectController.deletedFactura)
router.post('/facturas-save-check', ProjectController.facturaSaveCheck)
router.post('/credito-save-check', ProjectController.creditoSaveCheck)
router.get('/creditos-list', ProjectController.getCreditosList)
router.get('/credito/:id', ProjectController.getCreditosInfo)
router.put('/creditos-updated/:id', ProjectController.updateCredito)
router.delete('/creditos-deleted/:id', ProjectController.deletedCredito)
module.exports = router;

/* cargar esta configuracion en el archivo de rutas app.js */