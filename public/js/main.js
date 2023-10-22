/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("\r\n\r\n\r\nlet getLogo = document.querySelector('h1');\r\nlet getMenuItems = document.querySelector('.menu__items');\r\nlet getMenu = document.querySelector('.menu');\r\n\r\n//change a background img\r\ngetMenuItems.addEventListener('mouseover', function(event){\r\n   let target = event.target;\r\n   let getHeadBack = document.querySelector('.menu__back');\r\n   if (event.target.tagName !== 'A') return false;\r\n   getHeadBack.classList.toggle('whiteHover');\r\n   getHeadBack.remove()\r\n   setImg(target.getAttribute('val'),getHeadBack)\r\n   ;\r\n\r\n   })\r\n\r\n\r\n\r\n   //create img for a header's background\r\nfunction setImg(value) {\r\nlet img = document.createElement('img');\r\nimg.src = `img/topBack${value}.png`;\r\n//img.src = `../../img/topBack${value}.png`;\r\nimg.classList = 'menu__back';\r\ngetMenu.append(img);\r\n}\r\n\r\n//change content for second section\r\nlet getButtons = document.querySelector('.tits__buttons');\r\nlet titsBox = document.querySelector('.titsbox');\r\nlet currentTits = 0;\r\n\r\ntitsBox.children[0].classList.toggle('nope')\r\n\r\ngetButtons.addEventListener('click', function(event) {\r\n   let target = event.target;\r\n   if (target.hasAttribute('val')) {\r\n   let attr = target.getAttribute('val');\r\n   titsBox.children[currentTits].classList.toggle('nope');\r\n   currentTits = attr;\r\n   titsBox.children[attr].classList.toggle('nope')\r\n   }\r\n})\r\n\r\n//treatment for people\r\nlet getPeople = document.querySelector('.people');\r\nlet getDividedImg = document.querySelector('.divided');\r\nlet getCoubs = document.querySelector('.people__coubs');\r\nlet checkGreatImg = 1;\r\n\r\n\r\ngetPeople.addEventListener('click', function(event){\r\n   let target = event.target;\r\n\r\n   if(target.tagName !== \"IMG\"){return false};\r\n   if(!target.hasAttribute('long') && !target.hasAttribute('tall')) {\r\n      if(checkGreatImg){greatImgFunc(target.getAttribute('val'), 'greatImg'); checkGreatImg = 0; return false};\r\n      let greatImg = document.querySelector('.greatImg');\r\n      checkGreatImg = 1;\r\n      greatImg.remove();\r\n      return false;\r\n   }\r\n\r\n   if(target.hasAttribute('long') && !target.hasAttribute('tall')){\r\n      \r\n      if(checkGreatImg){\r\n         greatImgFunc(target.getAttribute('val'), 'greatLongImg', 1); \r\n         checkGreatImg = 0;\r\n         getCoubs.classList.toggle('nope')\r\n         return false};\r\n      let greatLongImg = document.querySelector('.greatLongImg');\r\n      checkGreatImg = 1;\r\n      getCoubs.classList.toggle('nope')\r\n      greatLongImg.remove();\r\n      return false;\r\n   }\r\n   if(target.hasAttribute('tall')){ \r\n      \r\n      if(checkGreatImg){\r\n         greatImgFunc(target.getAttribute('val'), 'greatTallImg', 2); \r\n         checkGreatImg = 0;\r\n         getCoubs.classList.toggle('nope')\r\n         return false};\r\n      let greatTallImg = document.querySelector('.greatTallImg');\r\n      checkGreatImg = 1;\r\n      getCoubs.classList.toggle('nope')\r\n      greatTallImg.remove();\r\n      return false;\r\n   }\r\n})\r\n\r\n\r\n\r\nfunction greatImgFunc(value, className, long) {\r\n   let img = document.createElement('img');\r\n   img.src = `img/gallery${value}.png`;\r\n   //img.src = `../../img/gallery${value}.png`;\r\n   img.classList = className;\r\n   if(long == 1) img.setAttribute('long', 1);\r\n   if(long == 2) img.setAttribute('tall', 1);\r\n   getPeople.append(img);\r\n   \r\n   }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//console.log(sum(2, 10));\r\n\r\n//const button = document.querySelector('.menu__button');\r\n//const menuList = document.querySelector('.menu__list');\r\n//const menuLink = document.querySelectorAll('.menu__link');\r\n//const moveMenu = document.querySelector('.firm__body');\r\n\r\n\r\n\r\n\r\n//burger icon\r\n//button.addEventListener('click', function() {\r\n//   button.classList.toggle('menu__button-active');\r\n//   menuList.classList.toggle('menu__list-active');\r\n//   moveMenu.classList.toggle('plus-menu');\r\n//})\r\n\r\n\r\n//toggle navigation\r\n//for (let links of menuLink) {\r\n//   links.addEventListener('click', function() {\r\n//      for (let link of menuLink) {\r\n//         link.classList.remove('menu__link-active')\r\n//      };\r\n//      links.classList.toggle('menu__link-active')\r\n//   })\r\n//}\r\n\r\n\n\n//# sourceURL=webpack://gulpcodequest/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;