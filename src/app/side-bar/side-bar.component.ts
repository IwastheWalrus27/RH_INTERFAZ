import { Component, OnInit } from '@angular/core';
import { Form } from '../model/form';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  static progressValue: number = 0;
  //Nombre en lista | path para routerLink | boolean para checar si ya se terminó o no esa categoria
  //                                         que sirve para checar que formato aplicarle

  

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
   //Cuando se inicia el componente, llenar el array formsList con las categorias *Son los valores que
   //aparecen en la side bar
    SideBarComponent.fillList(SideBarComponent.categorias);
  
  }
  //Metodo para poder acceder a formsList desde el HTML
  getFormList(){
    return SideBarComponent.formsList;
  }
  //Metodo que se encarga de llenar formsList
  static fillList(_categorias: string[][]) {
    for(let i:number = 0; i<_categorias.length; i++){
      //                          Como aparecera en la sidebar
      //                                                          Nombre del route para acceder al componente
      SideBarComponent.formsList.push(new Form(_categorias[i][0], _categorias[i][1]));
    }
  }

  //Metodo que se activa al dar click en el boton guardar
  //Cada componente debera llamar a este metodo y pasar un string que contenga como aparece la categoria
  //en la sidebar, para asi buscar a que categoria aplicarle el formato de listo
  static toggleGuardar(categoria:string){

    for( let i:number = 0; i< SideBarComponent.categorias.length; i++){
      
      if(SideBarComponent.categorias[i][0] == categoria){
        SideBarComponent.categorias[i][0] = "(" + categoria + ")" + " Listo";
        SideBarComponent.categorias[i][2] = 'false';
        //Vaciar la lista para volverla a rellenar con los nuevos formatos de listo
        SideBarComponent.formsList = [];
        SideBarComponent.fillList(SideBarComponent.categorias);
        //Al dar guardar tambien se quiere incrementar el valor de la progress bar indicando que se ha completado
        //otra categoria
        SideBarComponent.increaseProgressBar();
        break;
      }

    }
  }
  //Metodo que se llama desde el HTML para verificar que estilo CSS aplicar a la categoria de la sidebar
  // Regresa true si todavia no se ha guardado y false cuando ya se guardo (de eso se encarga toggleGuardar)
  checkIfDone(i:number): boolean{
    return SideBarComponent.categorias[i][2] == 'true';
  }

  //Añade un valor al valor actual de la progress bar, ese valor esta determinado por el numero de elementos dentro de
  // la lista categoria para que sea proporcional
  static increaseProgressBar():void{
    let step = SideBarComponent.categorias.length;
    SideBarComponent.progressValue += step;
  }
  //Metodo para obtener el valor actual de la progress bar. Este metodo se usa para mostrar un progreso acorde dentro de la vista de la progress bar
  getProgressValue():number{
    return SideBarComponent.progressValue;
  }

}
