import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';

const routes: Routes = [

  {
    path: '', component: ContentComponent
  },

  {
    path: 'cadastro-clientes', component: CadastroClientesComponent
  },

  {
    path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]
  },

  {
    path: 'acesso-negado', component: AcessoNegadoComponent
  },

  {
    path: 'cadastro-concluido', component: CadastroConcluidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
