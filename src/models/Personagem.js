const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: true,
  },
  oficio: {
    type: String,
    require: true,
  },
  habilidade: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model(`Personagens`, PersonagemSchema);

module.exports = Personagem;
