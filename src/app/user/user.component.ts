import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [];
  constructor(private userserver: ServerService) {
  }

  
  ngOnInit() {
    this.userserver.getAll().subscribe(
      (u) => { this.users = u }
    )
  }

}
