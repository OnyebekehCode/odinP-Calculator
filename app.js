//global variables for important inputs
let firstNum;
let secNum;
let operator;

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

//test using console
console.log(divideNum(9, 3))
console.log(multiplyNum(9, 3))
console.log(addNum(9, 3))
console.log(subtractNum(9, 3))
console.log(operate("*", 7, 2))


//Create a new function operate that
//  takes an operator and two numbers 
// and then calls one of the above functions on the numbers.
function operate (operator, firstNum, secNum){
    if( operator === "+"){
        return console.log(addNum(firstNum, secNum))
    }else if( operator === "-"){
        return console.log(subtractNum(firstNum, secNum))
    }else if( operator === "*"){
        return console.log(multiplyNum(firstNum, secNum))
    }else if( operator === "/"){
        return console.log(divideNum(firstNum, secNum))
    }
}
