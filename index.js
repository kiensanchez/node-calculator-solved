var rs = require("readline-sync");

// Variables and Functions
let operator = "";
let num1 = null;
let num2 = null;
let ans = 0;
const validOPerators = ["+", "-", "*", "/"];

function getAnswer() {
  switch (operator) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }
}

// Start
let operation = rs.question("What operation would you like to perform? ");

operator = operation;

while (!validOPerators.includes(operator)) {
  console.log("That is not a valid operation");
  let ask = rs.question("What operation would you like to perform? ");
  operator = ask;
}

let firstNumber = rs.question("Please enter the first number: ");

num1 = Number(firstNumber);

while (!num1) {
  console.log("This is not a number");
  let ask = rs.question("Please enter the first number: ");
  num1 = Number(ask);
}

let secondNumber = rs.question("Please enter the second number: ");

num2 = Number(secondNumber);

while (!num2) {
  console.log("This is not a number");
  let ask2 = rs.question("Please enter the second number: ");
  num2 = Number(ask2);
}

getAnswer();

console.log("The result is: " + ans);
