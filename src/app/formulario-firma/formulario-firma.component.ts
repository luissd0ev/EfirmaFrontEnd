import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-firma',
  templateUrl: './formulario-firma.component.html',
  styleUrl: './formulario-firma.component.css'
})
export class FormularioFirmaComponent implements OnInit {
  myGroup!: FormGroup;
  keyFile: File | null = null;
  cerFile: File | null = null;
  documentFile: File | null = null;
  password: string = '';
  respuestas: any[] = []; // Este array puede contener objetos relacionados a los archivos
  uploadedFiles: File[] = []; // Para almacenar los archivos seleccionados

  constructor(private formBuilder: FormBuilder){
    this.myGroup = new FormGroup({
      multiplefile: new FormControl(),
   });
  }
  ngOnInit(): void {
    // Simula un array con datos, puedes llenarlo dinámicamente
    this.respuestas = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Agrega tus elementos dinámicos aquí
    this.createFormGroup();
  }
  createFormGroup(): void {
    const group: any = {};
    this.respuestas.forEach((_, index) => {
      group[`multiplefile${index}`] = new FormControl(); // Crear controles dinámicos
    });
    this.myGroup = this.formBuilder.group(group);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.myGroup.value);

  }
  onSubmitDos(): void {
    console.log('Datos del formulario:', this.myGroup.value);
    console.log('Archivos subidos:', this.uploadedFiles);
  }

  onFileChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadedFiles[index] = file; // Almacena el archivo en el índice correspondiente
      console.log(`Archivo seleccionado para control ${index}:`, file);
    }
  }
}
