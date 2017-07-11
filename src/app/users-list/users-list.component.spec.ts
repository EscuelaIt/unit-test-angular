import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UsersListComponent } from './users-list.component';
import { UserRowComponent } from './../user-row/user-row.component';
import { UsersService } from './../users.service';
import { MockUsersService } from './../users.service.mock';


describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userService: MockUsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent, UserRowComponent ],
      providers: [
        {provide: UsersService, useClass: MockUsersService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('should be created', () => {
  //   console.log(component.persons);
  //   expect(component.persons.length).toEqual(2);
  // });

  // it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
  //   fixture.detectChanges();
  //   tick();                  // wait for async getQuote
  //   fixture.detectChanges(); // update view with quote
  //   console.log(component.persons);
  //   expect(component.persons.length).toEqual(2);
  //   //expect(el.textContent).toBe(testQuote);
  // }));

  // it('should have an user-row', () => {
  //   let de = fixture.debugElement.query(By.css('app-user-row'));
  //   expect(de).toBeTruthy();
  // });

  // it('should raise selected event when clicked', () => {
  //   let button  = fixture.debugElement.query(By.css('app-user-row .btn-person')); // find hero element
  //   button.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   // selected hero should be the same data bound hero
  //   expect(component.selectedPerson.name).toBe('nicolas');
  // });
});
