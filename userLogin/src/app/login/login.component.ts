import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';

import { FormControl, FormGroup , FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bioSection = this.fb.group({
    firstName: ['',Validators.required],
    password:['',Validators.required]
  });


  constructor(private router:Router, private fb:FormBuilder) { }
 
  ngOnInit() {
  }


  callingFunction() {
    console.log(this.bioSection.value);
   }

}
