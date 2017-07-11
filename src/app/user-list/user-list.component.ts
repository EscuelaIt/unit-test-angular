import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';
import { User } from './../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  selectedUser: User | any = {};

  constructor(
    private usersService: UsersService
  ){}

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe(data =>{
      this.users = data;
      this.selectedUser = this.users[0];
    });
  }

  selected(user: User){
    this.selectedUser = user;
  }

}
