const personagensService = require('../services/personagem.service');
const mongoose = require('mongoose');

const findAllpersonagensController = async (req, res) => {
  const personagens = await personagensService.findAllpersonagensService();

  if (personagens.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum personagem cadastrado!' });
  }

  res.send(personagens);
};

const findByIdpersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const chosenpersonagem = await personagensService.findByIdpersonagenservice(
    idParam,
  );

  if (!chosenpersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenpersonagem);
};

const createpersonagemController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.idade ||
    !personagem.oficio ||
    !personagem.habilidade
  ) {
    return res
      .status(400)
      .send({ message: 'Preencha todo o objeto do personagem!' });
  }

  const newpersonagem = await personagensService.createpersonagenservice(
    personagem,
  );
  res.status(201).send(newpersonagem);
};

const updatepersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const personagemEdit = req.body;

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.idade ||
    !personagemEdit.oficio ||
    !personagemEdit.habilidade
  ) {
    return res
      .status(400)
      .send({ message: 'Preencha todo o objeto do personagem!' });
  }

  const updatedpersonagem = await personagensService.updatepersonagenservice(
    idParam,
    personagemEdit,
  );
  res.send(updatedpersonagem);
};

const deletepersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  await personagensService.deletepersonagenservice(idParam);

  res.send({ message: 'personagem deletada com sucesso!' });
};

module.exports = {
  findAllpersonagensController,
  findByIdpersonagemController,
  createpersonagemController,
  updatepersonagemController,
  deletepersonagemController,
};
