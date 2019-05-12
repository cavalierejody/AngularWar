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
  selectedId: number = null;
  userFound: Boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  showSelectedUser(id: number) {
    this.userFound = false;
    this.userService.getUserById(id)
      .subscribe((data: User) => { 
        console.log(data);
        this.user = data;
        this.userFound = true;
      });
  }
}
