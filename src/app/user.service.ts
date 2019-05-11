import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'https://reqres.in/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers(): User[] {
    return null;
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.endpoint + 'users/' + id)
             .pipe(map(this.extractData))
    ;
    //return USERS.find(user => user.id === id);
  }
  
  private extractData(res): User {
    return res.data || <User>{ };
  }
}
