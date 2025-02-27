const rs = require("readline-sync");

//Functions
function isOpValid() {
  operator = rs.question("What operation would you like to perform? ");
  const validOPerators = ["+", "-", "*", "/"];

  if (!validOPerators.includes(operator)) {
    console.log("This is not a valid operation");
    isOpValid();
  }
}

function num1Check(item) {
  firstNumber = rs.question("Please enter the first number: ");
  if (!Number(firstNumber)) {
    console.log("This is not a number");
    num1Check(firstNumber);
  }
}

function num2Check(item) {
  secondNumber = rs.question("Please enter the second number: ");
  if (!Number(secondNumber)) {
    console.log("This is not a number");
    num2Check(secondNumber);
  }
}

function getAnswer(op, val1, val2) {
  let ans = null;

  switch (op) {
    case "+":
      ans = Number(val1) + Number(val2);
      console.log("The result is: " + ans);
      break;
    case "-":
      ans = Number(val1) - Number(val2);
      console.log("The result is: " + ans);
      break;
    case "*":
      ans = Number(val1) * Number(val2);
      console.log("The result is: " + ans);
      break;
    case "/":
      ans = Number(val1) / Number(val2);
      console.log("The result is: " + ans);
      break;
    default:
      console.error("Invalid Expression");
  }
}

function calcStart() {
  let operator = "";
  let firstNumber = null;
  let secondNumber = null;

  isOpValid();
  num1Check();
  num2Check();
}

//Start
calcStart();
getAnswer(operator, firstNumber, secondNumber);
