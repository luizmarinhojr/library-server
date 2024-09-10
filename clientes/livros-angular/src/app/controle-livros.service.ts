import { Injectable } from '@angular/core';
import { Livro } from './livro';

interface LivroMongo {
  _id: String | null;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: String[];
}

const baseURL = 'http://localhost:3030/livros';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  public async obterLivros(): Promise<Array<Livro>> {
    const response = await fetch(baseURL);
    const livrosMongo: LivroMongo[] = await response.json();
    return livrosMongo.map((livroMongo: LivroMongo) => new Livro(
      livroMongo._id || '',
      livroMongo.codEditora,
      livroMongo.titulo,
      livroMongo.resumo,
      livroMongo.autores
    ));
  }

  async incluir(livro: Livro): Promise<boolean> {
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

  async excluir(codigo: String): Promise<boolean> {
    const response = await fetch(
        `${baseURL}/${codigo}`, 
        { method: 'DELETE' }
    );
    return response.ok;
  }
}

