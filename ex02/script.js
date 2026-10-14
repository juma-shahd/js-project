const title = document.getElementById("title");
const message = document.querySelector(".message");

console.log(title);
console.log(message);
title.textContent = "New title from JavaScript!";
message.textContent = "This text was changed live!";
title.style.color = "royalblue";
message.classList.add("active");
message.addEventListener("click", function () {
    message.classList.toggle("active");
});
