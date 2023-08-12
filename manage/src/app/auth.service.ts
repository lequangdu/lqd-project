import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(un: string = '', pw: string = '') {
    const userInfo = { un: un, pw: pw };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3100/login', JSON.stringify(userInfo), { headers: headers, responseType: 'text' });
  }

  thoat() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
  }

  public daDangNhap() {
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false;  
    const expiresAt = JSON.parse(str);    
    return moment().isBefore(moment(expiresAt));
  }
}
