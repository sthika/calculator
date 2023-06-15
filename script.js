const userInput = document.querySelector(".calculator__input")

let fnToUse = null;
let inputValue = ''

let press = (num) => {
    if (num === '+') {
        fnToUse = sum; 
    } else if (num === '-') {
        fnToUse = diff; 
    } else if (num === '*') {
        fnToUse = multiply; 
    } else if (num === '/') {
        fnToUse = devide; 
    }
    userInput.style.color = "black"
    userInput.style.fontSize = "24px"
    
    inputValue = inputValue + num
    userInput.value = inputValue
    
    if (fnToUse === sum) {
        arr = userInput.value.split("+")
    } else if (fnToUse === diff) {
        arr = userInput.value.split("-")
    } else if (fnToUse === multiply) {
        arr = userInput.value.split("*")
    } else if (fnToUse === devide) {
        arr = userInput.value.split("/")
    }  
}

let equal = () => {
    erase()
    const [a, b] = arr;
    const res  = fnToUse(Number(a), Number(b));
    userInput.value = res
    userInput.style.color = "green"
    userInput.style.fontSize = "50px"
}


let erase = () => {
    userInput.style.color = "black"
    inputValue = ''
    userInput.value = inputValue
}

const sum = (a, b) => {
    return a + b;
}
const diff = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const devide = (a, b) => {
    return a / b;
}