//get all elements needed
const buttons = document.getElementsByClassName("buttons")
const operbuttons= document.getElementsByClassName("oper-buttons")
const equalbutton = document.getElementsByClassName("equalbutton")[0]
const display = document.getElementsByClassName("screen-button")[0]
const clearbtn = document.getElementById("clear-button")

let operator = [];
let firstNumArr = [];
let secondNumArr = [];
let calcArr = [];



for (let i = 0; i < operbuttons.length; i++) {
    operbuttons[i].addEventListener("click", function(){
       operator.push(operbuttons[i].textContent);   
       return operator.join("")
    }
)
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
       firstNumArr.push(buttons[i].textContent);
       return firstNumArr.join("")
    })}

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (operator != null && firstNumArr != null) {
         secondNumArr.push(buttons[i].textContent);
        }
       return secondNumArr.join("")  
    })}}

setTimeout(() => {
     console.log(calcArr) 
}, 8000);   
if (firstNumArr != null) {
       calcArr.push(firstNumArr, operator) 
}else if
(operator != null && firstNumArr != null) {
        calcArr.push(firstNumArr, operator, secondNumArr);
    }else
        console.log("relax, you are there yet")

setTimeout(() => {
     console.log(calcArr) 
}, 8000);   
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


equalbutton.addEventListener("click", function() {
    calcArr(numArr);
});