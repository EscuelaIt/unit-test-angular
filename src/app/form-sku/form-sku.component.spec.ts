import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { FormSkuComponent } from './form-sku.component';

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;
  let el, input, form;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ FormSkuComponent ]
    })
    .compileComponents();
  }));

  it('validates and triggers events for skuInput', async(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
    
    fixture.detectChanges();
    fixture.whenStable()
    .then(() => {
      input.value = 'asas';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      return fixture.whenStable();
    })
    .then(() =>{
      let msgs = el.querySelectorAll('.ui.message');
      expect(msgs[0].innerHTML).toContain('SKU is invalid');
    })
  }));

  it('validates and triggers events for form', async(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
    
    fixture.detectChanges();
    fixture.whenStable()
    .then(() => {
      component.nameField.setValue('nicolas');
      component.skuField.setValue('123');
      form.dispatchEvent(new Event('submit'));
      fixture.detectChanges();
      return fixture.whenStable();
    })
    .then(() =>{
      expect(component.skuForm.invalid).toBeTruthy();
    })
  }));

  it('validates errors', async(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;

    component.skuField.setValue('123');
    expect(component.skuField.valid).toBeTruthy();
    component.skuField.setValue('123234');
    expect(component.skuField.valid).toBeTruthy();
    component.skuField.setValue('');
    expect(component.skuField.invalid).toBeTruthy();
    component.skuField.setValue('234');
    expect(component.skuField.invalid).toBeTruthy();
  }));
});
