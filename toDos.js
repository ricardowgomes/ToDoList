let input = prompt("what would you like to do?")
const todos = ['Buy whiteboard', 'Go to costco'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('These are the things that you have to do:');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (input === 'new') {
    const newToDo = prompt('What is the new To Do?');
    todos.push(newToDo)
    console.log(`${newToDo} added to the list!`);
  } else if (input === 'delete') {

    const index = parseInt(prompt('Enter an index of item to delete'));

    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`You deleted the item ${deleted[0]}`)
    } else {
      console.log('Not a valid index')
    }
  }
  input = prompt("what would you like to do?")
}
console.log("OK, looks like you are finished!")