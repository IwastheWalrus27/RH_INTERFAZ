import { Component, OnInit } from '@angular/core';
import { Form } from '../model/form';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  //Nombre en lista | path para routerLink
  categorias: string[][] = [
    ['Datos Personales', 'datosPersonales'],
    ['Domicilio', 'domicilio'],
    ['Datos de Contacto', 'datosContacto'],
    ['Contrato de Empresa', 'contratoEmpresa'],
    ['Empresa', 'empresa'],
    ['Académicos Cursos', 'academicosCursos'],
    ['Vacaciones', 'vacaciones'],
    ['Académicos Profesionales', 'academicosProfesionales'],
    ['Contactos', 'contactos'],
    ['Expedientes y anotaciones', 'expedientesAnotaciones']
  ];
  static formsList: Form[] = [];

  constructor() { }

  ngOnInit(): void {
   
    this.fillList(this.categorias);
    for(let f of SideBarComponent.formsList){
      console.log(f.name + " " + f.route);
      
    }
  }

  getFormList(){
    return SideBarComponent.formsList;
  }

  fillList(_categorias: string[][]) {
    for(let i:number = 0; i<_categorias.length; i++){
      SideBarComponent.formsList.push(new Form(_categorias[i][0], _categorias[i][1]));
    }
  }

}
