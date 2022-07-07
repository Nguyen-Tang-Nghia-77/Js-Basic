let input = prompt("What would you like to do ?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    let input = prompt("What would you like to do ?"); 
    if (input === 'list') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);

        }
        console.log('****************');
      
    } else if(input === 'new') {
        const newTodo = prompt('Ok, What is the new todo?');
        todos.push(newTodo);
        console.log(newTodo)
    }
     
}
console.log("Ok Quit The App");

