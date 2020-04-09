import { Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public router:Router){}

  // @Input() showRegister: boolean;
  title = 'userLogin';
  showHome:boolean = false;
  showLogin:boolean = false;
  showRegister:boolean = true;
  // showRegisterData
}
