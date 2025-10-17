//global variables for important inputs
let firstNum = ''
let secNum = ''
let operator = null
let numbers = document.getElementsByClassName("buttons");
let operNumbers = document.getElementsByClassName("oper-buttons")
let calculate = document.getElementById("equalbutton")
let clear = document.getElementById("clear-button")
display = document.getElementById("screen-button")

//use eventListeners to fetch buttons user clicks
//for numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    const clickedNum = numbers[i].textContent;

    if (operator === null) {
      firstNum += clickedNum;
      display.textContent = firstNum;
    } else {
      secNum += clickedNum;
      display.textContent = secNum;
    }
  });
}

// For operator buttons
for (let i = 0; i < operNumbers.length; i++) {
  operNumbers[i].addEventListener("click", function() {
    if (firstNum !== '' && operator !== null && secNum !== '') {
      const result = operate();
      firstNum = result; 
      secNum = ''; 
    } 
    operator = operNumbers[i].textContent;
    display.textContent = operator;
  });
}

//for equalsbutton
calculate.addEventListener("click", operate)

//for clearAll
clear.addEventListener("click", clearAll)
 
//add function
function addNum(firstNum, secNum){
    return firstNum + secNum
}
//subtract function
function subtractNum(firstNum, secNum){
    return firstNum - secNum
}
//multiply function
function multiplyNum(firstNum, secNum){
    return firstNum * secNum
}
//divide function
function divideNum(firstNum, secNum){
    return firstNum / secNum
}

//Create a new function operate that
//  takes an operator and two numbers 
// and then calls one of the above functions on the numbers.
function operate (){
    if (operator === "+"){
        return display.textContent = addNum(parseFloat(firstNum), parseFloat(secNum));
    } else if (operator === "-"){
        return display.textContent = subtractNum(parseFloat(firstNum), parseFloat(secNum));
    } else if (operator === "*"){
        return display.textContent = multiplyNum(parseFloat(firstNum), parseFloat(secNum));
    } else if (operator === "/"){
        return display.textContent = divideNum(parseFloat(firstNum), parseFloat(secNum));
    } else {
        return display.textContent = "Sci. Err";
    }
}


//function to clear all
function clearAll(){
    firstNum = ''
    operator = null
    secNum = ''
    display.textContent = "0"
}

