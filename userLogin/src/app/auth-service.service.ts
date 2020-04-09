import { JwtResponse } from './jwt-response';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  AUTH_SERVER = "http://localhost:3000";
  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient:HttpClient) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/api/register`, user).pipe(
      tap((res:  JwtResponse ) => {

        if (res.user) {
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }



  // singIn(user: User): Observable<JwtResponse> {
  //   return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
  //     tap(async (res: JwtResponse) => {

  //       if (res.user) {
  //         localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
  //         localStorage.setItem("EXPIRES_IN", res.user.expires_in);
  //         this.authSubject.next(true);
  //       }
  //     })
  //   );
  // }

}
