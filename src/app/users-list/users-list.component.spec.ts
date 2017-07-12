import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HttpModule }    from '@angular/http';

import { UsersListComponent } from './users-list.component';
import { UserRowComponent } from './../user-row/user-row.component';
import { UsersService } from './../users.service';
import { MockUsersService } from './../users.service.mock';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Person } from './../person';


describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent, UserRowComponent ],
      imports: [ HttpModule ],
      providers: [
        {provide: UsersService, useClass: UsersService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UsersService);
  });

  it('should be created', ()=>{
    let spy = spyOn(userService, 'getAll')
    .and.returnValue(Observable.of([
      new Person('Nicolas NICO','asas',12,12,12)
    ]));
    fixture.detectChanges();
    expect(userService.getAll).toHaveBeenCalled();
  });

  it('should get user', ()=>{
    fixture.detectChanges();
    spyOn(userService, 'getUser')
    .and.returnValue(Observable.of(
      new Person('Nicolas NICO','asas',12,12,12)
    ));
    component.getUser();
    //fixture.detectChanges();
    expect(userService.getUser).toHaveBeenCalled();
    expect(userService.getUser).toHaveBeenCalledWith(23);
    expect(component.persons[0].name).toEqual('Nicolas NICO');
  });

  // it('should be created', fakeAsync(()=>{
  //   fixture.detectChanges();
  //   let spy = spyOn(userService, 'getAll');
  //   tick();
  //   fixture.detectChanges();
  //   //let spy = spyOn(userService, 'getAll');
    
    
  //   //fixture.detectChanges();
  //   //console.log('as',spy.calls.any());
  //   expect(spy.calls.any()).toBe(true);
  // }));

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
