import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {

  getCadastro;
  nameCliente;
  modalidade;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro')!);
    this.nameCliente = this.getCadastro['nome'];

    console.log(this.nameCliente);

    //this.modalidade = this.modalidadeService.getModalidade();

    console.log(this.modalidade);
  }

  investment(id){
this.router.navigate(['painel-investir']);
  }

}
