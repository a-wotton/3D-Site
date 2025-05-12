let hamburger = document.querySelector("#menu");
let menu = document.querySelector("#mobile_menu")

function toggleMenu() {
    console.log("menu clicked");
    menu.classList.toggle("toggled")
}

hamburger.addEventListener('click', toggleMenu);