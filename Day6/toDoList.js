// Selectors
const toDoInput = document.querySelector("#todo");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const toDoForm = document.querySelector("#form");
let deleteButtons = document.querySelectorAll(".delete-button");

toDoList.addEventListener("click", deleteToDo);
toDoButton.addEventListener("click", addToDo);
toDoForm.addEventListener("submit", ignoreFormSubmit);

function ignoreFormSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
}

let makeCounter = function () {
  let privateCounter = 1;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

let counter = makeCounter();

function deleteToDo(e) {
  const item = e.target.closest("button");
  const parent = item.parentElement;
  const parentClassName = parent.className;
  const grandParent = parent.parentElement;
  const grandParentClassName = grandParent.className;
  const temp = document.getElementsByClassName(parentClassName)[0];
  grandParent.removeChild(parent);
  counter.decrement();
}
// probably dont need this function anymore?
function updateDeleteButtonsList() {
  console.log("updating buttons list");
  deleteButtons = document.querySelectorAll(".delete-button");
}

function addToDoItem(text) {
  let div = document.createElement("div");
  div.className = `todo-item item${counter}`;

  let label = document.createElement("label");
  label.htmlFor = `item${counter}`;
  label.innerHTML = text;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = `item${counter}`;
  checkbox.id = `item${counter}`;

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

function addToDo() {
  let text = toDoInput.value;
  if (!text) {
    alert("Please enter a task name");
    return;
  }
  addToDoItem(text);
  counter.increment();
}
