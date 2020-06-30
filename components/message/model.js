const mongoose = requiere('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: String,
  date: Date,
})