// En tu AsistenciaPage
import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { IPalabras } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  palabras: IPalabras[] = [];

  constructor(private apicrudservice: ApiCrudService,
              private menuController: MenuController) {}

  ngOnInit() {
    // Cuando la página de asistencia se carga, obtener las palabras registradas
    this.obtenerPalabrasRegistradas();
  }

  obtenerPalabrasRegistradas() {
    this.apicrudservice.listarPalabras().subscribe(
      (palabras: IPalabras[]) => {
        this.palabras = palabras;
      },
      (error) => {
        console.error('Error al obtener las palabras registradas:', error);
      }
    );
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
