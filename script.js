document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar nav ul");

    if (!menuToggle || !navMenu) {
        console.error("Menu toggle button or nav menu not found!");
        return;
    }

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("nav-active");
    });
});