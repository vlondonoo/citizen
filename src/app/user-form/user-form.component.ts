import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {
  first_name: string = ""
  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    address:['', Validators.required],
    email: ['', Validators.required],
    operatorId: ['', Validators.required],
    operatorName:['', Validators.required]

  });

  valores: Subscription = new Subscription();
  constructor(private fb: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }
 /*  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('++++++',this.profileForm.value);
  } */
/* 
  updateProfile() {
    console.log('value')
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  } */
  submit(){
    console.log('resposne++++',this.profileForm.value)
     let response = this.profileForm.value
   /* this.valores = this.userService.validateCitizen(response.id).subscribe((response: any) => {console.log('response',response)}) */
  

  this.userService.createCitizen(response).subscribe((response: any) => {console.log('response',response)})

    
  } 

  ngOnDestroy(){
this.valores.unsubscribe()
  }
}
