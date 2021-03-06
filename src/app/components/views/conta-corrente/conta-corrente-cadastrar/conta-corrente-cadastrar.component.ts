import { Data } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContaCorrente } from 'src/app/models/Conta-Corrente';

import { ContaCorrenteService } from 'src/app/services/conta-corrente.service';

@Component({
  selector: 'app-conta-corrente-cadastrar',
  templateUrl: './conta-corrente-cadastrar.component.html',
  styleUrls: ['./conta-corrente-cadastrar.component.css'],
})
export class ContaCorrenteCadastrarComponent implements OnInit {
  nome!: string;
  saldo!: number;
  ativo!: boolean;
  criadoEm!: Date;

  constructor(private contaCorrenteService: ContaCorrenteService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {

   let contaCorrente: ContaCorrente = {
      nome: this.nome,
      saldoInicial : this.saldo,
      ativo: this.ativo,
      criadoEm: this.criadoEm
    }

    this.contaCorrenteService.create(contaCorrente).subscribe((contaCorrenteCriada) => {
      this.router.navigate([""]);
    });
  }
}
