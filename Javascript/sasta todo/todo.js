let choice = prompt("Enter your choice");
let todo = [];

while (choice !== "quit") {
    if (choice === "new") {
        let task = prompt("Enter a new task...");
        todo.push(task);
        console.log(`${task} added to the todo list!`);
    } else if (choice === "list") {
        console.log('********************');
        for (let i = 0; i < todo.length; i++)
            console.log(`${i}: ${todo[i]}`);
        console.log('********************');
    } else if (choice == "delete") {
        let idx = parseInt(prompt("Enter the index of the item to be deleted"));
        if (idx) {
            let deleted = todo.splice(idx, 1);
            console.log(`${deleted[0]} has been deleted!`);
        } else {
            console.log('Invalid Input!');
        }
    }
    choice = prompt("Enter your choice");
}

console.log("Quitting...");