import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean = false;
  showAlert: boolean = false;
  alertMessage: string = '';
  alertClass: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
     private authService: AuthService, private sharedService: SharedDataService) { 
      this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });
  }

  

  ngOnInit(): void {
  }


  
  // routeActivationCheck() {
  //   this.activatedRoute.queryParams.subscribe((params) => {
  //     const isAuthorized = params.isAuthorized || null;
  //     if (isAuthorized) {
  //       this.alertUserLogin = true;
  //       this.alertClass = 'alert-primary';
  //       this.alertMessage = 'alert-responses.error 401';
  //     }
  //     const isLoggedIn = params.isLoggedIn || null;
  //     if (isLoggedIn) {
  //       this.alertUserLogin = true;
  //       this.alertClass = 'alert-primary';
  //       this.alertMessage = 'alert-responses.error-signin-to-continue';
  //     }
  //   });
  // }
  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      this.isLoading = false;
      console.log(res);
      localStorage.setItem('token', res.data.token);
      this.setAuthUser();


    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.isLoading = false;
      this.alertClass = 'alert-danger';
      this.alertMessage = err.error.message;
      this.showAlert = true;
    });
  }

  setAuthUser() {
    const user  = this.authService.loggedIn();
    console.log(user);
    if (!user) { return false; }

    this.routeUser(user.userType);
    this.sharedService.setAuthUser(user);
    return;
  }

  routeUser(userType: string) {
    if (userType === 'EMPLOYEE') {
      this.router.navigate(['/shared/management/products']);
    } else if (userType === 'ADMIN') {
      this.router.navigate(['/admin/management/employees']);
    
  }
}
}
