// step 1: Select Dom Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");

const todoList = document.querySelector(".todo-list");

// Step 2: Create Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteOrCompleteTodo);
filterTodo.addEventListener("change",filtersTodo);
function addTodo(e){
    e.preventDefault();
    //create the todoDiv container
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create a new todo list item
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
  

 // Create the complete to do button.
 const completeButton = document.createElement('button');
 completeButton.classList.add('complete-btn');
 completeButton.innerHTML = `<i class="fas fa-check"></i>`;
 todoDiv.appendChild(completeButton);

// Create the delete todo button
const trashButton = document.createElement('button');
trashButton.classList.add('trash-btn');
trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
todoDiv.appendChild(trashButton);
// Append the todo div to the todo list
todoList.appendChild(todoDiv);
todoInput.value = "";
}
function deleteOrCompleteTodo(e){
const targetBtn = e.target;

// e (event) = the information of a change on a website
// e.target = the element that the event happened on
if (targetBtn.classList.contains('trash-btn')) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add('fall');
    todoDiv.addEventListener('transitionend', function () {
      todoDiv.remove();
    });
  }
  if (targetBtn.classList.contains('complete-btn')) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed")
  }
}
function filtersTodo(e){
 const todos =   todoList.childNodes;
 todos.forEach(function(todo){
 const filterValue =   e.target.value;
 if(filterValue === "all"){
    todo.style.display = "flex";
 }else if (filterValue === "completed"){
    if(todo.classList.contains("completed")){
        todo.style.display="flex";
    }
    else{
         todo.style.display="none";
    }
 }else if(filterValue === "uncompleted"){
    if(todo.classList.contains("completed")){
        todo.style.display="none";
    }else{
        todo.style.display="flex";
    }
 }
 });
}
