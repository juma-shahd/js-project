const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let total = 0;

function updateCounter() {
    counter.textContent = "Total tasks: " + total;
}

function addTask() {
    const text = taskInput.value;

    if (text === "") {
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    function handleDelete() {
        li.remove();
        total--;
        updateCounter();
    }

    deleteBtn.addEventListener("click", handleDelete);

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    total++;
    updateCounter();

    taskInput.value = "";
}

function handleKeydown(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", handleKeydown);