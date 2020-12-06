const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === ".") return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        console.log(this.currentOperand);
    }

    chooseOperation(operation) {

    }

    render() {
        this.currentOperandTextElement.value = this.currentOperand;
        console.log("render: " + this.currentOperand);
        console.log("innerText: " + this.currentOperandTextElement.value);
    }

    update() {
        console.log("update: " + this.currentOperand);
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let val = button.innerText;
        calculator.appendNumber(val);
        calculator.update();
        calculator.render();
    })
});