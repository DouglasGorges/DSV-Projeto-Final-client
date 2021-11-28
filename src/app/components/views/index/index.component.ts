import { Transacao } from './../../../models/Transacao';
import { Component } from '@angular/core';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  transacoes: Transacao[] = [];

  colunasExibidas: String[] = [
    "descricao",
    "conta",
    "valor",
    "categorias",
    "vencimento",
    "pagamento",
    "editar"
  ];

  constructor(private service: TransacaoService) {}

  ngOnInit(): void {
    this.service.list().subscribe((transacoes) => {
      this.transacoes = transacoes;
    })
  }
}
