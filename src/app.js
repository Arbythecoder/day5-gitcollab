function addTodo() {
  var todoList = document.getElementById("todo-list");
  var newTodo = document.getElementById("new-todo").value;
  var listItem = document.createElement("li");
  listItem.textContent = newTodo;
  todoList.appendChild(listItem);
}

//  delete function in app.js
function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    item.parentNode.removeChild(item);
  } else {
    console.log("Item not found");
  }
}
