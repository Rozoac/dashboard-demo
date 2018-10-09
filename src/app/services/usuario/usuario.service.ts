import { Injectable } from "@angular/core";
import { Usuario } from "../../../models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";
import { map } from "rxjs/operators";
import swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  constructor(public http: HttpClient) {}

  // ==============================================================
  // Login  -->
  // ==============================================================
  login(usuario: Usuario, recordar: boolean = false) {
    let url = URL_SERVICIOS + "/login";
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal("Login correcto", `Bienvenido ${resp.usuario.nombre}`, "success");
        localStorage.setItem("id", resp.id);
        localStorage.setItem("token", resp.token);
        localStorage.setItem("usuario", JSON.stringify(resp.usuario));
        return true;
      })
    );
  }

  // ==============================================================
  // Crear Usuario  -->
  // ==============================================================

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario";
    return this.http.post(url, usuario).pipe(
      map((res: any) => {
        swal("Usuario creado", usuario.email, "success");
      })
    );
  }
}
