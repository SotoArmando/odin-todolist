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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n/* harmony import */ var _js_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/views */ \"./src/js/views.js\");\n/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dom */ \"./src/js/dom.js\");\n\n\n\n\n\n\n\nconst datastorage = Object(_js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"])().getStorage([]);\n\nconsole.log([...datastorage])\n\nconst addTask = () => {\n    let form = document.querySelector(\"#task-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})\n    console.log(datastorage[Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"getFocused\"])()])\n    datastorage[Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"getFocused\"])()].tasks.push(data);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(datastorage);\n}\n\nconst addTodo = () => {\n    let form = document.querySelector(\"#todo-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});\n    data[\"tasks\"] = [];\n    datastorage.push(data);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(datastorage);\n}\n\nconst removeTask = (Index, Todo) => {\n    Todo.tasks.splice(Index, Index + 1);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(datastorage);\n}\n\nconst removeTodo = (Index) => {\n    datastorage.splice(Index, Index + 1);\n    Object(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(datastorage);\n}\n\nObject(_js_dom__WEBPACK_IMPORTED_MODULE_2__[\"buildLayout\"])();\nObject(_js_views__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(datastorage);\n\ndocument.querySelector(\"box-todo > button:first-of-type\").addEventListener(\"click\", () => {\n    console.log(\"add todo :D.\")\n    addTodo();\n});\ndocument.querySelector(\"box-todo > button:last-of-type\").addEventListener(\"click\", () => {\n    //close window\n});\n\ndocument.querySelector(\"box > button:first-of-type\").addEventListener(\"click\", () => {\n    console.log(\"add todo :D.\")\n    addTask();\n});\ndocument.querySelector(\"box > button:last-of-type\").addEventListener(\"click\", () => {\n    //close window\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! exports provided: renderLayout, buildLayout, renderTask, renderTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLayout\", function() { return renderLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLayout\", function() { return buildLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTask\", function() { return renderTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodo\", function() { return renderTodo; });\nconst buildLayout = (proto) => {\n\n    let nav = document.createElement(\"nav\");\n    let navstart = document.createElement(\"start\");\n    let navend = document.createElement(\"end\");\n    let button0 = document.createElement(\"button\");\n    let button1 = document.createElement(\"button\");\n    let button2 = document.createElement(\"button\");\n\n    button0.innerText = \"Odin-todo\";\n    button1.innerText = \"All Task\";\n    button2.innerText = \"Completed Task\";\n    navstart.appendChild(button0);\n    navend.appendChild(button1);\n    navend.appendChild(button2);\n    nav.appendChild(navstart);\n    nav.appendChild(navend);\n    document.querySelector(\"body\").appendChild(nav);\n\n    let wrapper = document.createElement(\"wrapper\");\n    wrapper.id = \"content\";\n    document.querySelector(\"body\").appendChild(wrapper);\n\n    let uxbody = document.createElement(\"ux-body\");\n    let box = document.createElement(\"box\");\n    let boxtodo = document.createElement(\"box-todo\");\n    let boxtitle = document.createElement(\"title\");\n    let boxform = document.createElement(\"form\");\n    let boxinput0 = document.createElement(\"input\");\n    let boxinput1 = document.createElement(\"input\");\n    let boxinput2 = document.createElement(\"input\");\n    let boxinput3 = document.createElement(\"input\");\n    let boxinput4 = document.createElement(\"input\");\n    let boxinput5 = document.createElement(\"input\");\n    let boxbutton0 = document.createElement(\"button\");\n    let boxbutton1 = document.createElement(\"button\");\n\n    boxinput0.setAttribute(\"name\", \"title\");\n    boxinput1.setAttribute(\"name\", \"description\");\n    boxinput2.setAttribute(\"name\", \"isDone\");\n    boxinput2.setAttribute(\"type\", \"checkbox\");\n    boxinput3.setAttribute(\"name\", \"isPriority\");\n    boxinput3.setAttribute(\"type\", \"checkbox\");\n    boxinput4.setAttribute(\"name\", \"date\");\n    boxinput5.setAttribute(\"name\", \"btn_id\");\n\n    boxform.appendChild(boxinput0)\n    boxform.appendChild(boxinput1)\n    boxform.appendChild(boxinput2)\n    boxform.appendChild(boxinput3)\n    boxform.appendChild(boxinput4)\n    boxform.appendChild(boxinput5)\n\n    box.appendChild(boxtitle)\n    box.appendChild(boxform)\n    boxtodo.appendChild(boxbutton0);\n    boxtodo.appendChild(boxbutton1);\n\n    let boxtodotitle = document.createElement(\"title\");\n    let boxtodoform = document.createElement(\"form\");\n    let boxtodoinput0 = document.createElement(\"input\");\n    let boxtodoinput1 = document.createElement(\"input\");\n    let boxtodoinput2 = document.createElement(\"input\");\n    let boxtodoinput3 = document.createElement(\"input\");\n    let boxtodoinput4 = document.createElement(\"input\");\n    let boxtodoinput5 = document.createElement(\"input\");\n    let boxtodobutton0 = document.createElement(\"button\");\n    let boxtodobutton1 = document.createElement(\"button\");\n\n    boxinput0.setAttribute(\"name\", \"title\");\n    boxinput1.setAttribute(\"name\", \"description\");\n    boxinput2.setAttribute(\"name\", \"isDone\");\n    boxinput2.setAttribute(\"type\", \"checkbox\");\n    boxinput3.setAttribute(\"name\", \"isPriority\");\n    boxinput3.setAttribute(\"type\", \"checkbox\");\n    boxinput4.setAttribute(\"name\", \"date\");\n    boxinput5.setAttribute(\"name\", \"btn_id\");\n\n    boxtodoform.appendChild(boxtodoinput0)\n    boxtodoform.appendChild(boxtodoinput1)\n    boxtodoform.appendChild(boxtodoinput2)\n    boxtodoform.appendChild(boxtodoinput3)\n    boxtodoform.appendChild(boxtodoinput4)\n    boxtodoform.appendChild(boxtodoinput5)\n\n\n    boxtodo.appendChild(boxtodotitle);\n    boxtodo.appendChild(boxtodoform);\n    boxtodo.appendChild(boxtodobutton0);\n    boxtodo.appendChild(boxtodobutton1);\n\n    uxbody.appendChild(box);\n    uxbody.appendChild(boxtodo);\n\n    document.querySelector(\"body\").appendChild(uxbody);\n}\n\nconst renderTodo = (proto) => {\n\n    \n\n    //   <box>\n    //     <box-head>\n    //         ${proto.title} ${proto.isDone} ${proto.isPriority}\n    //     </box-head>\n    //     <box-body>\n    //         <start data-id=\"${proto.id}\">\n    //           ${proto.description}\n    //         </start>\n    //         <end>\n    //             <button>complete</button>\n    //             <button data-id=\"${proto.id}\" >collapse</button>\n    //             <button>delete</button>\n    //         </end>\n    //     </box-body>\n    //     <box-foot>\n    //         ${proto.tasks.map(task => task.maptoHTML()).join(\"\")}\n    //         <button data-id='${proto.id}' onclick='document.querySelector(\"ux-body > box\").classList.toggle(\"visible\")'>Add Task</button>\n    //     </box-foot>\n    //   </box>\n\n    let box = document.createElement(\"box\");\n    let boxhead = document.createElement(\"box-head\");\n    boxhead.innerText = `${proto.title} ${proto.isDone} ${proto.isPriority}`\n\n    let boxbody = document.createElement(\"box-body\");\n    let boxbodystart = document.createElement(\"start\");\n    let span =  document.createElement(\"span\");\n    span.innerText = proto.description;\n    boxbodystart.appendChild(span);\n    boxbodystart.setAttribute(\"data-id\", proto.id);\n\n    let boxbodyend = document.createElement(\"end\");\n    let boxfoot = document.createElement(\"box-foot\");\n    let tasks = proto.tasks.map(task => task.maptoHTML());\n    let button0 = document.createElement(\"button\");\n    let button1 = document.createElement(\"button\");\n    let button2 = document.createElement(\"button\");\n    let button3 = document.createElement(\"button\");\n    button3.setAttribute(\"data-id\",proto.id)\n    button3.onclick = () => { document.querySelector(\"ux-body > box\").classList.toggle(\"visible\") };\n    button3.innerText = \"Add Task\"\n\n    box.appendChild(boxhead)\n    \n    if (tasks.length > 0) {\n        tasks.reduce((pvalue, cvalue, index, r) => {\n            boxbodystart.appendChild(cvalue)\n        });\n    }\n    \n    boxbody.appendChild(boxbodystart)\n    button0.innerText = \"complete\";\n\n    boxbodyend.appendChild(button0);\n    button1.innerText = \"collapse\"\n    button1.setAttribute(\"data-id\",proto.id)\n\n    boxbodyend.appendChild(button1);\n    button2.innerText = \"delete\"\n\n    boxbodyend.appendChild(button2);\n    boxbody.appendChild(boxbodyend)\n    box.appendChild(boxbody)\n\n    boxfoot.appendChild(button3)\n    box.appendChild(boxfoot)\n    \n    return box;\n}\n\nconst renderTask = (proto) => {\n    \n    \n\n    //   <box-task>\n    //     <start data-id=\"${proto.id}\">${proto.description}</start>\n    //     <end>\n    //       <button>${isDone ? 'Completed' : 'no-Completed'}</button>\n    //       <button data-id=\"${proto.id}\">collapse</button>\n    //       <button>delete</button>\n    //     </end>\n    //   </box-task>\n\n    let boxtask = document.createElement(\"box-task\")\n    let start = document.createElement(\"start\")\n    start.setAttribute(\"data-id\",proto.id)\n    start.textContent = proto.description\n    let end = document.createElement(\"end\")\n    let button0 = document.createElement(\"button\")\n    button0.innerText = proto.isDone ? 'Completed' : 'no-Completed'\n    let button1 = document.createElement(\"button\")\n    button1.setAttribute(\"data-id\",proto.id)\n    button1.innerText = \"collapse\"\n    let button2 = document.createElement(\"button\")\n    button2.innerText = \"delete\"\n\n    boxtask.appendChild(start)\n    end.appendChild(button0)\n    end.appendChild(button1)\n    end.appendChild(button2)\n    boxtask.appendChild(end)\n    \n    return boxtask;\n}\n\nconst renderLayout = () => {\n\n}\n\n\n\n//# sourceURL=webpack:///./src/js/dom.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\nconst Todo = (id, { title, tasks, description, isDone = false, isPriority = false, date }) => {\n\n  const proto = {\n    title: 'No title' || false,\n    description: description,\n    isDone,\n    isPriority,\n    date,\n    tasks: tasks.map((task, index) => Task(`${id}-${index}`, task)),\n    id,\n    type: 'Todo',\n  }\n\n  const getTaskId = () => proto.tasks.length\n  const toggleDone = () => { proto.isDone = !proto.isDone; }\n  const togglePriority = () => { proto.isPriority = !proto.isPriority; }\n  const addTask = (task) => { proto.tasks.push(task); }\n  const maptoHTML = () => Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderTodo\"])(proto)\n\n  return { toggleDone, togglePriority, addTask, getTaskId, maptoHTML };\n};\n\nconst Task = (id = new Date().toISOString(), { title = 'no title', description = 'no description', isDone = false }) => {\n  const proto = {\n    title,\n    description,\n    isDone,\n    id,\n    type: 'Task',\n  }\n  const maptoHTML = () => Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderTask\"])(proto);\n  return { maptoHTML }\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/task.js?");

/***/ }),

/***/ "./src/js/views.js":
/*!*************************!*\
  !*** ./src/js/views.js ***!
  \*************************/
/*! exports provided: render, getFocused, setFocused */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFocused\", function() { return getFocused; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFocused\", function() { return setFocused; });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n\nlet FocusedTodo = 0;\nconst getFocused = () => FocusedTodo;\nconst setFocused = (Index) => FocusedTodo = Index;\nconst datastorage = Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"diststorage\"])();\nconst render = (data) => {\n  debugger;\n  datastorage.setStorage(data);\n\n  let content = document.querySelector(\"#content\");\n  content.innerHTML = \"\";\n  let wrapper = document.querySelector(\"wrapper\");\n  let wrapperstart = document.createElement(\"start\");\n  \n  wrapper.appendChild(wrapperstart);\n\n  data = data.map((item, index) => Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"])(index, item));\n\n  var result = data.map(item => item.maptoHTML());\n  if (result.length > 0) {\n    result.reduce((itemp, itemc, index, res) => wrapperstart.appendChild(itemc));\n  }\n  \n  \n  let addTodobutton = document.createElement(\"button\");\n  addTodobutton.innerText = \"Add Todo\"\n  addTodobutton.onclick = () => {\n    document.querySelector(\"ux-body > box-todo\").classList.toggle(\"visible\")\n  }\n\n  wrapperstart.appendChild(addTodobutton);\n  \n  document.querySelectorAll(\"box-body > end > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      document.querySelector('box > box-body > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n    });\n  })\n\n  document.querySelectorAll(\"box-foot > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      setFocused(this.dataset.id);\n      console.log(\"focused \" + this.dataset.id)\n    });\n  })\n\n  document.querySelectorAll(\"box-body > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      setFocused(this.dataset.id);\n      console.log(\"focused \" + this.dataset.id)\n    });\n  })\n\n  document.querySelectorAll(\"box-task > end > button[data-id]\").forEach(button => {\n    button.addEventListener(\"click\", function () {\n      document.querySelector('box-task > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n    });\n  })\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/views.js?");

/***/ })

/******/ });