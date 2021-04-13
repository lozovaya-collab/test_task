/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var burger = document.querySelector('.header__burger');\nvar imageBurger = document.querySelector('.header__burger img');\nvar header = document.querySelector('.header');\nvar menuBurger = document.querySelector('.header__burger_menu');\nvar isOpen = false;\n\nvar openBurger = function openBurger() {\n  if (!isOpen) {\n    isOpen = true;\n    burger.style.backgroundColor = '#ff431e';\n    imageBurger.src = \"../src/assets/burger_close.svg\";\n    menuBurger.style.right = '0';\n  } else {\n    isOpen = false;\n    burger.style.backgroundColor = 'white';\n    imageBurger.src = \"../src/assets/burger.svg\";\n    menuBurger.style.right = '-768px';\n  }\n};\n\nburger.addEventListener('touchend', openBurger);\n\n//# sourceURL=webpack:///./src/burger.js?");

/***/ }),

/***/ "./src/form_open.js":
/*!**************************!*\
  !*** ./src/form_open.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var buttonOpenForm = document.querySelector('.first_block__button_form__rectangle');\nvar buttonWriteUs = document.querySelector('.first_block__button_form');\nvar formWriteUs = document.querySelector('.first_block__button_form__open');\n\nvar openForm = function openForm() {\n  buttonWriteUs.style.left = \"269px\";\n  formWriteUs.style.left = \"0\";\n};\n\nvar closeForm = function closeForm() {\n  buttonWriteUs.style.left = \"-75px\";\n  formWriteUs.style.left = \"-345px\";\n};\n\nbuttonOpenForm.addEventListener('click', openForm);\nformWriteUs.addEventListener('mouseleave', closeForm);\n\n//# sourceURL=webpack:///./src/form_open.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_open__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_open */ \"./src/form_open.js\");\n/* harmony import */ var _form_open__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_open__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scroll_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll_menu */ \"./src/scroll_menu.js\");\n/* harmony import */ var _scroll_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scroll_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp */ \"./src/popUp.js\");\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popUp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_burger__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/popUp.js":
/*!**********************!*\
  !*** ./src/popUp.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var popup = document.querySelector('.popup');\nvar submitButton = document.querySelectorAll('.submitBtn');\nvar buttonOK = document.querySelector('.popup__form_text_button');\n\nvar openPopup = function openPopup() {\n  console.log('open');\n  popup.style.display = 'flex';\n  popup.style.overflow = 'visibility';\n};\n\nvar closePopup = function closePopup() {\n  popup.style.display = 'none';\n  popup.style.overflow = 'hidden';\n};\n\nfor (var i = 0; i < submitButton.length; i++) {\n  submitButton[i].addEventListener('click', openPopup);\n}\n\nbuttonOK.addEventListener('click', closePopup);\n\n//# sourceURL=webpack:///./src/popUp.js?");

/***/ }),

/***/ "./src/scroll_menu.js":
/*!****************************!*\
  !*** ./src/scroll_menu.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menuIcons = document.querySelector('.header__menu_icons');\nvar menuLogo = document.querySelector('.header__menu_logo');\nvar headerWrapper = document.querySelector('.header__wrapper');\nvar headerMenu = document.querySelector('.header__menu');\n\nvar scroll = function scroll() {\n  if (screen.width > 768) {\n    if (pageYOffset !== 0) {\n      menuLogo.style.display = 'none';\n      menuIcons.style.display = 'flex';\n      headerMenu.style.position = 'fixed';\n      headerMenu.style.marginTop = '0';\n      headerMenu.style.width = '100%';\n      headerMenu.style.height = '120px';\n      headerMenu.style.borderRadius = '0';\n    } else {\n      menuLogo.style.display = 'block';\n      menuLogo.style.marginTop = '60px';\n      menuIcons.style.display = 'flex';\n      headerMenu.style.position = 'none';\n      headerMenu.style.marginTop = '-100px';\n      headerMenu.style.width = '100px';\n      headerMenu.style.height = '200px';\n      headerMenu.style.borderRadius = '50px';\n    }\n  }\n};\n\ndocument.addEventListener('scroll', scroll);\n\n//# sourceURL=webpack:///./src/scroll_menu.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/index.js ./src/styles/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Anay\\Desktop\\test_task_Haloart\\src\\index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Anay\\Desktop\\test_task_Haloart\\src\\styles\\styles.scss */\"./src/styles/styles.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/styles/styles.scss?");

/***/ })

/******/ });