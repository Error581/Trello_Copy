const navbar = document.getElementById("navbar");

window.addEventListener("scroll", e => {
  if (this.scrollY === 0 && navbar.classList.contains("navbar-scroll")) {
    navbar.classList.remove("navbar-scroll");
  } else if (this.scrollY !== 0 && !navbar.classList.contains("navbar-scroll")) {
    navbar.classList.add("navbar-scroll");
  }
});