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
        activeOperand = firstOperand;
        operator = '';
    }

    /**
     * Update the display
     * @param {String} displayContent The content to be written to the display
     */
    function updateInterface(displayContent) {
        calculator.querySelector('.calculator__display').textContent = displayContent;
    }
})();