import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomicilioComponent } from './domicilio/domicilio.component'; 
import { DatosPersonalesComponent } from './form/datos-personales/datos-personales.component';

const routes: Routes = [
  {path: 'domicilio', component: DomicilioComponent },
  {path: 'datosPersonales', component: DatosPersonalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
