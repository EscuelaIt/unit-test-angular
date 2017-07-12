import { MyValidators } from './validators';
import { FormControl } from '@angular/forms';

describe('validators', ()=>{
  it('test', ()=>{
    let mockControl = new FormControl();
    mockControl.setValue('nicolas');
    let response = MyValidators.skuValidator(mockControl);
    expect(response.invalidSku).toBeDefined();
    expect(response.invalidSku).toBeTruthy();
  });

  it('test 2', ()=>{
    let mockControl = new FormControl();
    mockControl.setValue('123');
    let response = MyValidators.skuValidator(mockControl);
    expect(response).toBeNull();
  });
})