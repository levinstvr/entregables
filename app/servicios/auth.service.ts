import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class AuthService{

  usuarioLogeado: any;
  sesionIniciada = false

  constructor(private httpClient: HttpClient) { }


  CrearUsuario(newUsuario: User): Observable<Users>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  listarUsuarios(): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo:any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  IsExiste(){
    if (this.IsLoggedIn()){
      return true
    }
    else{
      return false
    }
  }

  getDatosUsuarioLogeado(): any {
    return this.usuarioLogeado;
  }

  // Agregar una función para establecer los datos del usuario logeado
  setDatosUsuarioLogeado(datosUsuario: any) {
    this.usuarioLogeado = datosUsuario;
  }





  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<Users>{
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }


  
  



}
