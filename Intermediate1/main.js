/*This is the To-Do list main module, which takes the functions in pgm01.js and runs them, inputting them into a website to make the list.
-John Wirth
 */
import { List } from './pgm01.js';

document.getElementById("start-btn").addEventListener("click", () => {
    const list = new List();

    function askNext() {
        const answer = prompt("Would you like to add a task? (y/n)");
        if (answer && answer.toLowerCase() === 'y') {
            list.userInput();
            askNext();
        } else {
            const tasks = list.getList();
    
            if (tasks.length === 0) {
                document.getElementById("output").textContent = "No tasks were added.";
            } else {
                list.printList(); 
            }
        }
    }

    askNext();
});
