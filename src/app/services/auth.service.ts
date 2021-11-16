// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as jwt_decode from 'jwt-decode';
// import { Router } from '@angular/router';
// import { SharedDataService } from '../shared/shared-data.service';
// import { isValidDate } from 'src/app/utils/functions';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedDataService) { }
//   register(user: object) {
//     return this.httpClient.post(environment.API_URL + '/api/auth/advertiser/signup', user);
//   }
//   login(user: object) {
//     return this.httpClient.post(environment.API_URL + '/api/auth/signin', user);
//   }
//   setPassword(passwords: object) {
//     return this.httpClient.post(environment.API_URL + '/api/auth/reset-password', passwords);
//   }
//   loggedIn() {
//     const token = localStorage.getItem(`token`);
//     if (!!token) {
//       try {
//         return jwt_decode(token);
//       } catch (error) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }
//   getToken() {
//     return localStorage.getItem('token');
//   }

//   getExp(): any {
//     const token = this.loggedIn();
//     if (!token) return ;

//     const date = new Date(0); 
//     date.setUTCSeconds(token.exp);

//     return date;
//   }

//   logout() {
//     this.sharedService.setAuthUser({});
//     this.sharedService.setUserAuthority({});
//     this.sharedService.setUserDetails({});
//     this.sharedService.setRunningAdvert({});
//     this.sharedService.setRunningAdvertDetails({});
//     this.sharedService.setTieredAdvertPackages({});
//     localStorage.removeItem(`token`);
//     this.router.navigate(['/signin']);
//   }

//   tokenExpired() {
//     const expired = !(this.getExp().valueOf() > new Date().valueOf());
//     if (expired) this.logout(); 
//     return expired;
//   }
  
// }
