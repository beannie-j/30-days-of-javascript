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
        console.log(arr);

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
        console.log(arr);
        let last = arr[arr.length - 1];
        console.log("last elem " + last);
        if (isNumeric(last) && this.isBracketOpen) {
            this.isBracketClose = true;
            this.currentOperand = this.currentOperand.toString() + " " + bracket + " ";
            this.isBracketClose = false;
            this.isBracketOpen = false;
        }   
    }

    render() { 
        console.log("innerText: " + this.currentOperandTextElement.value);
    }

    update() {
        this.currentOperandTextElement.value = this.currentOperand;
        this.previousOperandTextElement.value = this.previousOperand;
    }

    compute() {
        const functionToEvaluate = this.currentOperand;
        let arr = functionToEvaluate.split(" ");
        console.log(arr);
        let computedValue = 0;
        let prev = parseFloat(arr[0]);
        let curr = 0;
        let prevOperator = "";
        
        for (let i = 1; i < arr.length; i++) {
            console.log(prev);
            console.log(curr);
            if (arr[i] === "" || arr[i] === " ") continue;
            if (isNumeric(arr[i])) {
                curr = parseFloat(arr[i]);
                console.log("curr " + curr);
                switch (prevOperator) {
                    case "×":
                        computedValue = prev * curr;
                        prev = computedValue;
                        console.log("val " + computedValue);
                        break;
                    case "+":
                        computedValue = prev + curr;
                        prev = computedValue;
                        console.log("val " + computedValue);
                        break;
                    case "-":
                        computedValue = prev - curr;
                        prev = computedValue;
                        console.log("val " + computedValue);
                        break;
                    case "÷":
                        computedValue = prev / curr;
                        prev = computedValue;
                        console.log("val " + computedValue);
                        break;
                    case "%":
                        computedValue = prev % curr;
                        prev = computedValue;
                        console.log("val " + computedValue);
                        break;
                }
            }
            else {
                prevOperator = arr[i];
                console.log(prevOperator);
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
        console.log(operator);
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
    console.log("opening bracket");
    calculator.appendOpenBracket("(");
    calculator.update();
    calculator.render();
});

closeBracketButton.addEventListener('click', button => {
    if (!calculator.isBracketOpen) return;
    console.log("closing bracket");
    calculator.appendCloseBracket(")");
    calculator.update();
    calculator.render();
});