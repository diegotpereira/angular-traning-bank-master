import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

  base_url: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
    // Veirifa se existe arquivo Token
    if (this.authService.isAuthenticated()) {
      // Caso não exista token retirna true

      return true;
    } else {
      // Caso não exista token a página de cpf não é cadastrada
      this.router.navigate(['/acesso-negado']);

      return false;
    }
  }
}
