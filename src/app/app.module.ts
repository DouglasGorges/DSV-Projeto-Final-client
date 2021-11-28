import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/views/footer/footer.component';
import { MenuComponent } from './components/views/menu/menu.component';
import { IndexComponent } from './components/views/index/index.component';
import { NubankListarComponent } from './components/views/nubank/nubank-listar/nubank-listar.component';
import { NubankCadastrarComponent } from './components/views/nubank/nubank-cadastrar/nubank-cadastrar.component';
import { ContaCorrenteCadastrarComponent } from './components/views/conta-corrente/conta-corrente-cadastrar/conta-corrente-cadastrar.component';
import { ContaCorrenteListarComponent } from './components/views/conta-corrente/conta-corrente-listar/conta-corrente-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    FooterComponent,
    NubankListarComponent,
    NubankCadastrarComponent,
    ContaCorrenteListarComponent,
    ContaCorrenteCadastrarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
