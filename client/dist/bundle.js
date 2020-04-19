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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newSearch_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newSearch.jsx */ \"./client/src/components/newSearch.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      books: null,\n      modal: true\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// Google books API https://developers.google.com/books/docs/v1/using#PerformingSearch\n      // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes\n      // keywords- intitle, inauthor, subject\n      // fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')\n      //   .then((data) => {\n      //     console.log(data.json())\n      //   })\n      //   .catch((error) => console.log(error))\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        id: \"header\"\n      }, /*#__PURE__*/React.createElement(\"h1\", null, \"Find your next Book\")), this.state.modal ? /*#__PURE__*/React.createElement(_newSearch_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null) : null, this.state.books ? /*#__PURE__*/React.createElement(\"div\", null, \" + New Search \") : null);\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld1NlYXJjaCBmcm9tICcuL25ld1NlYXJjaC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9va3M6IG51bGwsXG4gICAgICBtb2RhbDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBHb29nbGUgYm9va3MgQVBJIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2Jvb2tzL2RvY3MvdjEvdXNpbmcjUGVyZm9ybWluZ1NlYXJjaFxuICAgIC8vIEdFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9Zmxvd2VycytpbmF1dGhvcjprZXllc1xuICAgIC8vIGtleXdvcmRzLSBpbnRpdGxlLCBpbmF1dGhvciwgc3ViamVjdFxuICAgIC8vIGZldGNoKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9Zmxvd2VycytpbmF1dGhvcjprZXllcycpXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhLmpzb24oKSlcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0naGVhZGVyJz5cbiAgICAgICAgICA8aDE+RmluZCB5b3VyIG5leHQgQm9vazwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5tb2RhbCA/IDxOZXdTZWFyY2ggLz46IG51bGx9XG5cbiAgICAgICAge3RoaXMuc3RhdGUuYm9va3MgPyA8ZGl2PiArIE5ldyBTZWFyY2ggPC9kaXY+OiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFRQTs7OztBQWhDQTtBQUNBO0FBa0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/newSearch.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/newSearch.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar NewSearch = /*#__PURE__*/function (_React$Component) {\n  _inherits(NewSearch, _React$Component);\n\n  var _super = _createSuper(NewSearch);\n\n  function NewSearch(props) {\n    var _this;\n\n    _classCallCheck(this, NewSearch);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      author: null,\n      subject: null,\n      title: null,\n      queryCount: 1\n    };\n    return _this;\n  }\n\n  _createClass(NewSearch, [{\n    key: \"addSearchParam\",\n    value: function addSearchParam() {\n      var count = this.state.queryCount + 1;\n      this.setState({\n        queryCount: count\n      });\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.setState({\n        author: null,\n        subject: null,\n        title: null,\n        queryCount: 1\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        id: \"modal\"\n      }, /*#__PURE__*/React.createElement(\"h4\", {\n        onClick: function onClick() {\n          return _this2.closeModal();\n        }\n      }, \" Close \\xD7\"), /*#__PURE__*/React.createElement(\"h2\", null, \"Search by your interests or favorite author\"), /*#__PURE__*/React.createElement(Search, null), this.state.queryCount === 2 || this.state.queryCount === 3 ? /*#__PURE__*/React.createElement(Search, null) : null, this.state.queryCount === 3 ? /*#__PURE__*/React.createElement(Search, null) : null, this.state.queryCount < 3 ? /*#__PURE__*/React.createElement(\"h4\", {\n        onClick: function onClick() {\n          return _this2.addSearchParam();\n        }\n      }, \"+ Add a search parameter\") : null, /*#__PURE__*/React.createElement(\"button\", null, \"Lookup Books\"));\n    }\n  }]);\n\n  return NewSearch;\n}(React.Component);\n\nvar Search = function Search(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"search\"\n  }, /*#__PURE__*/React.createElement(\"select\", null, /*#__PURE__*/React.createElement(\"option\", null, \"Search by Author\"), /*#__PURE__*/React.createElement(\"option\", null, \"Search by Title\"), /*#__PURE__*/React.createElement(\"option\", null, \"Search by Subject\")), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewSearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbmV3U2VhcmNoLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9uZXdTZWFyY2guanN4P2Y2MzgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmV3U2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHF1ZXJ5Q291bnQ6IDFcbiAgICB9XG4gIH1cblxuICBhZGRTZWFyY2hQYXJhbSgpIHtcbiAgICB2YXIgY291bnQgPSB0aGlzLnN0YXRlLnF1ZXJ5Q291bnQgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBxdWVyeUNvdW50OiBjb3VudCB9KVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHF1ZXJ5Q291bnQ6IDFcbiAgICB9KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J21vZGFsJz5cbiAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT4gQ2xvc2UgJnRpbWVzOzwvaDQ+XG4gICAgICAgIDxoMj5TZWFyY2ggYnkgeW91ciBpbnRlcmVzdHMgb3IgZmF2b3JpdGUgYXV0aG9yPC9oMj5cblxuICAgICAgICA8U2VhcmNoLz5cbiAgICAgICAge3RoaXMuc3RhdGUucXVlcnlDb3VudCA9PT0gMiB8fCB0aGlzLnN0YXRlLnF1ZXJ5Q291bnQgPT09IDMgPyA8U2VhcmNoLz46IG51bGx9XG4gICAgICAgIHt0aGlzLnN0YXRlLnF1ZXJ5Q291bnQgPT09IDMgPyA8U2VhcmNoLz46IG51bGx9XG4gICAgICAgIHt0aGlzLnN0YXRlLnF1ZXJ5Q291bnQgPCAzID8gPGg0IG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkU2VhcmNoUGFyYW0oKX0+KyBBZGQgYSBzZWFyY2ggcGFyYW1ldGVyPC9oND46IG51bGx9XG4gIFxuICAgICAgICA8YnV0dG9uPkxvb2t1cCBCb29rczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxudmFyIFNlYXJjaCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgPHNlbGVjdD5cbiAgICAgICAgICA8b3B0aW9uPlNlYXJjaCBieSBBdXRob3I8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPlNlYXJjaCBieSBUaXRsZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+U2VhcmNoIGJ5IFN1YmplY3Q8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1NlYXJjaDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXZDQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/newSearch.jsx\n");

/***/ })

/******/ });