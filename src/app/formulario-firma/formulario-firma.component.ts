import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-firma',
  templateUrl: './formulario-firma.component.html',
  styleUrl: './formulario-firma.component.css'
})
export class FormularioFirmaComponent {
  myGroup!: FormGroup;
  keyFile: File | null = null;
  cerFile: File | null = null;
  documentFile: File | null = null;
  password: string = '';
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.myGroup.value);

  }
}
