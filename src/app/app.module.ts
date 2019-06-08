import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component'
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    ServerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
