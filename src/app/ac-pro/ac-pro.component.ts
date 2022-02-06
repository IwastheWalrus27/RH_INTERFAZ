import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-ac-pro',
  templateUrl: './ac-pro.component.html',
  styleUrls: ['./ac-pro.component.css']
})
export class AcProComponent implements OnInit {

  constructor() { }
  categoria: string = 'Académicos Profesionales';
  ngOnInit(): void {
  }
  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }

}
