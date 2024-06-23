// src/app.js
function addTodo() {
  var todoList = document.getElementById("todo-list");
  var newTodo = document.getElementById("new-todo").value;
  var listItem = document.createElement("li");
  listItem.textContent = newTodo;
  todoList.appendChild(listItem);
}
