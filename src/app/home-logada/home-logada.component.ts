import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalidadesService } from '../modalidades.service';
import { UserService } from '../UserService';

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
    private router: Router,
    private modalidadeService: ModalidadesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro')!);
    this.nameCliente = this.getCadastro['nome'];
    console.log(this.nameCliente);

    this.modalidade = this.modalidadeService.getModalidade();
    console.log(this.modalidade);
  }

  investment(id){
    this.userService.setProduct(id);
      this.router.navigate(['painel-investir']);
  }

}
