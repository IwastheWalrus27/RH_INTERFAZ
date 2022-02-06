import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {

  formFields: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    this.formFields.push(
      'Telefono Casa',
      'Telefono Recados',  
      'Telefono Celular', 
      'Telefono Celular 2', 
       'Telefono Celular Empresa',
       'E-mail',
       'E-mail 2',
       'E-mail empresarial'
    ); 
  }
  categoria:string = 'Datos de Contacto';

  invokeGuardar(categoria:string):void{
    console.log('hola');
    SideBarComponent.toggleGuardar(categoria);
  }
}
