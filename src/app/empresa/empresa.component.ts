import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categoria:string = 'Empresa';

  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
