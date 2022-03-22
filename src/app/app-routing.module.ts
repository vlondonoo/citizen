import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AuthenticateDocumentComponent } from './authenticate-document/authenticate-document.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {path: '', component:HomeComponent},
  {path: 'validate-user', component: ValidateUserComponent},
  {path: 'auth-document', component: AuthenticateDocumentComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
