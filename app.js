//get all elements needed
const buttons = document.getElementsByClassName("buttons")
const operbuttons= document.getElementsByClassName("oper-buttons")
const equalbutton = document.getElementsByClassName("equalbutton")[0]
const display = document.getElementsByClassName("screen-button")[0]
const clearbtn = document.getElementById("clear-button")

let operator = [];
let firstNumArr = [];
let secondNumArr = [];
let result = []

for (let i = 0; i < operbuttons.length; i++) {
    operbuttons[i].addEventListener("click", function(){
       operator.push(operbuttons[i].textContent);
       display.textContent = operator.join("")
   
       return console.log(operator.join(""))
    })}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
       firstNumArr.push(buttons[i].textContent);
       display.textContent = firstNumArr.join("")
       return console.log(firstNumArr.join(""))
    })}

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (operator != null && firstNumArr != null) {
         secondNumArr.push(buttons[i].textContent);
         display.textContent = secondNumArr.join("")
        }
       return console.log(secondNumArr.join(""))
    })}

    clearbtn.addEventListener("click", function(){
        firstNumArr = [];
        secondNumArr = [];
        operator = [];
        display.textContent = "|"
    }    )


    equalbutton.addEventListener("click", function(){
       display.textContent = calcArr()

    })
  
function calcArr (firstNumArr, secondNumArr){
        if (firstNumArr != null && secondNumArr  != null && operator  != null) {
    switch (operator) {
        case "+": result.push(add(firstNumArr,secondNumArr))
             break;
        case "-": result.push(subtract(firstNumArr,secondNumArr))
            break;
        case "/": divide(firstNumArr,secondNumArr)
             break;  
        case "*": multiply(firstNumArr,secondNumArr)
             break;    
    }
    return
    }
}

//add function
 function add(a, b){
    return a + b
}

//subtract function
function subtract(a, b){
    return a - b
}
//division function
function divide(a, b){
    return a / b
}
//multiplication function 
function multiply(a, b){
    return a * b
}
