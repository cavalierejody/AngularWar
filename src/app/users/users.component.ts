import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    id : 1,
    firstName : 'Jody',
    lastName : 'Cavalli',
    eMail: 'myemail@mydomain.it',
    avatar: 'amazingAvatar'
  };

  constructor() { }

  ngOnInit() {
  }

}
