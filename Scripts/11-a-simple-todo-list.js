/*Algorithm
      1. Create array to store todos
      2. When we click "Add",
      3. Get text from textbox
      4. Add it to array
      5. console.log() the array
      */

const todoList = [];

function addTodo() {
  const nameInput = document.querySelector(".js-todo-name1");

  const todoText = nameInput.value.trim();

  if (todoText !== "") {
    todoList.push(todoText);
    console.log(todoList);
    nameInput.value = "";

    renderTodoList();
  }
}

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `<p>${todoList[i]}</p>`;
  }

  document.querySelector(".js-todo-list1").innerHTML = todoListHTML;
}

// Array of objects to store todos
let todoList1 = JSON.parse(localStorage.getItem("todos")) || [];

// Retrieve stored todos or initialize an empty array: JSON.parse(localStorage.getItem('todos'))

// Load todos from localStorage on page load
document.addEventListener("DOMContentLoaded", renderTodoList1);

function addTodo1() {
  // Get input values
  const nameInput = document.querySelector(".js-todo-name");
  const dateInput = document.querySelector(".js-due-date");

  const todoText = nameInput.value.trim();
  const setDate = dateInput.value;

  // Prevent adding empty todos usinf either the OR or AND operator

  /*
        if (todoText !== '' && dateValue !== '') {
          todoList1.push({
            nameInputValue: todoText,
            dateInputValue: dateValue
        });
        */
  if (todoText === "" || setDate === "") {
    alert("Please enter both a task name and a due date.");
    return; // Stop function if inputs are empty
  }

  // Add new todo object to array
  todoList1.push({
    todoName: todoText,
    dueDate: setDate,
  });

  // Display the array todoList1 on the console
  console.log(todoList1);

  // Save updated list to localStorage
  localStorage.setItem("todos", JSON.stringify(todoList1));

  // Clear inputs
  nameInput.value = "";
  dateInput.value = "";

  // Update the displayed list
  renderTodoList1();
}

function renderTodoList1() {
  let todoListHTML = "";

  for (let i = 0; i < todoList1.length; i++) {
    const { todoName, dueDate } = todoList1[i];

    todoListHTML += `
          <div class="todo-row">
            <div>${todoName}</div> 
            <div>${dueDate}</div>
            <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
          </div>
        `;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function deleteTodo(index) {
  // Remove the specific item from the array
  todoList1.splice(index, 1);

  // Update localStorage
  localStorage.setItem("todos", JSON.stringify(todoList1));

  // Update the displayed list
  renderTodoList1();
}
