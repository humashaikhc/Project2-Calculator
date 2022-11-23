//Calling all classes in JS file
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const Result = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-clear");

//Empty dis1Num, dis2Num and lastOperation so that input and operations can be done.

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//Adding a function for accepting only one decimal and no more than that.

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }

//Displaying the input and concatenating it to display on calculator
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});
