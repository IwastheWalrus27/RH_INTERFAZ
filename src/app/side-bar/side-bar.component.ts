import { Component, OnInit } from '@angular/core';
import { Form } from '../model/form';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  //Nombre en lista | path para routerLink | boolean para checar si ya se terminó o no esa categoria

  static progressValue: number = 0;

  static categorias: string[][] = [
    ['Datos Personales', 'datosPersonales', 'true'],
    ['Domicilio', 'domicilio', 'true'],
    ['Datos de Contacto', 'datosContacto', 'true'],
    ['Contrato de Empresa', 'contratoEmpresa', 'true'],
    ['Empresa', 'empresa', 'true'],
    ['Académicos Cursos', 'academicosCursos', 'true'],
    ['Vacaciones', 'vacaciones', 'true'],
    ['Académicos Profesionales', 'academicosProfesionales', 'true'],
    ['Contactos', 'contactos', 'true'],
    ['Expedientes y anotaciones', 'expedientesAnotaciones', 'true']
  ];
  static formsList: Form[] = [];

  constructor() { }

  ngOnInit(): void {
   
    SideBarComponent.fillList(SideBarComponent.categorias);
    for(let f of SideBarComponent.formsList){
      console.log(f.name + " " + f.route);
      
    }
  }

  getFormList(){
    return SideBarComponent.formsList;
  }

  static fillList(_categorias: string[][]) {
    for(let i:number = 0; i<_categorias.length; i++){
      SideBarComponent.formsList.push(new Form(_categorias[i][0], _categorias[i][1]));
    }
  }

  static toggleGuardar(categoria:string){
    for( let i:number = 0; i< SideBarComponent.categorias.length; i++){
      if(SideBarComponent.categorias[i][0] == categoria){
        SideBarComponent.categorias[i][0] = "(" + categoria + ")" + " Listo";
        SideBarComponent.categorias[i][2] = 'false';
        console.log("Listo\n" + SideBarComponent.categorias[i][0]);
        SideBarComponent.formsList = [];
        SideBarComponent.fillList(SideBarComponent.categorias);
        SideBarComponent.increaseProgressBar();
        break;
      }
    }
  }

  checkIfDone(i:number): boolean{
    return SideBarComponent.categorias[i][2] == 'true';
  }


  static increaseProgressBar():void{
    let step = 10;
    SideBarComponent.progressValue += step;
  }

  getProgressValue():number{
    return SideBarComponent.progressValue;
  }
}
