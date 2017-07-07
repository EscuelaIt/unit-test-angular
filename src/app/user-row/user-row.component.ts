import { Component, OnInit, Input } from '@angular/core';

import { Person } from './../person';

@Component({
  selector: 'app-user-row',
  templateUrl: 'user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  @Input() person: Person;

  constructor() {}

  ngOnInit() {}

}
