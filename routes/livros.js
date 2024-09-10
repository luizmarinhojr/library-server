const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros =  await obterLivros();
        res.status(200).json(livros);
    } catch(error) {
        console.log(`Erro em obter os livros: ${error}`)
    }
})

router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await incluir(livro);
        res.status(201).json({mensagem: "Inclusão efetuada"});
    } catch(error) {
        console.log(`Erro ao cadastrar novo livro: ${error}`);
    }
})

router.delete('/:id', async (req, res) => {
    const codigo = req.params.id;
    try {
        await excluir(codigo)
        res.status(200).json({mensagem: "Livro excluído com sucesso"})
    } catch(error) {
        console.log(`Erro ao cadastrar novo livro: ${error}`);
    }
})

module.exports = router;