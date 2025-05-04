var list = [];

function addToList(name, priority)
{
    var insertTask =  { //creates an object to hold the info of the task
        name:name,
        priority:priority
    };
    
    list.push(insertTask); //adds to the array
   

    var listSize = list.length-1;

    for(var i = 0; i<listSize;i++)
    {
         if(list[i].priority>list[listSize].priority) //sorts the array by priority
        {
            var temp = list[listSize];
            list[listSize]=list[i];
            list[i]=temp;
        }
        
    }
   
}

function printList(list) // prints the list in order
{
    for(var i =0;i<list.length;i++)
    {
        console.log(list[i].name);
    }
}

function userInput() //takes user tasks and adds them.
{
    var name = prompt("Enter the name of the task you are doing: ");
    var priority = prompt("Enter the priority level for this task: ");
    addToList(name, priority);
}

addToList("Do Homework", 2);
addToList("Prepare Dinner", 2);
addToList("Do nothing", 3);
addToList("Go to the mall", 5);
addToList("Go shopping ", 5);
addToList("Work on car", 4);
addToList("Do chores", 1);

printList(list);
