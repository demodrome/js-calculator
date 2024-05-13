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