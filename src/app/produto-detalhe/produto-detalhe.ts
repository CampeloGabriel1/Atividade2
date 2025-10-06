import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit {
  produtoId: number | null = null;
  produto: Produtos | undefined;

  // Dados simulados (Array de produtos)
  private produtos: Produtos[] = [
    { id: 1, nome: 'Headset Branco', preco: 150, descricao: 'Headset Branco para escutar músicas', emEstoque: true },
    { id: 2, nome: 'SmartWatch Preto', preco: 300, descricao: 'Relógio para melhor visualização', emEstoque: false },
    { id: 3, nome: 'Caneca Branca', preco: 60, descricao: 'Caneca para bebidas como café, água e chá', emEstoque: true },
    { id: 4, nome: 'Combos de Camisetas', preco: 80, descricao: 'Combos de Camisetas básicas para uso no dia a dia', emEstoque: true },
  ];
constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 1. Acessa o 'snapshot' (estado inicial) dos parâmetros da rota
    // e converte o 'id' para número. O '+' converte a string para number.
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.produtoId = +idParam;
      this.carregarDetalhesProduto();
    }
  }

  carregarDetalhesProduto(): void {
    // 2. Simula a busca do produto no array usando o ID
    this.produto = this.produtos.find(p => p.id === this.produtoId);

    // Opcional: Tratar caso o produto não seja encontrado (ID inválido)
    if (!this.produto) {
      console.error(`Produto com ID ${this.produtoId} não encontrado.`);
      // Aqui você poderia redirecionar para uma página 404
    }
  }
}