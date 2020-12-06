const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".clear");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");
const openBracketButton = document.querySelector(".open-bracket");
const closeBracketButton = document.querySelector(".close-bracket");

function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function calc(prev, tempOperator, curr) {
    switch (tempOperator) {
        case "×":
            computedValue = prev * curr;
            break;
        case "+":
            computedValue = prev + curr;
            break;
        case "-":
            computedValue = prev - curr;
            break;
        case "÷":
            computedValue = prev / curr;
            break;
        case "%":
            computedValue = prev % curr;
            break;
    }
    return computedValue;
}


function calculateBracketsValue(tempArr) {
    let computedValue = 0;
    let prev = parseFloat(tempArr[0]);
    let curr = 0;
    let prevOperator = "";
        
    for (let i = 1; i < tempArr.length; i++) {
        if (isNumeric(tempArr[i])) {
            curr = parseFloat(tempArr[i]);
            console.log(curr);
            switch (prevOperator) {
                case "×":
                    computedValue = prev * curr;
                    prev = computedValue;
                    break;
                case "+":
                    computedValue = prev + curr;
                    prev = computedValue;
                    break;
                case "-":
                    computedValue = prev - curr;
                    prev = computedValue;
                    break;
                case "÷":
                    computedValue = prev / curr;
                    prev = computedValue;
                    break;
                case "%":
                    computedValue = prev % curr;
                    prev = computedValue;
                    break;
                }
            }   
        else {
            prevOperator = tempArr[i];
        }   
    }
    return computedValue;
}

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
        this.isBracketOpen = false;
        this.isBrachetClose = false;
        this.isComputeCompleted = false;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
        this.isBracketOpen = false;
        this.isBrachetClose = false;
    }

    changeACtoCE() {
        clearButton.innerHTML = "CE";
    }

    changeCEtoAC() {
        clearButton.innerHTML = "AC";
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === ".") return;
        this.changeACtoCE();
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    appendOperator(operator) {
        if (operator === "") return;
        this.currentOperand = this.currentOperand.toString() + " " + operator.toString() + " ";
    }

    chooseOperation(operator) {
        if (this.currentOperand === "") return;
        this.operator = operator;
        this.appendOperator(operator);
    }

    appendOpenBracket(bracket) {
        const functionToEvaluate = this.currentOperand;
        let arr = functionToEvaluate.split(" ");

        function isOperand(operand) {
            if (operand == '×') return true;
            if (operand == '+') return true;
            if (operand == '-') return true;
            if (operand == '%') return true;
            if (operand == '÷') return true;
        } 
        let last = arr[arr.length - 2];    
        if (isOperand(last)) {
            this.isBracketOpen = true;
            this.currentOperand = this.currentOperand.toString() + " " + bracket + " ";
        }   
    }

    appendCloseBracket(bracket) {
        const functionToEvaluate = this.currentOperand;
        let arr = functionToEvaluate.split(" ");
        let last = arr[arr.length - 1];
        if (isNumeric(last) && this.isBracketOpen) {
            this.isBracketClose = true;
            this.currentOperand = this.currentOperand.toString() + " " + bracket + " ";
            this.isBracketClose = false;
            this.isBracketOpen = false;
        }   
    }

    render() {
    }

    update() {
        this.currentOperandTextElement.value = this.currentOperand;
        this.previousOperandTextElement.value = this.previousOperand;
    }

    compute() {
        const functionToEvaluate = this.currentOperand;
        let arr = functionToEvaluate.split(" ");
        
        for(let i = 0; i < arr.length; i++){ 
            if (arr[i] === "" || arr[i] === " ") { 
                arr.splice(i, 1); 
            }
        }
        
        console.log(arr);

        let computedValue = 0;
        let prev = parseFloat(arr[0]);
        let curr = 0;
        let prevOperator = "";
        
        for (let i = 1; i < arr.length; i++) {
            if (isNumeric(arr[i])) {
                curr = parseFloat(arr[i]);
                console.log(curr);
                switch (prevOperator) {
                    case "×":
                        computedValue = prev * curr;
                        prev = computedValue;
                        break;
                    case "+":
                        computedValue = prev + curr;
                        prev = computedValue;
                        break;
                    case "-":
                        computedValue = prev - curr;
                        prev = computedValue;
                        break;
                    case "÷":
                        computedValue = prev / curr;
                        prev = computedValue;
                        break;
                    case "%":
                        computedValue = prev % curr;
                        prev = computedValue;
                        break;
                    case "(":
                        let tempOperator = arr[i-2];
                        let tempArr= [];
                        let end = 0;
                        console.log("temp " + tempOperator);
                        for (let j = i; j < arr.length; j++)
                        {
                            console.log(arr[j]);
                            tempArr.push(arr[j]);
                            if (arr[j] == ")")
                            {   
                                tempArr.pop();
                                end = j;
                                console.log(tempArr);
                                let computedBracketsValue = calculateBracketsValue(tempArr);
                                curr = computedBracketsValue;
                                console.log("brac " + curr);
                                computedValue = calc(prev, tempOperator, curr);
                                console.log("computed value " + computedValue);
                                prev = computedValue;
                                break;
                            }
                        }
                        i = end;
                        console.log(arr);
                        console.log(arr[i]);
                        break;
                }
            }
            else {
                prevOperator = arr[i];
            }
        }
        console.log(functionToEvaluate);
        this.previousOperand = functionToEvaluate;
        this.currentOperand = computedValue;
        this.isComputeCompleted = true;
        this.changeCEtoAC();
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let val = button.innerText;
        calculator.appendNumber(val);
        calculator.update();
        calculator.render();
    });
});

operationButtons.forEach(button => {
    if (this.currentOperand == "") return;
    button.addEventListener('click', () => {
        let operator = button.innerText;
        calculator.chooseOperation(operator);
        calculator.update();
        calculator.render();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.update();
    calculator.render();
});

clearButton.addEventListener('click', button => {
    let clearAction = clearButton.innerHTML;
    if (clearAction == "CE") calculator.delete();
    if (clearAction == "AC") calculator.clear();
    calculator.update();
    calculator.render();
});

openBracketButton.addEventListener('click', button => {
    calculator.appendOpenBracket("(");
    calculator.update();
    calculator.render();
});

closeBracketButton.addEventListener('click', button => {
    if (!calculator.isBracketOpen) return;
    calculator.appendCloseBracket(")");
    calculator.update();
    calculator.render();
});