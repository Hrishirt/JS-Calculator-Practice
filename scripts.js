console.log("JavaScript file loaded!");
const numberButtons = document.querySelectorAll(".numberButton");
console.log("Button found:", oneButton);

numberButtons.forEach(button => {
    button.addEventListener("click", addNumToForm)
});

// oneButton.addEventListener("click", addOneToForm);
const screen = document.querySelector("#result");
console.log("Screen found:", screen);

const addButton = document.getElementById("addOperator");
console.log("Add Button found: ", addButton)

function addNumToForm(event){
    let val = event.target.textContent || event.target.innerText
    screen.value += val
}

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", clearScreen)

function clearScreen() { 
    screen.value= ''
}

/*
function addOperation() {
    let val = addButton.textContent || addButton.innerText
    if (Number.isInteger(screen.value)){
        console.log(screen.value + " is an integer")
        screen.value = val
    }
    else {
        console.log(screen.value + " is not a integer")
    }
    
}
    */