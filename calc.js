

class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }
  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} width 
   * @returns 
   */
  ratio(x, y, width) {
    return (width * y) / x;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */
  percentage(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    }
    return ((x / y) * 100).toFixed(2) + "%";
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  add(x, y) {
    return x + y;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  subtract(x, y) {
    return y - x;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  multiply(x, y) {
    return x * y;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  divide(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    }
    return x / y;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  remainder(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    }
    return x % y;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */

  elevate(x, y) {
    return Math.pow(x, y);
  }

  /**
   * 
   * @param {*} x 
   * @returns 
   */

  sqrt(x) {
    if (x < 0) {
      return "Error: Cannot calculate the square root of a negative number";
    }
    return Math.sqrt(x);
  }
}

const calc = new Calculator();

console.log(calc.ratio(5, 7, 300));
console.log(calc.percentage(3, 12));
console.log(calc.add(5, 7));
console.log(calc.subtract(5, 7));
console.log(calc.multiply(5, 7));
console.log(calc.divide(35, 7));
console.log(calc.remainder(7, 5));
console.log(calc.elevate(5, 3));
console.log(calc.sqrt(25));
console.log(calc.sqrt(-25));
