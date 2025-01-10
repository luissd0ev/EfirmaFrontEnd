import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EfirmaComponent } from './efirma/efirma.component';

const routes: Routes = [   {
  path: 'efirma',
  component: EfirmaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfirmaRoutingModule { }
