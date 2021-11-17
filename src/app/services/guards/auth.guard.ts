// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from '../../auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate() {
//     if (this.authService.loggedIn() && !this.authService.tokenExpired()) {
//       return true;
//     }
//     this.router.navigate(['/signin'], { queryParams: { isLoggedIn: false } });
//     return false;
//   }
// }
