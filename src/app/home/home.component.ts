import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService, private router: Router,) { }

  ngOnInit(): void {
  }
  login(){
    this.userService.login().subscribe((response: any) => {console.log('response',response)
    this.router.navigate(["/"]).then(result=>{window.location.href = response.url})
  })
  }
}
