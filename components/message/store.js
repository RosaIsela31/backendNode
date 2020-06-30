// Este archivo tiene toda la lógica de almacenamiento
// Entender la responsabilidad de la capa de almacenamiento
// Primero se va a mockear, luego se añadirá la db real
const list = [];

function addMessage(message) {
  list.push(message);
};

function getMessages() {
  return list;
};

module.exports = {
  add: addMessage,
  list: getMessages,
};