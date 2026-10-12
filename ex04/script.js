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
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    function handleDelete() {
        li.remove();
        total--;
        updateCounter();
    }

    deleteBtn.addEventListener("click", handleDelete);

    function handleComplete() {
        li.classList.toggle("completed");
    }

    li.addEventListener("click", handleComplete);

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