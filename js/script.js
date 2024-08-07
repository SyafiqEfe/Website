const navbarnav = document.querySelector(".navbar-nav");
document.querySelector("#Hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan  nav
const Hamburger = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
