const BUTTON_HAMBURGER = document.querySelector("#btnHamburger")

BUTTON_HAMBURGER.addEventListener("click", openMenu)
window.addEventListener("click", closeMenu)

function openMenu(event) {
  if (event.target.closest(".btn-hamburger")) {
    BUTTON_HAMBURGER.classList.toggle("changed")
  }
}

function closeMenu(event) {
  if (!event.target.closest(".navbar")) {
    BUTTON_HAMBURGER.classList.remove("changed")
  }
}
