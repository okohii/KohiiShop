import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  descricao: string = '';


  constructor(
    public carrinhoService: CarrinhoService,
    private produtosService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
