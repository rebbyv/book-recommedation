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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/components/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newSearch_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newSearch.jsx */ \"./client/src/components/newSearch.jsx\");\n/* harmony import */ var _books_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.jsx */ \"./client/src/components/books.jsx\");\n/* harmony import */ var _book_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.jsx */ \"./client/src/components/book.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      books: data,\n      modal: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// Google books API https://developers.google.com/books/docs/v1/using#PerformingSearch\n      // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes\n      // keywords- intitle, inauthor, subject\n      // fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')\n      //   .then((data) => {\n      //     console.log(data.json())\n      //   })\n      //   .catch((error) => console.log(error))\n    }\n  }, {\n    key: \"searchBooks\",\n    value: function searchBooks(params) {\n      this.closeModal();\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.setState({\n        modal: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        id: \"header\"\n      }, /*#__PURE__*/React.createElement(\"h1\", null, \"Find your next Book\")), this.state.modal ? /*#__PURE__*/React.createElement(_newSearch_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        searchBooks: this.searchBooks.bind(this),\n        close: this.closeModal.bind(this)\n      }) : null, this.state.books ? /*#__PURE__*/React.createElement(_books_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        books: this.state.books\n      }) : null, this.state.books ? /*#__PURE__*/React.createElement(\"div\", null, \" + New Search \") : null);\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld1NlYXJjaCBmcm9tICcuL25ld1NlYXJjaC5qc3gnO1xuaW1wb3J0IEJvb2tzIGZyb20gJy4vYm9va3MuanN4JztcbmltcG9ydCBCb29rIGZyb20gJy4vYm9vay5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9va3M6IGRhdGEsXG4gICAgICBtb2RhbDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gR29vZ2xlIGJvb2tzIEFQSSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9ib29rcy9kb2NzL3YxL3VzaW5nI1BlcmZvcm1pbmdTZWFyY2hcbiAgICAvLyBHRVQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWZsb3dlcnMraW5hdXRob3I6a2V5ZXNcbiAgICAvLyBrZXl3b3Jkcy0gaW50aXRsZSwgaW5hdXRob3IsIHN1YmplY3RcbiAgICAvLyBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWZsb3dlcnMraW5hdXRob3I6a2V5ZXMnKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YS5qc29uKCkpXG4gICAgLy8gICB9KVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgc2VhcmNoQm9va3MocGFyYW1zKSB7XG4gICAgdGhpcy5jbG9zZU1vZGFsKClcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsOiBmYWxzZSB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9J2hlYWRlcic+XG4gICAgICAgICAgPGgxPkZpbmQgeW91ciBuZXh0IEJvb2s8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubW9kYWwgPyA8TmV3U2VhcmNoIHNlYXJjaEJvb2tzPXt0aGlzLnNlYXJjaEJvb2tzLmJpbmQodGhpcyl9IGNsb3NlPXt0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKX0vPjogbnVsbH1cbiAgICAgICAge3RoaXMuc3RhdGUuYm9va3M/IDxCb29rcyBib29rcz17dGhpcy5zdGF0ZS5ib29rc30vPjogbnVsbH1cbiAgICAgICAge3RoaXMuc3RhdGUuYm9va3MgPyA8ZGl2PiArIE5ldyBTZWFyY2ggPC9kaXY+OiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7OztBQXhDQTtBQUNBO0FBMENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/book.jsx":
/*!****************************************!*\
  !*** ./client/src/components/book.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Book = function Book(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"book\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    alt: props.volumeInfo.title,\n    src: props.imageLinks.thumbnail\n  }), /*#__PURE__*/React.createElement(\"h3\", null, props.volumeInfo.title), /*#__PURE__*/React.createElement(\"p\", null, props.volumeInfo.description), /*#__PURE__*/React.createElement(\"p\", null, \"By \", props.volumeInfo.authors[0]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9vay5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9vay5qc3g/NzE0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQm9vayA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vayc+XG4gICAgICA8aW1nIGFsdD17cHJvcHMudm9sdW1lSW5mby50aXRsZX0gc3JjPXtwcm9wcy5pbWFnZUxpbmtzLnRodW1ibmFpbH0+PC9pbWc+XG4gICAgICA8aDM+e3Byb3BzLnZvbHVtZUluZm8udGl0bGV9PC9oMz5cbiAgICAgIDxwPntwcm9wcy52b2x1bWVJbmZvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwPkJ5IHtwcm9wcy52b2x1bWVJbmZvLmF1dGhvcnNbMF19PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/book.jsx\n");

/***/ }),

/***/ "./client/src/components/books.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/books.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.jsx */ \"./client/src/components/book.jsx\");\n\n\nvar Books = function Books(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"books\"\n  }, props.books.map(function (book, index) {\n    return /*#__PURE__*/React.createElement(_book_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      book: book,\n      key: index\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9va3MuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2Jvb2tzLmpzeD83MzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29rIGZyb20gJy4vYm9vay5qc3gnO1xuXG52YXIgQm9va3MgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdib29rcyc+XG4gICAgICB7cHJvcHMuYm9va3MubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPEJvb2sgYm9vaz17Ym9va30ga2V5PXtpbmRleH0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va3M7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/books.jsx\n");

/***/ }),

/***/ "./client/src/components/newSearch.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/newSearch.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar NewSearch = /*#__PURE__*/function (_React$Component) {\n  _inherits(NewSearch, _React$Component);\n\n  var _super = _createSuper(NewSearch);\n\n  function NewSearch(props) {\n    var _this;\n\n    _classCallCheck(this, NewSearch);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      param: 'author',\n      author: null,\n      subject: null,\n      title: null,\n      queryCount: 1\n    };\n    _this.changeParam = _this.changeParam.bind(_assertThisInitialized(_this));\n    _this.changeEntry = _this.changeEntry.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(NewSearch, [{\n    key: \"addSearchParam\",\n    value: function addSearchParam() {\n      this.setState({\n        queryCount: ++this.state.queryCount\n      });\n    }\n  }, {\n    key: \"changeParam\",\n    value: function changeParam(e) {\n      this.setState({\n        param: e.target.value\n      });\n    }\n  }, {\n    key: \"changeEntry\",\n    value: function changeEntry(e) {\n      if (this.state.param === 'author') {\n        this.setState({\n          author: e.target.value\n        });\n      } else if (this.state.param === 'title') {\n        this.setState({\n          title: e.target.value\n        });\n      } else {\n        this.setState({\n          subject: e.target.value\n        });\n      }\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.setState({\n        author: null,\n        subject: null,\n        title: null,\n        queryCount: 1\n      });\n      this.props.close();\n    }\n  }, {\n    key: \"search\",\n    value: function search() {\n      this.props.searchBooks(this.state);\n      this.closeModal();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        id: \"modal\"\n      }, /*#__PURE__*/React.createElement(\"h4\", {\n        onClick: function onClick() {\n          return _this2.closeModal();\n        }\n      }, \" Close \\xD7\"), /*#__PURE__*/React.createElement(\"h2\", null, \"Search by your interests or favorite author\"), /*#__PURE__*/React.createElement(Search, {\n        changeParam: this.changeParam,\n        changeEntry: this.changeEntry\n      }), this.state.queryCount >= 2 ? /*#__PURE__*/React.createElement(Search, {\n        changeParam: this.changeParam,\n        changeEntry: this.changeEntry\n      }) : null, this.state.queryCount >= 3 ? /*#__PURE__*/React.createElement(Search, {\n        changeParam: this.changeParam,\n        changeEntry: this.changeEntry\n      }) : null, this.state.queryCount < 3 ? /*#__PURE__*/React.createElement(\"h4\", {\n        onClick: function onClick() {\n          return _this2.addSearchParam();\n        }\n      }, \"+ Add a search parameter\") : null, /*#__PURE__*/React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this2.search();\n        }\n      }, \"Lookup Books\"));\n    }\n  }]);\n\n  return NewSearch;\n}(React.Component);\n\nvar Search = function Search(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"search\"\n  }, /*#__PURE__*/React.createElement(\"select\", {\n    onChange: function onChange(e) {\n      return props.changeParam(e);\n    }\n  }, /*#__PURE__*/React.createElement(\"option\", {\n    value: \"author\"\n  }, \"Search by Author\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"title\"\n  }, \"Search by Title\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"subject\"\n  }, \"Search by Subject\")), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(e) {\n      return props.changeEntry(e);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewSearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbmV3U2VhcmNoLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9uZXdTZWFyY2guanN4P2Y2MzgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmV3U2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhcmFtOiAnYXV0aG9yJyxcbiAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHF1ZXJ5Q291bnQ6IDFcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VQYXJhbSA9IHRoaXMuY2hhbmdlUGFyYW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUVudHJ5ID0gdGhpcy5jaGFuZ2VFbnRyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkU2VhcmNoUGFyYW0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJ5Q291bnQ6ICsrdGhpcy5zdGF0ZS5xdWVyeUNvdW50IH0pXG4gIH1cblxuICBjaGFuZ2VQYXJhbShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhcmFtOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgY2hhbmdlRW50cnkoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBhcmFtID09PSAnYXV0aG9yJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhvcjogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFyYW0gPT09ICd0aXRsZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHF1ZXJ5Q291bnQ6IDFcbiAgICB9KVxuICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcbiAgfVxuICBcbiAgc2VhcmNoKCkge1xuICAgIHRoaXMucHJvcHMuc2VhcmNoQm9va3ModGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdtb2RhbCc+XG4gICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+IENsb3NlICZ0aW1lczs8L2g0PlxuICAgICAgICA8aDI+U2VhcmNoIGJ5IHlvdXIgaW50ZXJlc3RzIG9yIGZhdm9yaXRlIGF1dGhvcjwvaDI+XG5cbiAgICAgICAgPFNlYXJjaCBjaGFuZ2VQYXJhbT17dGhpcy5jaGFuZ2VQYXJhbX0gY2hhbmdlRW50cnk9e3RoaXMuY2hhbmdlRW50cnl9Lz5cbiAgICAgICAge3RoaXMuc3RhdGUucXVlcnlDb3VudCA+PSAyID8gPFNlYXJjaCBjaGFuZ2VQYXJhbT17dGhpcy5jaGFuZ2VQYXJhbX0gY2hhbmdlRW50cnk9e3RoaXMuY2hhbmdlRW50cnl9Lz46IG51bGx9XG4gICAgICAgIHt0aGlzLnN0YXRlLnF1ZXJ5Q291bnQgPj0gMyA/IDxTZWFyY2ggY2hhbmdlUGFyYW09e3RoaXMuY2hhbmdlUGFyYW19IGNoYW5nZUVudHJ5PXt0aGlzLmNoYW5nZUVudHJ5fS8+OiBudWxsfVxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWVyeUNvdW50IDwgMyA/IDxoNCBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZFNlYXJjaFBhcmFtKCl9PisgQWRkIGEgc2VhcmNoIHBhcmFtZXRlcjwvaDQ+OiBudWxsfVxuICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlYXJjaCgpfT5Mb29rdXAgQm9va3M8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICkgXG4gIH1cbn1cblxuXG52YXIgU2VhcmNoID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2hhbmdlUGFyYW0oZSl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2F1dGhvcic+U2VhcmNoIGJ5IEF1dGhvcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RpdGxlJz5TZWFyY2ggYnkgVGl0bGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzdWJqZWN0Jz5TZWFyY2ggYnkgU3ViamVjdDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2hhbmdlRW50cnkoZSl9PjwvaW5wdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3U2VhcmNoOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE5REE7QUFDQTtBQWlFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/newSearch.jsx\n");

/***/ })

/******/ });