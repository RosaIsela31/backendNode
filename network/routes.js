// este es el archivo para el router
// se va a crear una función para crear todas las rutas
// se necesita del servidor de express para añadir todas las rutas

const express = require('express');
const message = require('../components/message/network');

const routes = function(server) {
  server.use('/message', message)
};

module.exports = routes;