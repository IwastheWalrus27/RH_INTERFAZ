import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor() { }
  categoria: string = 'Contactos';
  ngOnInit(): void {
  }

  invokeGuardar(categoria:string):void{
    SideBarComponent.toggleGuardar(categoria);
  }
}
