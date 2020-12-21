// Selectors 
const toDoInput = document.querySelector('#todo');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

console.log(toDoButton);

// how to avoid having a global variable 
let tracker = 4;

// Event Listeners
toDoButton.addEventListener("click", () => {
    let text = toDoInput.value;
    addToDoItem(text);
});

// functions
function addToDoItem(text) {
    let div = document.createElement("div");
    div.className = "todo-item";

    let label = document.createElement("label");
    label.htmlFor = `item${tracker}`;
    label.innerHTML = text;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = `item${tracker}`;
    checkbox.id = `item${tracker}`

    let deleteBtn = document.createElement("button");
    let deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.className = "far fa-trash-alt";

    deleteBtn.appendChild(deleteBtnIcon);

    div.appendChild(label);
    div.appendChild(checkbox);
    div.appendChild(deleteBtn);
    toDoList.append(div);
}