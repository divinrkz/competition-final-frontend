import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getAuthUser();
  }

  getAuthUser() {
    const id = this.authService.loggedIn();
    console.log(id);
    this.authService.getById(id._id).subscribe((res: any) => {
      this.user = res?.data;
      this.user.avatar = 'https://ui-avatars.com/api?name='+this.user.names.split(' ')[0] + '+' +this.user.names.split(' ')[1];
      console.log(this.user);
    })
  }

  logOutUser() {
    this.authService.logout();
  }

}
