import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      emai: [''],
      telefone: [''],
      endereco: ['']
    });
  }
  cadastro(){
    console.log(this.formCadastro.controls);
  }
}
