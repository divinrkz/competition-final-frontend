import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'competition-final-frontend';

  // implements OnInit

//   constructor(
//     private authService: AuthService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router,
//     private sharedService: SharedDataService) {
//     this.loginForm = new FormGroup({
//       login: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required]),
//     });
//     this.routeActivationCheck();

// regex: (?!^\d+$)^.+$

//   }

//   ngOnInit() {
//   }

//   routeActivationCheck() {
//     this.activatedRoute.queryParams.subscribe((params) => {
//       const isAuthorized = params.isAuthorized || null;
//       if (isAuthorized) {
//         this.alertUserLogin = true;
//         this.alertClass = 'alert-primary';
//         this.alertMessage = 'alert-responses.error 401';
//       }
//       const isLoggedIn = params.isLoggedIn || null;
//       if (isLoggedIn) {
//         this.alertUserLogin = true;
//         this.alertClass = 'alert-primary';
//         this.alertMessage = 'alert-responses.error-signin-to-continue';
//       }
//     });
//   }
//   login() {
//     this.isLogging = true;
//     this.authService.login(this.loginForm.value).subscribe((res: any) => {
//       this.isLogging = false;
//       const date = new Date();
//       localStorage.setItem('token', res.accessToken);
//       this.setUser();

//     }, (err: HttpErrorResponse) => {
//       this.isLogging = false;
//       if (err.error.apierror) {
//         this.alertMessage = err.error.apierror.message;
//       } else if (err.status === 0) {
//         this.alertMessage = 'alert-responses.error-500';
//       } else {
//         this.alertMessage = 'alert-response.error-login-failed';
//       }
//       this.alertClass = 'alert-danger-lighten';
//       this.alertUserLogin = true;
//     });
//   }

//   setUser() {
//     const { user } = this.authService.loggedIn();
//     if (!user) { return false; }
//     this.sharedService.setAuthUser(user);
//     this.sharedService.getUserAuthority().subscribe((authority: any) => {
//       if (empty(authority)) { return; }
//       this.routeUser(authority.authority);
//       return;
//     });
//   }

//   routeUser(role) {
//     if (role === ADVERTISER_ADMIN || role === ADVERTISER_USER) {
//       this.router.navigate(['/advertiser']);
//     } else if (role === COMPANY_ADMIN || role === COMPANY_USER) {
//       this.router.navigate(['/company']);
//     } else if (role === ROLE_ADMIN || role === ROLE_USER) {
//       this.router.navigate(['/super-admin']);
//     } else if (role === MEDIA_HOUSE_ADMIN || role === MEDIA_HOUSE_USER) {
//       this.router.navigate(['/media-house']);
//     } else if (role === ROLE_PRESENTER) {
//       this.router.navigate(['/journalist/management']);
//     } else if (role === TRAFFIC_CONTROLLER) {
//       this.router.navigate(['/traffic-controller/management']);
//     }
//   }
// }

}
