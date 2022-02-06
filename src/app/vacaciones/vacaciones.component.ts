import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoria:string = 'Vacaciones';
  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
