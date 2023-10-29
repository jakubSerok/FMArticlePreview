let button = document.querySelector(".shareBtn");
let shareOption = document.querySelector(".share-option");

button.addEventListener("click", e=>{
    button.classList.toggle("active");
    shareOption.classList.toggle("hidden");
})