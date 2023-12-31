import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MediaComponent } from './media/media.component';
import { TelaFilho1Component } from './tela-pai/tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-pai/tela-filho2/tela-filho2.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ApoliceComponent } from './apolice/apolice.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"calculadora", component: CalculadoraComponent},
  {path:"home", component: HomeComponent},
  {path:"usuario", component: UsuarioComponent},
  {path:"cadastro", component: CadastroComponent},
  {path:"apolice", component: ApoliceComponent},
  {path:"lista-cliente", component: ListaClienteComponent},
  {path:"tela-pai", component: TelaPaiComponent, 
    children: [
      {path:'tela-filho1', component:TelaFilho1Component},
      {path:'tela-filho2', component: TelaFilho2Component},
    ],
  },
  {path: "media", component: MediaComponent},
  {path: "**", component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
