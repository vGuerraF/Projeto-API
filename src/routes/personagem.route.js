const route = require('express').Router();
const controllerpersonagens = require('../controllers/personagem.controller');

route.get(
  '/todos-personagens',
  controllerpersonagens.findAllpersonagensController,
);
route.get(
  '/personagem/:id',
  controllerpersonagens.findByIdpersonagemController,
);
route.post('/create', controllerpersonagens.createpersonagemController);
route.put('/update/:id', controllerpersonagens.updatepersonagemController);
route.delete('/delete/:id', controllerpersonagens.deletepersonagemController);

module.exports = route;
