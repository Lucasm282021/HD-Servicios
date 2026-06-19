let d = document;
let $hamburgerBtn = d.querySelector(".hamburger");
let $navItems = d.querySelector(".menu__nav__Items");

$hamburgerBtn.addEventListener("click", function () {
    $navItems.classList.toggle("is-active");
    $hamburgerBtn.classList.toggle("is-active");
});

$navItems.addEventListener("click", function () {
    $navItems.classList.remove("is-active");
    $hamburgerBtn.classList.remove("is-active");
});