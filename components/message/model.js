// Código para el modelo de nuestra base de datos
// const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// el true indica que siempre tiene que haber un mensaje
const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

// El 1er parametro es la colección en mongo (equivalente a tablas de mySQL)
// El 2do es el esquema
const model = mongoose.model('Message', mySchema);
module.exports = model;