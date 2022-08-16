// const personagens = [
//   {
//     id: 1,
//     nome: 'Monkey D. Luffy',
//     idade: 19,
//     oficio: 'pirata',
//     habilidade: 'Gomu Gomu no Mi',
//   },
//   {
//     id: 2,
//     nome: 'Roronoa Zoro',
//     idade: 21,
//     oficio: 'pirata',
//     habilidade: 'Estilo de 3 katanas',
//   },
//   {
//     id: 3,
//     nome: 'Sakasuki Akainu',
//     idade: 55,
//     oficio: 'marinha',
//     habilidade: 'Magu Magu no Mi',
//   },
// ];

const Personagens = require('../models/Personagem');

const findAllpersonagensService = async () => {
  const personagens = await Personagens.find();
  return personagens;
};

const findByIdpersonagenservice = async (idParam) => {
  const personagem = await Personagens.findById(idParam);
  return personagem;
};

const createpersonagenservice = async (newpersonagem) => {
  const personagemCreated = await Personagens.create(newpersonagem);
  return personagemCreated;
};

const updatepersonagenservice = async (id, personagemEdited) => {
  const personagemUpdate = await Personagens.findByIdAndUpdate(
    id,
    personagemEdited,
  );
  return personagemUpdate;
};

const deletepersonagenservice = async (id) => {
  return await Personagens.findByIdAndDelete(id);
};

module.exports = {
  findAllpersonagensService,
  findByIdpersonagenservice,
  createpersonagenservice,
  updatepersonagenservice,
  deletepersonagenservice,
};
