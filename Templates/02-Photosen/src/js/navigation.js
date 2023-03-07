/* ------ Table of content ------

1. Variables
2. Events
3. Loops
4. Global functions
5. Local functions

------------------------------ */

/* ===============
   Variables
=============== */
const DESKTOP_RESOLUTION = 1280
const HEADER = document.querySelector('header')
const SHADOW = document.querySelector('#shadow')
const OPEN_MENU = document.querySelector('#openMenu')
const CLOSE_MENU = document.querySelector('#closeMenu')
const DROPDOWNS = document.querySelectorAll('.dropdown')
const HEADER_CONTAINER = document.querySelector('.header-container')
const DROPDOWN_BUTTONS = document.querySelectorAll('.dropdown-btn')
const DROPDOWN_CONTENTS = document.querySelectorAll('.dropdown-content')

/* ===============
   Events
=============== */
SHADOW.addEventListener('click', toggle_slideNavigation)
OPEN_MENU.addEventListener('click', toggle_slideNavigation)
CLOSE_MENU.addEventListener('click', toggle_slideNavigation)
window.addEventListener('click', close_dropdown)
window.addEventListener('load', header_animation)
window.addEventListener('resize', () => {
  toggle_content()
  transition_dropdown()
  transition_slideNavigation()
})

/* ===============
   Loops
=============== */
DROPDOWN_BUTTONS.forEach((dropdown) => {
  dropdown.addEventListener('click', function () {
    toggle_dropdown(dropdown)
  })
})

/* ====================
   Global functions
==================== */
const remove_class = (element, className, delay = 400) => {
  setTimeout(() => element.classList.remove(className), delay)
}

/* ====================
   Local functions
==================== */
function header_animation() {
  if (window.innerWidth >= DESKTOP_RESOLUTION)
    HEADER.classList.add('header-fadein')
  else HEADER_CONTAINER.classList.add('header-fadein')

  remove_class(HEADER, 'header-fadein', 1300)
  remove_class(HEADER_CONTAINER, 'header-fadein', 1300)

  HEADER.classList.remove('opacity-0')
  HEADER_CONTAINER.classList.remove('opacity-0')
}

function toggle_content() {
  if (
    window.innerWidth < DESKTOP_RESOLUTION &&
    HEADER.classList.contains('open')
  )
    document.body.classList.add('hide-content')
  if (window.innerWidth >= DESKTOP_RESOLUTION)
    remove_class(document.body, 'hide-content')
}

function toggle_slideNavigation() {
  HEADER.classList.toggle('open')

  if (HEADER.classList.contains('open'))
    document.body.classList.add('hide-content')
  else remove_class(document.body, 'hide-content')
}

function toggle_dropdown(element) {
  let dropdown = element.parentElement
  let dropdownContent = element.nextElementSibling

  dropdown.classList.toggle('active')

  /* First, set the max height value,
    then after 300 milliseconds, change the max height value to initial,
    so that the internal dropdown content is also displayed. */
  if (dropdown.classList.contains('active')) {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
    setTimeout(() => (dropdownContent.style.maxHeight = 'initial'), 300)
  } else {
    /* First, set the max height value,
      then after 10 milliseconds, change the max height value to null,
      so that the sliding content closes animatedly. */
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
    setTimeout(() => (dropdownContent.style.maxHeight = null), 10)
  }
}

// Close dropdown when click outer section of dropdown (in mobile resolution)
function close_dropdown(event) {
  if (
    !event.target.closest('#slideNavigation') &&
    window.innerWidth >= DESKTOP_RESOLUTION
  ) {
    DROPDOWNS.forEach((dropdown) => {
      dropdown.classList.remove('active')
      dropdown.querySelector('.dropdown-content').style.maxHeight = null
    })
  }
}

// transition functions prevents `transition` styles of elements when resizing the window
function transition_dropdown() {
  if (window.innerWidth >= DESKTOP_RESOLUTION) {
    DROPDOWN_CONTENTS.forEach((dropdownContent) => {
      dropdownContent.classList.add('no-transition')
      remove_class(dropdownContent, 'no-transition', 300)
    })
    DROPDOWN_BUTTONS.forEach((dropdownButton) => {
      let dropdownArrow = dropdownButton.querySelector('.boxicons-chevron-down')

      dropdownArrow.classList.add('no-transition')
      remove_class(dropdownArrow, 'no-transition', 300)
    })
  }
}

function transition_slideNavigation() {
  let slideNavigation = HEADER.querySelector('#slideNavigation')

  if (window.innerWidth < DESKTOP_RESOLUTION) {
    slideNavigation.classList.add('no-transition')
    remove_class(slideNavigation, 'no-transition')
  }
}
