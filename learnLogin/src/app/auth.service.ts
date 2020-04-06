import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'



interface mydata{
  success:boolean,
  message:string
}

interface regmydata{
  success:boolean,
  message:string
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  _url = '';
  private isLoggedInStatus:any = false;

  constructor(private http:HttpClient) { }


 setLoggedIn(value:boolean){
    this.isLoggedInStatus = value;
    
  };
  // setLogin(value:boolean){
  //   this.isLoggedInStatus = value;
  // };
  isLoggedIn = this.isLoggedInStatus;

  // get isLoggedIn():any{
  //   return this.isLoggedInStatus;
  // }

getUserDetails(username, password){
  //post details to http server and return if it is correct
  // return this.http.post('/api',{
  //   username,
  //   password

  // }).subscribe(data =>{
  //   console.log("UUUU data from server",data)
  // } )

  return this.http.post<mydata>(this._url,{username, password});
}

registerUser(username, password){

  console.log("HHHHHHHHH",username, password)
return this.http.post<regmydata>('/api/register',{
  username,
  password
})
}

}
