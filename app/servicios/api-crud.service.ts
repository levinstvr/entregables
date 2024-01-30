import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocente, IDocentes, Users, User, IPalabra, IPalabras } from '../pages/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {
 

  constructor(private httpclient:HttpClient) { }

  listarDocentes(): Observable<IDocentes>{
    return this.httpclient.get<IDocentes>(`${environment.apiUrl}/docentes`);
  }
  CrearDocente(newDocente: IDocente): Observable<IDocente>{
    return this.httpclient.post<IDocentes>(`${environment.apiUrl}/docentes`, newDocente);
  }

  BuscarDocenteId(id:number):Observable<IDocentes>{
    return this.httpclient.get<IDocentes>(`${environment.apiUrl}/docentes/?id=${id}`);
  }

  ActualizarDocente(docente:any):Observable<IDocentes>{
    return this.httpclient.put<IDocentes>(`${environment.apiUrl}/docentes/${docente.id}`, docente);
  }

  EliminarDocente (docente:any): Observable<IDocentes>{
    return this.httpclient.delete<IDocentes>(`${environment.apiUrl}/docentes/${docente.id}`);
  }

  CrearPalabra(newPalabra: IPalabra): Observable<IPalabra> {
    const palabraConFecha = {
      ...newPalabra,
      fecha: new Date().toISOString()
    };
  
    return this.httpclient.post<IPalabra>(`${environment.apiUrl}/palabras`, palabraConFecha);
  }
  listarPalabras(): Observable<IPalabras[]> {
    return this.httpclient.get<IPalabras[]>(`${environment.apiUrl}/palabras`);
  }




}

