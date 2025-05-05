/* This is the To-Do list Logic.  This module contains the core logic for a To-Do List.
John Wirth*/
export class List 
{
    constructor() 
    {
        this.list = [];
    }

    addToList(name, priority) 
    {
        const insertTask = 
        { // holds the values of the task
            name: name,
            priority: parseInt(priority)
        };

        this.list.push(insertTask); //adds to the list

        const listSize = this.list.length - 1;
        for (let i = 0; i < listSize; i++) 
        { //sorts the list
            if (this.list[i].priority > this.list[listSize].priority) 
            {
                const temp = this.list[listSize];
                this.list[listSize] = this.list[i];
                this.list[i] = temp;
            }
        }
    }

    getList() //returns list
    { 
        return this.list;
    }

    userInput() //takes user input for another task
    {
        const name = prompt("Enter the name of the task you are doing:");
        const priority = prompt("Enter the priority level for this task:");
        this.addToList(name, priority);
    }

    printList() //prints the list
    {
        const output = document.getElementById("output");
        output.innerHTML = '';

        this.list.forEach((item, i) => 
        {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-item');
            taskDiv.textContent = `${i + 1}. ${item.name} Priority: ${item.priority}`;
            output.appendChild(taskDiv);
        });
    }
}
