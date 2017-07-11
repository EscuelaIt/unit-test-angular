import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from './../user-row/user-row.component';
import { UsersService } from './../users.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, UserRowComponent ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    expect(component.users.length).toEqual(3);
  });

  it('should selectedUser be firts items the array', () => {
    expect(component.selectedUser.name).toEqual('valentina');
  });

  it('should have an app-user-row', () => {
    let de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    let button  = fixture.debugElement.query(By.css('app-user-row .btn-selected')); // find hero element
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // selected hero should be the same data bound hero
    expect(component.selectedUser.name).toEqual('valentina');
  });
});
