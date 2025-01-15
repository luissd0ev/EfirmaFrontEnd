import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EfirmaService } from '../efirma/efirma.service';

@Component({
  selector: 'app-formulario-firma',
  templateUrl: './formulario-firma.component.html',
  styleUrl: './formulario-firma.component.css',
})
export class FormularioFirmaComponent implements OnInit {
  myGroup!: FormGroup;
  keyFile: File | null = null;
  cerFile: File | null = null;
  documentFile: File | null = null;
  password: string = '';
  respuestas: any[] = []; // Este array puede contener objetos relacionados a los archivos
  uploadedFiles: File[] = []; // Para almacenar los archivos seleccionados
  formulario: FormGroup;
  constructor(private fb: FormBuilder, private efirmaService: EfirmaService) {
    this.formulario = this.fb.group({
      file1: [null, Validators.required],
      file2: [null, Validators.required],
      file3: [null, Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onFileSelected(event: any, fieldName: string): void {
    const file: File = event.target.files[0];
    if (file) {
      this.formulario.get(fieldName)?.setValue(file);
      this.formulario.get(fieldName)?.markAsTouched(); // Opcional, para mostrar errores si aplica
    }
  }

  onSubmit(): void {
    console.log('Formulario:', this.formulario.value);
    if (this.formulario.valid) {
      const formData = new FormData();
  
      // Agregar archivos al FormData
      const file1 = this.formulario.get('file1')?.value;
      const file2 = this.formulario.get('file2')?.value;
      const file3 = this.formulario.get('file3')?.value;
  
      if (file1 instanceof File) formData.append('cer', file1);
      if (file2 instanceof File) formData.append('key', file2);
      if (file3 instanceof File) formData.append('documento', file3);
  
    
      const password = this.formulario.get('password')?.value;
      if (password) formData.append('contrasena', password);
  
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
  
      // Enviar FormData al servicio
      this.efirmaService.firmar(formData).subscribe({
        next: (blob) => {
          // const file = new Blob([resp], { type: 'application/pdf' }); // Cambia el MIME type si es necesario
          // const fileName = 'documento-firmado.pdf'; // Nombre del archivo descargado
          // const link = document.createElement('a');
          // link.href = URL.createObjectURL(file);
          // link.download = fileName;
          // link.click();
          const url = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');

                            // Generar el nombre del archivo con RFC y fecha formateada
                            const date = new Date();
                            date.setHours(date.getHours() - 6); // Resta 6 horas
                            const formattedDate = date.toISOString().replace(/[-:T]/g, '').slice(0, 15);
                            a.href = url;
                            a.download = formattedDate;
                            document.body.appendChild(a);
                            a.click();
                            a.remove();
          console.log('Archivo firmado recibido y descargado correctamente.');
        },
        error: (error) => {
          console.error('Error al firmar:', error);
        },
      });
      
    } else {
      console.warn('Formulario no válido');
    }
  }
  
  
}
