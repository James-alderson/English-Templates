const HEADER = document.querySelector('header')
const SHADOW = document.querySelector('#shadow')
const OPEN_MENU = document.querySelector('#openMenu')
const CLOSE_MENU = document.querySelector('#closeMenu')
const DROPDOWNS = document.querySelectorAll('.dropdown')
const DROPDOWN_BUTTONS = document.querySelectorAll('.dropdown-btn')
const DROPDOWN_CONTENTS = document.querySelectorAll('.dropdown-content')

SHADOW.addEventListener('click', toggle_slideNavigation)
OPEN_MENU.addEventListener('click', toggle_slideNavigation)
CLOSE_MENU.addEventListener('click', toggle_slideNavigation)
window.addEventListener('click', close_dropdown)
window.addEventListener('resize', transition_dropdown)

DROPDOWN_BUTTONS.forEach((dropdown) => {
  dropdown.addEventListener('click', function () {
    toggle_dropdown(dropdown)
  })
})

function toggle_slideNavigation() {
  HEADER.classList.toggle('open')
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

function close_dropdown(event) {
  if (!event.target.closest('#slideNavigation') && window.innerWidth >= 1280) {
    DROPDOWNS.forEach((dropdown) => {
      dropdown.classList.remove('active')
      dropdown.querySelector('.dropdown-content').style.maxHeight = null
    })
  }
}

// This function prevents `transition` styles of elements when resizing the window
function transition_dropdown() {
  DROPDOWN_CONTENTS.forEach((dropdownContent) => {
    dropdownContent.classList.add('noTransition')
    setTimeout(() => dropdownContent.classList.remove('noTransition'), 300)
  })
  DROPDOWN_BUTTONS.forEach((dropdownButton) => {
    let dropdownArrow = dropdownButton.querySelector('.boxicons-chevron-down')

    dropdownArrow.classList.add('noTransition')
    setTimeout(() => dropdownArrow.classList.remove('noTransition'), 300)
  })
}
