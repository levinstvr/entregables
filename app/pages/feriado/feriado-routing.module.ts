import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadoPage } from './feriado.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadoPageRoutingModule {}
