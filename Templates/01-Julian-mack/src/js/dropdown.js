const NAVIGATION_DROPDOWN = document.querySelector("#navigationDropdown")
const DROPDOWN_BUTTON = document.querySelector("#btnDropdown")
const BREAKPOINT = 992

DROPDOWN_BUTTON.addEventListener("click", openDropdown)
window.addEventListener("click", closeDropdown)

function openDropdown() {
  NAVIGATION_DROPDOWN.classList.toggle("active")
}

function closeDropdown(event) {
  if (window.innerWidth >= BREAKPOINT) {
    if (!event.target.closest(".navigation-dropdown")) {
      NAVIGATION_DROPDOWN.classList.remove("active")
    }
  }
}
