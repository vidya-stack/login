import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    console.log("JJJJJ",event)
    const target = event.target;
    const username = target.querySelector('#username').value;
    const passowrd = target.querySelector('#password').value;
    console.log("oo",username,passowrd)
    this.Auth.getUserDetails(username,passowrd).subscribe(data =>{
      if(data.success){
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      }else{
        
      }
    });
  }

}
