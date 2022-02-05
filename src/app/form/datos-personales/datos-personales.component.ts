import { Component, OnInit } from '@angular/core';

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
      'Ciuidad nacimiento',
      'Disponibilidad mensual',
      'Fecha nacimiento',
      'Nacionalidad'
    );
    
  }

}
