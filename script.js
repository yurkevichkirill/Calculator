function add(a, b){
    return (Number(a) + Number(b)).toFixed(10);
}

function subtract(a, b){
    return (a - b).toFixed(10);
}

function multiply(a, b){
    return (a * b).toFixed(10);
}

function devide(a, b){
    return (a / b).toFixed(10);
}

function equal(){
    if(num1 != "" && operator != "" && num2 != ""){
        if(operator === "/" && num2 === "0"){
            displayWindow.textContent = "LOL";
            num1 = num2 = operator = result = "";
        }else{
            result = operate(operator, num1, num2);;
            displayWindow.textContent = result;
            num1 = String(result);
            num2 = operator = result = "";
        }        
    }
    else displayWindow.textContent = "ERROR";
}

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

let input1;
let input2;
let inputOperator;

function operate(operator, num1, num2){
    switch(operator){
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return devide(num1, num2);
    }
}

const displayWindow = document.querySelector("#display");

const digButton = document.querySelectorAll(".digit");
digButton.forEach(digit => {
    digit.addEventListener("click", () => {
        if(operator === "" || num1 === "-"){
            if(digit.textContent === "bspace"){
                console.log(num1);
                num1 = num1.slice(0, num1.length - 1);
                console.log(num1);
                displayWindow.textContent = num1;
            }
            else if(!(num1.includes(".") && digit.textContent === ".")){
                num1 += digit.textContent;
                displayWindow.textContent = num1;
            }
            operator = "";            
        } else{
            if(digit.textContent === "bspace"){
                num2 = num2.slice(0, num2.length - 1);
                displayWindow.textContent = num2;
            }
            else if(!(num2.includes(".") && digit.textContent === ".")){
                num2 += digit.textContent;
                displayWindow.textContent = num2;
            }               
        }
    })
});

document.addEventListener("keydown", (event) => {
    if(event.key >= 0 && event.key <= 9 || event.key === '.' || event.key === 'Backspace'){
        if(operator === "" || num1 === "-"){
            if(event.key === "Backspace"){
                num1 = num1.slice(0, num1.length - 1);
                displayWindow.textContent = num1;
            }
            else if(!(num1.includes(".") && event.key === ".")){
                num1 += event.key;
                displayWindow.textContent = num1;
            }
            operator = "";            
        } else{
            if(event.key === "Backspace"){
                num2 = num2.slice(0, num2.length - 1);
                displayWindow.textContent = num2;
            }
            else if(!(num2.includes(".") && event.key === ".")){
                num2 += event.key;
                displayWindow.textContent = num2;
            }               
        }
    }
});

const signButton = document.querySelectorAll(".sign");
signButton.forEach(sign => {
    sign.addEventListener("click", () => {
        if(num1 != "" && operator != "" && num2 != ""){
            equal();
        }
        operator = sign.textContent;

        if(num1 === ""){
            if(operator === "-"){
                num1 += operator;
            } else{
                operator = "";
            }
        }
    })
})

document.addEventListener("keydown", (event) => {
    if(event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/'){
        if(num1 != "" && operator != "" && num2 != ""){
            equal();
        }

        operator = event.key;

        if(num1 === ""){
            if(operator === "-"){
                num1 += operator;
            } else{
                operator = "";
            }
        }
    }
})

const clearButton = document.querySelector(".clean");
clearButton.addEventListener("click", () => {
    num1 = num2 = operator = result = "";
    displayWindow.textContent = "";
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    equal();
})

document.addEventListener("keydown", (event) => {
    if(event.key === '='){
        equal();
    }
})



