//get all elements needed
const buttons = document.getElementsByClassName("buttons")
const operbuttons= document.getElementsByClassName("oper-buttons")
const equalbutton = document.getElementsByClassName("equalbutton")
const display = document.getElementsByClassName("screen-button")
const clearbtn = document.getElementById("clear-button")

//asign variables neccessary
let numbers;
let operator;
let numArr = [];
let displayScreen = [];


//button to listen for different click events

//listen for click on buttons for textcontent  on only numbers 
for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener("click", function(){
        numArr.push(buttons[i].textContent)
    return console.log(numArr)
})    
}

//clear the array holding inputs
 clearbtn.addEventListener("click", function(){
      numArr.splice(0, numArr.length)
    return console.log(numArr)})
//test if the two buttons works together and as expected
setTimeout(() => {
    console.log(numArr)
}, 10000); 

//neccessary functions

//add function
 function add(a, b, c){
    
    if(c === "+"){
    return a + b
    }else { return "Error"
}
}
//subtract function
function subtract(a, b, c){
    if(c === "-"){
    return a - b
    }else { return "Error"
}
}
//division function
function divide(a, b, c){
    if(c === "/"){
    return a / b
    }else { return "Error"
}}
//multiplication function 
function multiply(a, b, c){
    if(c === "*"){
    return a * b
    }else { return "Error"
}
}
