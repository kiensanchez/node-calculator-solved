const rs = require("readline-sync");

//Functions
function isOpValid() {
  operator = rs.question("What operation would you like to perform? ");
  const validOPerators = ["+", "-", "*", "/"];

  if (!validOPerators.includes(operator)) {
    console.log("This is not a valid operation");
    isOpValid();
  }

  return operator;
}

function askForNum() {
  num = rs.question("Please enter a number: ");
  if (!Number(num)) {
    console.log("This is not a number");
    askForNum();
  }

  return num;
}

function getAnswer(op, val1, val2) {
  let ans = null;
  let str = "The result is: ";

  switch (op) {
    case "+":
      ans = Number(val1) + Number(val2);
      return console.log(str + ans);
    case "-":
      ans = Number(val1) - Number(val2);
      return console.log(str + ans);
    case "*":
      ans = Number(val1) * Number(val2);
      return console.log(str + ans);
    case "/":
      ans = Number(val1) / Number(val2);
      return console.log(str + ans);
    default:
      console.log("Invalid expression");
  }
}

function calcStart() {
  let operator = isOpValid();
  let num = "";
  let firstNumber = askForNum();
  let secondNumber = askForNum();

  getAnswer(operator, firstNumber, secondNumber);
}

//Start
calcStart();
