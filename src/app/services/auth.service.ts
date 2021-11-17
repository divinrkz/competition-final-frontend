import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SharedDataService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedDataService) { }

  login(credentials: object) {
    return this.httpClient.post(environment.API_URL + '/auth/login', credentials);
  }


  getById(id: string) {
    return this.httpClient.get(environment.API_URL + `/users/${id}`);
  }

  loggedIn(): any {
    const token = localStorage.getItem(`token`);
    console.log(token);
    if (!!token) {
      try {
         
        return jwt_decode(token);
      } catch (error) {
      
        return false;
      }
    } else {
      return false;
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }


  logout() {
    this.sharedService.setAuthUser({});
    localStorage.removeItem(`token`);
    this.router.navigate(['/login']);
  }

  
}
