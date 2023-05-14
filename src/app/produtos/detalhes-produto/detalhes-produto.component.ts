import { NotificacaoService } from './../../notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private ProdutosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.ProdutosService.getOne(produtoId);
    console.log(produtoId)
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
