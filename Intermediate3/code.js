/**
 * Calculator Class
 * 
 * This program defines a Calculator class that provides basic arithmetic operations
 * (addition, subtraction, multiplication, and division) and maintains a history of 
 * operations performed. The history can be saved and printed for review.
 * 
 * Author: Adiboshi Shalom
 * Date: May 4, 2025
 */

export class Calculator {
    // Stack to store the history of results
    result_stack = [];

    /**
     * Performs addition of two numbers.
     * @param {number} val1 - The first number.
     * @param {number} val2 - The second number.
     * @returns {number} The sum of val1 and val2.
     */
    addition(val1, val2) {
        let return_value = val1 + val2;
        return return_value;
    }

    /**
     * Performs subtraction of two numbers.
     * @param {number} val1 - The first number.
     * @param {number} val2 - The second number.
     * @returns {number} The difference between val1 and val2.
     */
    subtraction(val1, val2) {
        let return_value = val1 - val2;
        return return_value;
    }

    /**
     * Performs multiplication of two numbers.
     * @param {number} val1 - The first number.
     * @param {number} val2 - The second number.
     * @returns {number} The product of val1 and val2.
     */
    multiplication(val1, val2) {
        let return_value = val1 * val2;
        return return_value;
    }

    /**
     * Performs division of two numbers.
     * @param {number} val1 - The numerator.
     * @param {number} val2 - The denominator.
     * @returns {number} The quotient of val1 divided by val2.
     */
    division(val1, val2) {
        let return_value = val1 / val2;
        return return_value;
    }

    /**
     * Prints a menu of available operations to the console.
     */
    printMenu() {
        console.log("Choose one of the following options");
        console.log("1 - Addition");
        console.log("2 - Subtraction");
        console.log("3 - Multiplication");
        console.log("4 - Division");
        console.log("5 - Print history");
        console.log("999 - Exit program");
    }

    /**
     * Saves a string entry to the result history stack.
     * @param {string} string_to_add - The string to add to the history.
     */
    saveHistory(string_to_add) {
        this.result_stack.push(string_to_add);
    }

    /**
     * Prints the history of operations to the console.
     */
    printHistory() {
        for (let i = 0; i < this.result_stack.length; i++) {
            console.log(this.result_stack[i]);
        }
    }
}