import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AuthenticateDocumentComponent } from './authenticate-document/authenticate-document.component';

const routes: Routes = [
  { path: 'create-user', component: UserFormComponent },
  {path: 'validate-user', component: ValidateUserComponent},
  {path: 'auth-document', component: AuthenticateDocumentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
