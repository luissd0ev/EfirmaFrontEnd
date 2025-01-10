import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EfirmaRoutingModule } from './efirma-routing.module';
import { EfirmaComponent } from './efirma/efirma.component';


@NgModule({
  declarations: [ 
    EfirmaComponent
  ],
  imports: [
    CommonModule,
    EfirmaRoutingModule
  ],
  exports: [
    EfirmaComponent
  ]
})
export class EfirmaModule { }
