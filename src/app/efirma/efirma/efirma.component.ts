import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../../confirmacion/confirmacion.component';
import { FormularioFirmaComponent } from '../../formulario-firma/formulario-firma.component';
@Component({
  selector: 'app-efirma',
  templateUrl: './efirma.component.html',
  styleUrl: './efirma.component.css'
})
export class EfirmaComponent {

  constructor(
    private dialog: MatDialog,
  ){
  
  }

  openDialog(){
  //   const confirmDialog = this.dialog.open(ConfirmacionComponent, {
  //     data: {
  //       titulo: "Confirmación"
  //     }, 
  //     width: '600px',
  //     minWidth: '400px',
  //     maxWidth: '1000px',
  //   });
  // 
    const confirmDialog = this.dialog.open(FormularioFirmaComponent, {
      data: {
        titulo: "Confirmación"
      }, 
      width: '600px',
      minWidth: '400px',
      maxWidth: '1000px',
    });

    
  }

}
