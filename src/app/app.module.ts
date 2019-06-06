import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ServerService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
