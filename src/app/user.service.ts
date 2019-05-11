import { Injectable } from '@angular/core';
import { User } from './model/user';
import { USERS } from './mock-users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getUserById(id: number): User {
    return USERS.find(user => user.id === id);
  }
}
