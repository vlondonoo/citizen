import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  login(){
    console.log('+++++++')
    this.userService.login().subscribe((response: any) => {console.log('response',response)})
  }
}
