import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './form/datos-personales/datos-personales.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    SideBarComponent,
    DomicilioComponent,
    DatosContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
