import { Calculator } from './code.js';

const calculator = new Calculator();

// Get references to DOM elements
const operationSelect = document.getElementById('operation');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcBtn = document.getElementById('calcBtn');
const historyBtn = document.getElementById('historyBtn');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Handle Calculate button click
calcBtn.addEventListener('click', () => {
    const operation = parseInt(operationSelect.value, 10);
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    let historyEntry;

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

    resultDisplay.textContent = `Result: ${result}`;
    calculator.saveHistory(historyEntry);
});

// Handle Show History button click
historyBtn.addEventListener('click', () => {
    const history = calculator.getHistory(); // Assuming `getHistory()` returns an array of strings
    historyList.innerHTML = ''; // Clear previous history

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
});