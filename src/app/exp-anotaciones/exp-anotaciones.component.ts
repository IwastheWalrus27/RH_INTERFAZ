import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-exp-anotaciones',
  templateUrl: './exp-anotaciones.component.html',
  styleUrls: ['./exp-anotaciones.component.css']
})
export class ExpAnotacionesComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  categoria: string = 'Expedientes y anotaciones';
  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }

}
