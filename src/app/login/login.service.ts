import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { LoginForm } from './login.type'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //登录
  login(loginForm){
    return this.http.post(`http://localhost:2080/tokens`,loginForm)
  }
}
