const personagens = [
  {
    id: 1,
    nome: 'Monkey D. Luffy',
    idade: 19,
    oficio: 'pirata',
    habilidade: 'Gomu Gomu no Mi',
  },
  {
    id: 2,
    nome: 'Roronoa Zoro',
    idade: 21,
    oficio: 'pirata',
    habilidade: 'Estilo de 3 katanas',
  },
  {
    id: 3,
    nome: 'Sakasuki Akainu',
    idade: 55,
    oficio: 'marinha',
    habilidade: 'Magu Magu no Mi',
  },
];

const findAllpersonagensService = () => {
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
