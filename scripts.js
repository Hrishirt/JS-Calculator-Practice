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
}


function addOperation() {
    firstNumber = screen.value
    secondNumber = screen.value
    console.log(firstNumber);
    let val = addButton.textContent || addButton.innerText
    screen.value += val
}

function equalSign() {
    screen.value = parseInt(firstNumber) + parseInt(secondNumber);
}