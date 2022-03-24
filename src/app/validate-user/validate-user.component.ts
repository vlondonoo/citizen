import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit, OnDestroy {
  validate: Subscription = new Subscription();
  response:string | undefined;
  profileForm = this.fb.group({
    id: ['', Validators.required],
  });
  
  constructor(private fb: FormBuilder,private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    let formValue = this.profileForm.value
    this.validate = this.userService.validateCitizen(formValue.id).subscribe((res: any) => {console.log('response',res)
    this.response = res.data}) 
  } 

  home(){
    this.router.navigate(['/'])
  }
  ngOnDestroy(){
    this.validate.unsubscribe()
  }

}
