// Function to perform faulty calculations
const prompt = require("prompt-sync")({ sigint: true });
function faultyCalculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");

  let result;

  // Perform incorrect operations based on the operator
  switch (operator) {
    case "+":
      result = num1 - num2; // Incorrect subtraction
      break;
    case "-":
      result = num1 + num2; // Incorrect addition
      break;
    case "*":
      result = Math.pow(num1, num2); // Incorrect exponential
      break;
    case "/":
      result = num1 * num2; // Incorrect multiplication
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

// Example usage
const result = faultyCalculator();
console.log(`Result: ${result}`);
