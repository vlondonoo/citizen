import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AuthenticateDocumentComponent } from './authenticate-document/authenticate-document.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ValidateUserComponent,
    AuthenticateDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
