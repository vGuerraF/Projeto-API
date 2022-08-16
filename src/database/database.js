const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://vGuerraF:Esqueciasenha1@cluster0.nqbrmh1.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
