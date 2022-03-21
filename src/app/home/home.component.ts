import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private infoUser: any;
  private decoded:any;
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.datalogin();
  }

  datalogin() {
    debugger
    this.infoUser = this.cookieService.get('auth_token');
    console.log(this.infoUser);
    this.decoded = jwt_decode(this.infoUser);
    console.log(this.decoded);
  }

  login() {
    this.userService.login().subscribe((response: any) => {
      console.log('response', response)
      this.router.navigate(["/"]).then(result => { window.location.href = response.url })
    })
  }
}
