import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';
import { Person } from './../person';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  persons: Person[] = [];
  selectedPerson: Person;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.usersService.getAll()
    .subscribe(users =>{
      this.persons = users;
    });
  }

  onSelect(person: Person){
    this.selectedPerson = person;
  }

  getUser(){
    this.usersService.getUser(23)
    .subscribe(user =>{
      this.persons[0] = user;
    });
  }

}
