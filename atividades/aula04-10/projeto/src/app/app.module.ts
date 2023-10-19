import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MediaComponent } from './media/media.component';
import { LOCALE_ID } from '@angular/core';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { TelaFilho1Component } from './tela-pai/tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-pai/tela-filho2/tela-filho2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListaClienteComponent,
    CalculadoraComponent,
    PaginaInicialComponent,
    MediaComponent,
    TelaPaiComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    TelaFilho1Component,
    TelaFilho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
