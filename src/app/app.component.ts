import { Component, OnInit, } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'commerce';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDP7Ypq_pb20ZGNQ5wP3pJjVF_UZxzqOtw",
      authDomain: "myusers-angular.firebaseapp.com"
    });
  }
}
