(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["responsivedefaults"],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFillCircular.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFillCircular.js ***!
  \************************************************************************************/
/*! exports provided: AxisFillCircular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisFillCircular", function() { return AxisFillCircular; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AxisFill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxisFill */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFill.js");
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/Percent */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */




/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Provides fill element functionality for circular Axes.
 *
 * @see {@link IAxisFillCircularEvents} for a list of available events
 * @see {@link IAxisFillCircularAdapters} for a list of available Adapters
 * @todo Needs description
 */
var AxisFillCircular = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AxisFillCircular, _super);
    /**
     * Constructor.
     *
     * @param {Axis} axis Axis
     */
    function AxisFillCircular(axis) {
        var _this = _super.call(this, axis) || this;
        _this.className = "AxisFillCircular";
        _this.element = _this.paper.add("path");
        _this.radius = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_2__["percent"])(100);
        _this.applyTheme();
        return _this;
    }
    /**
     * Draws the fill element.
     *
     * @ignore Exclude from docs
     */
    AxisFillCircular.prototype.draw = function () {
        _super.prototype.draw.call(this);
        if (this.axis) {
            var renderer = this.axis.renderer;
            this.fillPath = renderer.getPositionRangePath(this.startPosition, this.endPosition, this.radius, _core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["hasValue"](this.innerRadius) ? this.innerRadius : renderer.innerRadius, this.cornerRadius);
            this.path = this.fillPath;
        }
    };
    Object.defineProperty(AxisFillCircular.prototype, "innerRadius", {
        /**
         * @return {number} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the fill. Relative ([[Percent]]) or absolute (pixels).
         *
         * @param {number | Percent}  value  Inner radius
         */
        set: function (value) {
            this.setPercentProperty("innerRadius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisFillCircular.prototype, "radius", {
        /**
         * @return {number} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the fill. Relative ([[Percent]]) or absolute (pixels).
         *
         * @param {number | Percent}  value  Outer radius
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisFillCircular.prototype, "cornerRadius", {
        /**
         * @return {number} Corner radius (px)
         */
        get: function () {
            return this.getPropertyValue("cornerRadius");
        },
        /**
         * Corner radius for the fill. In pixels.
         *
         * @param {number}  value  Corner radius (px)
         */
        set: function (value) {
            this.setPropertyValue("cornerRadius", value, true);
        },
        enumerable: true,
        configurable: true
    });
    return AxisFillCircular;
}(_AxisFill__WEBPACK_IMPORTED_MODULE_1__["AxisFill"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_3__["registry"].registeredClasses["AxisFillCircular"] = AxisFillCircular;
//# sourceMappingURL=AxisFillCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabelCircular.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabelCircular.js ***!
  \*************************************************************************************/
/*! exports provided: AxisLabelCircular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisLabelCircular", function() { return AxisLabelCircular; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AxisLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxisLabel */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabel.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/Math */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js");
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/* harmony import */ var _core_utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/Utils */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Utils.js");
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/Percent */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/**
 * Axis Label module
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */






/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Use to create labels on circular axis.
 *
 * @see {@link IAxisLabelCircularEvents} for a list of available events
 * @see {@link IAxisLabelCircularAdapters} for a list of available Adapters
 */
var AxisLabelCircular = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AxisLabelCircular, _super);
    /**
     * Constructor
     */
    function AxisLabelCircular() {
        var _this = _super.call(this) || this;
        /**
         *
         * @type {number}
         * @ignore
         */
        _this.fdx = 0;
        /**
         *
         * @type {number}
         * @ignore
         */
        _this.fdy = 0;
        _this.className = "AxisLabelCircular";
        _this.padding(0, 0, 0, 0);
        _this.location = 0.5;
        _this.radius = 0;
        _this.isMeasured = false;
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(AxisLabelCircular.prototype, "relativeRotation", {
        /**
         * @return {number} Rotation angle
         */
        get: function () {
            return this.getPropertyValue("relativeRotation");
        },
        /**
         * Relative rotation of the label.
         *
         * It is an angle to circle. In case 90, labels will be positioned like rays
         * of light, if 0 - positione along the circle.
         *
         * @param {number} value Rotation angle
         */
        set: function (value) {
            this.setPropertyValue("relativeRotation", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisLabelCircular.prototype, "radius", {
        /**
         * @return {number} Distance (px)
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Distance from axis circle to label in pixels or percent.
         *
         * @param {number} value Distance (px or percent)
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns label radius in pixels
     */
    AxisLabelCircular.prototype.pixelRadius = function (axisRadius) {
        var sign = 1;
        if (this.inside) {
            sign = -1;
        }
        return _core_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["relativeToValue"](this.radius, axisRadius) * sign;
    };
    /**
     * returns label radius in pixels
     */
    AxisLabelCircular.prototype.pixelRadiusY = function (axisRadius, axisRadiusY) {
        var sign = 1;
        if (this.inside) {
            sign = -1;
        }
        var radius = this.radius;
        if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](radius)) {
            radius *= axisRadiusY / axisRadius;
            return _core_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["relativeToValue"](radius, axisRadius) * sign;
        }
        else {
            return _core_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["relativeToValue"](radius, axisRadiusY) * sign;
        }
    };
    /**
     * [fixPosition description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @param  {IPoint}  point       Label affixation point
     * @param  {number}  axisRadius  Distance from point (px)
     */
    AxisLabelCircular.prototype.fixPosition = function (angle, axisRadius, axisRadiusY, dx, dy) {
        if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](axisRadiusY)) {
            axisRadiusY = axisRadius;
        }
        if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](dx)) {
            dx = 0;
        }
        if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](dy)) {
            dy = 0;
        }
        var point = { x: axisRadius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](angle), y: axisRadiusY * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](angle) };
        if (this.invalid) {
            this.validate(); //@todo" check if we need this
        }
        var isNegative = false;
        var realRadius = this.radius;
        if (realRadius instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__["Percent"] && realRadius.value < 0) {
            isNegative = true;
        }
        else if (realRadius < 0) {
            isNegative = true;
        }
        var relativeRotation = this.relativeRotation;
        var labelRadius = this.pixelRadius(axisRadius);
        // WHEN ROTATED
        if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](relativeRotation)) {
            this.horizontalCenter = "none";
            this.verticalCenter = "none";
            angle = _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["fitAngleToRange"](angle, -180, 180);
            var pixelWidth = this.bbox.width;
            var pixelHeight = this.bbox.height;
            var pixelPaddingBottom = this.pixelPaddingBottom;
            var pixelPaddingTop = this.pixelPaddingTop;
            var pixelPaddingLeft = this.pixelPaddingLeft;
            var pixelPaddingRight = this.pixelPaddingRight;
            if (angle > 90 || angle < -90) {
                if (relativeRotation == -90) {
                    relativeRotation = 90;
                    pixelWidth = 0;
                }
            }
            else {
                if (relativeRotation == -90) {
                    pixelHeight = -pixelHeight;
                }
                if (relativeRotation == 90) {
                    relativeRotation = -90;
                    pixelWidth = -pixelPaddingLeft - pixelPaddingRight;
                    pixelHeight = -pixelHeight - pixelPaddingTop - pixelPaddingBottom;
                }
            }
            this.rotation = relativeRotation + angle + 90;
            var dH = _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](relativeRotation) / 2;
            var dW = _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](relativeRotation) / 2;
            var rotation = this.rotation;
            this.dx = pixelHeight * dH * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](rotation) - pixelWidth * dW * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](rotation);
            this.dy = -pixelHeight * dH * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](rotation) - pixelWidth * dW * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](rotation);
            if (!this.inside) {
                labelRadius += (pixelHeight + pixelPaddingBottom + pixelPaddingTop) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](relativeRotation) + (pixelWidth + pixelPaddingLeft + pixelPaddingRight) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](relativeRotation);
            }
            else {
                if (angle > 90 || angle < -90) {
                    labelRadius -= (pixelPaddingBottom + pixelPaddingTop) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](relativeRotation) + (pixelPaddingLeft + pixelPaddingRight) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](relativeRotation);
                }
                else {
                    labelRadius += (pixelPaddingBottom + this.bbox.height + pixelPaddingTop) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](relativeRotation) + (pixelPaddingLeft + pixelPaddingRight + this.bbox.width) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](relativeRotation);
                }
            }
            point.x += _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](angle) * labelRadius;
            point.y += _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](angle) * labelRadius * axisRadiusY / axisRadius;
        }
        else {
            // END OF ROTATED
            this.horizontalCenter = "middle";
            this.verticalCenter = "middle";
            if (isNegative) {
                this.dx = 0;
                this.dy = 0;
                point.x = (axisRadius + labelRadius) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](angle);
                point.y = (axisRadiusY + labelRadius * axisRadiusY / axisRadius) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](angle);
            }
            else {
                // we don't use valign for labels because then they would jump while animating. instead we modify dy depending on a y position
                // this math makes dy to be 1 at the top of the circle, 0.5 at the middle and 1 at the bottom
                // @todo with this math doesn't work well with inside = true
                this.dy = this._measuredHeight / 2 * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](angle); //(1 - (point.y + axisRadiusY) / (2 * axisRadiusY));
                // simmilar with dx
                this.dx = this._measuredWidth / 2 * _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](angle); //(1 - (point.x + axisRadius) / (2 * axisRadius));
                point.x += _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["cos"](angle) * labelRadius;
                point.y += _core_utils_Math__WEBPACK_IMPORTED_MODULE_3__["sin"](angle) * labelRadius * axisRadiusY / axisRadius;
            }
        }
        point.x += dx;
        point.y += dy;
        this.fdx = this.dx;
        this.fdy = this.dy;
        this.moveTo(point);
    };
    return AxisLabelCircular;
}(_AxisLabel__WEBPACK_IMPORTED_MODULE_1__["AxisLabel"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_2__["registry"].registeredClasses["AxisLabelCircular"] = AxisLabelCircular;
//# sourceMappingURL=AxisLabelCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js ***!
  \****************************************************************************************/
/*! exports provided: AxisRendererCircular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisRendererCircular", function() { return AxisRendererCircular; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AxisRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxisRenderer */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRenderer.js");
/* harmony import */ var _AxisFillCircular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AxisFillCircular */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFillCircular.js");
/* harmony import */ var _GridCircular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridCircular */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/GridCircular.js");
/* harmony import */ var _AxisLabelCircular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxisLabelCircular */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabelCircular.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/Percent */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/* harmony import */ var _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/Math */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js");
/* harmony import */ var _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/rendering/Path */ "./node_modules/@amcharts/amcharts4/.internal/core/rendering/Path.js");
/* harmony import */ var _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/Utils */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Utils.js");
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * Module, defining Axis Renderer for circular axes.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */










/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A renderer for circular axis.
 */
var AxisRendererCircular = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AxisRendererCircular, _super);
    /**
     * Constructor.
     *
     * @param {Axis} axis Related axis
     */
    function AxisRendererCircular() {
        var _this = 
        // Init
        _super.call(this) || this;
        /**
         * @ignore
         */
        _this.pixelRadiusReal = 0;
        // axis.layout = "none"; // does not trigger redraw when size changes
        _this.layout = "none";
        _this.className = "AxisRendererCircular";
        _this.isMeasured = false;
        _this.startAngle = -90;
        _this.endAngle = 270;
        _this.useChartAngles = true;
        _this.radius = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__["percent"])(100);
        _this.isMeasured = false;
        _this.grid.template.location = 0;
        _this.labels.template.location = 0;
        _this.labels.template.radius = 15;
        _this.ticks.template.location = 0;
        _this.ticks.template.pixelPerfect = false;
        _this.tooltipLocation = 0;
        _this.line.strokeOpacity = 0;
        _this.applyTheme();
        return _this;
    }
    /**
    * @ignore
    */
    AxisRendererCircular.prototype.setAxis = function (axis) {
        var _this = this;
        _super.prototype.setAxis.call(this, axis);
        axis.isMeasured = false;
        // modify x and y so that tooltip would always be on circle
        var tooltip = axis.tooltip;
        tooltip.adapter.add("dx", function (x, target) {
            var point = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["svgPointToSprite"]({ x: target.pixelX, y: target.pixelY }, _this);
            return _this.pixelRadius * Math.cos(Math.atan2(point.y, point.x)) - point.x;
        });
        tooltip.adapter.add("dy", function (y, target) {
            var point = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["svgPointToSprite"]({ x: target.pixelX, y: target.pixelY }, _this);
            return _this.pixelRadius * Math.sin(Math.atan2(point.y, point.x)) - point.y;
        });
    };
    /**
     * Validates Axis renderer.
     *
     * @ignore Exclude from docs
     */
    AxisRendererCircular.prototype.validate = function () {
        // so that radius would be updated
        if (this.chart && this.chart.invalid) {
            this.chart.validate();
        }
        _super.prototype.validate.call(this);
    };
    Object.defineProperty(AxisRendererCircular.prototype, "axisLength", {
        /**
         * Returns actual length of the Axis, in pixels.
         *
         * @return {number} Length (px)
         */
        get: function () {
            return 2 * Math.PI * this.pixelRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "radius", {
        /**
         * @return {number | Percent} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the axis.
         *
         * Can be absolute (px) or relative ([[Percent]]).
         *
         * @param {number | Percent}  value  Outer radius
         */
        set: function (value) {
            if (this.setPercentProperty("radius", value, false, false, 10, false)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "pixelRadius", {
        /**
         * Outer radius in pixels.
         *
         * @return {number} Outer radius (px)
         */
        get: function () {
            return _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](this.radius, this.pixelRadiusReal) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "innerRadius", {
        /**
         * @return {number | Percent} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the axis.
         *
         * Can be absolute (px) or relative ([[Percent]]).
         *
         * @param {number | Percent}  value  Inner radius
         */
        set: function (value) {
            if (this.setPercentProperty("innerRadius", value, false, false, 10, false)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "useChartAngles", {
        /**
         * @return {boolean} Use chart angles
         */
        get: function () {
            return this.getPropertyValue("useChartAngles");
        },
        /**
         * Specifies if axis should use its own `startAngle` and `endAngle` or
         * inherit them from relative properties from chart.
         *
         * @default false
         * @param {boolean}  value  Use chart's angles
         */
        set: function (value) {
            this.setPropertyValue("useChartAngles", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "pixelInnerRadius", {
        /**
         * Inner radius in pixels.
         *
         * @return {number} Inner radius (px)
         */
        get: function () {
            return _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](this.innerRadius, this.pixelRadiusReal) || 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts relative position on axis to point coordinates.
     *
     * @param  {number}  position  Position (0-1)
     * @return {IPoint}            Point
     */
    AxisRendererCircular.prototype.positionToPoint = function (position) {
        var coordinate = this.positionToCoordinate(position);
        var angle = this.startAngle + (this.endAngle - this.startAngle) * coordinate / this.axisLength;
        return { x: this.pixelRadius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](angle), y: this.pixelRadius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](angle) };
    };
    /**
     * Converts relative position (0-1) on axis to angle in degrees (0-360).
     *
     * @param  {number}  position  Position (0-1)
     * @return {number}            Angle (0-360)
     */
    AxisRendererCircular.prototype.positionToAngle = function (position) {
        var axis = this.axis;
        var arc = (this.endAngle - this.startAngle) / (axis.end - axis.start);
        var angle;
        if (axis.renderer.inversed) {
            angle = this.startAngle + (axis.end - position) * arc;
        }
        else {
            angle = this.startAngle + (position - axis.start) * arc;
        }
        return _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["round"](angle, 3);
    };
    /**
     * Updates and positions the axis line element.
     *
     * @ignore Exclude from docs
     */
    AxisRendererCircular.prototype.updateAxisLine = function () {
        var radius = this.pixelRadius;
        var startAngle = this.startAngle;
        var endAngle = this.endAngle;
        var arc = endAngle - startAngle;
        this.line.path = _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["moveTo"]({ x: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](startAngle), y: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](startAngle) }) + _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["arcTo"](startAngle, arc, radius, radius);
    };
    /**
     * Updates and positions a grid element.
     *
     * @ignore Exclude from docs
     * @param {Grid}    grid         Grid element
     * @param {number}  position     Starting position
     * @param {number}  endPosition  End position
     */
    AxisRendererCircular.prototype.updateGridElement = function (grid, position, endPosition) {
        position = position + (endPosition - position) * grid.location;
        var point = this.positionToPoint(position);
        if (grid.element) {
            var angle = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["DEGREES"] * Math.atan2(point.y, point.x);
            var radius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](_core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["hasValue"](grid.radius) ? grid.radius : Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__["percent"])(100), this.pixelRadius);
            var gridInnerRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](grid.innerRadius, this.pixelRadius);
            grid.zIndex = 0;
            var innerRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](_core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["isNumber"](gridInnerRadius) ? gridInnerRadius : this.innerRadius, this.pixelRadius, true);
            grid.path = _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["moveTo"]({ x: innerRadius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](angle), y: innerRadius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](angle) }) + _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["lineTo"]({ x: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](angle), y: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](angle) });
        }
        this.toggleVisibility(grid, position, 0, 1);
    };
    /**
     * Updates and positions a tick element.
     *
     * @ignore Exclude from docs
     * @param {AxisTick}  tick         Tick element
     * @param {number}    position     Starting position
     * @param {number}    endPosition  End position
     */
    AxisRendererCircular.prototype.updateTickElement = function (tick, position, endPosition) {
        position = position + (endPosition - position) * tick.location;
        var point = this.positionToPoint(position);
        if (tick.element) {
            var radius = this.pixelRadius;
            var angle = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["DEGREES"] * Math.atan2(point.y, point.x);
            var tickLength = tick.length;
            if (tick.inside) {
                tickLength = -tickLength;
            }
            tick.zIndex = 1;
            tick.path = _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["moveTo"]({ x: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](angle), y: radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](angle) }) + _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["lineTo"]({ x: (radius + tickLength) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["cos"](angle), y: (radius + tickLength) * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["sin"](angle) });
        }
        this.toggleVisibility(tick, position, 0, 1);
    };
    /**
     * Updates and positions a label element.
     *
     * @ignore Exclude from docs
     * @param {AxisLabel}  label        Label element
     * @param {number}     position     Starting position
     * @param {number}     endPosition  Ending position
     */
    AxisRendererCircular.prototype.updateLabelElement = function (label, position, endPosition, location) {
        if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["hasValue"](location)) {
            location = label.location;
        }
        position = position + (endPosition - position) * location;
        label.fixPosition(this.positionToAngle(position), this.pixelRadius);
        label.zIndex = 2;
        this.toggleVisibility(label, position, this.minLabelPosition, this.maxLabelPosition);
    };
    /**
     * Checks if point is within bounds of a container.
     *
     * @ignore Exclude from docs
     * @param  {IPoint}   point Point coordinates
     * @return {boolean}         Fits?
     */
    AxisRendererCircular.prototype.fitsToBounds = function (point) {
        return true;
    };
    Object.defineProperty(AxisRendererCircular.prototype, "startAngle", {
        /**
         * @return {number} Start angle
         */
        get: function () {
            return this.getPropertyValue("startAngle");
        },
        /**
         * Start angle of the axis in degrees (0-360).
         *
         * @param {number}  value  Start angle
         */
        set: function (value) {
            // do not normalize angel here!
            if (this.setPropertyValue("startAngle", value)) {
                this.invalidateAxisItems();
                if (this.axis) {
                    this.axis.invalidateSeries();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "endAngle", {
        /**
         * @return {number} End angle
         */
        get: function () {
            return this.getPropertyValue("endAngle");
        },
        /**
         * End angle of the axis in degrees (0-360).
         *
         * @param {number}  value  End angle
         */
        set: function (value) {
            // do not normalize angel here!
            if (this.setPropertyValue("endAngle", value)) {
                this.invalidateAxisItems();
                if (this.axis) {
                    this.axis.invalidateSeries();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [getPositionRangePath description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @param  {number}  startPosition  Starting position
     * @param  {number}  endPosition    End position
     * @return {string}                 SVG path
     */
    AxisRendererCircular.prototype.getPositionRangePath = function (startPosition, endPosition, radius, innerRadius, cornerRadius) {
        var path = "";
        if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["isNumber"](startPosition) && _core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["isNumber"](endPosition)) {
            if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_10__["hasValue"](radius)) {
                radius = this.radius;
            }
            startPosition = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["max"](startPosition, this.axis.start);
            endPosition = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["min"](endPosition, this.axis.end);
            if (endPosition < startPosition) {
                endPosition = startPosition;
            }
            var pixelRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](radius, this.pixelRadius);
            var pixelInnerRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["relativeRadiusToValue"](innerRadius, this.pixelRadius, true);
            var startAngle = this.positionToAngle(startPosition);
            var endAngle = this.positionToAngle(endPosition);
            var arc = endAngle - startAngle;
            path = _core_rendering_Path__WEBPACK_IMPORTED_MODULE_8__["arc"](startAngle, arc, pixelRadius, pixelInnerRadius, pixelRadius, cornerRadius);
        }
        return path;
    };
    /**
     * Returns a new grid element, suitable for this Axis Renderer type.
     *
     * @return {GridCircular} Grid element
     */
    AxisRendererCircular.prototype.createGrid = function () {
        return new _GridCircular__WEBPACK_IMPORTED_MODULE_3__["GridCircular"]();
    };
    /**
     * Returns a new fill element, suitable for this Axis Renderer type.
     *
     * @return {AxisFillCircular} Fill element
     */
    AxisRendererCircular.prototype.createFill = function (axis) {
        return new _AxisFillCircular__WEBPACK_IMPORTED_MODULE_2__["AxisFillCircular"](axis);
    };
    /**
     * Returns a new label element, suitable for this Axis Renderer type.
     *
     * @return {AxisLabelCircular} Label element
     */
    AxisRendererCircular.prototype.createLabel = function () {
        return new _AxisLabelCircular__WEBPACK_IMPORTED_MODULE_4__["AxisLabelCircular"]();
    };
    /**
     * Converts a point at specific coordinates to a relative position (0-1)
     * on the axis.
     *
     * @param  {IPoint}  point  Point
     * @return {number}         Position (0-1)
     */
    AxisRendererCircular.prototype.pointToPosition = function (point) {
        var angle = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["fitAngleToRange"](_core_utils_Math__WEBPACK_IMPORTED_MODULE_7__["getAngle"](point), this.startAngle, this.endAngle);
        return this.coordinateToPosition((angle - this.startAngle) / 360 * this.axisLength);
    };
    return AxisRendererCircular;
}(_AxisRenderer__WEBPACK_IMPORTED_MODULE_1__["AxisRenderer"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_5__["registry"].registeredClasses["AxisRendererCircular"] = AxisRendererCircular;
//# sourceMappingURL=AxisRendererCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/GridCircular.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/axes/GridCircular.js ***!
  \********************************************************************************/
/*! exports provided: GridCircular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCircular", function() { return GridCircular; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/Grid.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/**
 * A module defining functionality for circular axis grid elements.
 */



/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a circular grid element for circular-type axis.
 *
 * @see {@link IGridCircularEvents} for a list of available events
 * @see {@link IGridCircularAdapters} for a list of available Adapters
 * @todo Review: container is better, as we'll be able to attach something to the GridCircular, also with 3d charts we might need some additional elements
 */
var GridCircular = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GridCircular, _super);
    /**
     * Constructor
     */
    function GridCircular() {
        var _this = _super.call(this) || this;
        _this.className = "GridCircular";
        _this.pixelPerfect = false;
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(GridCircular.prototype, "innerRadius", {
        /**
         * @return {number} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the circular grid. (absolute or relative)
         *
         * @param {number | Percent} value Inner radius
         */
        set: function (value) {
            this.setPercentProperty("innerRadius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridCircular.prototype, "radius", {
        /**
         * @return {number} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the circular grid. (absolute or relative)
         *
         * @param {number | Percent} value Outer radius
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    return GridCircular;
}(_Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_2__["registry"].registeredClasses["GridCircular"] = GridCircular;
//# sourceMappingURL=GridCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/map/SmallMap.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/map/SmallMap.js ***!
  \***************************************************************************/
/*! exports provided: SmallMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallMap", function() { return SmallMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Container */ "./node_modules/@amcharts/amcharts4/.internal/core/Container.js");
/* harmony import */ var _core_elements_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/elements/Rectangle */ "./node_modules/@amcharts/amcharts4/.internal/core/elements/Rectangle.js");
/* harmony import */ var _core_utils_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/List */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/List.js");
/* harmony import */ var _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Disposer */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/Color */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js");
/* harmony import */ var _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/InterfaceColorSet */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/InterfaceColorSet.js");
/* harmony import */ var _core_utils_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/Utils */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Utils.js");
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * A module for the mini-map control.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */









/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a "bird's eye" view of the whole map.
 *
 * This control creates a mini-map with the whole of the map, highlighting
 * the area which is in the current viewport of the map map.
 *
 * @see {@link ISmallMapEvents} for a list of available events
 * @see {@link ISmallMapAdapters} for a list of available Adapters
 * @important
 */
var SmallMap = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SmallMap, _super);
    /**
     * Constructor
     */
    function SmallMap() {
        var _this = 
        // Init
        _super.call(this) || this;
        /**
         * A target map.
         *
         * @type {MutableValueDisposer<MapChart>}
         */
        _this._chart = new _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__["MutableValueDisposer"]();
        _this.className = "SmallMap";
        // Set defaults
        _this.align = "left";
        _this.valign = "bottom";
        _this.percentHeight = 20;
        _this.percentWidth = 20;
        _this.margin(5, 5, 5, 5);
        var interfaceColors = new _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_7__["InterfaceColorSet"]();
        // Set background defailts
        _this.background.fillOpacity = 0.9;
        _this.background.fill = interfaceColors.getFor("background");
        // Set up events
        _this.events.on("hit", _this.moveToPosition, _this, false);
        _this.events.on("maxsizechanged", _this.updateMapSize, _this, false);
        // Create a container
        _this.seriesContainer = _this.createChild(_core_Container__WEBPACK_IMPORTED_MODULE_1__["Container"]);
        _this.seriesContainer.shouldClone = false;
        // Create an outline rectangle
        var rectangle = _this.createChild(_core_elements_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"]);
        rectangle.shouldClone = false;
        rectangle.stroke = interfaceColors.getFor("alternativeBackground");
        rectangle.strokeWidth = 1;
        rectangle.strokeOpacity = 0.5;
        rectangle.fill = Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_6__["color"])(); //"none";
        rectangle.verticalCenter = "middle";
        rectangle.horizontalCenter = "middle";
        rectangle.isMeasured = false;
        _this.rectangle = rectangle;
        _this._disposers.push(_this._chart);
        // Apply theme
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(SmallMap.prototype, "series", {
        /**
         * A list of map series used to draw the mini-map.
         *
         * @readonly
         * @return {List<MapSeries>} Series
         */
        get: function () {
            if (!this._series) {
                this._series = new _core_utils_List__WEBPACK_IMPORTED_MODULE_3__["List"]();
                this._series.events.on("inserted", this.handleSeriesAdded, this, false);
                this._series.events.on("removed", this.handleSeriesRemoved, this, false);
            }
            return this._series;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Decorates a new series when they are pushed into a `series` list.
     *
     * @param {IListEvents<MapSeries>["inserted"]} event Event
     */
    SmallMap.prototype.handleSeriesAdded = function (event) {
        var series = event.newValue;
        if (this.chart.series.contains(series)) {
            var newSeries = series.clone();
            this._series.removeValue(series);
            this._series.push(newSeries);
            series = newSeries;
            this.chart.dataUsers.push(newSeries);
        }
        series.chart = this.chart;
        series.parent = this.seriesContainer;
        series.interactionsEnabled = false;
    };
    /**
     * Cleans up after series are removed from Scrollbar.
     *
     * @param {IListEvents<XYSeries>["removed"]}  event  Event
     */
    SmallMap.prototype.handleSeriesRemoved = function (event) {
        //let sourceSeries: MapSeries = event.oldValue;
        this.invalidate();
    };
    /**
     * Moves main map pan position after click on the small map.
     *
     * @ignore Exclude from docs
     * @param {AMEvent<Sprite, ISpriteEvents>["hit"]}  event  Event
     */
    SmallMap.prototype.moveToPosition = function (event) {
        var rectPoint = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["spritePointToSprite"](event.spritePoint, this, this.seriesContainer);
        var geoPoint = this.chart.seriesPointToGeo(rectPoint);
        this.chart.zoomToGeoPoint(geoPoint, this.chart.zoomLevel, true);
    };
    Object.defineProperty(SmallMap.prototype, "chart", {
        /**
         * @return {MapChart} Chart/map
         */
        get: function () {
            return this._chart.get();
        },
        /**
         * A chart/map that this control is meant for.
         *
         * @param {MapChart}  chart  Chart/map
         */
        set: function (chart) {
            if (this.chart != chart) {
                this._chart.set(chart, new _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__["MultiDisposer"]([
                    //chart.events.on("zoomlevelchanged", this.updateRectangle, this, false),
                    chart.events.on("mappositionchanged", this.updateRectangle, this, false),
                    chart.events.on("scaleratiochanged", this.updateMapSize, this, false)
                ]));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the viewport recangle as per current map zoom/pan position.
     *
     * @ignore Exclude from docs
     */
    SmallMap.prototype.updateRectangle = function () {
        var chart = this.chart;
        var zoomLevel = chart.zoomLevel;
        var rectangle = this.rectangle;
        rectangle.width = this.pixelWidth / zoomLevel;
        rectangle.height = this.pixelHeight / zoomLevel;
        var scale = Math.min(this.percentWidth, this.percentHeight) / 100;
        var seriesContainer = chart.seriesContainer;
        rectangle.x = Math.ceil((zoomLevel * seriesContainer.pixelWidth / 2 - seriesContainer.pixelX) * scale / zoomLevel); // + rectangle.pixelWidth / 2);
        rectangle.y = Math.ceil((zoomLevel * seriesContainer.pixelHeight / 2 - seriesContainer.pixelY) * scale / zoomLevel); // + rectangle.pixelHeight / 2);
        rectangle.validate();
    };
    /**
     * Update map size so that internal elements can redraw themselves after
     * the size of the small map changes.
     *
     * @ignore Exclude from docs
     */
    SmallMap.prototype.updateMapSize = function () {
        if (this.chart) {
            this.seriesContainer.scale = this.chart.scaleRatio * Math.min(this.percentWidth, this.percentHeight) / 100;
            this.updateRectangle();
            this.afterDraw();
        }
    };
    /**
     * Update elements after drawing the small map.
     */
    SmallMap.prototype.afterDraw = function () {
        _super.prototype.afterDraw.call(this);
        this.seriesContainer.moveTo({ x: this.pixelWidth / 2, y: this.pixelHeight / 2 });
        this.rectangle.maskRectangle = { x: -1, y: -1, width: Math.ceil(this.pixelWidth + 2), height: Math.ceil(this.pixelHeight + 2) };
    };
    /**
     * Processes JSON-based config before it is applied to the object.
     *
     * @ignore Exclude from docs
     * @param {object}  config  Config
     */
    SmallMap.prototype.processConfig = function (config) {
        if (config) {
            // Set up series
            if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_9__["hasValue"](config.series) && _core_utils_Type__WEBPACK_IMPORTED_MODULE_9__["isArray"](config.series)) {
                for (var i = 0, len = config.series.length; i < len; i++) {
                    var series = config.series[i];
                    if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_9__["hasValue"](series) && _core_utils_Type__WEBPACK_IMPORTED_MODULE_9__["isString"](series) && this.map.hasKey(series)) {
                        config.series[i] = this.map.getKey(series);
                    }
                }
            }
        }
        _super.prototype.processConfig.call(this, config);
    };
    return SmallMap;
}(_core_Container__WEBPACK_IMPORTED_MODULE_1__["Container"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_5__["registry"].registeredClasses["SmallMap"] = SmallMap;
//# sourceMappingURL=SmallMap.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/map/ZoomControl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/charts/map/ZoomControl.js ***!
  \******************************************************************************/
/*! exports provided: ZoomControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return ZoomControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Container */ "./node_modules/@amcharts/amcharts4/.internal/core/Container.js");
/* harmony import */ var _core_elements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/elements/Button */ "./node_modules/@amcharts/amcharts4/.internal/core/elements/Button.js");
/* harmony import */ var _core_elements_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/elements/RoundedRectangle */ "./node_modules/@amcharts/amcharts4/.internal/core/elements/RoundedRectangle.js");
/* harmony import */ var _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Disposer */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js");
/* harmony import */ var _core_utils_Keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/Keyboard */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Keyboard.js");
/* harmony import */ var _core_interaction_Interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/interaction/Interaction */ "./node_modules/@amcharts/amcharts4/.internal/core/interaction/Interaction.js");
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/Percent */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/InterfaceColorSet */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/InterfaceColorSet.js");
/**
 * Zoom control module
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */









/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a control for zooming the map.
 *
 * @see {@link IZoomControlEvents} for a list of available events
 * @see {@link IZoomControlAdapters} for a list of available Adapters
 * @important
 */
var ZoomControl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZoomControl, _super);
    /**
     * Constructor
     */
    function ZoomControl() {
        var _this = _super.call(this) || this;
        /**
         * A target map.
         *
         * @type {MutableValueDisposer<MapChart>}
         */
        _this._chart = new _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__["MutableValueDisposer"]();
        _this.className = "ZoomControl";
        _this.align = "right";
        _this.valign = "bottom";
        _this.layout = "vertical";
        _this.padding(5, 5, 5, 5);
        var interfaceColors = new _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_9__["InterfaceColorSet"]();
        var plusButton = _this.createChild(_core_elements_Button__WEBPACK_IMPORTED_MODULE_2__["Button"]);
        plusButton.shouldClone = false;
        plusButton.label.text = "+";
        plusButton.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
        plusButton.padding(5, 5, 5, 5);
        //plusButton.fontFamily = "Verdana";
        _this.plusButton = plusButton;
        var slider = _this.createChild(_core_Container__WEBPACK_IMPORTED_MODULE_1__["Container"]);
        slider.shouldClone = false;
        slider.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
        slider.background.fill = interfaceColors.getFor("alternativeBackground");
        slider.background.fillOpacity = 0.05;
        slider.background.events.on("hit", _this.handleBackgroundClick, _this, false);
        slider.events.on("sizechanged", _this.updateThumbSize, _this, false);
        _this.slider = slider;
        var thumb = slider.createChild(_core_elements_Button__WEBPACK_IMPORTED_MODULE_2__["Button"]);
        thumb.shouldClone = false;
        thumb.padding(0, 0, 0, 0);
        thumb.draggable = true;
        thumb.events.on("drag", _this.handleThumbDrag, _this, false);
        _this.thumb = thumb;
        var minusButton = _this.createChild(_core_elements_Button__WEBPACK_IMPORTED_MODULE_2__["Button"]);
        minusButton.shouldClone = false;
        minusButton.label.text = "-";
        minusButton.padding(5, 5, 5, 5);
        //minusButton.fontFamily = "Verdana";
        _this.minusButton = minusButton;
        // Set roles
        _this.thumb.role = "slider";
        _this.thumb.readerLive = "polite";
        // Set reader text
        _this.thumb.readerTitle = _this.language.translate("Use arrow keys to zoom in and out");
        _this.minusButton.readerTitle = _this.language.translate("Press ENTER to zoom in");
        _this.plusButton.readerTitle = _this.language.translate("Press ENTER to zoom out");
        _this.applyTheme();
        _this.events.on("propertychanged", function (event) {
            if (event.property == "layout") {
                _this.fixLayout();
            }
        }, undefined, false);
        _this._disposers.push(_this._chart);
        _this.fixLayout();
        return _this;
    }
    ZoomControl.prototype.fixLayout = function () {
        if (this.layout == "vertical") {
            this.width = 40;
            this.height = undefined;
            this.minusButton.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.thumb.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.plusButton.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.slider.width = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.minusButton.marginTop = 1;
            this.plusButton.marginBottom = 2;
            this.slider.height = 0;
            this.minusButton.toFront();
            this.plusButton.toBack();
            this.thumb.minX = 0;
            this.thumb.maxX = 0;
            this.thumb.minY = 0;
        }
        else if (this.layout == "horizontal") {
            this.thumb.minX = 0;
            this.thumb.minY = 0;
            this.thumb.maxY = 0;
            this.height = 40;
            this.width = undefined;
            this.minusButton.height = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.minusButton.width = 30;
            this.thumb.height = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.thumb.width = undefined;
            this.plusButton.height = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.plusButton.width = 30;
            this.slider.height = Object(_core_utils_Percent__WEBPACK_IMPORTED_MODULE_7__["percent"])(100);
            this.slider.width = 0;
            this.minusButton.marginLeft = 2;
            this.plusButton.marginRight = 2;
            this.minusButton.toBack();
            this.plusButton.toFront();
        }
    };
    /**
     * Handles zoom operation after clicking on the slider background.
     *
     * @ignore Exclude from docs
     * @param {AMEvent<Sprite, ISpriteEvents>["hit"]}  event  Event
     */
    ZoomControl.prototype.handleBackgroundClick = function (event) {
        var sprite = event.target;
        var y = event.spritePoint.y;
        var chart = this.chart;
        var maxPower = Math.log(chart.maxZoomLevel) / Math.LN2;
        var minPower = Math.log(chart.minZoomLevel) / Math.LN2;
        var power = (sprite.pixelHeight - y) / sprite.pixelHeight * (minPower + (maxPower - minPower));
        var zoomLevel = Math.pow(2, power);
        chart.zoomToGeoPoint(chart.zoomGeoPoint, zoomLevel);
    };
    Object.defineProperty(ZoomControl.prototype, "chart", {
        /**
         * @return {MapChart} Map/chart
         */
        get: function () {
            return this._chart.get();
        },
        /**
         * A main chart/map that this zoom control is for.
         *
         * @param {MapChart}  chart  Map/chart
         */
        set: function (chart) {
            var _this = this;
            this._chart.set(chart, new _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__["MultiDisposer"]([
                chart.events.on("maxsizechanged", this.updateThumbSize, this, false),
                chart.events.on("zoomlevelchanged", this.updateThumb, this, false),
                this.minusButton.events.on("hit", function () { chart.zoomOut(chart.zoomGeoPoint); }, chart, false),
                Object(_core_interaction_Interaction__WEBPACK_IMPORTED_MODULE_6__["getInteraction"])().body.events.on("keyup", function (ev) {
                    if (_this.topParent.hasFocused) {
                        if (_core_utils_Keyboard__WEBPACK_IMPORTED_MODULE_5__["keyboard"].isKey(ev.event, "enter")) {
                            if (_this.minusButton.isFocused) {
                                chart.zoomOut();
                            }
                            else if (_this.plusButton.isFocused) {
                                chart.zoomIn();
                            }
                        }
                        else if (_core_utils_Keyboard__WEBPACK_IMPORTED_MODULE_5__["keyboard"].isKey(ev.event, "plus")) {
                            chart.zoomIn();
                        }
                        else if (_core_utils_Keyboard__WEBPACK_IMPORTED_MODULE_5__["keyboard"].isKey(ev.event, "minus")) {
                            chart.zoomOut();
                        }
                    }
                }, chart),
                this.plusButton.events.on("hit", function () { chart.zoomIn(chart.zoomGeoPoint); }, chart, false)
            ]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the slider's thumb size based on the available zoom space.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.updateThumbSize = function () {
        var chart = this.chart;
        if (chart) {
            var slider = this.slider;
            var thumb = this.thumb;
            if (this.layout == "vertical") {
                thumb.minHeight = Math.min(this.slider.pixelHeight, 20);
                thumb.height = slider.pixelHeight / this.stepCount;
                thumb.maxY = slider.pixelHeight - thumb.pixelHeight;
                if (thumb.pixelHeight <= 1) {
                    thumb.visible = false;
                }
                else {
                    thumb.visible = true;
                }
            }
            else {
                thumb.minWidth = Math.min(this.slider.pixelWidth, 20);
                thumb.width = slider.pixelWidth / this.stepCount;
                thumb.maxX = slider.pixelWidth - thumb.pixelWidth;
                if (thumb.pixelWidth <= 1) {
                    thumb.visible = false;
                }
                else {
                    thumb.visible = true;
                }
            }
        }
    };
    /**
     * Updates thumb according to current zoom position from map.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.updateThumb = function () {
        var slider = this.slider;
        var chart = this.chart;
        var thumb = this.thumb;
        if (!thumb.isDown) {
            var step = (Math.log(chart.zoomLevel) - Math.log(this.chart.minZoomLevel)) / Math.LN2;
            if (this.layout == "vertical") {
                thumb.y = slider.pixelHeight - (slider.pixelHeight - thumb.pixelHeight) * step / this.stepCount - thumb.pixelHeight;
            }
            else {
                thumb.x = slider.pixelWidth * step / this.stepCount;
            }
        }
    };
    /**
     * Zooms the actual map when slider position changes.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.handleThumbDrag = function () {
        var slider = this.slider;
        var chart = this.chart;
        var thumb = this.thumb;
        var step;
        var minStep = Math.log(this.chart.minZoomLevel) / Math.LN2;
        if (this.layout == "vertical") {
            step = this.stepCount * (slider.pixelHeight - thumb.pixelY - thumb.pixelHeight) / (slider.pixelHeight - thumb.pixelHeight);
        }
        else {
            step = this.stepCount * thumb.pixelX / slider.pixelWidth;
        }
        step = minStep + step;
        var zoomLevel = Math.pow(2, step);
        chart.zoomToGeoPoint(undefined, zoomLevel, false, 0);
    };
    Object.defineProperty(ZoomControl.prototype, "stepCount", {
        /**
         * Returns the step countfor the slider grid according to map's min and max
         * zoom level settings.
         *
         * @ignore Exclude from docs
         * @return {number} Step count
         */
        get: function () {
            return Math.log(this.chart.maxZoomLevel) / Math.LN2 - Math.log(this.chart.minZoomLevel) / Math.LN2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a background element for slider control.
     *
     * @ignore Exclude from docs
     * @return {this} Background
     */
    ZoomControl.prototype.createBackground = function () {
        return new _core_elements_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__["RoundedRectangle"]();
    };
    return ZoomControl;
}(_core_Container__WEBPACK_IMPORTED_MODULE_1__["Container"]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
_core_Registry__WEBPACK_IMPORTED_MODULE_8__["registry"].registeredClasses["ZoomControl"] = ZoomControl;
//# sourceMappingURL=ZoomControl.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/responsive/ResponsiveDefaults.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/responsive/ResponsiveDefaults.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../charts/axes/AxisRenderer */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRenderer.js");
/* harmony import */ var _charts_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../charts/axes/AxisRendererX */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererX.js");
/* harmony import */ var _charts_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/axes/AxisRendererY */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererY.js");
/* harmony import */ var _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../charts/axes/AxisRendererCircular */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js");
/* harmony import */ var _charts_Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../charts/Chart */ "./node_modules/@amcharts/amcharts4/.internal/charts/Chart.js");
/* harmony import */ var _charts_Legend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../charts/Legend */ "./node_modules/@amcharts/amcharts4/.internal/charts/Legend.js");
/* harmony import */ var _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../charts/map/SmallMap */ "./node_modules/@amcharts/amcharts4/.internal/charts/map/SmallMap.js");
/* harmony import */ var _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/map/ZoomControl */ "./node_modules/@amcharts/amcharts4/.internal/charts/map/ZoomControl.js");
/**
 * Defines default Responsive rules
 * @hidden
 */








/**
 * ============================================================================
 * RULES
 * ============================================================================
 * @hidden
 */
/**
 * Default rules.
 *
 * @ignore Exclude from docs
 * @todo Do not create states for objects that do not have any overrides
 */
/* harmony default export */ __webpack_exports__["default"] = ([
    /**
     * --------------------------------------------------------------------------
     * Microcharts and sparklines
     * W<=100 || H<=100
     * @todo
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 100) || (container.pixelHeight <= 100)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_0__["AxisRenderer"]) {
                var state = object.states.create(stateId);
                state.properties.minLabelPosition = 1;
                state.properties.maxLabelPosition = 0;
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Narrow
     * W<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_2__["AxisRendererY"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__["AxisRendererCircular"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__["SmallMap"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.height = 0;
                return state;
            }*/
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.layout = "vertical";
                return state;
            }
            if (object instanceof _charts_Chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]) {
                var state = object.states.create(stateId);
                state.properties.marginLeft = 0;
                state.properties.marginRight = 0;
                return state;
            }
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"] && (object.position == "left" || object.position == "right")) {
                var state = object.states.create(stateId);
                state.properties.position = "bottom";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Short
     * H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_1__["AxisRendererX"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__["AxisRendererCircular"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__["SmallMap"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.width = 100;
                return state;
            }*/
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.layout = "horizontal";
                return state;
            }
            if (object instanceof _charts_Chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]) {
                var state = object.states.create(stateId);
                state.properties.marginTop = 0;
                state.properties.marginBottom = 0;
                return state;
            }
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"] && (object.position == "bottom" || object.position == "top")) {
                var state = object.states.create(stateId);
                state.properties.position = "right";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Super-small
     * W<=200 && H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200) && (container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Hide legend
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
        }
    }
]);
//# sourceMappingURL=ResponsiveDefaults.js.map

/***/ })

}]);
//# sourceMappingURL=responsivedefaults.js.map