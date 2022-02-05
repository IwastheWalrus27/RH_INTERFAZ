import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { DatosPersonalesComponent } from './form/datos-personales/datos-personales.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { ContratoEmpresaComponent } from './contrato-empresa/contrato-empresa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    SideBarComponent,
    DomicilioComponent,
    DatosContactoComponent,
    ContratoEmpresaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
