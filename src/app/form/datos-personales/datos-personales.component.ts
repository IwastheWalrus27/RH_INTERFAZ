import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from 'src/app/side-bar/side-bar.component';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent implements OnInit {

  formFields: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    this.formFields.push(
      'Nombre',
      'Apellido Paterno',
      'Apellido Materno',

    );
    
  }
  categoria:string = 'Datos Personales';

  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
