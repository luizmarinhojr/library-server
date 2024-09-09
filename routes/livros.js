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