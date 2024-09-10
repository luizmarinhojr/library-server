import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: String | null;
    codEditora: Number;
    titulo: String;
    resumo: String;
    autores: String[];
}

class ControleLivros {

    public async obterLivros() {
        const response = await fetch(baseURL);
        const livrosMongo: LivroMongo[] = await response.json();
        return livrosMongo.map(livro => ({
            codigo: livro._id,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        }));
    }

    async incluir(livro: Livro) {
        const livroMongo: LivroMongo = {
          _id: null,
          codEditora: livro.codEditora,
          titulo: livro.titulo,
          resumo: livro.resumo,
          autores: livro.autores
        };
        const response = await fetch(baseURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(livroMongo)
        });
        return response.ok;
    }

    async excluir(codigo: String) {
        const response = await fetch(
            `${baseURL}/${codigo}`, 
            { method: 'DELETE' }
        );
        return response.ok;
    }
}

export default ControleLivros;

