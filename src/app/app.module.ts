import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { AuthService } from 'auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { LoginComponent } from './login/login.component';
import { ModalNotCadastroComponent } from './modal-not-cadastro/modal-not-cadastro.component';
import { InvestirComponent } from './investir/investir.component';
import { PainelInvestirComponent } from './painel-investir/painel-investir.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent,
    AcessoNegadoComponent,
    CadastroConcluidoComponent,
    LoginComponent,
    ModalNotCadastroComponent,
    InvestirComponent,
    PainelInvestirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
