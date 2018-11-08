import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde = 0;
  totalUsuarios: number;
  cargando = true;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde)
                        .subscribe((resp:any) => {
                          console.log(resp);
                          this.totalUsuarios = resp.total;
                          this.usuarios = resp.usuarios;
                          this.cargando = false;
                        });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    console.log(desde);
    if (desde >= this.totalUsuarios) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {

    if (termino.length <= 0) {
      this.cargarUsuarios();
    }
    this.cargando = true;
    this._usuarioService.buscarUsuarios(termino)
          .subscribe((usuarios: Usuario[]) => {
            this.usuarios = usuarios;
            this.cargando = false;
          });
  }

  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this._usuarioService.usuario._id) {
      swal('No puede borrar usuario', 'No se puede borrar a si mismo :P', 'error');
      return;
    }

    // swal({
    //   title: '¿Esta seguro?',
    //   text: 'Esta a punto de borrar a ' + usuario.nombre,
    //   icon: 'warning',
    //   button: ['Cancelar', 'Aceptar'],
    //   dangerMode: true
    // })
    // .then( borrar => {
    //   console.log(borrar);
    // });
  }


}
