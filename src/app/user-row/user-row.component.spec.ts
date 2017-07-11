import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserRowComponent } from './user-row.component';
import { Person } from './../person';

describe("UserRowComponent", ()=>{
  let component:    UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  //Arrange
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;

    component.person = new Person(
      'nicolas',
      'molina',
      12,
      12,
      12
    );

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  })

  it("should the name be 'nicolas'", ()=>{
    expect(component.person.name).toEqual('nicolas');
  })

  it('should display original name', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.person.name);
  });

  it('should display a different test name', () => {
    component.person.name = 'Test name';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test name');
  });

  it('should display original lastname', () => {
    let de = fixture.debugElement.query(By.css('.lastname'));
    fixture.detectChanges();
    expect(de.nativeElement.textContent).toContain('molina');
  });

  it('should display original lastname', () => {
    component.person.lastname = 'otro apellido';
    let de = fixture.debugElement.query(By.css('.lastname'));
    fixture.detectChanges();
    expect(de.nativeElement.textContent).toContain('otro apellido');
  });

  it('should display un text for imc', () => {
    let button  = fixture.debugElement.query(By.css('.btn-imc')); // find hero element
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(button.nativeElement.textContent == '').toBeFalsy();
    expect(component.imc== '').toBeFalsy();
  });

  it('should raise selected event when clicked', () => {
    let selectedPerson: Person;
    component.onSelected.subscribe((person: Person) => {
      selectedPerson = person
    });
    let button  = fixture.debugElement.query(By.css('.btn-person')); // find hero element
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(selectedPerson.name).toEqual('nicolas');
  });
});

