import { User } from './../user';
import { AuthServiceService } from './../auth-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showRegister:boolean = false;

  constructor(private registerForm:FormBuilder, private _http:HttpClient, private AuthServiceService:AuthServiceService, private router:Router) { }

  regSection = this.registerForm.group({
    name:['',Validators.required],
    email:['',[Validators.required,  Validators.email]],
    password:['']
  });

 

  ngOnInit() {
  }


  submitRegisterForm() {
    console.log(this.regSection.value);
    if(this.regSection.valid){
      // this._http.post('/api/registerUser',this.regSection.value)
      // .subscribe((response)=>{
      //   console.log("POST response ", response);
      // })


      this.AuthServiceService.register(this.regSection.value).subscribe((res)=>{
        
        console.log("Logged in!");
        // this.router.navigateByUrl('/home');
      })
    
    }
  }


}
