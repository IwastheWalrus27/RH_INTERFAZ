import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  
  formFields:Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    this.formFields.push(
      'Calle',
      'Número exterior',
     'Número interior',
     'Colonia',
     'Privada',
     'Edificio'
    );
  }

}
