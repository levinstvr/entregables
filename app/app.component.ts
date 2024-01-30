import { Component } from '@angular/core';

interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Componente[]=[
    {
      name:'Inicio',
      redirecTo:'/inicio',
      icon:'home'
    },
    {
      name:'Informacion',
      redirecTo:'/info',
      icon:'book'
    },
    {
      name:'Registrarse',
      redirecTo:'/formulario',
      icon:'person-add'
    },
    {
      name:'Iniciar Sesion',
      redirecTo:'/login',
      icon:'person'
    },
  
    {
      name:'Perfil',
      redirecTo:'/perfil',
      icon:'person'
    },
    {
      name:'feriado',
      redirecTo:'/feriado',
      icon:'calendar'
    },
    {
      name:'Qr',
      redirecTo:'/qr',
      icon:'qr-code-outline'
    },
    {
      name:'Asistencia',
      redirecTo:'/asistencia',
      icon:'qr-code-outline'
    },




  ]



  constructor() {}
}

