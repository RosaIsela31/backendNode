const express = require('express');
const bodyParser = require('body-parser');
// const { query } = require('express');
const db = require('./db');

db('mongodb://Ol1v3ratomico:Ol1v3ratomico@cluster0-shard-00-00.lk1m6.mongodb.net:27017,cluster0-shard-00-01.lk1m6.mongodb.net:27017,cluster0-shard-00-02.lk1m6.mongodb.net:27017/project0?ssl=true&replicaSet=atlas-30fk2e-shard-0&authSource=admin&retryWrites=true&w=majority')

// const router = require('./components/message/network')
const router = require('./network/routes');

let app = express(); 
app.use(bodyParser.json()); 
// app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app está escuchando en el puerto 3000');
