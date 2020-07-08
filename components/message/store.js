// Este archivo tiene toda la lógica de almacenamiento

const db = require('mongoose');
const Model = require('./model');

const url = 'mongodb://Ol1v3ratomico:Ol1v3ratomico@cluster0-shard-00-00.lk1m6.mongodb.net:27017,cluster0-shard-00-01.lk1m6.mongodb.net:27017,cluster0-shard-00-02.lk1m6.mongodb.net:27017/project0?ssl=true&replicaSet=atlas-30fk2e-shard-0&authSource=admin&retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(url, { useNewUrlParser: true,
  useUnifiedTopology: true })
    .then(() => console.log('[db] conectada con éxito'))
    .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
};

async function getMessages() {
  const messages = await Model.find();
  return messages;
};

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
};