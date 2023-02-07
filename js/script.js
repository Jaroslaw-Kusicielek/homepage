console.log("Cześć");

let button = document.querySelector(".js-changeBackgroundButton");
let body = document.body;
let nextColorName = document.querySelector(".js-nextColorName");

button.addEventListener("click", () => {
    body.classList.toggle("body--gray");
    nextColorName.innerText = body.classList.contains("body--gray") ? "białe" : "szare";
});