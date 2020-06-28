const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router(); 

let app = express(); 
app.use(bodyParser.json()); 
app.use(router);

// Haciendo un get 
router.get('/message', (req, res) => {
  res.send('Lista de mensajes');
})

router.delete('/message', (req, res) => {
  console.log(req.body);
  res.send('Mensaje añadido correctamente');
})
// app.use('/', (req, res) => { /
//     res.send('Hola')
// });

app.listen(3000);
console.log('La app está escuchando en el puerto 3000');
