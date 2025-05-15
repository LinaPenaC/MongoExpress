const mongoose = require('mongoose');
const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  documento: {
    type: Number,
    required: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);