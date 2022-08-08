const personagensService = require('../services/personagem.service');

const findAllpersonagensController = (req, res) => {
  const personagens = personagensService.findAllpersonagensService();
  res.send(personagens);
};

const findByIdpersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenpersonagem = personagensService.findByIdpersonagenservice(idParam);
  res.send(chosenpersonagem);
};

const createpersonagemController = (req, res) => {
  const personagem = req.body;
  const newpersonagem = personagensService.createpersonagenservice(personagem);
  res.send(newpersonagem);
};

const updatepersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  const personagemEdit = req.body;
  const updatedpersonagem = personagensService.updatepersonagenservice(idParam, personagemEdit);
  res.send(updatedpersonagem);
};

const deletepersonagemController = (req, res) => {
  const idParam = req.params.id;
  personagensService.deletepersonagenservice(idParam);
  res.send({ message: 'personagem deletada com sucesso!' });
};

module.exports = {
  findAllpersonagensController,
  findByIdpersonagemController,
  createpersonagemController,
  updatepersonagemController,
  deletepersonagemController,
};
