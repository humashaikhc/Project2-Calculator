//Calling all classes in JS file
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");

//Empty dis1Num, dis2Num and lastOperation so that input and operations can be done.
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//Adding event listener to the numbers
//Accepting only one decimal instead of multiple using if else if statements.
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }

    //Displaying input at display2. Concatening more than 1 digit number.
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});

//Creating a math function for operations on buttons.
function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
}

//A function to rearrange the display after pressing inputs..
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1.innerText = dis1Num;
  display2.innerText = "";
  dis2Num = "";
}

//Adding event listener for each operations.Calling math function to do operations.
operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    //Operation parameters will be saved in operationName(eg, +, -, etc)
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

//Checking the inputs and displaying the output on display2.
//Adding event listener to equal button.
equal.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
  dis2Num = result;
  dis1Num = "";
});

//Clearing the display
clearAll.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  result = "";
  display1.innerText = "0";
  display2.innerText = "0";
  tempResult.innerText = "0";
});
