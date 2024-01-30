import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  docente={
    id:0,
    nombre:"",
    asignatura:""
   
  }
  constructor(private router:Router, 
              private apiCrud: ApiCrudService) { }

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
  
  eliminarDocente(){
    this.apiCrud.EliminarDocente(this.docente).subscribe();
    this.router.navigateByUrl("listar");
  }
}
