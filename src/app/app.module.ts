import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AuthenticateDocumentComponent } from './authenticate-document/authenticate-document.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';

@NgModule({
  declarations: [
    AppComponent,
    ValidateUserComponent,
    AuthenticateDocumentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
