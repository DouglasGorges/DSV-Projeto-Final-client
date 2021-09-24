import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCorrenteListarComponent } from './components/views/conta-corrente/conta-corrente-listar/conta-corrente-listar.component';
import { ContaCorrenteCadastrarComponent } from './components/views/conta-corrente/conta-corrente-cadastrar/conta-corrente-cadastrar.component';
import { TesteComponent } from './components/views/teste/teste.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "contaCorrente/create",
    component: ContaCorrenteCadastrarComponent
  },
  {
    path: "contaCorrente/list",
    component: ContaCorrenteListarComponent
  },
  {
    path: "teste",
    component: TesteComponent
  }
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}