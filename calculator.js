/**
 * Add two numbers together
 * @param {Number} operandOne The first operand of the operation
 * @param {Number} operandTwo The second operand of the operation
 * @returns The sum of the operands
 */
function add(operandOne, operandTwo) {
    return operandOne + operandTwo;
}

/**
 * Subtract two numbers
 * @param {Number} operandOne The first operand of the operation
 * @param {Number} operandTwo The second operand of the operation
 * @returns The difference of the operands
 */
function subtract(operandOne, operandTwo) {
    return operandOne - operandTwo;
}

/**
 * Multiply two numbers
 * @param {Number} operandOne The first operand of the operation
 * @param {Number} operandTwo The second operand of the operation
 * @returns The product of the operands
 */
function multiply(operandOne, operandTwo) {
    return operandOne * operandTwo;
}

/**
 * Divide two numbers
 * @param {Number} operandOne The first operand of the operation
 * @param {Number} operandTwo The second operand of the operation
 * @returns The quotient of the operands
 */
function divide(operandOne, operandTwo) {
    // Check for divide by zero error
    if (operandOne === 0 || operandTwo === 0) return 'Nice try!';

    return operandOne / operandTwo;
}

/**
 * Carry out the arithmetic operation
 * @param {Number} operandOne The first operand of the operation
 * @param {Number} operandTwo The second operand of the operation
 * @param {String} operator The operator to use
 * @returns The result of calling one of the arithmetic functions on the operands
 */
function operate(operandOne, operandTwo, operator) {
    if (operator === '+') return add(operandOne, operandTwo);
    if (operator === '-') return subtract(operandOne, operandTwo);
    if (operator === '*') return multiply(operandOne, operandTwo);
    if (operator === '/') return divide(operandOne, operandTwo);
}

// Start the application
(function main() {
    const firstOperand = [];
    const secondOperand = [];
    let activeOperand = firstOperand;
    let operator;
    const calculator = document.querySelector('[data-calculator]');

    /**
     * Wipe all existing data
     */
    function clearData() {
        firstOperand.splice(0);
        secondOperand.splice(0);
        operator = '';
    }

    /**
     * Update the display
     * @param {String} displayContent The content to be written to the display
     */
    function updateInterface(displayContent) {
        calculator.querySelector('.calculator__display').textContent = displayContent;
    }

    /**
     * Perform the calculation and update UI
     * @param {HTMLElement} pressedButton The pressed button
     */
    function runCalculation(pressedButton) {
        const result = operate(
            Number.parseFloat(firstOperand.join('')),
            Number.parseFloat(secondOperand.join('')),
            operator
        );

        clearData();
        operator = pressedButton.value;
        firstOperand.push(result);
        updateInterface(firstOperand.join(''));
    }

    /**
     * Handle calculator events
     * @param {Object} event The event object
     * @returns 
     */
    function handleCalculatorInput(event) {
        // Exit handler if event target wasn't a button
        const pressedButton = event.target;
        if(event.target.tagName !== 'BUTTON') return;

        // Button types determined by the data attribute
        if (pressedButton.hasAttribute('data-number')) {
            activeOperand.push(pressedButton.value);
            updateInterface(activeOperand.join(''));
        }

        if (pressedButton.hasAttribute('data-decimal')) {
            activeOperand.push(pressedButton.value);
            updateInterface(activeOperand.join(''));
        }

        if (pressedButton.hasAttribute('data-function')) {
            /**
             * If a function button is clicked when the second operand is the active
             * one (meaning both operands should be populated): 
             *  - perform the calculation
             *  - prep for next calculation
             *      - wipe existing data
             *      - populate first operand with the result of the calculation
             *      - update the ui
             */
            if (activeOperand === secondOperand && secondOperand[0]) {
                runCalculation(pressedButton);
                return;
            }

            // Get the operator
            operator = pressedButton.value;

            // Switch the active operand
            activeOperand = secondOperand;
        }

        // Perform the calculation and update the UI
        if (pressedButton.hasAttribute('data-equals')) {
            runCalculation(pressedButton);
            activeOperand = secondOperand;
        }
    }

    // Append listener to calculator
    calculator.addEventListener('click', handleCalculatorInput);
})();