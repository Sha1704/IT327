export class Calculator
{
    result_stack = [];
    operation_stack = [];

    addition(val1, val2)
    {
        let return_value = val1 + val2;
        return return_value;
    }

    subtraction(val1, val2)
    {
        let return_value = val1 - val2;
        return return_value;
    }

    multiplication(val1, val2)
    {
        let return_value = val1 * val2;
        return return_value;
    }

    division(val1, val2)
    {
        let return_value = val1 / val2;
        return return_value;
    }

    printMenu()
    {
        console.log("Choose one of the following options");
        console.log("1 - Addition");
        console.log("2 - Subtraction");
        console.log("3 - Multiplication");
        console.log("4 - Division");
        console.log("5 - Print history");
        console.log("999 - Exit program");
    }

    saveHistory(string_to_add)
    {
        this.result_stack.push(string_to_add);
    }

    printHistory()
    {
        for (let i = 0; i < this.result_stack.length; i++)
        {
            console.log(this.result_stack[i])
        }
    }
}