const menu = document.querySelector(".menu");
const overlay = document.querySelector(".navbar-overlay");
const burger = document.getElementById("hamburger");
document.getElementById("hamburger").onclick = function () {
    if (!menu.classList.contains("display")) {
        menu.classList.add("display");
        overlay.classList.add("display");
        burger.src = "./images/icon-hamburger.svg";
    } else {
        menu.classList.remove("display");
        overlay.classList.remove("display");

        burger.src = "./images/icon-close.svg";
    }
};
