module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/XY.js":
/*!**************************!*\
  !*** ./components/XY.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "@amcharts/amcharts4/core");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "@amcharts/amcharts4/charts");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "@amcharts/amcharts4/themes/animated");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shanemccoy/Desktop/code/React-AM-Charts-demo/components/XY.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3___default.a);

var ChartXY =
/*#__PURE__*/
function (_Component) {
  _inherits(ChartXY, _Component);

  function ChartXY() {
    _classCallCheck(this, ChartXY);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChartXY).apply(this, arguments));
  }

  _createClass(ChartXY, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
      chart.paddingRight = 20;
      var data = [];
      var visits = 10;

      for (var i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({
          date: new Date(2018, 0, i),
          name: "name" + i,
          value: visits
        });
      }

      chart.data = data;
      var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
      dateAxis.renderer.grid.template.location = 0;
      var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;
      var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";
      chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
      var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChartScrollbar"]();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
      this.chart = chart;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.paddingRight !== this.props.paddingRight) {
        this.chart.paddingRight = this.props.paddingRight;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chartdiv",
        style: {
          width: "100%",
          height: "500px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }));
    }
  }]);

  return ChartXY;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChartXY);

/***/ }),

/***/ "./pages/chartxy.js":
/*!**************************!*\
  !*** ./pages/chartxy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_XY__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/XY */ "./components/XY.js");
var _jsxFileName = "/Users/shanemccoy/Desktop/code/React-AM-Charts-demo/pages/chartxy.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 250px;\n  font-size: 2rem;\n  background: seashell;\n  font-weight: bold;\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid #333;\n  margin-bottom: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject());

var ChartXY = function ChartXY(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Example XY Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_XY__WEBPACK_IMPORTED_MODULE_3__["default"], {
    paddingRight: 55,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChartXY);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/chartxy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/chartxy.js */"./pages/chartxy.js");


/***/ }),

/***/ "@amcharts/amcharts4/charts":
/*!*********************************************!*\
  !*** external "@amcharts/amcharts4/charts" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@amcharts/amcharts4/charts");

/***/ }),

/***/ "@amcharts/amcharts4/core":
/*!*******************************************!*\
  !*** external "@amcharts/amcharts4/core" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@amcharts/amcharts4/core");

/***/ }),

/***/ "@amcharts/amcharts4/themes/animated":
/*!******************************************************!*\
  !*** external "@amcharts/amcharts4/themes/animated" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@amcharts/amcharts4/themes/animated");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=chartxy.js.map