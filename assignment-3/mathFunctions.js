const functions = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b === Infinity ? Error("CANNOT DIVIDE BY 0") : a / b;
    }
  };
  
  module.exports = functions;  