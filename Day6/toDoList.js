// Selectors
const toDoInput = document.querySelector("#todo");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const toDoForm = document.querySelector("#form");
// let deleteButtons = document.querySelectorAll(".delete-button");
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteTodo);
// filterOption.addEventListener("click", filterTodo);

let deleteButtons = document.querySelectorAll(".delete-button");

toDoList.addEventListener("click", deleteToDo);

function deleteToDo(e) {
  const item = e.target.closest("button");
  const parent = item.parentElement;
  console.log(parent);

  //   if (item.parentElement) {

  //   }
  //   console.log(item.parentElement.parentElement);
}

// function deleteTodo(e) {
//     const item = e.target;

//     if (item.classList[0] === "trash-btn") {
//       // e.target.parentElement.remove();
//       const todo = item.parentElement;
//       todo.classList.add("fall");
//       //at the end
//       removeLocalTodos(todo);
//       todo.addEventListener("transitionend", e => {
//         todo.remove();
//       });
//     }
//     if (item.classList[0] === "complete-btn") {
//       const todo = item.parentElement;
//       todo.classList.toggle("completed");
//       console.log(todo);
//     }
//   }

function updateDeleteButtonsList() {
  console.log("updating buttons list");
  deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      //   console.log("delete btn clicked");
      //   console.log(event.currentTarget);
    });
  });
}

function init() {
  let tracker = 1;

  toDoButton.addEventListener("click", () => {
    let text = toDoInput.value;
    addToDoItem(text);
    updateDeleteButtonsList();
    tracker++;
  });

  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  function addToDoItem(text) {
    let div = document.createElement("div");
    div.className = `todo-item item${tracker}`;

    let label = document.createElement("label");
    label.htmlFor = `item${tracker}`;
    label.innerHTML = text;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = `item${tracker}`;
    checkbox.id = `item${tracker}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    let deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.className = "far fa-trash-alt";

    deleteBtn.appendChild(deleteBtnIcon);

    div.appendChild(label);
    div.appendChild(checkbox);
    div.appendChild(deleteBtn);
    toDoList.append(div);
  }
}

init();
