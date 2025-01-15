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

  export class FormularioService  {
    api = `https://localhost:7264/api/Efirma`;
    constructor(private http: HttpClient) {
 
    }

    firmar():Observable<any>{
        const url = `${this.api}/Firmar`;
        return this.http.post<any>(url, { headers }); 
    }
 
  }