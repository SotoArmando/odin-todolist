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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n/* harmony import */ var _js_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/views */ \"./src/js/views.js\");\n/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dom */ \"./src/js/dom.js\");\n\n\n\n\n\nconst datastorage = Object(_js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"])();\n\nObject(_js_dom__WEBPACK_IMPORTED_MODULE_2__[\"buildLayout\"])();\nObject(_js_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(datastorage.getStorage([]));\n\ndatastorage.loadProjects();\n\ndocument.querySelector(\"box-todo > button:first-of-type\").addEventListener(\"click\", () => {\n    datastorage.addTodo(document.querySelector(\"nav select\").value);\n});\n\ndocument.querySelector(\"box-todo > button:last-of-type\").addEventListener(\"click\", () => {\n    document.querySelector(\"ux-body > box-todo\").classList.toggle(\"visible\")\n});\n\ndocument.querySelector(\"ux-body box > button:first-of-type\").addEventListener(\"click\", () => {\n    datastorage.addTask(document.querySelector(\"nav select\").value);\n});\n\ndocument.querySelector(\"ux-body box-newproject > button:first-of-type\").addEventListener(\"click\", () => {\n    datastorage.newProject();\n});\ndocument.querySelector(\"ux-body box > button:last-of-type\").addEventListener(\"click\", () => {\n    document.querySelector(\"ux-body > box\").classList.toggle(\"visible\")\n});\n\ndocument.querySelector(\"nav > end > button:last-of-type\").addEventListener(\"click\", () => {\n    document.querySelector(\"ux-body > box-newproject\").classList.toggle(\"visible\")\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! exports provided: renderLayout, buildLayout, renderTask, renderTodo, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLayout\", function() { return renderLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLayout\", function() { return buildLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTask\", function() { return renderTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodo\", function() { return renderTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/js/views.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n\n\n\n\n\n\nconst buildLayout = (proto) => {\n\n    let nav = document.createElement(\"nav\");\n    let navstart = document.createElement(\"start\");\n    let navmiddle = document.createElement(\"middle\");\n    let navend = document.createElement(\"end\");\n    let button0 = document.createElement(\"button\");\n    let button1 = document.createElement(\"button\");\n    let button2 = document.createElement(\"button\");\n    let button3 = document.createElement(\"select\");\n    let button4 = document.createElement(\"button\");\n\n    let option0 = document.createElement(\"option\");\n    let option1 = document.createElement(\"option\");\n    let option2 = document.createElement(\"option\");\n    let option3 = document.createElement(\"option\");\n\n    option0.innerText = \"Default Project\";\n\n    option0.value = \"Todos\"\n\n    button0.innerText = \"Odin-todo\";\n    button4.innerText = \"New Project\";\n\n    navstart.appendChild(button0);\n    navmiddle.appendChild(button3);\n    navend.appendChild(button1);\n    navend.appendChild(button2);\n    navend.appendChild(button4);\n    nav.appendChild(navstart);\n    nav.appendChild(navmiddle);\n    nav.appendChild(navend);\n    document.querySelector(\"body\").appendChild(nav);\n\n    let wrapper = document.createElement(\"wrapper\");\n    wrapper.id = \"content\";\n    document.querySelector(\"body\").appendChild(wrapper);\n\n    let uxbody = document.createElement(\"ux-body\");\n\n    let box = document.createElement(\"box\");\n    let boxtodo = document.createElement(\"box-todo\");\n    let boxnewproject = document.createElement(\"box-newproject\");\n    let boxtitle = document.createElement(\"title\");\n    boxtitle.innerText = \"Add New Task\"\n    let boxform = document.createElement(\"form\");\n    boxform.setAttribute(\"id\", \"todo-form\");\n    let boxinput0 = document.createElement(\"input\");\n    let boxinput1 = document.createElement(\"input\");\n    let boxinput2 = document.createElement(\"input\");\n    let boxinput3 = document.createElement(\"input\");\n    let boxinput4 = document.createElement(\"input\");\n    let boxinput5 = document.createElement(\"input\");\n    let boxbutton0 = document.createElement(\"button\");\n    let boxbutton1 = document.createElement(\"button\");\n\n    boxbutton0.innerText = \"Post\"\n    boxbutton1.innerText = \"Close\"\n\n    boxinput0.setAttribute(\"name\", \"title\");\n    boxinput0.setAttribute(\"placeholder\", \"Title\");\n    boxinput1.setAttribute(\"name\", \"description\");\n    boxinput1.setAttribute(\"placeholder\", \"Description\");\n    boxinput2.setAttribute(\"name\", \"IsDone\");\n    boxinput2.setAttribute(\"type\", \"checkbox\");\n    boxinput3.setAttribute(\"name\", \"isPriority\");\n    boxinput3.setAttribute(\"type\", \"checkbox\");\n    boxinput4.setAttribute(\"name\", \"date\");\n    boxinput4.setAttribute(\"type\", \"date\");\n    boxinput4.setAttribute(\"placeholder\", \"Date\");\n    boxinput5.setAttribute(\"name\", \"btn_id\");\n\n    let label0 = document.createElement(\"label\");\n    let label1 = document.createElement(\"label\");\n\n    label0.innerText = \"IsDone\"\n    label1.innerText = \"IsPrority\"\n\n    boxform.appendChild(boxinput0)\n    boxform.appendChild(boxinput1)\n    boxform.appendChild(label0)\n    boxform.appendChild(boxinput2)\n    boxform.appendChild(label1)\n    boxform.appendChild(boxinput3)\n    boxform.appendChild(boxinput4)\n\n\n\n    box.appendChild(boxtitle)\n    box.appendChild(boxform)\n    box.appendChild(boxbutton0)\n    box.appendChild(boxbutton1)\n\n\n    let boxtodotitle = document.createElement(\"title\");\n    boxtodotitle.innerText = \"Add New Todo\"\n    let boxtodoform = document.createElement(\"form\");\n    boxtodoform.setAttribute(\"id\", \"todo-form\");\n    let boxtodoinput0 = document.createElement(\"input\");\n    let boxtodoinput1 = document.createElement(\"input\");\n    let boxtodoinput2 = document.createElement(\"input\");\n    let boxtodoinput3 = document.createElement(\"input\");\n    let boxtodoinput4 = document.createElement(\"input\");\n    let boxtodoinput5 = document.createElement(\"input\");\n    let boxtodobutton0 = document.createElement(\"button\");\n\n    let boxtodobutton1 = document.createElement(\"button\");\n\n\n    boxtodobutton0.innerText = \"Post\"\n    boxtodobutton1.innerText = \"Close\"\n\n    boxtodoinput0.setAttribute(\"name\", \"title\");\n    boxtodoinput0.setAttribute(\"placeholder\", \"Title\");\n    boxtodoinput1.setAttribute(\"name\", \"description\");\n    boxtodoinput1.setAttribute(\"placeholder\", \"Description\");\n    boxtodoinput2.setAttribute(\"name\", \"IsDone\");\n    boxtodoinput2.setAttribute(\"type\", \"checkbox\");\n    boxtodoinput3.setAttribute(\"name\", \"isPriority\");\n    boxtodoinput3.setAttribute(\"type\", \"checkbox\");\n    boxtodoinput4.setAttribute(\"name\", \"date\");\n    boxtodoinput4.setAttribute(\"type\", \"date\");\n    boxtodoinput5.setAttribute(\"name\", \"btn_id\");\n\n    let label2 = document.createElement(\"label\");\n    let label3 = document.createElement(\"label\");\n\n    label2.innerText = \"IsDone\"\n    label3.innerText = \"IsPrority\"\n\n    boxtodoform.appendChild(boxtodoinput0)\n    boxtodoform.appendChild(boxtodoinput1)\n    boxtodoform.appendChild(label2)\n    boxtodoform.appendChild(boxtodoinput2)\n    boxtodoform.appendChild(label3)\n    boxtodoform.appendChild(boxtodoinput3)\n    boxtodoform.appendChild(boxtodoinput4)\n\n    boxtodo.appendChild(boxtodotitle);\n    boxtodo.appendChild(boxtodoform);\n    boxtodo.appendChild(boxtodobutton0);\n    boxtodo.appendChild(boxtodobutton1);\n\n\n    let boxnewprojecttitle = document.createElement(\"title\");\n    boxnewprojecttitle.innerText = \"Add New Project\"\n    let boxnewprojectform = document.createElement(\"form\");\n    boxnewprojectform.setAttribute(\"id\", \"newproject-form\");\n\n    let boxnewprojectbutton0 = document.createElement(\"button\");\n    let boxnewprojectbutton1 = document.createElement(\"button\");\n\n    boxnewprojectbutton0.innerText = \"Post\"\n    boxnewprojectbutton1.innerText = \"Close\"\n\n    let boxnewprojectinput0 = document.createElement(\"input\");\n\n    boxnewprojectinput0.setAttribute(\"name\", \"title\");\n    boxnewprojectinput0.setAttribute(\"placeholder\", \"Title\");\n\n\n    boxnewprojectform.appendChild(boxnewprojectinput0)\n    boxnewproject.appendChild(boxnewprojectform)\n    boxnewproject.appendChild(boxnewprojectbutton0)\n    boxnewproject.appendChild(boxnewprojectbutton1)\n\n    uxbody.appendChild(box);\n    uxbody.appendChild(boxtodo);\n    uxbody.appendChild(boxnewproject);\n\n    document.querySelector(\"body\").appendChild(uxbody);\n}\n\nconst renderTodo = (proto) => {\n    debugger;\n\n\n\n    let box = document.createElement(\"box\");\n    let boxhead = document.createElement(\"box-head\");\n\n    boxhead.innerText = `${proto.title}`\n\n    let boxbody = document.createElement(\"box-body\");\n    let boxbodystart = document.createElement(\"start\");\n    let span = document.createElement(\"span\");\n    span.innerText = proto.description;\n\n    boxbodystart.appendChild(span);\n    boxbodystart.setAttribute(\"data-id\", proto.id);\n\n    let boxbodyend = document.createElement(\"end\");\n    let boxfoot = document.createElement(\"box-foot\");\n    let tasks = proto.tasks.map(task => task.maptoHTML());\n    let button0 = document.createElement(\"button\");\n    let button1 = document.createElement(\"button\");\n    let button2 = document.createElement(\"button\");\n    let button3 = document.createElement(\"button\");\n    button3.setAttribute(\"data-id\", proto.id)\n    button3.onclick = () => { document.querySelector(\"ux-body > box\").classList.toggle(\"visible\") };\n    button3.innerText = \"Add Task\"\n\n    box.appendChild(boxhead)\n\n    if (tasks.length > 0) {\n        tasks.forEach((value) => {\n            boxbodystart.appendChild(value)\n        });\n    }\n\n    boxbody.appendChild(boxbodystart)\n    button0.innerText = proto.IsDone ? \"Completed\" : \"Complete\";\n    button0.setAttribute(\"data-tone\", \"complete-todo\")\n    button0.setAttribute(\"data-id\", proto.id)\n\n    boxbodyend.appendChild(button0);\n    button1.innerText = \"collapse\"\n    button1.setAttribute(\"data-tone\", \"collapse-todo\")\n    button1.setAttribute(\"data-id\", proto.id)\n\n    boxbodyend.appendChild(button1);\n    button2.innerText = \"delete\"\n    button2.setAttribute(\"data-tone\", \"delete-todo\")\n    button2.setAttribute(\"data-id\", proto.id)\n\n    boxbodyend.appendChild(button2);\n    boxbody.appendChild(boxbodyend)\n    box.appendChild(boxbody)\n\n    boxfoot.appendChild(button3)\n    box.appendChild(boxfoot)\n\n    return box;\n}\n\nconst renderTask = (proto) => {\n\n    let boxtask = document.createElement(\"box-task\")\n    let start = document.createElement(\"start\")\n    start.setAttribute(\"data-id\", proto.id)\n    start.textContent = proto.description\n    let end = document.createElement(\"end\")\n    let button0 = document.createElement(\"button\")\n    button0.setAttribute(\"data-tone\", \"complete-task\")\n    button0.setAttribute(\"data-id\", proto.id);\n\n    debugger;\n\n    button0.innerText = proto.IsDone ? 'Completed' : 'Complete'\n\n    let button1 = document.createElement(\"button\")\n    button1.setAttribute(\"data-tone\", \"collapse-task\")\n    button1.setAttribute(\"data-id\", proto.id)\n    button1.innerText = \"collapse\"\n\n    let button2 = document.createElement(\"button\")\n    button2.setAttribute(\"data-tone\", \"delete-task\")\n    button2.setAttribute(\"data-id\", proto.id)\n    button2.innerText = \"delete\"\n\n    boxtask.appendChild(start)\n    end.appendChild(button0)\n    end.appendChild(button1)\n    end.appendChild(button2)\n    boxtask.appendChild(end)\n\n    return boxtask;\n}\n\nconst renderLayout = () => {\n\n}\nconst render = (data) => {\n    debugger;\n\n    const datastorage = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"])();\n\n    datastorage.setStorage(data, document.querySelector(\"nav select\").value);\n\n    let content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n    let wrapper = document.querySelector(\"wrapper\");\n    let wrapperstart = document.createElement(\"start\");\n\n    wrapper.appendChild(wrapperstart);\n\n    if (data.length > 0) {\n        data = data.map((item, index) => Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"Todo\"])(index, item));\n    }\n\n    var result = []\n\n    if (data.length > 0) {\n        result = data.map(item => item.maptoHTML());\n    }\n\n    if (result.length > 0) {\n        result.forEach((value) => wrapperstart.appendChild(value))\n    }\n\n    let addTodobutton = document.createElement(\"button\");\n    addTodobutton.innerText = \"Add Todo\"\n    addTodobutton.onclick = () => {\n        document.querySelector(\"ux-body > box-todo\").classList.toggle(\"visible\")\n    }\n\n    wrapperstart.appendChild(addTodobutton);\n\n    document.querySelectorAll(\"box-body > end > button[data-tone='collapse-todo']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            document.querySelector('box > box-body > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n        });\n    })\n\n    document.querySelectorAll(\"box-body > end > button[data-tone='complete-todo']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            this.innerText = this.innerText === \"Complete\" ? \"Completed\" : \"Complete\";\n            let data = datastorage.getStorage([])[this.dataset.id];\n            debugger;\n            data.IsDone = !data.IsDone;\n            datastorage.updateTodo(this.dataset.id, data, document.querySelector(\"nav select\").value);\n\n        });\n    })\n\n    document.querySelectorAll(\"box-body > end > button[data-tone='delete-todo']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            datastorage.removeTodo(this.dataset.id, document.querySelector(\"nav select\").value);\n            this.parentNode.parentNode.parentNode.remove();\n        });\n    })\n\n    document.querySelectorAll(\"box-task > end > button[data-tone='collapse-task']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            document.querySelector('box-task > start[data-id=\"' + this.dataset.id + '\"]').classList.toggle('active')\n        });\n    })\n\n    document.querySelectorAll(\"box-task > end > button[data-tone='delete-task']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            datastorage.removeTask(this.dataset.id, document.querySelector(\"nav select\").value);\n            this.parentNode.parentNode.remove();\n\n        });\n    })\n\n    document.querySelectorAll(\"box-task > end > button[data-tone='complete-task']\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            this.innerText = this.innerText === \"Complete\" ? \"Completed\" : \"Complete\";\n            const { 0: todoId, 1: taskId } = this.dataset.id.split(\"-\");\n            let data = datastorage.getStorage([])[todoId].tasks[taskId];\n            data.IsDone = !data.IsDone;\n            datastorage.updateTask(this.dataset.id, data, document.querySelector(\"nav select\").value);\n\n        });\n    })\n\n    document.querySelectorAll(\"box-foot > button[data-id]\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            Object(_views__WEBPACK_IMPORTED_MODULE_1__[\"setFocused\"])(this.dataset.id);\n\n        });\n    })\n\n    document.querySelectorAll(\"box-body > button[data-id]\").forEach(button => {\n        button.addEventListener(\"click\", function () {\n            Object(_views__WEBPACK_IMPORTED_MODULE_1__[\"setFocused\"])(this.dataset.id);\n\n        });\n    })\n\n    document.querySelector(\"nav select\").addEventListener(\"change\", function () {\n        datastorage.switchProject(this.value)\n    })\n\n\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/js/dom.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! exports provided: diststorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diststorage\", function() { return diststorage; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/js/views.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n\n\n\n\nfunction storageAvailable(type = 'localStorage') {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException\n      // everything except Firefox\n      && (e.code === 22\n        // Firefox\n        || e.code === 1014\n        // test name field too, because code might not be present\n        // everything except Firefox\n        || e.name === 'QuotaExceededError'\n        // Firefox\n        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n      // acknowledge QuotaExceededError only if there's something already stored\n      && (storage && storage.length !== 0)\n    );\n  }\n}\n\n\nconst diststorage = () => {\n\n  const removeTodo = (id, project) => {\n    let nextState = getStorage([], project);\n\n    nextState.splice(id - 1, 1);\n\n    setStorage(nextState, project);\n  }\n  const updateTodo = (id, Todo, project) => {\n    let nextState = getStorage([], project);\n\n    nextState[id] = Todo;\n\n    setStorage(nextState, project);\n  }\n  const removeTask = (id, project) => {\n    const { 0: todoId, 1: taskId } = id.split(\"-\");\n    let nextState = getStorage([], project);\n    nextState[todoId].tasks.splice(taskId - 1, 1);\n    setStorage(nextState, project);\n  }\n\n  const updateTask = (id, Task, project) => {\n    const { 0: todoId, 1: taskId } = id.split(\"-\");\n    let nextState = getStorage([], project);\n    nextState[todoId].tasks[taskId] = Task;\n    setStorage(nextState, project);\n  }\n\n  const addTask = (project) => {\n    let form = document.querySelector(\"#task-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})\n    let datastorage = [...getStorage([], project)];\n    datastorage[Object(_views__WEBPACK_IMPORTED_MODULE_1__[\"getFocused\"])()].tasks.push(data);\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(datastorage, project);\n  }\n\n  const addTodo = (project) => {\n    let form = document.querySelector(\"#todo-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});\n    data[\"tasks\"] = [];\n    let datastorage = [...getStorage([], project)];\n\n    datastorage.push(data);\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(datastorage, project);\n  }\n\n  const switchProject = (project) => {\n    let theproject = project || \"Todos\";\n\n    let datastorage = [...getStorage([], theproject)];\n\n\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(datastorage);\n  }\n  const newProject = () => {\n    debugger;\n    let form = document.querySelector(\"#newproject-form\");\n    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});\n    let projects = [data.title, ...[...document.querySelector(\"select\").childNodes].map((value) => value.innerText)]\n    projects = projects.map((value) => { return { title: value } });\n\n    let select = document.querySelector(\"select\");\n    let newoption = document.createElement(\"option\");\n    newoption.setAttribute(\"value\", data.title)\n    newoption.innerText = data.title;\n    select.appendChild(newoption)\n\n    setStorage(projects, \"Projects\");\n\n    document.querySelector(\"select\").selectedIndex = document.querySelector(\"select\").childNodes.length - 1;\n    switchProject(document.querySelector(\"nav select\").value);\n  }\n\n  const loadProjects = () => {\n    debugger;\n    let projects = getStorage([], \"Projects\")\n    let select = document.querySelector(\"select\");\n\n    debugger;\n\n    if (projects.length < 1) {\n      projects.push({ title: \"Default Project\" })\n    }\n\n    projects.forEach(element => {\n\n      let option = document.createElement(\"option\");\n      option.innerText = element.title;\n      select.appendChild(option);\n    });\n\n  }\n\n  const setStorage = (data, project) => localStorage.setItem(project || \"Default Project\", JSON.stringify(data));\n  const getStorage = (data, project) => {\n    let newData = data;\n    if (newData.length) {\n      setStorage(newData);\n    } else if (localStorage.getItem(project || 'Default Project')) {\n      debugger;\n      try {\n        newData = JSON.parse(localStorage.getItem(project || 'Default Project'));\n\n      } catch { newData = [] }\n\n      newData = newData.hasOwnProperty('length') ? newData : [newData]\n    }\n    return newData;\n  };\n\n  return { getStorage, setStorage, removeTask, updateTask, removeTodo, addTask, addTodo, updateTodo, switchProject, newProject, loadProjects };\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/storage.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/*! exports provided: Todo, Task, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\nconst Todo = (id, { title, tasks, description, IsDone, isPriority, date }) => {\n\n  const proto = {\n    title: title || 'No title',\n    description: description || 'No Description',\n    IsDone: IsDone || false,\n    isPriority: isPriority || false,\n    date,\n    tasks: (tasks) ? tasks.map((task, index) => Task(`${id}-${index}`, task)) : [],\n    id,\n    type: 'Todo',\n  }\n\n  const getTaskId = () => proto.tasks.length\n  const toggleDone = () => { proto.IsDone = !proto.IsDone; }\n  const togglePriority = () => { proto.isPriority = !proto.isPriority; }\n  const addTask = (task) => { proto.tasks.push(task); }\n  const maptoHTML = () => Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderTodo\"])(proto)\n\n  return { toggleDone, togglePriority, addTask, getTaskId, maptoHTML };\n};\n\nconst Task = (id = new Date().toISOString(), { title = 'no title', description = 'no description', IsDone = false }) => {\n  const proto = {\n    title: title || 'No Title',\n    description: description || 'No Description',\n    IsDone,\n    id,\n    type: 'Task',\n  }\n  const toggleDone = () => { proto.IsDone = !proto.IsDone; }\n  const maptoHTML = () => Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderTask\"])(proto);\n  return { toggleDone, maptoHTML }\n}\n\nconst Project = ({ title }) => {\n  const proto = {\n    title: title || 'No Title'\n  }\n  const maptoHTML = () => Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderTask\"])(proto);\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/task.js?");

/***/ }),

/***/ "./src/js/views.js":
/*!*************************!*\
  !*** ./src/js/views.js ***!
  \*************************/
/*! exports provided: getFocused, setFocused */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFocused\", function() { return getFocused; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFocused\", function() { return setFocused; });\nlet FocusedTodo = 0;\n\nconst getFocused = () => FocusedTodo;\nconst setFocused = (Index) => FocusedTodo = Index;\n\n\n\n//# sourceURL=webpack:///./src/js/views.js?");

/***/ })

/******/ });