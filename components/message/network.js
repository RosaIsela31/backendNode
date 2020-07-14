// Este archivo tendrá las rutas
// Esta capa va a ser la encargada de recibir la petición HTTP, procesar toda la inf y enviarla al controlador

const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200); 
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    })
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

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Error Interno', 500, e)
    });

  res.send('Ok');
});

module.exports = router;