import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authenticate-document',
  templateUrl: './authenticate-document.component.html',
  styleUrls: ['./authenticate-document.component.css']
})
export class AuthenticateDocumentComponent implements OnInit, OnDestroy  {
  validate: Subscription = new Subscription();
  profileForm = this.fb.group({
    id: ['', Validators.required],
    urlDocument: ['', Validators.required],
    documentTitle:['', Validators.required], 

  });
  constructor(private fb: FormBuilder,private userService:UserService,  private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
     let response = this.profileForm.value
     this.userService.authenticateDocument(response).subscribe((response: any) => {console.log('response',response)})   
  } 
  home(){
    this.router.navigate(['/'])
  }

  ngOnDestroy(){
    this.validate.unsubscribe()
  }
}
