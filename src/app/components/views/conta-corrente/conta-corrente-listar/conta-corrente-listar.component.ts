import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContaCorrente } from 'src/app/models/Conta-Corrente';
import { ContaCorrenteService } from 'src/app/services/conta-corrente.service';

@Component({
  selector: 'app-conta-corrente-listar',
  templateUrl: './conta-corrente-listar.component.html',
  styleUrls: ['./conta-corrente-listar.component.css']
})
export class ContaCorrenteListarComponent implements OnInit {

  contasCorrentes: ContaCorrente[] = [];

  constructor(private contaCorrenteService: ContaCorrenteService, private router2 : Router) {}
 
  ContaCorrenteCadastrar(): void {
    this.router2.navigate(["contaCorrente/create"]);
    };
  ngOnInit(): void {
    this.contaCorrenteService.list().subscribe((contasCorrentes) => {
      this.contasCorrentes = contasCorrentes;
      console.log(contasCorrentes);

    });
  }

}
