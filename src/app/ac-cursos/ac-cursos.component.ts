import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-ac-cursos',
  templateUrl: './ac-cursos.component.html',
  styleUrls: ['./ac-cursos.component.css']
})
export class AcCursosComponent implements OnInit {
  categoria:string = 'Académicos Cursos';
  constructor() { }

  ngOnInit(): void {
  }
  
  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
