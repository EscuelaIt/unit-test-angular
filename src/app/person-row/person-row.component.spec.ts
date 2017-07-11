import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { Person } from './../person';

describe('Test for PersonRowComponent', ()=>{

  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ], // declare the test component
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

    component.person = new Person(
      'nicolas',
      'molina',
      23,
      60,
      1.70
    );
    fixture.detectChanges();
  });

  it('should created', ()=>{
    expect(component).toBeTruthy();
  });

  it("should the name be 'nicolas'", ()=>{
    expect(component.person.name).toEqual('nicolas');
  })

  it("should the age be '23'", ()=>{
    expect(component.person.age).toEqual(23);
  })

  it("should the name be 'nicolas' in template", ()=>{
    let de = fixture.debugElement.query(By.css('h1'));
    let element = de.nativeElement;
    fixture.detectChanges();
    expect(element.textContent).toEqual('nicolas');
  })

  it("should the name be 'otro nombre' in template when I change", ()=>{
    let de = fixture.debugElement.query(By.css('h1'));
    let element = de.nativeElement;

    component.person.name = 'otro nombre';
    
    fixture.detectChanges();
    expect(element.textContent).toEqual('otro nombre');
  })

  it("should the age be '23' in template", ()=>{
    let de = fixture.debugElement.query(By.css('.person-age'));
    let element = de.nativeElement;

    //component.name = 'otro nombre';
    
    fixture.detectChanges();
    expect(element.textContent).toEqual('Su edad es: 23');
  })

  it("should the age be '24' in template when I change", ()=>{
    let de = fixture.debugElement.query(By.css('.person-age'));
    let element = de.nativeElement;

    component.person.age = 24;
    
    fixture.detectChanges();
    expect(element.textContent).toEqual('Su edad es: 24');
  })

})