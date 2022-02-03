import { Component, OnInit } from '@angular/core';
import { Form } from '../model/form';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  
  form: Form;
  constructor() { }

  ngOnInit(): void {

  }

}
