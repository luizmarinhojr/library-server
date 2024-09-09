const Livro = require("./livro-schema");

const obterLivros = async () => {
    try {
        return await Livro.find();
    } catch(error) {
        console.log(`Erro ao obter os livros: ${error}`)
    }
}

const incluir = async (livro) => {
    try {
        return await Livro.create(livro);
    } catch(error) {
        console.log(`Erro ao incluir um novo livro: ${error}`)
    }
}

const excluir = async (codigo) => {
    try {
        return await Livro.deleteOne({ _id: codigo });
    } catch(error) {
        console.log(`Erro ao excluir livro: ${error}`)
    }
}

module.exports = {obterLivros, incluir, excluir}