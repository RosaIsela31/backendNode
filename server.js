const express = require('express');
const bodyParser = require('body-parser');
// const { query } = require('express');

// const router = require('./components/message/network')
const router = require('./network/routes');

let app = express(); 
app.use(bodyParser.json()); 
// app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app está escuchando en el puerto 3000');
