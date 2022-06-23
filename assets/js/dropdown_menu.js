let hamburger_menu = document.querySelector(".hamburger_menu")
let dropdown_menu = document.querySelector(".dropdown_menu");

hamburger_menu.addEventListener("click", mobile);

function mobile() {
    dropdown_menu.classList.toggle("active");
}
