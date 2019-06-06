import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './_model/user';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  users: User[];

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((users) => {
        this.users = users;
        return this.users;
      }
      )
    )
  }
}
