import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from './../user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  @Input() user: User;
  @Output() onSelected = new EventEmitter<User>();
  email: string;

  constructor() {}

  ngOnInit() {
  }

  showEmail(){
    this.email = this.user.email;
  }

  selected(){
    this.onSelected.emit(this.user);
  }

}
