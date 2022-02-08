import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {

  }

  categoria:string = 'Domicilio';

  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }

}
