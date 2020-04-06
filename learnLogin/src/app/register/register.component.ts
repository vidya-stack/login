import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }


  registerUser(event){
    event.preventDefault();
    console.log("JJJJJ",event)
    const errors = [];
    const target = event.target;
    const username = target.querySelector('#username').value;
    const passowrd = target.querySelector('#password').value;
    const cpassowrd = target.querySelector('#cPassword').value;

    console.log("oo",username,passowrd)
    if(passowrd != cpassowrd){
      errors.push("password no match")
      alert("no")
    }
  //more validation

  if(errors.length === 0){
    this.auth.registerUser(username,passowrd).subscribe(data => {
      console.log("register data",data)
      if(data.success){
        this.router.navigate(['dashboard']);
      }
    })
  }




    }

}
