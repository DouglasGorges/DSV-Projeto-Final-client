import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit
{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void{
    console.log("Deu boa") ;
 }
 Cadastrar() {
   alert(this.Cadastrar);
   console.log("Cadastrado")
 }
 enableProdMode(){
   console.log("Chamado")
 }
}
