const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countDisplay = document.getElementById("count");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

function handleIncrement() {
    count++;
    updateDisplay();
}

function handleDecrement() {
    count--;
    updateDisplay();
}

function handleReset() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
resetBtn.addEventListener("click", handleReset);