// this is main.js in dk-branch

"use strict";

class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  /**
   * Calculats the area of a circle
   * @param {number} radius
   * @returns area of a circle
   */

  circleArea(radius) {
    return this.PI * radius * radius;
  }
  /**
   * Calculates the height of the ratio (y')
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @returns calculated height
   */
  ratio(x, y, width) {
    return (width * y) / x;
  }

  /**
   * Calcualtes the percentages of x in y
   * @param {number} x
   * @param {number} y
   * @returns The percentage as a string (e.g., "20.00%").
   */

  percentage(x, y) {
    if (y === 0) {
      throw console.error("Can't divide by ZERO!");
    } else {
      return `${((x * 100) / y).toFixed(2)}%`;
    }
  }

  /**
   * Adds x to y
   * @param {number} x
   * @param {number} y
   * @returns the sum of x and y
   */

  add(x, y) {
    return x + y;
  }

  /**
   * Subtracts y from x
   * @param {number} y
   * @param {number} x
   * @returns the difference of x and y
   */

  subtract(x, y) {
    return x - y;
  }

  /**
   * Multiplies x by y
   * @param {number} x
   * @param {number} y
   * @returns the product of x and y
   */

  multiply(x, y) {
    return x * y;
  }

  /**
   * Divides x with y
   * @param {number} x
   * @param {number} y
   * @throws {Error} If y is 0.
   * @returns the result of x divided by y
   */

  divide(x, y) {
    if (y === 0) {
      throw console.error("Can't divide by ZERO!");
    } else {
      return x / y;
    }
  }

  /**
   * Finds a remainder of x to y
   * @param {number} x
   * @param {number} y
   * @returns {number} The remainder of x divided by y.
   * @throws {Error} If y is 0.
   */
  remainder(x, y) {
    if (y === 0) {
      throw console.error("Can't divide by ZERO!");
    } else {
      return x % y;
    }
  }

  /**
   * Elevates x to the power of y
   * @param {number} x
   * @param {number} y
   * @returns x raised to the power of y
   */
  elevate(x, y) {
    return x ** y;
  }

  /**
   * Finds a square root out of x
   * @param {number} x
   * @returns {number} The square root of x.
   * @throws {Error} If x is negative.
   */

  sqrt(x) {
    if (x < 0) {
      throw console.error(
        "Cannot calculate the square root of a negative number"
      );
    } else {
      return x ** 0.5;
    }
  }
}

const calc = new Calculator();
console.log(calc.PI);
console.log(calc);
console.log(calc.circleArea(20));
console.log(calc.ratio(16, 9, 1920));
console.log(calc.percentage(2, 10));
console.log(calc.add(5, 2));
console.log(calc.subtract(5, 2));
console.log(calc.multiply(5, 2));
console.log(calc.divide(5, 2));
console.log(calc.remainder(5, 2));
console.log(calc.elevate(5, 2));
console.log(calc.sqrt(25));
