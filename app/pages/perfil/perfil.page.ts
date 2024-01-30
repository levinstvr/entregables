import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfiniteScrollCustomEvent, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {

  usuarios:Users[]=[];
  usuarioLogeado: any;

  constructor(private userService: AuthService,
              private loadingCtrl : LoadingController,
              private menuController: MenuController,
              private router: Router,
              private toastController: ToastController ) { }
  

  mostrarMenu(){
    this.menuController.open('first');
  }



  
  
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/login');
    
  }

  async mensajeCerrar(){
    const alerta = await this.toastController.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }


  ionViewWillEnter() {
    // Obtener los datos del usuario logeado desde tu servicio de autenticación
    this.usuarioLogeado = this.userService.getDatosUsuarioLogeado();
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.userService.listarUsuarios().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.usuarios=JSON.parse(listString)
          event?.target.complete();
          console.log(this.usuarios);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
 
}
