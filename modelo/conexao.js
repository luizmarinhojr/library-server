const banco = require("mongoose");
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

// COMO O TRABALHO SOLICITOU
// banco
//     .connect("mongodb://localhost:27017/livraria", options)
//     .then(() => console.log("Conectado ao MongoDB!"))
//     .catch((error) => console.log(`Erro: ${error}}`));


// PARA DEPLOY
const conectarBanco = async () => {
    await banco.connect("mongodb://localhost:27017/livraria", options)
    .then(() => {console.log("Conectado ao MongoDB!");})
    .catch((error) => console.log(`Erro: ${error}}`));;
}

conectarBanco();

module.exports = banco;