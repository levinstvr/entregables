import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppService } from 'src/app/servicios/app.service';
import { Data } from '../interfaces/interfaces';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {
datos:Data[]=[];
  constructor(private menuController:MenuController,
              private apiCrudService:AppService) { }

  ngOnInit() {
    this.apiCrudService.llamarFeriado().subscribe(resp => {
      console.log(resp);
      this.datos.push(...resp.data);
    })
  }


  mostrarMenu(){
    this.menuController.open('first');
  }



}
