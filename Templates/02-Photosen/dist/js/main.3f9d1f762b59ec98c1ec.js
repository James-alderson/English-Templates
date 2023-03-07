/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ (function() {

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
var DESKTOP_RESOLUTION = 1280;
var HEADER = document.querySelector('header');
var SHADOW = document.querySelector('#shadow');
var OPEN_MENU = document.querySelector('#openMenu');
var CLOSE_MENU = document.querySelector('#closeMenu');
var DROPDOWNS = document.querySelectorAll('.dropdown');
var HEADER_CONTAINER = document.querySelector('.header-container');
var DROPDOWN_BUTTONS = document.querySelectorAll('.dropdown-btn');
var DROPDOWN_CONTENTS = document.querySelectorAll('.dropdown-content');

/* ===============
   Events
=============== */
SHADOW.addEventListener('click', toggle_slideNavigation);
OPEN_MENU.addEventListener('click', toggle_slideNavigation);
CLOSE_MENU.addEventListener('click', toggle_slideNavigation);
window.addEventListener('click', close_dropdown);
window.addEventListener('load', header_animation);
window.addEventListener('resize', function () {
  toggle_content();
  transition_dropdown();
  transition_slideNavigation();
});

/* ===============
   Loops
=============== */
DROPDOWN_BUTTONS.forEach(function (dropdown) {
  dropdown.addEventListener('click', function () {
    toggle_dropdown(dropdown);
  });
});

/* ====================
   Global functions
==================== */
var remove_class = function remove_class(element, className) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
  setTimeout(function () {
    return element.classList.remove(className);
  }, delay);
};

/* ====================
   Local functions
==================== */
function header_animation() {
  if (window.innerWidth >= DESKTOP_RESOLUTION) HEADER.classList.add('header-fadein');else HEADER_CONTAINER.classList.add('header-fadein');
  remove_class(HEADER, 'header-fadein', 1300);
  remove_class(HEADER_CONTAINER, 'header-fadein', 1300);
  HEADER.classList.remove('opacity-0');
  HEADER_CONTAINER.classList.remove('opacity-0');
}
function toggle_content() {
  if (window.innerWidth < DESKTOP_RESOLUTION && HEADER.classList.contains('open')) document.body.classList.add('hide-content');
  if (window.innerWidth >= DESKTOP_RESOLUTION) remove_class(document.body, 'hide-content');
}
function toggle_slideNavigation() {
  HEADER.classList.toggle('open');
  if (HEADER.classList.contains('open')) document.body.classList.add('hide-content');else remove_class(document.body, 'hide-content');
}
function toggle_dropdown(element) {
  var dropdown = element.parentElement;
  var dropdownContent = element.nextElementSibling;
  dropdown.classList.toggle('active');

  /* First, set the max height value,
    then after 300 milliseconds, change the max height value to initial,
    so that the internal dropdown content is also displayed. */
  if (dropdown.classList.contains('active')) {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
    setTimeout(function () {
      return dropdownContent.style.maxHeight = 'initial';
    }, 300);
  } else {
    /* First, set the max height value,
      then after 10 milliseconds, change the max height value to null,
      so that the sliding content closes animatedly. */
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
    setTimeout(function () {
      return dropdownContent.style.maxHeight = null;
    }, 10);
  }
}

// Close dropdown when click outer section of dropdown (in mobile resolution)
function close_dropdown(event) {
  if (!event.target.closest('#slideNavigation') && window.innerWidth >= DESKTOP_RESOLUTION) {
    DROPDOWNS.forEach(function (dropdown) {
      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdown-content').style.maxHeight = null;
    });
  }
}

// transition functions prevents `transition` styles of elements when resizing the window
function transition_dropdown() {
  if (window.innerWidth >= DESKTOP_RESOLUTION) {
    DROPDOWN_CONTENTS.forEach(function (dropdownContent) {
      dropdownContent.classList.add('no-transition');
      remove_class(dropdownContent, 'no-transition', 300);
    });
    DROPDOWN_BUTTONS.forEach(function (dropdownButton) {
      var dropdownArrow = dropdownButton.querySelector('.boxicons-chevron-down');
      dropdownArrow.classList.add('no-transition');
      remove_class(dropdownArrow, 'no-transition', 300);
    });
  }
}
function transition_slideNavigation() {
  var slideNavigation = HEADER.querySelector('#slideNavigation');
  if (window.innerWidth < DESKTOP_RESOLUTION) {
    slideNavigation.classList.add('no-transition');
    remove_class(slideNavigation, 'no-transition');
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.js */ "./src/js/navigation.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation_js__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('load', function () {
  document.body.classList.remove('preload');
  document.querySelector('main').classList.add('main-fadein');
});
}();
/******/ })()
;
//# sourceMappingURL=main.3f9d1f762b59ec98c1ec.js.map