import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomicilioComponent } from './domicilio/domicilio.component'; 
import { DatosPersonalesComponent } from './form/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { ContratoEmpresaComponent } from './contrato-empresa/contrato-empresa.component';

const routes: Routes = [
  {path: 'domicilio', component: DomicilioComponent },
  {path: 'datosPersonales', component: DatosPersonalesComponent},
  {path: 'datosContacto',  component: DatosContactoComponent},
  {path: 'contratoEmpresa', component: ContratoEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
