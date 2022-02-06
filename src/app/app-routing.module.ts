import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomicilioComponent } from './domicilio/domicilio.component'; 
import { DatosPersonalesComponent } from './form/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { ContratoEmpresaComponent } from './contrato-empresa/contrato-empresa.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { AcCursosComponent } from './ac-cursos/ac-cursos.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { AcProComponent } from './ac-pro/ac-pro.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ExpAnotacionesComponent } from './exp-anotaciones/exp-anotaciones.component';

const routes: Routes = [
  {path: 'domicilio', component: DomicilioComponent },
  {path: 'datosPersonales', component: DatosPersonalesComponent},
  {path: 'datosContacto',  component: DatosContactoComponent},
  {path: 'contratoEmpresa', component: ContratoEmpresaComponent},
  {path: 'empresa', component: EmpresaComponent},
  { path: 'academicosCursos', component: AcCursosComponent},
  { path: 'vacaciones', component: VacacionesComponent},
  {path: 'academicosProfesionales', component : AcProComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'expedientesAnotaciones', component: ExpAnotacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
