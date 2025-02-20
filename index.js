const rs = require("readline-sync");

//Functions
function isOpValid(op) {
  const validOPerators = ["+", "-", "*", "/"];

  if (!validOPerators.includes(op)) {
    console.log("This is not a valid operation");
    operator = rs.question("What operation would you like to perform? ");
    isOpValid(operator);
  }
}

function num1Check(item) {
  if (!Number(item)) {
    console.log("This is not a number");
    firstNumber = rs.question("Please enter the first number: ");
    num1Check(firstNumber);
  }
}

function num2Check(item) {
  if (!Number(item)) {
    console.log("This is not a number");
    secondNumber = rs.question("Please enter the second number: ");
    num2Check(secondNumber);
  }
}

function getAnswer(op, val1, val2) {
  let ans = null;

  switch (op) {
    case "+":
      ans = val1 + val2;
      console.log("The result is: " + ans);
      break;
    case "-":
      ans = val1 - val2;
      console.log("The result is: " + ans);
      break;
    case "*":
      ans = val1 * val2;
      console.log("The result is: " + ans);
      break;
    case "/":
      ans = val1 / val2;
      console.log("The result is: " + ans);
      break;
    default:
      console.error("Invalid Expression");
  }
}

//Start
let operator = rs.question("What operation would you like to perform? ");
isOpValid(operator);

let firstNumber = rs.question("Please enter the first number: ");
num1Check(firstNumber);

let secondNumber = rs.question("Please enter the second number: ");
num2Check(secondNumber);

getAnswer(operator, firstNumber, secondNumber);
