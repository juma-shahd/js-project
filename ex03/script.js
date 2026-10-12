const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countDisplay = document.getElementById("count");

let count = 0;

function handleIncrement() {
    count++;
    countDisplay.textContent = count;
}

function handleDecrement() {
    count--;
    countDisplay.textContent = count;
}

function handleReset() {
    count = 0;
    countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
resetBtn.addEventListener("click", handleReset);