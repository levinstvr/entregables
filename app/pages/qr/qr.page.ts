import { Component, OnInit } from '@angular/core';
import { IPalabra } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  public mensaje: string;
  data = {
    texto: '',
  };
  nombre: any;
  scanning = false; // Variable para controlar si se está escaneando actualmente
  newPalabra: IPalabra;

  constructor(
    private alertcontroller: AlertController,
    private apicrudservice: ApiCrudService,
    private router: Router,
  ) {
    this.mensaje = 'Duoc UC Maipu';
    this.nombre = sessionStorage.getItem('username');
    // Crear una nueva instancia de IPalabra con la fecha actual al momento de la creación
    this.newPalabra = {
      username: this.nombre,
      palabra: '',
      fecha: new Date().toISOString(),
    };
  }

  ngOnInit() {}

  generarQr() {
    this.mensaje = this.data.texto;
    this.newPalabra.palabra = this.mensaje;
    this.apicrudservice.CrearPalabra(this.newPalabra).subscribe(() => {
      this.mostrarMensaje();
      this.data.texto = '';
    });
  }

  async mostrarMensaje() {
    const alerta = await this.alertcontroller.create({
      header: 'Creando Palabra',
      message: 'Su QR ha sido almacenado',
      buttons: ['Ok'],
    });
    alerta.present();
  }

  esUsuarioDocente(): boolean {
    const userRole = sessionStorage.getItem('userrole');
    return userRole === 'docente';
  }

  esUsuarioEstudiante(): boolean {
    const userRole = sessionStorage.getItem('userrole');
    return userRole === 'estudiante';
  }

  async escanearCodigoBarras() {
    // Comenzar la exploración de códigos de barras
    this.scanning = true;
    const result = await BarcodeScanner.startScan();

    if (!result.hasContent) {
      console.error('Escaneo cancelado o sin contenido.');
      this.scanning = false;
      return;
    }

    this.mensaje = result.content;
    this.newPalabra.palabra = this.mensaje;
    this.apicrudservice.CrearPalabra(this.newPalabra).subscribe(() => {
      this.mostrarMensaje();
      this.scanning = false;
      this.data.texto = '';
      this.router.navigateByUrl('/asistencia'); // Navegar a la página de asistencia
    });
  }

  detenerEscaneo() {
    // Detener la exploración de códigos de barras
    BarcodeScanner.stopScan();
    this.scanning = false;
  }
}
