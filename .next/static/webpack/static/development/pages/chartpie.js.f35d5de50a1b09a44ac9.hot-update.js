webpackHotUpdate("static/development/pages/chartpie.js",{

/***/ "./components/Pie.js":
/*!***************************!*\
  !*** ./components/Pie.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/shanemccoy/Desktop/code/React-AM-Charts-demo/components/Pie.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  border: 2px solid #333;\n  margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Divider = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

var Pie =
/*#__PURE__*/
function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pie).apply(this, arguments));
  }

  _createClass(Pie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Create chart instance
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
      var chartDonut = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]); // donut!

      chartDonut.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40); // Add data

      chart.data = [{
        country: "Lithuania",
        litres: 501.9
      }, {
        country: "Czech Republic",
        litres: 301.9
      }, {
        country: "Ireland",
        litres: 201.1
      }, {
        country: "Germany",
        litres: 165.8
      }, {
        country: "Australia",
        litres: 139.9
      }, {
        country: "Austria",
        litres: 128.3
      }, {
        country: "UK",
        litres: 99
      }, {
        country: "Belgium",
        litres: 60
      }, {
        country: "The Netherlands",
        litres: 50
      }];
      chartDonut.data = [{
        country: "Lithuania",
        litres: 501.9
      }, {
        country: "Czech Republic",
        litres: 301.9
      }, {
        country: "Ireland",
        litres: 201.1
      }, {
        country: "Germany",
        litres: 165.8
      }, {
        country: "Australia",
        litres: 139.9
      }, {
        country: "Austria",
        litres: 128.3
      }, {
        country: "UK",
        litres: 99
      }, {
        country: "Belgium",
        litres: 60
      }, {
        country: "The Netherlands",
        litres: 50
      }]; // Add and configure Series

      var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country"; // style main piechart

      pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#4a2abb");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      var pieSeries2 = chartDonut.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
      pieSeries2.dataFields.value = "litres";
      pieSeries2.dataFields.category = "country";
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }

      if (this.chartDonut) {
        this.chartDonut.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chartdiv",
        style: {
          width: "100%",
          height: "500px",
          margin: "25px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: "text-align: center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Donut!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chartdiv2",
        style: {
          width: "100%",
          height: "500px",
          margin: "25px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }));
    }
  }]);

  return Pie;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pie);

/***/ })

})
//# sourceMappingURL=chartpie.js.f35d5de50a1b09a44ac9.hot-update.js.map