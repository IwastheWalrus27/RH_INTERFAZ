import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-contrato-empresa',
  templateUrl: './contrato-empresa.component.html',
  styleUrls: ['./contrato-empresa.component.css']
})
export class ContratoEmpresaComponent implements OnInit {

  formFields: string[][] = [];
  categoria: string = 'Contrato de Empresa';
  constructor() { }

  ngOnInit(): void {
    this.formFields.push(
      ['Tipo contrato', 'text'],
      ['Fecha inicial', 'date'],
      ['Fecha final', 'date'],
      ['Representante', 'text'],
      ['Descripcion', 'text'],
      ['Lugar de firma', 'text'],
    );
  }

  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
