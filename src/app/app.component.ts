import { ContaCorrente } from './models/Conta-Corrente';
import { ContaCorrenteService } from './services/conta-corrente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  contasCorrentes: ContaCorrente[] = [];

  constructor(private contaCorrenteService: ContaCorrenteService) {}

  ngOnInit(): void {
    this.contaCorrenteService.list().subscribe((contasCorrentes) => {
      this.contasCorrentes = contasCorrentes;
      console.log(this.contasCorrentes);
    });
  }
}
