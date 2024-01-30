
import { Component, OnInit } from '@angular/core';
import { IDocente } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newDocente: IDocente = {
    nombre: "",
    asignatura: ""
  };

  constructor(private apiCrud: ApiCrudService,
    private router: Router) { }

  ngOnInit() {
  }

  crearDocente() {
    this.apiCrud.CrearDocente(this.newDocente).subscribe();
    this.router.navigateByUrl("/listar");
  }
}
