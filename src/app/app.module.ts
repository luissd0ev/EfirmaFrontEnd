import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { FormularioFirmaComponent } from './formulario-firma/formulario-firma.component';
// import { EfirmaComponentTsComponent } from './efirma/efirma.component.ts/efirma.component.ts.component';

// Importa los módulos de Angular Material que vas a usar
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorModule } from 'ngx-editor';
import {
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { EfirmaService } from './efirma/efirma.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmacionComponent,

    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Negritas',
        italic: 'Italicas',
        code: 'Código',
        underline: 'Subrayado',
        strike: 'Strike',
        blockquote: 'Comillas',
        bullet_list: 'Lista',
        ordered_list: 'Lista ordenada',
        heading: 'Encabezados',
        h1: 'Encabezado 1',
        h2: 'Encabezado 2',
        h3: 'Encabezado 3',
        h4: 'Encabezado 4',
        h5: 'Encabezado 5',
        h6: 'Encabezado 6',
        align_left: 'Alineación izquierda',
        align_center: 'Alineación central',
        align_right: 'Alineación derecha',
        align_justify: 'Alineación justificada',
        text_color: 'Color de texto',
        background_color: 'Color de fondo',
        horizontal_rule: 'Regla horizontal',
        format_clear: 'Limpiar formato',
        insertLink: 'Insertar liga',
        removeLink: 'Quitar liga',
        insertImage: 'Insertar imagen',
        indent: 'Incrementar identado',
        outdent: 'Decrementar indentado',
        superscript: 'Superscript',
        subscript: 'Subscript',
        undo: 'Deshacer',
        redo: 'Rehacer',
    
        // pupups, forms, others...
        url: 'URL',
        text: 'Texto',
        openInNewTab: 'Abrir en un nuevo tabulador',
        insert: 'Insertar',
        altText: 'Texto alterno',
        title: 'Título',
        remove: 'Quitar',
        enterValidUrl: 'Capture una URL válida',
      }
    })
  ],
  providers: [EfirmaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
