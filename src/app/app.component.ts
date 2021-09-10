import { Produto } from './models/Produto';
import { ProdutoService } from './services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.list().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }
}
