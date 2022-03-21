
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Opens the navigation menu through clicking hamburger icon//

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

// Closes menu upon clicking a link in the hamburger menu//
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};