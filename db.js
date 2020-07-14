// Contiene lo necesario para gestionar la conexión a la API
const db = require('mongoose');

db.Promise = global.Promise;

// const url = 'mongodb://Ol1v3ratomico:Ol1v3ratomico@cluster0-shard-00-00.lk1m6.mongodb.net:27017,cluster0-shard-00-01.lk1m6.mongodb.net:27017,cluster0-shard-00-02.lk1m6.mongodb.net:27017/project0?ssl=true&replicaSet=atlas-30fk2e-shard-0&authSource=admin&retryWrites=true&w=majority';

async function connect(url) {
  await db.connect(url, { useNewUrlParser: true,
    useUnifiedTopology: true })
      .then(() => console.log('[db] conectada con éxito'))
      .catch(err => console.error('[db]', err));
};

module.exports = connect;

