import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  docente ={
    id:0,
    nombre:"",
    asignatura: ""
  }
  constructor(private apiCrud: ApiCrudService, 
              private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDocenteById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getDocenteById(docenteID:number){
    this.apiCrud.BuscarDocenteId(docenteID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.docente={
          id: resp[0].id,
          nombre: resp[0].nombre,
          asignatura: resp[0].asignatura,
          
        }
      }
    )
  }

}
