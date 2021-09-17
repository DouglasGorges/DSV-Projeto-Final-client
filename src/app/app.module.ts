import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContaCorrenteCadastrarComponent } from './components/views/conta-corrente/conta-corrente-cadastrar/conta-corrente-cadastrar.component';
import { ContaCorrenteListarComponent } from './components/views/conta-corrente/conta-corrente-listar/conta-corrente-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaCorrenteListarComponent,
    ContaCorrenteCadastrarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
