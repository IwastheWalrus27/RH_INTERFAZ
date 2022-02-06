import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  started: boolean = false;
  getProgress():number{
    return new SideBarComponent().getProgressValue();
  }
  checkStarted(){
    return this.started;
  }
  
  toggleStarted(){
    return this.started = !this.started;
  }

}
