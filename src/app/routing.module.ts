import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'signin', component: SigninComponent },
      { path: 'users', component: UserComponent },
      { path: 'signup', component: SignupComponent }
    ]),

  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
