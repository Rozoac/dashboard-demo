import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  ingresar(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    const usuario = new Usuario(null, formulario.value.email, formulario.value.password);
    this._usuarioService.login(usuario, formulario.value.recuerdame)
        .subscribe(resp=> this.router.navigate(['/dashboard']));
    }

  // dashboard(){
  //   this.router.
  // }

}
