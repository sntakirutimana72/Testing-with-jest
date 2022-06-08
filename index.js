/**
 *
 * @param {String} string
 * @returns
 */
export function stringLength(string) {
  if (typeof string !== 'string') throw new TypeError('Only string is accepted');

  const length = string.length;

  if (length === 0) throw 'Character cannot be empty';

  if (length > 10) throw 'Characters must be no more than 10';

  return length;
}

/**
 *
 * @param {String} string
 * @returns
 */
export function reverseString(string) {
  if (typeof string !== 'string') throw new TypeError('Only string is accepted');

  let reversedString = '';

  for (let j = string.length - 1; j >= 0; j--) reversedString += string[j];

  return reversedString;
}

/**
 *
 * @param {String} string
 */
export function capitalizeString(string) {
  if (typeof string !== 'string') throw 'Only string';

  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

export class Calculator {

  static enforceType(exp1, exp2, type = 'number') {
    if (typeof(exp1) !== type || typeof(exp2) !== type) throw `Only ${type}`;
  }

  static add(exp1, exp2) {
    Calculator.enforceType(exp1, exp2);

    return exp1 + exp2;
  }

  static multiply(exp1, exp2) {
    Calculator.enforceType(exp1, exp2);

    return exp1 * exp2;
  }

  static substract(exp1, exp2) {
    Calculator.enforceType(exp1, exp2);

    return exp1 - exp2;
  }

  static divide(exp1, exp2) {
    Calculator.enforceType(exp1, exp2);

    return exp1 / exp2;
  }
}
