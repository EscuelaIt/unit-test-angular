import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Person } from './../person';

@Component({
  selector: 'app-user-row',
  templateUrl: 'user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  @Input() person: Person;
  @Output() onSelected = new EventEmitter<Person>();
  imc: string;

  constructor() {}

  ngOnInit() {}

  click() {
    this.onSelected.emit(this.person);
  }

  calcIMC(){
    this.imc = this.person.calcIMC()
  }

}
