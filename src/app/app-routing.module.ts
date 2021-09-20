import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContaCorrenteListarComponent } from './components/views/conta-corrente/conta-corrente-listar/conta-corrente-listar.component';
import { ContaCorrenteCadastrarComponent } from './components/views/conta-corrente/conta-corrente-cadastrar/conta-corrente-cadastrar.component';

const routes: Routes = [
  {
    path: "contaCorrente/create",
    component: ContaCorrenteCadastrarComponent
  },
  {
    path: "contaCorrente/list",
    component: ContaCorrenteListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}