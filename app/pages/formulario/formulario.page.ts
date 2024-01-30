import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  newUsuario: User ={
    username: '',
    password: '',
    ramo: '',
    ramo2: '',
    anio: '',
    semestre: '',
    horas: '',
    role: '',
    carrera: '',
    isactive:true
  };

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private router: Router,
              private auth: AuthService,
              private toastController: ToastController ) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async crearUsuario() {
    this.auth.CrearUsuario(this.newUsuario).subscribe(
      () => {
        this.router.navigateByUrl('/formulario');
        this.mostrarToast('Usuario registrado');
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        // Puedes manejar errores aquí si es necesario.
      }
    );
  }
  
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración del mensaje Toast en milisegundos
      color: 'success', // Puedes establecer el color según tu preferencia
    });
    toast.present();
  }

 
}


