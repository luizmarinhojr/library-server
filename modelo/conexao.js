const banco = require("mongoose");
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

banco
    .connect("mongodb://localhost:27017/", options)
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((error) => console.log(`Erro: ${error}}`));

module.exports = banco;