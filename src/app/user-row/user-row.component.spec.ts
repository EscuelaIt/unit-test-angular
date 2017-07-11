import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserRowComponent } from './user-row.component';
import { User } from './../user';

describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User('nicolas', 'nicolas@a.co','asass');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should the name be "nicolas"', () => {
    expect(component.user.name).toEqual('nicolas');
  });

  it('should the name be "nicolas" in template', () => {
    //Arrange
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;
    //Assert
    expect(el.textContent).toEqual('nicolas');
  });

  it('should the name be "andrea" when I change the model in template', () => {
    //Arrange
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;

    //Act
    component.user.name = 'andrea';
    fixture.detectChanges();

    //Assert
    expect(component.user.name ).toEqual('andrea');
    expect(el.textContent).toEqual('andrea');
  });

  it('should show the email when I clicked in button', () => {
    //Arrange
    let button = fixture.debugElement.query(By.css('.btn-show-email'));
    let de = fixture.debugElement.query(By.css('.user-email'));
    let el = de.nativeElement;
    button.triggerEventHandler('click', null);
    //Act
    fixture.detectChanges();
    //Assert
    expect(el.textContent).toEqual('nicolas@a.co');
  });

  it('should raise selected event when clicked', ()=>{
    //Arrange
    let selectedUser: User;
    component.onSelected.subscribe((user: User) => {
      selectedUser = user;
    });
    let button = fixture.debugElement.query(By.css('.btn-selected'));
    button.triggerEventHandler('click', null);
    //Act
    fixture.detectChanges();
    //Asert
    expect(selectedUser.name).toEqual('nicolas');
  });
});
