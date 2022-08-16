const personagensService = require('../services/personagem.service');

const findAllpersonagensController = async (req, res) => {
  const personagens = await personagensService.findAllpersonagensService();

  if (personagens.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum personagem cadastrado!' });
  }

  res.send(personagens);
};

const findByIdpersonagemController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const chosenpersonagem =
    personagensService.findByIdpersonagenservice(idParam);

  if (!chosenpersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenpersonagem);
};

const createpersonagemController = (req, res) => {
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

  const newpersonagem = personagensService.createpersonagenservice(personagem);
  res.status(201).send(newpersonagem);
};

const updatepersonagemController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
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

  const updatedpersonagem = personagensService.updatepersonagenservice(
    idParam,
    personagemEdit,
  );
  res.send(updatedpersonagem);
};

const deletepersonagemController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

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
