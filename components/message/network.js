// Este archivo tendrá las rutas
// Esta capa va a ser la encargada de recibir la petición HTTP, procesar toda la inf y enviarla al controlador

const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', (req, res) => {
  console.log(req.headers);
  response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, 'Error en el controlador')
    });
});

module.exports = router;