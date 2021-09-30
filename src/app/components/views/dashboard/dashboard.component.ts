import { ContaCorrenteListarComponent } from './../conta-corrente/conta-corrente-listar/conta-corrente-listar.component';
import { ContaCorrente } from './../../../models/Conta-Corrente';
import { ContaCorrenteService } from './../../../services/conta-corrente.service';
import { Component} from '@angular/core';
export interface PeriodicElement {
  desc: string;
  dtop: string ;
  val: number;
  tp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dtop: '12/11/1111', desc: 'Pix recebido do João', val: 1.0079, tp: 'A'},
  {dtop: '22/11/1111', desc: 'Investimento em fundo imobiliario', val: 4.0026, tp: 'D'},
  {dtop: '32/22/1111', desc: 'Pagamento de contas', val: 6.941, tp: 'D'},
  {dtop: '42/11/1111', desc: 'Pagamento de honorario do advogado', val: 9.0122, tp: 'D'},
  {dtop: '52/11/1111', desc: 'Transferencia para carteira trader', val: 10.811, tp: 'D'},
  {dtop: '62/11/1111', desc: 'Pagamento de mensalidade de seviços de stram', val: 12.0107, tp: 'D'},
  {dtop: '72/11/1111', desc: 'Compra de placa de video', val: 14.0067, tp: 'D'},
  {dtop: '82/11/1111', desc: 'Compra de bitcoin', val: 15.9994, tp: 'D'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service: ContaCorrenteService){}
  displayedColumns: string[] = ['dtop', 'desc', 'val', 'tp'];
  dataSource = ELEMENT_DATA;

  ngOnInit():void{
    this.service.list().subscribe(conta =>{
        console.log(conta);
    });
  }
}