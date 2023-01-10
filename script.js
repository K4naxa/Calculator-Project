let windowValue;
let snapshot;
let snapshot2;
let operator;
const calculations = document.getElementById("calculations");
const userInput = document.getElementById("userInput");
const Div = document.createElement("div");
const delBtn = document.getElementById("delBtn");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const sum = document.getElementById("sum");

num1.onclick = (e) => addValue(1);
num2.onclick = (e) => addValue(2);
num3.onclick = (e) => addValue(3);
num4.onclick = (e) => addValue(4);
num5.onclick = (e) => addValue(5);
num6.onclick = (e) => addValue(6);
num7.onclick = (e) => addValue(7);
num8.onclick = (e) => addValue(8);
num9.onclick = (e) => addValue(9);
num0.onclick = (e) => addValue(0);

add.onclick = (e) => addFunction("+");
subtract.onclick = (e) => addFunction("-");
multiply.onclick = (e) => addFunction("*");
divide.onclick = (e) => addFunction("/");

sum.onclick = () => calculationFunction();
delBtn.onclick = () => clean();

function clean() {
  userInput.innerHTML = "";
  snapshot = 0;
}
function addValue(value) {
  userInput.innerHTML += value;
}

function addFunction(type) {
  snapshot = parseInt(userInput.innerHTML);
  console.log("snapshot is " + snapshot);
  userInput.innerHTML = "";
  operator = type;
  console.log("func is " + operator);
}

function calculationFunction() {
  switch (operator) {
    case "+":
      userInput.innerHTML = snapshot + parseInt(userInput.innerHTML);
      break;
    case "-":
      userInput.innerHTML = snapshot - parseInt(userInput.innerHTML);
      break;
    case "*":
      userInput.innerHTML = snapshot * parseInt(userInput.innerHTML);
      break;
    case "/":
      userInput.innerHTML = snapshot / parseInt(userInput.innerHTML);
      break;

    default:
      userInput.innerHTML = "Error in the calculation Function";
      break;
  }
}

// function calculationFunction() {
//   if (func == "+") userInput.innerHTML = snapshot + window.innerHTML;
//   else if (func == "-") userInput.innerHTML = snapshot - window.innerHTML;
//   else if (func == "*") userInput.innerHTML = snapshot * window.innerHTML;
//   else if (func == "/") userInput.innerHTML = snapshot / window.innerHTML;
//   else windows.innerHTML = "Error in calculation";
// }

// add sum button functionality
// make "active" css class  to show with what functions is the calculation being done
