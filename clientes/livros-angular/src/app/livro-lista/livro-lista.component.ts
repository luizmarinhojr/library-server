import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';


@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit{
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService, 
    private servLivros: ControleLivrosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.editoras = this.servEditora.getEditoras();
    await this.servLivros.obterLivros().then((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  excluir = (codigo: String): void => {
    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then((livros: Livro[]) => {
        this.livros = livros;
      })
    });
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
  
}
