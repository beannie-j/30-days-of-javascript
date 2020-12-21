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

function updateDeleteButtonsList() {
  console.log("updating buttons list");
  deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.targetElement);
    });
  });

  //   deleteButtons.addEventListener("click", function () {
  //     console.log("You clicked: delete");
  //   });

  //   for (let i = 0; i < deleteButtons.length; i++) {
  //     deleteButtons[i].addEventListener("click", function () {
  //       console.log("You clicked: delete");
  //       console.log(i);
  //     });
  //   }
}

function init() {
  let tracker = 1;

  toDoButton.addEventListener("click", () => {
    let text = toDoInput.value;
    tracker++;
    addToDoItem(text);
    updateDeleteButtonsList();
  });

  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  function addToDoItem(text) {
    let div = document.createElement("div");
    div.className = "todo-item";

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
