const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const { query } = require('express');

const router = express.Router(); 

let app = express(); 
app.use(bodyParser.json()); 
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.headers);
  response.success(req, res, 'Lista de mensajes');
})

router.post('/message', (req, res) => {
  console.log(req.body);
  if(req.query.error == "ok "){
    response.error(req, res, 'Error simulado', 400)
  }
  response.success(req, res, 'Creado correctamente', 201)
})

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app está escuchando en el puerto 3000');
