import { Calculator } from './calculator';

describe('Test for Calculator', ()=>{

  let calculator;

  //Arrange
  beforeEach(()=>{
    calculator = new Calculator();
  });

  describe('Test for multiply', ()=>{

    it("should return nine", ()=>{
      //Act
      let result = calculator.multiply(3,3);
      //Assert
      expect(result).toEqual(9);
    });

    it("should return four", ()=>{
      //Act
      let result = calculator.multiply(1,4);
      //Assert
      expect(result).toEqual(4);
    });

  });

  describe('Test for divide', () => {

    it("divide for a number", ()=>{
      //Act && Assert
      expect(calculator.divide(6,3)).toEqual(2);
      expect(calculator.divide(5,2)).toEqual(2.5);
    });

    it("divide for a zero", ()=>{
      //Act && Assert
      expect(calculator.divide(6,0)).toBeNull();
      expect(calculator.divide(5,0)).toBeNull();
      expect(calculator.divide(1212125,0)).toBeNull();
      expect(calculator.divide(10,0)).toBeNull();
    });

    it("test of matchers", ()=>{
      let name = 'nicolas'
      let name2;
      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1+2 == 3).toBeTruthy();
      expect(1+1 == 3).toBeFalsy();

      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);

      expect('1234567').toMatch(/123/);

      expect(["apples", "oranges", "pears"]).toContain("oranges");
    });

  });

});