/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/** *** */ }({

  /** */ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /*! no exports provided */
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n/* harmony import */ var _js_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/task */ \"./src/js/task.js\");\n\n\n\n\nvar thisstorage = _js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"].getStorage([]);\nlet content = document.querySelector(\"#content > start\");\n\nconst render = () => {\n    let html = thisstorage.map(({ title, shortdescription, completed, author }, index) => `\n        <box>\n            <box-head>${author} ${title}</box-head>\n            <box-body>\n                <start data-id=\"${index}\">${shortdescription}</start>\n                <end>\n                    <button>${completed === \"completed\" ? \"completed\" : \"no-completed\"}</button>\n                    <button onclick='document.querySelector(box > box - body > start[data - id=\"${index}\"]').classList.toggle(\"active\")'>collapse</button>\n                    <button>delete</button>\n                </end>\n            </box-body>\n            <box-foot>\n            </box-foot>\n        </box>`\n    );\n    content.innerHTML = html.join(\"\");\n}\n\nconst addTask = (title = \"no title\", shortdescription = \"no description\", completed = false, author = \"anonymous\") => {\n\n    thisstorage.push(Object(_js_task__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(title, shortdescription, completed, author));\n    content.innerHTML += `\n    <box>\n        <box-head>${author} ${title}</box-head>\n        <box-body>\n            <start data-id=\"${index}\">${shortdescription}</start>\n            <end>\n                <button>${completed === \"completed\" ? \"completed\" : \"no-completed\"}</button>\n                <button onclick='document.querySelector(box > box - body > start[data - id=\"${index}\"]').classList.toggle(\"active\")'>collapse</button>\n                <button>delete</button>\n            </end>\n        </box-body>\n        <box-foot>\n        </box-foot>\n    </box>`;\n    _js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"].setStorage(thisstorage);\n}\n\nconst completeTask = () => {\n    thisstorage.push(Object(_js_task__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(title, shortdescription, completed, author));\n    _js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"].setStorage(thisstorage);\n}\n\nconst deleteTask = (index) => {\n    thisstorage.splice(index, index + 1);\n    _js_storage__WEBPACK_IMPORTED_MODULE_0__[\"diststorage\"].setStorage(thisstorage);\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
    /** */ }),

  /** */ './src/js/storage.js':
  /*! ***************************!*\
  !*** ./src/js/storage.js ***!
  \************************** */
  /*! exports provided: diststorage */
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diststorage\", function() { return diststorage; });\ndebugger;\nlet myLibrary = [];\n\nfunction storageAvailable(type = \"localStorage\") {\n    var storage;\n    try {\n        storage = window[type];\n        var x = \"__storage_test__\";\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    } catch (e) {\n        return (\n            e instanceof DOMException &&\n            // everything except Firefox\n            (e.code === 22 ||\n                // Firefox\n                e.code === 1014 ||\n                // test name field too, because code might not be present\n                // everything except Firefox\n                e.name === \"QuotaExceededError\" ||\n                // Firefox\n                e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\n            // acknowledge QuotaExceededError only if there's something already stored\n            (storage && storage.length !== 0)\n        );\n    }\n};\n\n\nconst diststorage = () => {\n    \n    const setStorage = myLibrary => localStorage.setItem(\"myLibrary\", JSON.stringify(myLibrary));\n    const getStorage = myLibrary => {\n        if (myLibrary.length) {\n            setStorage(myLibrary);\n        } else if (localStorage.getItem(\"myLibrary\")) {\n            const item = JSON.parse(localStorage.getItem(\"myLibrary\"));\n     \n        }\n        return myLibrary;\n    };\n\n    if (storageAvailable()) {\n        if (localStorage.getItem(\"myLibrary\")) {\n            myLibrary = getStorage(myLibrary);\n        }\n    } else {\n        myLibrary = [];\n    }\n    \n\n    return { getStorage, setStorage }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/storage.js?");
    /** */ }),

  /** */ './src/js/task.js':
  /*! ************************!*\
  !*** ./src/js/task.js ***!
  \*********************** */
  /*! exports provided: Task */
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });\n\nfunction Task(title = "no title", shortdescription = "no description", completed = false, author = "anonymous") {\n    this.title = title;\n    this.shortdescription = shortdescription;\n    this.pages = pages;\n    this.author = author;\n    this.status = "no-completed";\n    this.read = function() {\n      if (this.status === "no-completed") {\n        this.status = "completed";\n      } else {\n        this.status = "no-completed";\n      }\n      setStorage(myLibrary);\n      render();\n    };\n  }\n  \n  \n\n//# sourceURL=webpack:///./src/js/task.js?');
    /** */ }),

/** *** */ }));
