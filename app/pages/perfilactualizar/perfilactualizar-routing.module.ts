import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilactualizarPage } from './perfilactualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilactualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilactualizarPageRoutingModule {}
