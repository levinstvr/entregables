import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { IDocentes } from '../interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  docentes:IDocentes[]=[];

  constructor(private animalitoService: ApiCrudService,
              private loadingCtrl : LoadingController,
              private menuController: MenuController) { }

  mostrarMenu(){
    this.menuController.open('first');
  }
  
  ionViewWillEnter(){
  this.loadDocentes();
  }

  async loadDocentes(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.animalitoService.listarDocentes().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.docentes=JSON.parse(listString)
          event?.target.complete();
          console.log(this.docentes);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
 
}
