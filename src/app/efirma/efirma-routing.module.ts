import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EfirmaComponent } from './efirma/efirma.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCard, MatCardModule } from '@angular/material/card';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { MatAccordion } from '@angular/material/expansion';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionModule,
} from '@angular/material/expansion';
//import { SesionAddObjectiveComponent } from './sesion-add-objective/sesion-add-objective.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FormularioFirmaComponent } from '../formulario-firma/formulario-firma.component';

const routes: Routes = [
  {
    path: '',
    component: EfirmaComponent,
  },
];

@NgModule({
  declarations: [FormularioFirmaComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    
  ],
  exports: [RouterModule],
})
export class EfirmaRoutingModule {}
