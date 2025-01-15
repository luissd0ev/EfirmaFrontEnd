import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EfirmaRoutingModule } from './efirma-routing.module';
import { EfirmaComponent } from './efirma/efirma.component';
import { EfirmaService } from './efirma.service';
import { FormularioService } from '../formulario-firma/formulario.service';


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
  ],
  providers: [EfirmaService, FormularioService]
})
export class EfirmaModule { }
