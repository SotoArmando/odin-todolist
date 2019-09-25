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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n/* harmony import */ var _js_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/task */ \"./src/js/task.js\");\n/* harmony import */ var _js_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/views */ \"./src/js/views.js\");\n\n\n\n\n\nconst datastorage = Object(_js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"])().getStorage([]);\n\nconsole.log([...datastorage])\n\nconst addTask = () => {\n    debugger\n    let Todo = datastorage[Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"getFocused\"])()];\n    console.log(\"Todo \" , datastorage, Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"getFocused\"])(), Todo)\n    let form = document.querySelector(\"#task-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})\n    let item = Object(_js_task__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(Todo.getTaskId(), data);\n    Todo.addTask(item);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage);\n}\n\nconst addTodo = () => {\n    let form = document.querySelector(\"#todo-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});\n    let item = Object(_js_task__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"])(datastorage.length, data);\n    datastorage.push(item);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage);\n}\n\nconst removeTask = (Index, Todo) => {\n    Todo.tasks.splice(Index, Index + 1);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage);\n}\n\nconst removeTodo = (Index) => {\n    datastorage.splice(Index, Index + 1);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage);\n}\n\nObject(_js_views__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage);\n\ndocument.querySelector(\"box-todo > button:first-of-type\").addEventListener(\"click\", () => {\n    addTodo();\n});\ndocument.querySelector(\"box-todo > button:last-of-type\").addEventListener(\"click\", () => {\n    //close window\n});\n\ndocument.querySelector(\"box > button:first-of-type\").addEventListener(\"click\", () => {\n    addTask();\n});\ndocument.querySelector(\"box > button:last-of-type\").addEventListener(\"click\", () => {\n    //close window\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! exports provided: diststorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diststorage\", function() { return diststorage; });\nfunction storageAvailable(type = 'localStorage') {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException\n            // everything except Firefox\n            && (e.code === 22\n                // Firefox\n                || e.code === 1014\n                // test name field too, because code might not be present\n                // everything except Firefox\n                || e.name === 'QuotaExceededError'\n                // Firefox\n                || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n            // acknowledge QuotaExceededError only if there's something already stored\n            && (storage && storage.length !== 0)\n    );\n  }\n}\n\n\nconst diststorage = () => {\n  const setStorage = (data) => localStorage.setItem('Todos', JSON.stringify(data));\n  const getStorage = (data) => {\n    let newData = data;\n    if (newData.length) {\n      setStorage(newData);\n    } else if (localStorage.getItem('Todos')) {\n      newData = JSON.parse(localStorage.getItem('Todos'));\n    }\n    return newData;\n  };\n\n  return { getStorage, setStorage };\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/storage.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/*! exports provided: Todo, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nconst Todo = (id, { title = 'no title', description = 'no description', isDone = false, isPriority = false, date = new Date() }) => {\n\n  const proto = {\n    title,\n    description,\n    isDone,\n    isPriority,\n    date,\n    tasks: [],\n    id,\n    type: 'Todo',\n  }\n\n  const remove = () => { }\n  const getTaskId = () => proto.tasks.length\n  const toggleDone = () => { proto.isDone = !proto.isDone; }\n  const togglePriority = () => { proto.isPriority = !proto.isPriority; }\n  const addTask = (task) => { proto.tasks.push(task); }\n  const maptoHTML = () => `\n  <box>\n    <box-head>\n        ${proto.title} ${proto.isDone} ${proto.isPriority}\n    </box-head>\n    <box-body>\n        <start data-id=\"${proto.id}\">\n          ${proto.description}\n        </start>\n        <end>\n            <button>complete</button>\n            <button data-id=\"${proto.id}\" >collapse</button>\n            <button>delete</button>\n        </end>\n    </box-body>\n    <box-foot>\n        ${proto.tasks.map(task => task.maptoHTML()).join(\"\")}\n        <button data-id='${proto.id}' onclick='document.querySelector(\"ux-body > box\").classList.toggle(\"visible\")'>Add Task</button>\n    </box-foot>\n  </box>\n`\n  return { toggleDone, togglePriority, addTask, getTaskId, maptoHTML };\n};\n\nconst Task = (id, { title = 'no title', description = 'no description', isDone = false }) => {\n  const proto = {\n    title,\n    description,\n    isDone,\n    id: new Date().toISOString(),\n    type: 'Task',\n  }\n  const maptoHTML = () => `\n  <box-task>\n    <start data-id=\"${proto.id}\">${proto.description}</start>\n    <end>\n      <button>${isDone ? 'Completed' : 'no-Completed'}</button>\n      <button data-id=\"${proto.id}\">collapse</button>\n      <button>delete</button>\n    </end>\n  </box-task>\n  `;\n  return { maptoHTML }\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/task.js?");

/***/ }),

/***/ "./src/js/views.js":
/*!*************************!*\
  !*** ./src/js/views.js ***!
  \*************************/
/*! exports provided: render, getFocused, setFocused */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFocused\", function() { return getFocused; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFocused\", function() { return setFocused; });\nlet FocusedTodo = 0;\nconst getFocused = () => FocusedTodo;\nconst setFocused = (Index) => FocusedTodo = Index;\n\nconst render = (data) => {\n  let content = document.querySelector(\"#content\");\n  var result = data.map(item => item.maptoHTML()).join(\"\");\n  result = \"<start>\" + result + `<button onclick='document.querySelector(\"ux-body > box-todo\").classList.toggle(\"visible\")'>Add Todo</button></start>`\n  content.innerHTML = result;\n\n  document.querySelectorAll(\"box-body > end > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      document.querySelector('box > box-body > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n    });\n  })\n\n  document.querySelectorAll(\"box-foot > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      setFocused(this.dataset.id);\n      console.log(\"focused \" + this.dataset.id)\n    });\n  })\n\n  document.querySelectorAll(\"box-body > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      setFocused(this.dataset.id);\n      console.log(\"focused \" + this.dataset.id)\n    });\n  })\n\n  document.querySelectorAll(\"box-foot > box-task > end > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      document.querySelector('box-task > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n    });\n  })\n\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/views.js?");

/***/ })

/******/ });