import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeriados } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient) { }
  llamarFeriado(){
    return this.httpclient.get<IFeriados>('https://api.victorsanmartin.com/feriados/en.json');
  }
}
