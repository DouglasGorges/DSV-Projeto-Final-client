import { FooterComponent } from './components/views/footer/footer.component';
import { MenuComponent } from './components/views/menu/menu.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCorrenteListarComponent } from './components/views/conta-corrente/conta-corrente-listar/conta-corrente-listar.component';
import { ContaCorrenteCadastrarComponent } from './components/views/conta-corrente/conta-corrente-cadastrar/conta-corrente-cadastrar.component';

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
    path: "menu",
    component: MenuComponent
  },
  {
    path: "footer",
    component: FooterComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}