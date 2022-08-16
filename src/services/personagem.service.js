const Personagens = require('../models/Personagem');

const findAllpersonagensService = async () => {
  const personagens = await Personagens.find();
  return personagens;
};

const findByIdpersonagenservice = (idParam) => {
  return personagens.find((personagem) => personagem.id == idParam);
};

const createpersonagenservice = (newpersonagem) => {
  const newId = personagens.length + 1;
  newpersonagem.id = newId;
  personagens.push(newpersonagem);
  return newpersonagem;
};

const updatepersonagenservice = (id, personagemEdited) => {
  personagemEdited['id'] = id;
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  personagens[personagemIndex] = personagemEdited;
  return personagemEdited;
};

const deletepersonagenservice = (id) => {
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  return personagens.splice(personagemIndex, 1);
};

module.exports = {
  findAllpersonagensService,
  findByIdpersonagenservice,
  createpersonagenservice,
  updatepersonagenservice,
  deletepersonagenservice,
};
