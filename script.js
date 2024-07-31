const display = document.querySelector("#screen")
const buttonContainer = document.querySelector("#buttons")

function add (num1, num2){
    return num1+num2
}

function subtract(num1, num2){
    return num1-num2
}

function multiply(num1, num2){
    return num1*num2
}

function divide (num1, num2){
    return num1/num2
}

function calculate(operator,num1, num2){
    switch(operator){
        case "+":
            return add(num1,num2)
        case "-":
            return subtract(num1,num2)
        case "x":
            return multiply(num1,num2)
        case "/":
            return divide(num1,num2)
    }
    return subtract(num1, num2)
}




const isNumber = (value) => "1234567890".includes(value)
const isOperator = (value) => "+-x/".includes(value)

let operatorIsClicked = false


let num1 = undefined, operator = undefined, num2 = undefined;

let userInput = []

buttonContainer.addEventListener("click", (e) => {
    let button = e.target.id

    if (isNumber(button)) {
        if (operatorIsClicked) {
            display.textContent =""
            operatorIsClicked = false
        }
        display.textContent += button}



    if (isOperator(button)) {
        if (userInput.length < 2 ){
            operatorIsClicked = true
            userInput.push(display.textContent)
            userInput.push(button)

            
        } else{
            operatorIsClicked = true
            let result = calculate(userInput[1], userInput[0], display.textContent)
            display.textContent = result
         
            userInput[0] = result
            userInput[1] = button
            console.log(userInput)
        }
        console.log(userInput)
    
    }
    if (button == "=" && userInput.length == 2){
        operator = userInput[1]
        num1 = userInput[0]
        num2 = display.textContent
        display.textContent = (calculate(operator, Number(num1), Number(num2)))  
        operatorIsClicked = true
        userInput = []
    }
    if (button == "." && display.textContent != "" && !display.textContent.includes(".")) display.textContent += "."
    if (button == "del"){
        let newString = display.textContent.split("")
        newString.pop()
        let fixString = newString.join()
        display.textContent = fixString
    }
    if (button == "ac"){
        display.textContent = ""
        userInput = []
    }
})

