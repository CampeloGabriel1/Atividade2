import { Component } from '@angular/core';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produtos: Produtos[] = [
    { id: 1, nome: 'Headset Branco', preco: 150, descricao: 'Headset Branco para escutar músicas', emEstoque: true },
    { id: 2, nome: 'SmartWatch Preto', preco: 300, descricao: 'Relógio para melhor visualização', emEstoque: false },
    { id: 3, nome: 'Caneca Branca', preco: 60, descricao: 'Caneca para bebidas como café, água e chá', emEstoque: true },
    { id: 4, nome: 'Combos de Camisetas', preco: 80, descricao: 'Combos de Camisetas básicas para uso no dia a dia', emEstoque: true },
  ];
}
