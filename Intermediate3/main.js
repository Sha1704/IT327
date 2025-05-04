/**
 * Calculator Application
 * 
 * This program provides a simple web-based calculator interface that allows users to perform
 * basic arithmetic operations (addition, subtraction, multiplication, and division). It also
 * maintains a history of operations performed, which can be displayed on the interface.
 * 
 * Author: Adiboshi Shalom
 * Date: May 4, 2025
 */

import { Calculator } from './code.js';

const calculator = new Calculator();

// Get references to DOM elements
const operationSelect = document.getElementById('operation'); // Dropdown for selecting operation
const num1Input = document.getElementById('num1'); // Input field for the first number
const num2Input = document.getElementById('num2'); // Input field for the second number
const calcBtn = document.getElementById('calcBtn'); // Button to perform calculation
const historyBtn = document.getElementById('historyBtn'); // Button to display history
const resultDisplay = document.getElementById('result'); // Element to display the result
const historyList = document.getElementById('historyList'); // Element to display the history list

// Handle Calculate button click
calcBtn.addEventListener('click', () => {
    const operation = parseInt(operationSelect.value, 10); // Get selected operation
    const num1 = parseFloat(num1Input.value); // Get first number
    const num2 = parseFloat(num2Input.value); // Get second number

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
        return;
    }

    let result; // Variable to store the result of the operation
    let historyEntry; // Variable to store the history entry

    // Perform the selected operation
    switch (operation) {
        case 1: // Addition
            result = calculator.addition(num1, num2);
            historyEntry = `You added ${num1} and ${num2} and got ${result}.`;
            break;
        case 2: // Subtraction
            result = calculator.subtraction(num1, num2);
            historyEntry = `You subtracted ${num1} and ${num2} and got ${result}.`;
            break;
        case 3: // Multiplication
            result = calculator.multiplication(num1, num2);
            historyEntry = `You multiplied ${num1} and ${num2} and got ${result}.`;
            break;
        case 4: // Division
            if (num2 === 0) {
                resultDisplay.textContent = 'Division by zero is not allowed.';
                return;
            }
            result = calculator.division(num1, num2);
            historyEntry = `You divided ${num1} by ${num2} and got ${result}.`;
            break;
        default:
            resultDisplay.textContent = 'Invalid operation.';
            return;
    }

    // Display the result
    resultDisplay.textContent = `Result: ${result}`;

    // Save the operation to history
    calculator.saveHistory(historyEntry);
});

// Handle Show History button click
historyBtn.addEventListener('click', () => {
    const history = calculator.result_stack; // Get the history stack from the Calculator class
    historyList.innerHTML = ''; // Clear previous history

    // Display each history entry as a list item
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
});