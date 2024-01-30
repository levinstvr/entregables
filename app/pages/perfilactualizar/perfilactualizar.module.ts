import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilactualizarPageRoutingModule } from './perfilactualizar-routing.module';

import { PerfilactualizarPage } from './perfilactualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilactualizarPageRoutingModule
  ],
  declarations: [PerfilactualizarPage]
})
export class PerfilactualizarPageModule {}
