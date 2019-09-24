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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/views */ \"./src/js/views.js\");\n\n// import diststorage from './js/storage';\n// import TaskModel from './js/task';\n\n\nconst content = document.querySelector('#content');\nObject(_js_views__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/views.js":
/*!*************************!*\
  !*** ./src/js/views.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderHomePage = (root) => {\n  const divElement = document.createElement('div');\n  divElement.innerHTML = `\n        <nav>\n        <start>\n            <button>Odin-todo</button>\n        </start>\n        <end>\n            <button>All Task</button>\n            <button>Completed Task</button>\n        </end>\n        </nav>\n        <wrapper id=\"content\">\n        <start>\n            <box>\n                <box-head>\n                    This is a Note :D\n                </box-head>\n                <box-body>\n                    <start data-id=\"1\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio dignissimos nisi!\n                        Vero\n                        nam harum tempore in consequuntur, fugiat fugit sapiente laborum quae neque nostrum quia\n                        accusantium\n                        laboriosam sunt rem?\n                    </start>\n                    <end>\n                        <button>complete</button>\n                        <button>collapse</button>\n                        <button>delete</button>\n                    </end>\n                </box-body>\n                <box-foot>\n                </box-foot>\n            </box>\n        </start>\n        <end></end>\n    </wrapper>`;\n\n  root.appendChild(divElement);\n};\n\nconst newTaskElement = (element, task, index) => {\n  const {\n    title, description, isDone, priority, dueDate,\n  } = task;\n  element.innerHTML = `\n              <section data-id=\"${index}\" class=\"task\">\n                  <h2 class=\"task-title>${title}</h2>\n                  <p>${description}</p>\n                  <button class=\"status\">Status: ${isDone ? 'completed' : 'not completed'}</button>\n                  <p>Due: ${dueDate}</p>\n                  <p>priority: ${priority}</p>\n                  <button>collapse</button>\n                  <button>delete</button>\n              </section>`;\n  return element;\n};\n\nconst addTask = (parent, task, index) => {\n  const divElement = document.createElement('div');\n  newTaskElement(divElement, task, index);\n\n  parent.appendChild(divElement);\n  return parent;\n};\n\n\nconst renderTask = (parent, data) => {\n  const taskFragment = document.createDocumentFragment();\n  const loadTask = (task, index) => addTask(taskFragment, task, index);\n\n  data.forEach(loadTask);\n  parent.appendChild(taskFragment);\n  return parent;\n};\n\nconst updateTask = (task, index) => {\n  const taskElement = document.querySelector(`[data-id=${index}]`);\n  newTaskElement(taskElement, task, index);\n};\n\nconst deleteTask = (index) => {\n  const taskElement = document.querySelector(`[data-id=${index}]`);\n  taskElement.remove();\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderHomePage, renderTask, addTask, updateTask, deleteTask,\n});\n\n\n//# sourceURL=webpack:///./src/js/views.js?");

/***/ })

/******/ });