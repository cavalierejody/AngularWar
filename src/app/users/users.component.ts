import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = <User>{};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(12)
      .subscribe((data: User) => { 
        console.log(data);
        this.user = data;
      });
  }

}
