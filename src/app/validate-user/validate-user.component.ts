import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit, OnDestroy {
  valores: Subscription = new Subscription();
  profileForm = this.fb.group({
    id: ['', Validators.required],
    

  });
  constructor(private fb: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log('resposne++++',this.profileForm.value)
     let response = this.profileForm.value
    this.valores = this.userService.validateCitizen(response.id).subscribe((response: any) => {console.log('response',response)}) 
  
    
  } 
  ngOnDestroy(){
    this.valores.unsubscribe()
      }

}
