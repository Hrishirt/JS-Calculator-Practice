let addoperator = false
let minusoperator = false
let multipyoperator = false; 
let divideoperator = false;

console.log("JavaScript file loaded!");
const numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener("click", addNumToForm)
});

firstNumber = ''
secondNumber = ''
// oneButton.addEventListener("click", addOneToForm);
const screen = document.querySelector("#result");
console.log("Screen found:", screen);

const equal = document.querySelector("#equals");
equal.addEventListener("click", equalSign)
const addButton = document.getElementById("addOperator");
console.log("Add Button found: ", addButton)

addButton.addEventListener("click", addOperation)

function addNumToForm(event){
    let val = event.target.textContent || event.target.innerText
    screen.value += val
}

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", clearScreen)

function clearScreen() { 
    screen.value= ''
    addoperator = false
    minusoperator = false
    multipyoperator = false; 
    divideOperator = false
}


const minusButton = document.getElementById('minusOperator')
minusButton.addEventListener('click', minusoperation)

const multiplyButton = document.getElementById('multiplyOperator')
multiplyButton.addEventListener('click', multiplyOperation)

const divideButton = document.getElementById('divideOperator');
divideButton.addEventListener('click', divideOperation)

function divideOperation() {
    firstNumber = screen.value;
    divideoperator = true;
    let val = divideButton.textContent || divideButton.innerText;
    screen.value += val
}

function multiplyOperation() {
    firstNumber = screen.value;
    multipyoperator = true
    let val = multiplyButton.textContent || multiplyButton.innerText;
    screen.value += val
}

function minusoperation(){
    firstNumber = screen.value;
    minusoperator = true 
    let val = minusButton.textContent || minusButton.innerText;
    screen.value += val
}

function addOperation() {
    firstNumber = screen.value
    addoperator = true
    console.log(firstNumber);
    let val = addButton.textContent || addButton.innerText
    screen.value += val
}

function equalSign() {
    if (addoperator == true) {
        addChar = '+'
        const addCharIndex = screen.value.indexOf(addChar)
        secondNumber = screen.value.substring(addCharIndex + 1);
        screen.value = parseFloat(firstNumber) + parseFloat(secondNumber);
        addoperator = false
    }

    if (minusoperator == true){
        minuschar = '-';
        const minusCharIndex = screen.value.indexOf(minuschar)
        secondNumber = screen.value.substring(minusCharIndex + 1);
        screen.value = parseFloat(firstNumber) - parseFloat(secondNumber);
        minusoperator = false
    }

    if (multipyoperator == true)
    {
        multiplyChar = "x";
        const multiplyCharIndex = screen.value.indexOf(multiplyChar);
        secondNumber = screen.value.substring(multiplyCharIndex + 1);
        screen.value = parseFloat(firstNumber) * parseFloat(secondNumber);
        multipyoperator = false;
    }
   
    if (divideoperator == true)
    {
        divideChar = "÷";
        const divideCharIndex = screen.value.indexOf(divideChar);
        secondNumber = screen.value.substring(divideCharIndex + 1);
        if (secondNumber == "0")
        {
            screen.value = "undefined"
        }
        else
        {
            screen.value = parseFloat(firstNumber) /  parseFloat(secondNumber);
        }
        divideoperator = false
    }

}

// Test comment for push