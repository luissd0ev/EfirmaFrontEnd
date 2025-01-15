import {
    HttpClient,
    HttpHeaders,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import {
    Observable,
    Subject,
  } from 'rxjs';
  import {
    map,
    tap,
  } from 'rxjs/operators';

  const headers = new HttpHeaders().set('Accept', 'application/json');

  @Injectable()

  export class EfirmaService  {
    api = `https://localhost:7264/api/Efirma`;
    constructor(private http: HttpClient) {
 
    }

    firmar(formData: FormData): Observable<Blob> {
        console.log('Datos a enviar:', formData);
        const headers = new HttpHeaders({
          'Content-Type': 'multipart/form-data',  // Encabezado apropiado para FormData
        });
        const url = `${this.api}/Firmar`;
        return this.http.post(url, formData, {
          headers: headers,
          responseType: 'blob', // Indicamos que la respuesta será un archivo binario (Blob)
        });
      }
      

      
  }