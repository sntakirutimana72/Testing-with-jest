import { stringLength, reverseString, Calculator, capitalizeString } from "./index";

describe('Test stringLength', () => {
  test('with accepted length', () => {
    expect(stringLength('hello')).toEqual(5);
    expect(stringLength('hE')).toEqual(2);
    expect(stringLength('constitute')).toEqual(10);
  });

  test('with wrong data type', () => {
    expect(() => stringLength()).toThrow(TypeError);
  });

  test('with invalid length', () => {
    expect(() => stringLength('')).toThrow('Character cannot be empty');
    expect(() => stringLength('constitution')).toThrow('Characters must be no more than 10');
  });
});

describe('Test reverseString', () => {
  test('with valid argument', () => {
    expect(reverseString('steven')).toEqual('nevets');
  });

  test('with invalid data type', () => {
    expect(() => reverseString()).toThrow(TypeError);
  });
});

describe('Test Calculator', () => {
  describe('#add method', () => {
    test('with positive numbers', () => {
      expect(Calculator.add(3, 9)).toEqual(12);
    });

    test('with negative numbers', () => {
      expect(Calculator.add(-3, -2)).toEqual(-5);
    });

    test('with both negative & positive number', () => {
      expect(Calculator.add(3, -2)).toEqual(1);
    });

    test('with non number arguments', () => {
      expect(() => Calculator.add('3', -2)).toThrow();
      expect(() => Calculator.add(2, '5')).toThrow();
      expect(() => Calculator.add('8', '6')).toThrow();
      expect(() => Calculator.add(5)).toThrow();
      expect(() => Calculator.add()).toThrow();
    });
  });

  describe('#substract method', () => {
    test('with positive numbers', () => {
      expect(Calculator.substract(3, 9)).toEqual(-6);
    });

    test('with negative numbers', () => {
      expect(Calculator.substract(-3, -2)).toEqual(-1);
    });

    test('with both negative & positive number', () => {
      expect(Calculator.substract(3, -2)).toEqual(5);
    });

    test('with non number arguments', () => {
      expect(() => Calculator.substract('3', -2)).toThrow();
      expect(() => Calculator.substract(2, '5')).toThrow();
      expect(() => Calculator.substract('8', '6')).toThrow();
      expect(() => Calculator.substract(5)).toThrow();
      expect(() => Calculator.substract()).toThrow();
    });
  });

  describe('#multiply method', () => {
    test('with positive numbers', () => {
      expect(Calculator.multiply(3, 9)).toEqual(27);
    });

    test('with negative numbers', () => {
      expect(Calculator.multiply(-3, -2)).toEqual(6);
    });

    test('with both negative & positive number', () => {
      expect(Calculator.multiply(3, -2)).toEqual(-6);
    });

    test('with non number arguments', () => {
      expect(() => Calculator.multiply('3', -2)).toThrow();
      expect(() => Calculator.multiply()).toThrow();
    });
  });

  describe('#divide method', () => {
    test('with positive numbers', () => {
      expect(Calculator.divide(9, 3)).toEqual(3);
    });

    test('with negative numbers', () => {
      expect(Calculator.divide(-3, -1)).toEqual(3);
    });

    test('with both negative & positive number', () => {
      expect(Calculator.divide(5, -2)).toEqual(-2.5);
    });

    test('with non number arguments', () => {
      expect(() => Calculator.divide('3', -2)).toThrow();
      expect(() => Calculator.divide()).toThrow();
    });
  });
});

describe('Test capitalizeString', () => {
  test('with invalid argument', () => {
    expect(() => capitalizeString()).toThrow();
  });

  test('with valid argument', () => {
    expect(capitalizeString('hello WORld!')).toEqual('Hello world!');
  });
});
