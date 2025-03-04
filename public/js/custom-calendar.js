/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/front/js/custom-calendar.js ***!
  \***********************************************/
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e28) { throw _e28; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e29) { didErr = true; err = _e29; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*! For license information please see custom-calendar.js.LICENSE.txt */
(function () {
  var e = {
      545: function _(e) {
        e.exports = function () {
          "use strict";

          var _O;
          var e = {
              d: function d(t, n) {
                for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                  enumerable: !0,
                  get: n[i]
                });
              },
              o: function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }
            },
            t = {};
          e.d(t, {
            "default": function _default() {
              return H;
            }
          });
          var n = {
              days: "days",
              months: "months",
              years: "years",
              day: "day",
              month: "month",
              year: "year",
              eventChangeViewDate: "changeViewDate",
              eventChangeCurrentView: "changeCurrentView",
              eventChangeFocusDate: "changeFocusDate",
              eventChangeSelectedDate: "changeSelectedDate",
              eventChangeTime: "changeTime",
              eventChangeLastSelectedDate: "changeLastSelectedDate",
              actionSelectDate: "selectDate",
              actionUnselectDate: "unselectDate",
              cssClassWeekend: "-weekend-"
            },
            i = {
              classes: "",
              inline: !1,
              locale: {
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1
              },
              startDate: new Date(),
              firstDay: "",
              weekends: [6, 0],
              dateFormat: "",
              altField: "",
              altFieldDateFormat: "T",
              toggleSelected: !0,
              keyboardNav: !0,
              selectedDates: !1,
              container: "",
              isMobile: !1,
              visible: !1,
              position: "bottom left",
              offset: 12,
              view: n.days,
              minView: n.days,
              showOtherMonths: !0,
              selectOtherMonths: !0,
              moveToOtherMonthsOnSelect: !0,
              showOtherYears: !0,
              selectOtherYears: !0,
              moveToOtherYearsOnSelect: !0,
              minDate: "",
              maxDate: "",
              disableNavWhenOutOfRange: !0,
              multipleDates: !1,
              multipleDatesSeparator: ", ",
              range: !1,
              dynamicRange: !0,
              buttons: !1,
              monthsField: "monthsShort",
              showEvent: "focus",
              autoClose: !1,
              prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
              nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
              navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
              },
              timepicker: !1,
              onlyTimepicker: !1,
              dateTimeSeparator: " ",
              timeFormat: "",
              minHours: 0,
              maxHours: 24,
              minMinutes: 0,
              maxMinutes: 59,
              hoursStep: 1,
              minutesStep: 1,
              onSelect: !1,
              onChangeViewDate: !1,
              onChangeView: !1,
              onRenderCell: !1,
              onShow: !1,
              onHide: !1,
              onClickDayName: !1
            };
          function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e ? t.querySelector(e) : e;
          }
          function o() {
            var _o$classList;
            var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              _ref$tagName = _ref.tagName,
              e = _ref$tagName === void 0 ? "div" : _ref$tagName,
              _ref$className = _ref.className,
              t = _ref$className === void 0 ? "" : _ref$className,
              _ref$innerHtml = _ref.innerHtml,
              n = _ref$innerHtml === void 0 ? "" : _ref$innerHtml,
              _ref$id = _ref.id,
              i = _ref$id === void 0 ? "" : _ref$id,
              _ref$attrs = _ref.attrs,
              r = _ref$attrs === void 0 ? {} : _ref$attrs,
              o = document.createElement(e);
            return t && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(t.split(" "))), i && (o.id = i), n && (o.innerHTML = n), r && a(o, r), o;
          }
          function a(e, t) {
            for (var _i2 = 0, _Object$entries = Object.entries(t); _i2 < _Object$entries.length; _i2++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                _n2 = _Object$entries$_i[0],
                _i3 = _Object$entries$_i[1];
              void 0 !== _i3 && e.setAttribute(_n2, _i3);
            }
            return e;
          }
          function s(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
          }
          function l(e) {
            var t = e.getHours(),
              n = t % 12 == 0 ? 12 : t % 12;
            return {
              year: e.getFullYear(),
              month: e.getMonth(),
              fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
              date: e.getDate(),
              fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
              day: e.getDay(),
              hours: t,
              fullHours: c(t),
              hours12: n,
              fullHours12: c(n),
              minutes: e.getMinutes(),
              fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
            };
          }
          function c(e) {
            return e < 10 ? "0" + e : e;
          }
          function d(e) {
            var t = 10 * Math.floor(e.getFullYear() / 10);
            return [t, t + 9];
          }
          function u() {
            var e = [];
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return n.forEach(function (t) {
              if ("object" == _typeof(t)) for (var _n3 in t) t[_n3] && e.push(_n3);else t && e.push(t);
            }), e.join(" ");
          }
          function p(e, t) {
            var _n$days$n$months$n$ye;
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.days;
            if (!e || !t) return !1;
            var r = l(e),
              o = l(t);
            return (_n$days$n$months$n$ye = {}, _defineProperty(_n$days$n$months$n$ye, n.days, r.date === o.date && r.month === o.month && r.year === o.year), _defineProperty(_n$days$n$months$n$ye, n.months, r.month === o.month && r.year === o.year), _defineProperty(_n$days$n$months$n$ye, n.years, r.year === o.year), _n$days$n$months$n$ye)[i];
          }
          function f(e, t, n) {
            var i = m(e, !1).getTime(),
              r = m(t, !1).getTime();
            return n ? i >= r : i > r;
          }
          function h(e, t) {
            return !f(e, t, !0);
          }
          function m(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = new Date(e.getTime());
            return "boolean" != typeof t || t || g(n), n;
          }
          function g(e) {
            return e.setHours(0, 0, 0, 0), e;
          }
          function v(e, t, n) {
            e.length ? e.forEach(function (e) {
              e.addEventListener(t, n);
            }) : e.addEventListener(t, n);
          }
          function b(e, t) {
            return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : b(e.parentNode, t));
          }
          function w(e, t, n) {
            return e > n ? n : e < t ? t : e;
          }
          function y(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return n.filter(function (e) {
              return e;
            }).forEach(function (t) {
              for (var _i4 = 0, _Object$entries2 = Object.entries(t); _i4 < _Object$entries2.length; _i4++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
                  _n4 = _Object$entries2$_i[0],
                  _i5 = _Object$entries2$_i[1];
                if (void 0 !== _i5 && "[object Object]" === _i5.toString()) {
                  var _t2 = void 0 !== e[_n4] ? e[_n4].toString() : void 0,
                    _r2 = _i5.toString(),
                    _o2 = Array.isArray(_i5) ? [] : {};
                  e[_n4] = e[_n4] ? _t2 !== _r2 ? _o2 : e[_n4] : _o2, y(e[_n4], _i5);
                } else e[_n4] = _i5;
              }
            }), e;
          }
          function E(e) {
            var t = e;
            return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), t = !1), t;
          }
          function _(e) {
            var t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
          }
          function T(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var D = /*#__PURE__*/function () {
            function D() {
              var _this = this;
              _classCallCheck(this, D);
              var _ref2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = _ref2.type,
                t = _ref2.date,
                n = _ref2.dp,
                i = _ref2.opts,
                r = _ref2.body;
              T(this, "focus", function () {
                _this.$cell.classList.add("-focus-"), _this.focused = !0;
              }), T(this, "removeFocus", function () {
                _this.$cell.classList.remove("-focus-"), _this.focused = !1;
              }), T(this, "select", function () {
                _this.$cell.classList.add("-selected-"), _this.selected = !0;
              }), T(this, "removeSelect", function () {
                _this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), _this.selected = !1;
              }), T(this, "onChangeSelectedDate", function () {
                _this.isDisabled || (_this._handleSelectedStatus(), _this.opts.range && _this._handleRangeStatus());
              }), T(this, "onChangeFocusDate", function (e) {
                if (!e) return void (_this.focused && _this.removeFocus());
                var t = p(e, _this.date, _this.type);
                t ? _this.focus() : !t && _this.focused && _this.removeFocus(), _this.opts.range && _this._handleRangeStatus();
              }), T(this, "render", function () {
                return _this.$cell.innerHTML = _this._getHtml(), _this.$cell.adpCell = _this, _this.$cell;
              }), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = n, this.opts = i, this.body = r, this.customData = !1, this.init();
            }
            _createClass(D, [{
              key: "init",
              value: function init() {
                var _this$opts = this.opts,
                  e = _this$opts.range,
                  t = _this$opts.onRenderCell;
                t && (this.customData = t({
                  date: this.date,
                  cellType: this.singleType,
                  datepicker: this.dp
                })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
              }
            }, {
              key: "_bindDatepickerEvents",
              value: function _bindDatepickerEvents() {
                this.dp.on(n.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(n.eventChangeFocusDate, this.onChangeFocusDate);
              }
            }, {
              key: "unbindDatepickerEvents",
              value: function unbindDatepickerEvents() {
                this.dp.off(n.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(n.eventChangeFocusDate, this.onChangeFocusDate);
              }
            }, {
              key: "_createElement",
              value: function _createElement() {
                var e;
                var _l = l(this.date),
                  t = _l.year,
                  n = _l.month,
                  i = _l.date,
                  r = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
                this.$cell = o({
                  className: this._getClassName(),
                  attrs: _objectSpread({
                    "data-year": t,
                    "data-month": n,
                    "data-date": i
                  }, r)
                });
              }
            }, {
              key: "_getClassName",
              value: function _getClassName() {
                var e, t;
                var i = new Date(),
                  _this$opts2 = this.opts,
                  r = _this$opts2.selectOtherMonths,
                  o = _this$opts2.selectOtherYears,
                  _this$dp = this.dp,
                  a = _this$dp.minDate,
                  s = _this$dp.maxDate,
                  _l2 = l(this.date),
                  c = _l2.day,
                  d = this._isOutOfMinMaxRange(),
                  f = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled,
                  h = u("air-datepicker-cell", "-".concat(this.singleType, "-"), {
                    "-current-": p(i, this.date, this.type),
                    "-min-date-": a && p(a, this.date, this.type),
                    "-max-date-": s && p(s, this.date, this.type)
                  }),
                  m = "";
                switch (this.type) {
                  case n.days:
                    m = u({
                      "-weekend-": this.dp.isWeekend(c),
                      "-other-month-": this.isOtherMonth,
                      "-disabled-": this.isOtherMonth && !r || d || f
                    });
                    break;
                  case n.months:
                    m = u({
                      "-disabled-": d || f
                    });
                    break;
                  case n.years:
                    m = u({
                      "-other-decade-": this.isOtherDecade,
                      "-disabled-": d || this.isOtherDecade && !o || f
                    });
                }
                return u(h, m, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
              }
            }, {
              key: "_getHtml",
              value: function _getHtml() {
                var e;
                var _l3 = l(this.date),
                  t = _l3.year,
                  i = _l3.month,
                  r = _l3.date,
                  _this$opts3 = this.opts,
                  o = _this$opts3.showOtherMonths,
                  a = _this$opts3.showOtherYears;
                if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                switch (this.type) {
                  case n.days:
                    return !o && this.isOtherMonth ? "" : r;
                  case n.months:
                    return this.dp.locale[this.opts.monthsField][i];
                  case n.years:
                    return !a && this.isOtherDecade ? "" : t;
                }
              }
            }, {
              key: "_isOutOfMinMaxRange",
              value: function _isOutOfMinMaxRange() {
                var _this$dp2 = this.dp,
                  e = _this$dp2.minDate,
                  t = _this$dp2.maxDate,
                  i = this.type,
                  r = this.date,
                  _l4 = l(r),
                  o = _l4.month,
                  a = _l4.year,
                  s = _l4.date,
                  c = i === n.days,
                  d = i === n.years,
                  u = !!e && new Date(a, d ? e.getMonth() : o, c ? s : e.getDate()),
                  p = !!t && new Date(a, d ? t.getMonth() : o, c ? s : t.getDate());
                return e && t ? h(u, e) || f(p, t) : e ? h(u, e) : t ? f(p, t) : void 0;
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.unbindDatepickerEvents();
              }
            }, {
              key: "_handleRangeStatus",
              value: function _handleRangeStatus() {
                var _this$$cell$classList;
                var _this$dp3 = this.dp,
                  e = _this$dp3.rangeDateFrom,
                  t = _this$dp3.rangeDateTo,
                  n = u({
                    "-in-range-": e && t && (i = this.date, r = e, o = t, f(i, r) && h(i, o)),
                    "-range-from-": e && p(this.date, e, this.type),
                    "-range-to-": t && p(this.date, t, this.type)
                  });
                var i, r, o;
                this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), n && (_this$$cell$classList = this.$cell.classList).add.apply(_this$$cell$classList, _toConsumableArray(n.split(" ")));
              }
            }, {
              key: "_handleSelectedStatus",
              value: function _handleSelectedStatus() {
                var e = this.dp._checkIfDateIsSelected(this.date, this.type);
                e ? this.select() : !e && this.selected && this.removeSelect();
              }
            }, {
              key: "_handleInitialFocusStatus",
              value: function _handleInitialFocusStatus() {
                p(this.dp.focusDate, this.date, this.type) && this.focus();
              }
            }, {
              key: "isDisabled",
              get: function get() {
                return this.$cell.matches(".-disabled-");
              }
            }, {
              key: "isOtherMonth",
              get: function get() {
                return this.dp.isOtherMonth(this.date);
              }
            }, {
              key: "isOtherDecade",
              get: function get() {
                return this.dp.isOtherDecade(this.date);
              }
            }]);
            return D;
          }();
          function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var O = (_O = {}, _defineProperty(_O, n.days, '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(n.days, '-"></div>')), _defineProperty(_O, n.months, '<div class="air-datepicker-body--cells -'.concat(n.months, '-"></div>')), _defineProperty(_O, n.years, '<div class="air-datepicker-body--cells -'.concat(n.years, '-"></div>')), _O);
          var k = ".air-datepicker-cell";
          var R = /*#__PURE__*/function () {
            function R(e) {
              var _this2 = this;
              _classCallCheck(this, R);
              var t = e.dp,
                i = e.type,
                r = e.opts;
              I(this, "handleClick", function (e) {
                var t = e.target.closest(k).adpCell;
                if (t.isDisabled) return;
                if (!_this2.dp.isMinViewReached) return void _this2.dp.down();
                var n = _this2.dp._checkIfDateIsSelected(t.date, t.type);
                n ? _this2.dp._handleAlreadySelectedDates(n, t.date) : _this2.dp.selectDate(t.date);
              }), I(this, "handleDayNameClick", function (e) {
                var t = e.target.getAttribute("data-day-index");
                _this2.opts.onClickDayName({
                  dayIndex: Number(t),
                  datepicker: _this2.dp
                });
              }), I(this, "onChangeCurrentView", function (e) {
                e !== _this2.type ? _this2.hide() : (_this2.show(), _this2.render());
              }), I(this, "onMouseOverCell", function (e) {
                var t = b(e.target, k);
                _this2.dp.setFocusDate(!!t && t.adpCell.date);
              }), I(this, "onMouseOutCell", function () {
                _this2.dp.setFocusDate(!1);
              }), I(this, "onClickBody", function (e) {
                var t = _this2.opts.onClickDayName,
                  n = e.target;
                n.closest(k) && _this2.handleClick(e), t && n.closest(".air-datepicker-body--day-name") && _this2.handleDayNameClick(e);
              }), I(this, "onMouseDown", function (e) {
                _this2.pressed = !0;
                var t = b(e.target, k),
                  n = t && t.adpCell;
                p(n.date, _this2.dp.rangeDateFrom) && (_this2.rangeFromFocused = !0), p(n.date, _this2.dp.rangeDateTo) && (_this2.rangeToFocused = !0);
              }), I(this, "onMouseMove", function (e) {
                if (!_this2.pressed || !_this2.dp.isMinViewReached) return;
                e.preventDefault();
                var t = b(e.target, k),
                  n = t && t.adpCell,
                  _this2$dp = _this2.dp,
                  i = _this2$dp.selectedDates,
                  r = _this2$dp.rangeDateTo,
                  o = _this2$dp.rangeDateFrom;
                if (!n || n.isDisabled) return;
                var a = n.date;
                if (2 === i.length) {
                  if (_this2.rangeFromFocused && !f(a, r)) {
                    var _l5 = l(o),
                      _e2 = _l5.hours,
                      _t3 = _l5.minutes;
                    a.setHours(_e2), a.setMinutes(_t3), _this2.dp.rangeDateFrom = a, _this2.dp.replaceDate(o, a);
                  }
                  if (_this2.rangeToFocused && !h(a, o)) {
                    var _l6 = l(r),
                      _e3 = _l6.hours,
                      _t4 = _l6.minutes;
                    a.setHours(_e3), a.setMinutes(_t4), _this2.dp.rangeDateTo = a, _this2.dp.replaceDate(r, a);
                  }
                }
              }), I(this, "onMouseUp", function () {
                _this2.pressed = !1, _this2.rangeFromFocused = !1, _this2.rangeToFocused = !1;
              }), I(this, "onChangeViewDate", function (e, t) {
                if (!_this2.isVisible) return;
                var i = d(e),
                  r = d(t);
                switch (_this2.dp.currentView) {
                  case n.days:
                    if (p(e, t, n.months)) return;
                    break;
                  case n.months:
                    if (p(e, t, n.years)) return;
                    break;
                  case n.years:
                    if (i[0] === r[0] && i[1] === r[1]) return;
                }
                _this2.render();
              }), I(this, "render", function () {
                _this2.destroyCells(), _this2._generateCells(), _this2.cells.forEach(function (e) {
                  _this2.$cells.appendChild(e.render());
                });
              }), this.dp = t, this.type = i, this.opts = r, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
            }
            _createClass(R, [{
              key: "init",
              value: function init() {
                this._buildBaseHtml(), this.type === n.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
              }
            }, {
              key: "_bindEvents",
              value: function _bindEvents() {
                var _this$opts4 = this.opts,
                  e = _this$opts4.range,
                  t = _this$opts4.dynamicRange;
                v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), v(this.$el, "click", this.onClickBody), e && t && (v(this.$el, "mousedown", this.onMouseDown), v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
              }
            }, {
              key: "_bindDatepickerEvents",
              value: function _bindDatepickerEvents() {
                this.dp.on(n.eventChangeViewDate, this.onChangeViewDate), this.dp.on(n.eventChangeCurrentView, this.onChangeCurrentView);
              }
            }, {
              key: "_buildBaseHtml",
              value: function _buildBaseHtml() {
                this.$el = o({
                  className: "air-datepicker-body -".concat(this.type, "-"),
                  innerHtml: O[this.type]
                }), this.$names = r(".air-datepicker-body--day-names", this.$el), this.$cells = r(".air-datepicker-body--cells", this.$el);
              }
            }, {
              key: "_getDayNamesHtml",
              value: function _getDayNamesHtml() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay,
                  t = "",
                  i = this.dp.isWeekend,
                  r = this.opts.onClickDayName,
                  o = e,
                  a = 0;
                for (; a < 7;) {
                  var _u;
                  var _e4 = o % 7,
                    _s2 = u("air-datepicker-body--day-name", (_u = {}, _defineProperty(_u, n.cssClassWeekend, i(_e4)), _defineProperty(_u, "-clickable-", !!r), _u)),
                    _l7 = this.dp.locale.daysMin[_e4];
                  t += '<div class="'.concat(_s2, "\" data-day-index='").concat(_e4, "'>").concat(_l7, "</div>"), a++, o++;
                }
                return t;
              }
            }, {
              key: "_getDaysCells",
              value: function _getDaysCells() {
                var _this$dp4 = this.dp,
                  e = _this$dp4.viewDate,
                  t = _this$dp4.locale.firstDay,
                  n = s(e),
                  _l8 = l(e),
                  i = _l8.year,
                  r = _l8.month,
                  o = new Date(i, r, 1),
                  a = new Date(i, r, n),
                  c = o.getDay() - t,
                  d = 6 - a.getDay() + t;
                c = c < 0 ? c + 7 : c, d = d > 6 ? d - 7 : d;
                var u = function (e, t) {
                    var _l10 = l(e),
                      n = _l10.year,
                      i = _l10.month,
                      r = _l10.date;
                    return new Date(n, i, r - t);
                  }(o, c),
                  p = n + c + d,
                  f = u.getDate(),
                  _l9 = l(u),
                  h = _l9.year,
                  m = _l9.month,
                  g = 0;
                for (; g < p;) {
                  var _e5 = new Date(h, m, f + g);
                  this._generateCell(_e5), g++;
                }
              }
            }, {
              key: "_generateCell",
              value: function _generateCell(e) {
                var t = this.type,
                  n = this.dp,
                  i = this.opts,
                  r = new D({
                    type: t,
                    dp: n,
                    opts: i,
                    date: e,
                    body: this
                  });
                return this.cells.push(r), r;
              }
            }, {
              key: "_generateDayCells",
              value: function _generateDayCells() {
                this._getDaysCells();
              }
            }, {
              key: "_generateMonthCells",
              value: function _generateMonthCells() {
                var e = this.dp.parsedViewDate.year,
                  t = 0;
                for (; t < 12;) this.cells.push(this._generateCell(new Date(e, t))), t++;
              }
            }, {
              key: "_generateYearCells",
              value: function _generateYearCells() {
                var e = d(this.dp.viewDate),
                  t = e[0] - 1,
                  n = e[1] + 1,
                  i = t;
                for (; i <= n;) this.cells.push(this._generateCell(new Date(i, 0))), i++;
              }
            }, {
              key: "renderDayNames",
              value: function renderDayNames() {
                this.$names.innerHTML = this._getDayNamesHtml();
              }
            }, {
              key: "_generateCells",
              value: function _generateCells() {
                switch (this.type) {
                  case n.days:
                    this._generateDayCells();
                    break;
                  case n.months:
                    this._generateMonthCells();
                    break;
                  case n.years:
                    this._generateYearCells();
                }
              }
            }, {
              key: "show",
              value: function show() {
                this.isVisible = !0, this.$el.classList.remove("-hidden-");
              }
            }, {
              key: "hide",
              value: function hide() {
                this.isVisible = !1, this.$el.classList.add("-hidden-");
              }
            }, {
              key: "destroyCells",
              value: function destroyCells() {
                this.cells.forEach(function (e) {
                  return e.destroy();
                }), this.cells = [], this.$cells.innerHTML = "";
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.destroyCells(), this.dp.off(n.eventChangeViewDate, this.onChangeViewDate), this.dp.off(n.eventChangeCurrentView, this.onChangeCurrentView);
              }
            }]);
            return R;
          }();
          function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var C = /*#__PURE__*/function () {
            function C(e) {
              var _this3 = this;
              _classCallCheck(this, C);
              var t = e.dp,
                n = e.opts;
              S(this, "onClickNav", function (e) {
                var t = b(e.target, ".air-datepicker-nav--action");
                if (!t) return;
                var n = t.dataset.action;
                _this3.dp[n]();
              }), S(this, "onChangeViewDate", function () {
                _this3.render(), _this3._resetNavStatus(), _this3.handleNavStatus();
              }), S(this, "onChangeCurrentView", function () {
                _this3.render(), _this3._resetNavStatus(), _this3.handleNavStatus();
              }), S(this, "onClickNavTitle", function () {
                _this3.dp.isFinalView || _this3.dp.up();
              }), S(this, "update", function () {
                var _this3$opts = _this3.opts,
                  e = _this3$opts.prevHtml,
                  t = _this3$opts.nextHtml;
                _this3.$prev.innerHTML = e, _this3.$next.innerHTML = t, _this3._resetNavStatus(), _this3.render(), _this3.handleNavStatus();
              }), S(this, "renderDelay", function () {
                setTimeout(_this3.render);
              }), S(this, "render", function () {
                _this3.$title.innerHTML = _this3._getTitle(), function (e, t) {
                  for (var _n5 in t) t[_n5] ? e.classList.add(_n5) : e.classList.remove(_n5);
                }(_this3.$title, {
                  "-disabled-": _this3.dp.isFinalView
                });
              }), this.dp = t, this.opts = n, this.init();
            }
            _createClass(C, [{
              key: "init",
              value: function init() {
                this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
              }
            }, {
              key: "_defineDOM",
              value: function _defineDOM() {
                this.$title = r(".air-datepicker-nav--title", this.$el), this.$prev = r('[data-action="prev"]', this.$el), this.$next = r('[data-action="next"]', this.$el);
              }
            }, {
              key: "_bindEvents",
              value: function _bindEvents() {
                this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
              }
            }, {
              key: "_bindDatepickerEvents",
              value: function _bindDatepickerEvents() {
                this.dp.on(n.eventChangeViewDate, this.onChangeViewDate), this.dp.on(n.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(n.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(n.eventChangeTime, this.render));
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.dp.off(n.eventChangeViewDate, this.onChangeViewDate), this.dp.off(n.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(n.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(n.eventChangeTime, this.render));
              }
            }, {
              key: "_createElement",
              value: function _createElement() {
                this.$el = o({
                  tagName: "nav",
                  className: "air-datepicker-nav"
                });
              }
            }, {
              key: "_getTitle",
              value: function _getTitle() {
                var e = this.dp,
                  t = this.opts,
                  n = t.navTitles[e.currentView];
                return "function" == typeof n ? n(e) : e.formatDate(e.viewDate, n);
              }
            }, {
              key: "handleNavStatus",
              value: function handleNavStatus() {
                var e = this.opts.disableNavWhenOutOfRange,
                  _this$dp5 = this.dp,
                  t = _this$dp5.minDate,
                  i = _this$dp5.maxDate;
                if (!t && !i || !e) return;
                var _this$dp$parsedViewDa = this.dp.parsedViewDate,
                  r = _this$dp$parsedViewDa.year,
                  o = _this$dp$parsedViewDa.month,
                  a = !!t && l(t),
                  s = !!i && l(i);
                switch (this.dp.currentView) {
                  case n.days:
                    t && a.month >= o && a.year >= r && this._disableNav("prev"), i && s.month <= o && s.year <= r && this._disableNav("next");
                    break;
                  case n.months:
                    t && a.year >= r && this._disableNav("prev"), i && s.year <= r && this._disableNav("next");
                    break;
                  case n.years:
                    {
                      var _e6 = d(this.dp.viewDate);
                      t && a.year >= _e6[0] && this._disableNav("prev"), i && s.year <= _e6[1] && this._disableNav("next");
                      break;
                    }
                }
              }
            }, {
              key: "_disableNav",
              value: function _disableNav(e) {
                r('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
              }
            }, {
              key: "_resetNavStatus",
              value: function _resetNavStatus() {
                !function (e) {
                  var _e$classList2;
                  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                  e.length ? e.forEach(function (e) {
                    var _e$classList;
                    (_e$classList = e.classList).remove.apply(_e$classList, n);
                  }) : (_e$classList2 = e.classList).remove.apply(_e$classList2, n);
                }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
              }
            }, {
              key: "_buildBaseHtml",
              value: function _buildBaseHtml() {
                var _this$opts5 = this.opts,
                  e = _this$opts5.prevHtml,
                  t = _this$opts5.nextHtml;
                this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
              }
            }, {
              key: "isNavIsFunction",
              get: function get() {
                var e = this.opts.navTitles;
                return Object.keys(e).find(function (t) {
                  return "function" == typeof e[t];
                });
              }
            }]);
            return C;
          }();
          var A = {
            today: {
              content: function content(e) {
                return e.locale.today;
              },
              onClick: function onClick(e) {
                return e.setViewDate(new Date());
              }
            },
            clear: {
              content: function content(e) {
                return e.locale.clear;
              },
              onClick: function onClick(e) {
                return e.clear();
              }
            }
          };
          var M = /*#__PURE__*/function () {
            function M(e) {
              _classCallCheck(this, M);
              var t = e.dp,
                n = e.opts;
              this.dp = t, this.opts = n, this.init();
            }
            _createClass(M, [{
              key: "init",
              value: function init() {
                this.createElement(), this.render();
              }
            }, {
              key: "createElement",
              value: function createElement() {
                this.$el = o({
                  className: "air-datepicker-buttons"
                });
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.$el.parentNode.removeChild(this.$el);
              }
            }, {
              key: "clearHtml",
              value: function clearHtml() {
                return this.$el.innerHTML = "", this;
              }
            }, {
              key: "generateButtons",
              value: function generateButtons() {
                var _this4 = this;
                var e = this.opts.buttons;
                Array.isArray(e) || (e = [e]), e.forEach(function (e) {
                  var t = e;
                  "string" == typeof e && A[e] && (t = A[e]);
                  var n = _this4.createButton(t);
                  t.onClick && _this4.attachEventToButton(n, t.onClick), _this4.$el.appendChild(n);
                });
              }
            }, {
              key: "attachEventToButton",
              value: function attachEventToButton(e, t) {
                var _this5 = this;
                e.addEventListener("click", function () {
                  t(_this5.dp);
                });
              }
            }, {
              key: "createButton",
              value: function createButton(e) {
                var t = e.content,
                  n = e.className,
                  _e$tagName = e.tagName,
                  i = _e$tagName === void 0 ? "button" : _e$tagName,
                  _e$attrs = e.attrs,
                  r = _e$attrs === void 0 ? {} : _e$attrs,
                  a = "function" == typeof t ? t(this.dp) : t;
                return o({
                  tagName: i,
                  innerHtml: "<span tabindex='-1'>".concat(a, "</span>"),
                  className: u("air-datepicker-button", n),
                  attrs: r
                });
              }
            }, {
              key: "render",
              value: function render() {
                this.generateButtons();
              }
            }]);
            return M;
          }();
          function x(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var L = /*#__PURE__*/function () {
            function L() {
              var _this6 = this;
              _classCallCheck(this, L);
              var _ref3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = _ref3.opts,
                t = _ref3.dp;
              x(this, "toggleTimepickerIsActive", function (e) {
                _this6.dp.timepickerIsActive = e;
              }), x(this, "onChangeSelectedDate", function (e) {
                var t = e.date,
                  _e$updateTime = e.updateTime,
                  n = _e$updateTime === void 0 ? !1 : _e$updateTime;
                t && (_this6.setMinMaxTime(t), _this6.setCurrentTime(!!n && t), _this6.addTimeToDate(t));
              }), x(this, "onChangeLastSelectedDate", function (e) {
                e && (_this6.setTime(e), _this6.render());
              }), x(this, "onChangeInputRange", function (e) {
                var t = e.target;
                _this6[t.getAttribute("name")] = t.value, _this6.updateText(), _this6.dp.trigger(n.eventChangeTime, {
                  hours: _this6.hours,
                  minutes: _this6.minutes
                });
              }), x(this, "onMouseEnterLeave", function (e) {
                var t = e.target.getAttribute("name"),
                  n = _this6.$minutesText;
                "hours" === t && (n = _this6.$hoursText), n.classList.toggle("-focus-");
              }), x(this, "onFocus", function () {
                _this6.toggleTimepickerIsActive(!0);
              }), x(this, "onBlur", function () {
                _this6.toggleTimepickerIsActive(!1);
              }), this.opts = e, this.dp = t;
              var i = this.dp.locale.timeFormat;
              i && (i.match(_("h")) || i.match(_("hh"))) && (this.ampm = !0), this.init();
            }
            _createClass(L, [{
              key: "init",
              value: function init() {
                this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
              }
            }, {
              key: "bindDatepickerEvents",
              value: function bindDatepickerEvents() {
                this.dp.on(n.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(n.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
              }
            }, {
              key: "bindDOMEvents",
              value: function bindDOMEvents() {
                var e = "input";
                navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), v(this.$ranges, "blur", this.onBlur);
              }
            }, {
              key: "createElement",
              value: function createElement() {
                this.$el = o({
                  className: u("air-datepicker-time", {
                    "-am-pm-": this.dp.ampm
                  })
                });
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.dp.off(n.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(n.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
              }
            }, {
              key: "buildHtml",
              value: function buildHtml() {
                var e = this.ampm,
                  t = this.hours,
                  n = this.displayHours,
                  i = this.minutes,
                  r = this.minHours,
                  o = this.minMinutes,
                  a = this.maxHours,
                  s = this.maxMinutes,
                  l = this.dayPeriod,
                  _this$opts6 = this.opts,
                  d = _this$opts6.hoursStep,
                  u = _this$opts6.minutesStep;
                this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(c(n), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(c(i), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(l, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(r, '" max="').concat(a, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(i, '" min="').concat(o, '" max="').concat(s, '" step="').concat(u, '"/>') + "   </div></div>";
              }
            }, {
              key: "defineDOM",
              value: function defineDOM() {
                var _this7 = this;
                var e = function e(_e7) {
                  return r(_e7, _this7.$el);
                };
                this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
              }
            }, {
              key: "setTime",
              value: function setTime(e) {
                this.setMinMaxTime(e), this.setCurrentTime(e);
              }
            }, {
              key: "addTimeToDate",
              value: function addTimeToDate(e) {
                e && (e.setHours(this.hours), e.setMinutes(this.minutes));
              }
            }, {
              key: "setMinMaxTime",
              value: function setMinMaxTime(e) {
                if (this.setMinMaxTimeFromOptions(), e) {
                  var _this$dp6 = this.dp,
                    _t5 = _this$dp6.minDate,
                    _n6 = _this$dp6.maxDate;
                  _t5 && p(e, _t5) && this.setMinTimeFromMinDate(_t5), _n6 && p(e, _n6) && this.setMaxTimeFromMaxDate(_n6);
                }
              }
            }, {
              key: "setCurrentTime",
              value: function setCurrentTime(e) {
                var _ref4 = e ? l(e) : this,
                  t = _ref4.hours,
                  n = _ref4.minutes;
                this.hours = w(t, this.minHours, this.maxHours), this.minutes = w(n, this.minMinutes, this.maxMinutes);
              }
            }, {
              key: "setMinMaxTimeFromOptions",
              value: function setMinMaxTimeFromOptions() {
                var _this$opts7 = this.opts,
                  e = _this$opts7.minHours,
                  t = _this$opts7.minMinutes,
                  n = _this$opts7.maxHours,
                  i = _this$opts7.maxMinutes;
                this.minHours = w(e, 0, 23), this.minMinutes = w(t, 0, 59), this.maxHours = w(n, 0, 23), this.maxMinutes = w(i, 0, 59);
              }
            }, {
              key: "setMinTimeFromMinDate",
              value: function setMinTimeFromMinDate(e) {
                var t = this.dp.lastSelectedDate;
                this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
              }
            }, {
              key: "setMaxTimeFromMaxDate",
              value: function setMaxTimeFromMaxDate(e) {
                var t = this.dp.lastSelectedDate;
                this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
              }
            }, {
              key: "getDayPeriod",
              value: function getDayPeriod(e, t) {
                var n = e,
                  i = Number(e);
                e instanceof Date && (n = l(e), i = Number(n.hours));
                var r = "am";
                if (t || this.ampm) {
                  switch (!0) {
                    case 12 === i:
                    case i > 11:
                      r = "pm";
                  }
                  i = i % 12 == 0 ? 12 : i % 12;
                }
                return {
                  hours: i,
                  dayPeriod: r
                };
              }
            }, {
              key: "updateSliders",
              value: function updateSliders() {
                a(this.$hours, {
                  min: this.minHours,
                  max: this.maxHours
                }).value = this.hours, a(this.$minutes, {
                  min: this.minMinutes,
                  max: this.maxMinutes
                }).value = this.minutes;
              }
            }, {
              key: "updateText",
              value: function updateText() {
                this.$hoursText.innerHTML = c(this.displayHours), this.$minutesText.innerHTML = c(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
              }
            }, {
              key: "hours",
              get: function get() {
                return this._hours;
              },
              set: function set(e) {
                this._hours = e;
                var _this$getDayPeriod = this.getDayPeriod(e),
                  t = _this$getDayPeriod.hours,
                  n = _this$getDayPeriod.dayPeriod;
                this.displayHours = t, this.dayPeriod = n;
              }
            }, {
              key: "render",
              value: function render() {
                this.updateSliders(), this.updateText();
              }
            }]);
            return L;
          }();
          function P(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var N = /*#__PURE__*/function () {
            function N(e) {
              var _this8 = this;
              _classCallCheck(this, N);
              var t = e.dp,
                n = e.opts;
              P(this, "pressedKeys", new Set()), P(this, "hotKeys", new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], function (e) {
                return e.month++;
              }], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], function (e) {
                return e.month--;
              }], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], function (e) {
                return e.year++;
              }], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], function (e) {
                return e.year--;
              }], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], function (e) {
                return e.year += 10;
              }], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], function (e) {
                return e.year -= 10;
              }], [["Control", "Shift", "ArrowUp"], function (e, t) {
                return t.up();
              }]])), P(this, "handleHotKey", function (e) {
                var t = _this8.hotKeys.get(e),
                  n = l(_this8.getInitialFocusDate());
                t(n, _this8.dp);
                var i = n.year,
                  r = n.month,
                  o = n.date,
                  a = s(new Date(i, r));
                a < o && (o = a);
                var c = _this8.dp.getClampedDate(new Date(i, r, o));
                _this8.dp.setFocusDate(c, {
                  viewDateTransition: !0
                });
              }), P(this, "isHotKeyPressed", function () {
                var e = !1,
                  t = _this8.pressedKeys.size,
                  n = function n(e) {
                    return _this8.pressedKeys.has(e);
                  };
                var _iterator = _createForOfIteratorHelper(_this8.hotKeys),
                  _step;
                try {
                  var _loop = function _loop() {
                    var _step$value = _slicedToArray(_step.value, 1),
                      i = _step$value[0];
                    if (e) return "break";
                    if (Array.isArray(i[0])) i.forEach(function (r) {
                      e || t !== r.length || (e = r.every(n) && i);
                    });else {
                      if (t !== i.length) return "continue";
                      e = i.every(n) && i;
                    }
                  };
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _ret = _loop();
                    if (_ret === "break") break;
                    if (_ret === "continue") continue;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return e;
              }), P(this, "isArrow", function (e) {
                return e >= 37 && e <= 40;
              }), P(this, "onKeyDown", function (e) {
                var t = e.key,
                  n = e.which,
                  i = _this8.dp,
                  r = _this8.dp.focusDate,
                  o = _this8.opts;
                _this8.registerKey(t);
                var a = _this8.isHotKeyPressed();
                if (a) return e.preventDefault(), void _this8.handleHotKey(a);
                if (_this8.isArrow(n)) return e.preventDefault(), void _this8.focusNextCell(t);
                if ("Enter" === t) {
                  if (i.currentView !== o.minView) return void i.down();
                  if (r) {
                    var _e8 = i._checkIfDateIsSelected(r);
                    return void (_e8 ? i._handleAlreadySelectedDates(_e8, r) : i.selectDate(r));
                  }
                }
                "Escape" === t && _this8.dp.hide();
              }), P(this, "onKeyUp", function (e) {
                _this8.removeKey(e.key);
              }), this.dp = t, this.opts = n, this.init();
            }
            _createClass(N, [{
              key: "init",
              value: function init() {
                this.bindKeyboardEvents();
              }
            }, {
              key: "bindKeyboardEvents",
              value: function bindKeyboardEvents() {
                var e = this.dp.$el;
                e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                var e = this.dp.$el;
                e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
              }
            }, {
              key: "getInitialFocusDate",
              value: function getInitialFocusDate() {
                var _this$dp7 = this.dp,
                  e = _this$dp7.focusDate,
                  t = _this$dp7.currentView,
                  i = _this$dp7.selectedDates,
                  _this$dp7$parsedViewD = _this$dp7.parsedViewDate,
                  r = _this$dp7$parsedViewD.year,
                  o = _this$dp7$parsedViewD.month,
                  a = e || i[i.length - 1];
                if (!a) switch (t) {
                  case n.days:
                    a = new Date(r, o, new Date().getDate());
                    break;
                  case n.months:
                    a = new Date(r, o, 1);
                    break;
                  case n.years:
                    a = new Date(r, 0, 1);
                }
                return a;
              }
            }, {
              key: "focusNextCell",
              value: function focusNextCell(e) {
                var t = this.getInitialFocusDate(),
                  i = this.dp.currentView,
                  r = n.days,
                  o = n.months,
                  a = n.years,
                  s = l(t),
                  c = s.year,
                  d = s.month,
                  u = s.date;
                switch (e) {
                  case "ArrowLeft":
                    i === r && (u -= 1), i === o && (d -= 1), i === a && (c -= 1);
                    break;
                  case "ArrowUp":
                    i === r && (u -= 7), i === o && (d -= 3), i === a && (c -= 4);
                    break;
                  case "ArrowRight":
                    i === r && (u += 1), i === o && (d += 1), i === a && (c += 1);
                    break;
                  case "ArrowDown":
                    i === r && (u += 7), i === o && (d += 3), i === a && (c += 4);
                }
                var p = this.dp.getClampedDate(new Date(c, d, u));
                this.dp.setFocusDate(p, {
                  viewDateTransition: !0
                });
              }
            }, {
              key: "registerKey",
              value: function registerKey(e) {
                this.pressedKeys.add(e);
              }
            }, {
              key: "removeKey",
              value: function removeKey(e) {
                this.pressedKeys["delete"](e);
              }
            }]);
            return N;
          }();
          var G = {
            on: function on(e, t) {
              this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [t];
            },
            off: function off(e, t) {
              this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter(function (e) {
                return e !== t;
              }));
            },
            removeAllEvents: function removeAllEvents() {
              this.__events = {};
            },
            trigger: function trigger(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
              this.__events && this.__events[e] && this.__events[e].forEach(function (e) {
                e.apply(void 0, n);
              });
            }
          };
          function $(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }
          var B = "",
            F = "",
            V = "",
            U = !1;
          var H = /*#__PURE__*/function () {
            function H(e, t) {
              var _this9 = this;
              _classCallCheck(this, H);
              var a = this;
              if ($(this, "viewIndexes", [n.days, n.months, n.years]), $(this, "next", function () {
                var _this9$parsedViewDate = _this9.parsedViewDate,
                  e = _this9$parsedViewDate.year,
                  t = _this9$parsedViewDate.month;
                switch (_this9.currentView) {
                  case n.days:
                    _this9.setViewDate(new Date(e, t + 1, 1));
                    break;
                  case n.months:
                    _this9.setViewDate(new Date(e + 1, t, 1));
                    break;
                  case n.years:
                    _this9.setViewDate(new Date(e + 10, 0, 1));
                }
              }), $(this, "prev", function () {
                var _this9$parsedViewDate2 = _this9.parsedViewDate,
                  e = _this9$parsedViewDate2.year,
                  t = _this9$parsedViewDate2.month;
                switch (_this9.currentView) {
                  case n.days:
                    _this9.setViewDate(new Date(e, t - 1, 1));
                    break;
                  case n.months:
                    _this9.setViewDate(new Date(e - 1, t, 1));
                    break;
                  case n.years:
                    _this9.setViewDate(new Date(e - 10, 0, 1));
                }
              }), $(this, "_finishHide", function () {
                _this9.hideAnimation = !1, _this9._destroyComponents(), _this9.$container.removeChild(_this9.$datepicker);
              }), $(this, "setPosition", function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("function" == typeof (e = e || a.opts.position)) return void (a.customHide = e({
                  $datepicker: a.$datepicker,
                  $target: a.$el,
                  $pointer: a.$pointer,
                  isViewChange: t,
                  done: a._finishHide
                }));
                var n,
                  i,
                  r = a.opts.isMobile,
                  o = a.$el.getBoundingClientRect(),
                  s = a.$el.getBoundingClientRect(),
                  l = a.$datepicker.offsetParent,
                  c = a.$el.offsetParent,
                  d = a.$datepicker.getBoundingClientRect(),
                  u = e.split(" "),
                  p = window.scrollY,
                  f = window.scrollX,
                  h = a.opts.offset,
                  m = u[0],
                  g = u[1];
                if (r) a.$datepicker.style.cssText = "left: 50%; top: 50%";else {
                  if (l === c && l !== document.body && (s = {
                    top: a.$el.offsetTop,
                    left: a.$el.offsetLeft,
                    width: o.width,
                    height: a.$el.offsetHeight
                  }, p = 0, f = 0), l !== c && l !== document.body) {
                    var _e9 = l.getBoundingClientRect();
                    s = {
                      top: o.top - _e9.top,
                      left: o.left - _e9.left,
                      width: o.width,
                      height: o.height
                    }, p = 0, f = 0;
                  }
                  switch (m) {
                    case "top":
                      n = s.top - d.height - h;
                      break;
                    case "right":
                      i = s.left + s.width + h;
                      break;
                    case "bottom":
                      n = s.top + s.height + h;
                      break;
                    case "left":
                      i = s.left - d.width - h;
                  }
                  switch (g) {
                    case "top":
                      n = s.top;
                      break;
                    case "right":
                      i = s.left + s.width - d.width;
                      break;
                    case "bottom":
                      n = s.top + s.height - d.height;
                      break;
                    case "left":
                      i = s.left;
                      break;
                    case "center":
                      /left|right/.test(m) ? n = s.top + s.height / 2 - d.height / 2 : i = s.left + s.width / 2 - d.width / 2;
                  }
                  a.$datepicker.style.cssText = "left: ".concat(i + f, "px; top: ").concat(n + p, "px");
                }
              }), $(this, "_setInputValue", function () {
                var e = _this9.opts,
                  t = _this9.$altField,
                  n = _this9.locale.dateFormat,
                  i = e.altFieldDateFormat,
                  r = e.altField;
                r && t && (t.value = _this9._getInputValue(i)), _this9.$el.value = _this9._getInputValue(n);
              }), $(this, "_getInputValue", function (e) {
                var t = _this9.selectedDates,
                  n = _this9.opts,
                  i = n.multipleDates,
                  r = n.multipleDatesSeparator;
                if (!t.length) return "";
                var o = "function" == typeof e,
                  a = o ? e(i ? t : t[0]) : t.map(function (t) {
                    return _this9.formatDate(t, e);
                  });
                return a = o ? a : a.join(r), a;
              }), $(this, "_checkIfDateIsSelected", function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.days,
                  i = !1;
                return a.selectedDates.some(function (n) {
                  var r = p(e, n, t);
                  return i = r && n, r;
                }), i;
              }), $(this, "_scheduleCallAfterTransition", function (e) {
                _this9._cancelScheduledCall(), e && e(!1), _this9._onTransitionEnd = function () {
                  e && e(!0);
                }, _this9.$datepicker.addEventListener("transitionend", _this9._onTransitionEnd, {
                  once: !0
                });
              }), $(this, "_cancelScheduledCall", function () {
                _this9.$datepicker.removeEventListener("transitionend", _this9._onTransitionEnd);
              }), $(this, "setViewDate", function (e) {
                if (!((e = E(e)) instanceof Date)) return;
                if (p(e, _this9.viewDate)) return;
                var t = _this9.viewDate;
                _this9.viewDate = e;
                var i = _this9.opts.onChangeViewDate;
                if (i) {
                  var _this9$parsedViewDate3 = _this9.parsedViewDate,
                    _e10 = _this9$parsedViewDate3.month,
                    _t6 = _this9$parsedViewDate3.year;
                  i({
                    month: _e10,
                    year: _t6,
                    decade: _this9.curDecade
                  });
                }
                _this9.trigger(n.eventChangeViewDate, e, t);
              }), $(this, "setFocusDate", function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (!e || (e = E(e)) instanceof Date) && (a.focusDate = e, a.opts.range && e && a._handleRangeOnFocus(), a.trigger(n.eventChangeFocusDate, e, t));
              }), $(this, "setCurrentView", function (e) {
                if (_this9.viewIndexes.includes(e)) {
                  if (_this9.currentView = e, _this9.elIsInput && _this9.visible && _this9.setPosition(void 0, !0), _this9.trigger(n.eventChangeCurrentView, e), !_this9.views[e]) {
                    var _t7 = _this9.views[e] = new R({
                      dp: _this9,
                      opts: _this9.opts,
                      type: e
                    });
                    _this9.shouldUpdateDOM && _this9.$content.appendChild(_t7.$el);
                  }
                  _this9.opts.onChangeView && _this9.opts.onChangeView(e);
                }
              }), $(this, "_updateLastSelectedDate", function (e) {
                _this9.lastSelectedDate = e, _this9.trigger(n.eventChangeLastSelectedDate, e);
              }), $(this, "destroy", function () {
                var _this9$opts = _this9.opts,
                  e = _this9$opts.showEvent,
                  t = _this9$opts.isMobile,
                  n = _this9.$datepicker.parentNode;
                n && n.removeChild(_this9.$datepicker), _this9.$el.removeEventListener(e, _this9._onFocus), _this9.$el.removeEventListener("blur", _this9._onBlur), window.removeEventListener("resize", _this9._onResize), t && _this9._removeMobileAttributes(), _this9.keyboardNav && _this9.keyboardNav.destroy(), _this9.views = null, _this9.nav = null, _this9.$datepicker = null, _this9.opts = null, _this9.$customContainer = null, _this9.viewDate = null, _this9.focusDate = null, _this9.selectedDates = null, _this9.rangeDateFrom = null, _this9.rangeDateTo = null;
              }), $(this, "update", function (e) {
                var t = y({}, _this9.opts);
                y(_this9.opts, e);
                var _this9$opts2 = _this9.opts,
                  i = _this9$opts2.timepicker,
                  r = _this9$opts2.buttons,
                  o = _this9$opts2.range,
                  a = _this9$opts2.selectedDates,
                  s = _this9$opts2.isMobile,
                  l = _this9.visible || _this9.treatAsInline;
                _this9._createMinMaxDates(), _this9._limitViewDateByMaxMinDates(), _this9._handleLocale(), !t.selectedDates && a && _this9.selectDate(a), e.view && _this9.setCurrentView(e.view), _this9._setInputValue(), t.range && !o ? (_this9.rangeDateTo = !1, _this9.rangeDateFrom = !1) : !t.range && o && _this9.selectedDates.length && (_this9.rangeDateFrom = _this9.selectedDates[0], _this9.rangeDateTo = _this9.selectedDates[1]), t.timepicker && !i ? (l && _this9.timepicker.destroy(), _this9.timepicker = !1, _this9.$timepicker.parentNode.removeChild(_this9.$timepicker)) : !t.timepicker && i && _this9._addTimepicker(), !t.buttons && r ? _this9._addButtons() : t.buttons && !r ? (_this9.buttons.destroy(), _this9.$buttons.parentNode.removeChild(_this9.$buttons)) : l && t.buttons && r && _this9.buttons.clearHtml().render(), !t.isMobile && s ? (_this9.treatAsInline || V || _this9._createMobileOverlay(), _this9._addMobileAttributes(), _this9.visible && _this9._showMobileOverlay()) : t.isMobile && !s && (_this9._removeMobileAttributes(), _this9.visible && (V.classList.remove("-active-"), "function" != typeof _this9.opts.position && _this9.setPosition())), l && (_this9.nav.update(), _this9.views[_this9.currentView].render(), _this9.currentView === n.days && _this9.views[_this9.currentView].renderDayNames());
              }), $(this, "isOtherMonth", function (e) {
                var _l11 = l(e),
                  t = _l11.month;
                return t !== _this9.parsedViewDate.month;
              }), $(this, "isOtherYear", function (e) {
                var _l12 = l(e),
                  t = _l12.year;
                return t !== _this9.parsedViewDate.year;
              }), $(this, "isOtherDecade", function (e) {
                var _l13 = l(e),
                  t = _l13.year,
                  _d2 = d(_this9.viewDate),
                  _d3 = _slicedToArray(_d2, 2),
                  n = _d3[0],
                  i = _d3[1];
                return t < n || t > i;
              }), $(this, "_onChangeSelectedDate", function (e) {
                var t = e.silent;
                setTimeout(function () {
                  _this9._setInputValue(), _this9.opts.onSelect && !t && _this9._triggerOnSelect();
                });
              }), $(this, "_onChangeFocusedDate", function (e) {
                var _ref5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  t = _ref5.viewDateTransition;
                if (!e) return;
                var n = !1;
                t && (n = a.isOtherMonth(e) || a.isOtherYear(e) || a.isOtherDecade(e)), n && a.setViewDate(e);
              }), $(this, "_onChangeTime", function (e) {
                var t = e.hours,
                  n = e.minutes,
                  i = new Date(),
                  r = _this9.lastSelectedDate,
                  o = _this9.opts.onSelect,
                  a = r;
                r || (a = i);
                var s = _this9.getCell(a, _this9.currentViewSingular),
                  l = s && s.adpCell;
                l && l.isDisabled || (a.setHours(t), a.setMinutes(n), r ? (_this9._setInputValue(), o && _this9._triggerOnSelect()) : _this9.selectDate(a));
              }), $(this, "_onFocus", function (e) {
                _this9.visible || _this9.show();
              }), $(this, "_onBlur", function (e) {
                _this9.inFocus || !_this9.visible || _this9.opts.isMobile || _this9.hide();
              }), $(this, "_onMouseDown", function (e) {
                _this9.inFocus = !0;
              }), $(this, "_onMouseUp", function (e) {
                _this9.inFocus = !1, _this9.$el.focus();
              }), $(this, "_onResize", function () {
                _this9.visible && "function" != typeof _this9.opts.position && _this9.setPosition();
              }), $(this, "_onClickOverlay", function () {
                _this9.visible && _this9.hide();
              }), $(this, "isWeekend", function (e) {
                return _this9.opts.weekends.includes(e);
              }), $(this, "getClampedDate", function (e) {
                var t = _this9.minDate,
                  n = _this9.maxDate,
                  i = e;
                return n && f(e, n) ? i = n : t && h(e, t) && (i = t), i;
              }), this.$el = r(e), !this.$el) return;
              this.$datepicker = o({
                className: "air-datepicker"
              }), this.opts = y({}, i, t), this.$customContainer = !!this.opts.container && r(this.opts.container), this.$altField = r(this.opts.altField || !1), B || (B = r("body"));
              var _this$opts8 = this.opts,
                s = _this$opts8.view,
                c = _this$opts8.startDate;
              c || (this.opts.startDate = new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = E(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = s, this.selectedDates = [], this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            _createClass(H, [{
              key: "init",
              value: function init() {
                var e = this.opts,
                  t = this.treatAsInline,
                  _this$opts9 = this.opts,
                  n = _this$opts9.inline,
                  i = _this$opts9.isMobile,
                  r = _this$opts9.selectedDates,
                  a = _this$opts9.keyboardNav,
                  s = _this$opts9.onlyTimepicker;
                var l;
                U || n || !this.elIsInput || (U = !0, F = o({
                  className: l = H.defaultContainerId,
                  id: l
                }), B.appendChild(F)), !i || V || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (n || this._bindEvents(), a && !s && (this.keyboardNav = new N({
                  dp: this,
                  opts: e
                }))), r && this.selectDate(r, {
                  silent: !0
                }), this.opts.visible && !t && this.show(), i && !t && this.$el.setAttribute("readonly", !0), t && this._createComponents();
              }
            }, {
              key: "_createMobileOverlay",
              value: function _createMobileOverlay() {
                V = o({
                  className: "air-datepicker-overlay"
                }), F.appendChild(V);
              }
            }, {
              key: "_createComponents",
              value: function _createComponents() {
                var _this$$datepicker$cla;
                var e = this.opts,
                  t = this.treatAsInline,
                  _this$opts10 = this.opts,
                  n = _this$opts10.inline,
                  i = _this$opts10.buttons,
                  r = _this$opts10.timepicker,
                  o = _this$opts10.position,
                  a = _this$opts10.classes,
                  s = _this$opts10.onlyTimepicker,
                  l = _this$opts10.isMobile;
                this._buildBaseHtml(), this.elIsInput && (n || this._setPositionClasses(o)), !n && this.elIsInput || this.$datepicker.classList.add("-inline-"), a && (_this$$datepicker$cla = this.$datepicker.classList).add.apply(_this$$datepicker$cla, _toConsumableArray(a.split(" "))), s && this.$datepicker.classList.add("-only-timepicker-"), l && !t && this._addMobileAttributes(), this.views[this.currentView] = new R({
                  dp: this,
                  type: this.currentView,
                  opts: e
                }), this.nav = new C({
                  dp: this,
                  opts: e
                }), r && this._addTimepicker(), i && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
              }
            }, {
              key: "_destroyComponents",
              value: function _destroyComponents() {
                for (var _e11 in this.views) this.views[_e11].destroy();
                this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
              }
            }, {
              key: "_addMobileAttributes",
              value: function _addMobileAttributes() {
                V.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
              }
            }, {
              key: "_removeMobileAttributes",
              value: function _removeMobileAttributes() {
                V.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
              }
            }, {
              key: "_createMinMaxDates",
              value: function _createMinMaxDates() {
                var _this$opts11 = this.opts,
                  e = _this$opts11.minDate,
                  t = _this$opts11.maxDate;
                this.minDate = !!e && E(e), this.maxDate = !!t && E(t);
              }
            }, {
              key: "_addTimepicker",
              value: function _addTimepicker() {
                this.$timepicker = o({
                  className: "air-datepicker--time"
                }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                  dp: this,
                  opts: this.opts
                }), this.$timepicker.appendChild(this.timepicker.$el);
              }
            }, {
              key: "_addButtons",
              value: function _addButtons() {
                this.$buttons = o({
                  className: "air-datepicker--buttons"
                }), this.$datepicker.appendChild(this.$buttons), this.buttons = new M({
                  dp: this,
                  opts: this.opts
                }), this.$buttons.appendChild(this.buttons.$el);
              }
            }, {
              key: "_bindSubEvents",
              value: function _bindSubEvents() {
                this.on(n.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(n.eventChangeFocusDate, this._onChangeFocusedDate), this.on(n.eventChangeTime, this._onChangeTime);
              }
            }, {
              key: "_buildBaseHtml",
              value: function _buildBaseHtml() {
                var e = this.opts.inline;
                var t, n;
                this.elIsInput ? e ? (t = this.$datepicker, (n = this.$el).parentNode.insertBefore(t, n.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = r(".air-datepicker--content", this.$datepicker), this.$pointer = r(".air-datepicker--pointer", this.$datepicker), this.$nav = r(".air-datepicker--navigation", this.$datepicker);
              }
            }, {
              key: "_handleLocale",
              value: function _handleLocale() {
                var _this$opts12 = this.opts,
                  e = _this$opts12.locale,
                  t = _this$opts12.dateFormat,
                  n = _this$opts12.firstDay,
                  i = _this$opts12.timepicker,
                  r = _this$opts12.onlyTimepicker,
                  o = _this$opts12.timeFormat,
                  a = _this$opts12.dateTimeSeparator;
                var s;
                this.locale = (s = e, JSON.parse(JSON.stringify(s))), t && (this.locale.dateFormat = t), void 0 !== o && "" !== o && (this.locale.timeFormat = o);
                var l = this.locale.timeFormat;
                if ("" !== n && (this.locale.firstDay = n), i && "function" != typeof t) {
                  var _e12 = l ? a : "";
                  this.locale.dateFormat = [this.locale.dateFormat, l || ""].join(_e12);
                }
                r && "function" != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
              }
            }, {
              key: "_setPositionClasses",
              value: function _setPositionClasses(e) {
                var _this$$datepicker$cla2;
                if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                var t = (e = e.split(" "))[0],
                  n = e[1],
                  i = "air-datepicker -".concat(t, "-").concat(n, "- -from-").concat(t, "-");
                (_this$$datepicker$cla2 = this.$datepicker.classList).add.apply(_this$$datepicker$cla2, _toConsumableArray(i.split(" ")));
              }
            }, {
              key: "_bindEvents",
              value: function _bindEvents() {
                this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
              }
            }, {
              key: "_limitViewDateByMaxMinDates",
              value: function _limitViewDateByMaxMinDates() {
                var e = this.viewDate,
                  t = this.minDate,
                  n = this.maxDate;
                n && f(e, n) && this.setViewDate(n), t && h(e, t) && this.setViewDate(t);
              }
            }, {
              key: "formatDate",
              value: function formatDate() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                if (e = E(e), !(e instanceof Date)) return;
                var n = t,
                  i = this.locale,
                  r = l(e),
                  o = d(e),
                  a = H.replacer,
                  s = "am";
                this.opts.timepicker && this.timepicker && (s = this.timepicker.getDayPeriod(e).dayPeriod);
                var c = {
                  T: e.getTime(),
                  m: r.minutes,
                  mm: r.fullMinutes,
                  h: r.hours12,
                  hh: r.fullHours12,
                  H: r.hours,
                  HH: r.fullHours,
                  aa: s,
                  AA: s.toUpperCase(),
                  E: i.daysShort[r.day],
                  EEEE: i.days[r.day],
                  d: r.date,
                  dd: r.fullDate,
                  M: r.month + 1,
                  MM: r.fullMonth,
                  MMM: i.monthsShort[r.month],
                  MMMM: i.months[r.month],
                  yy: r.year.toString().slice(-2),
                  yyyy: r.year,
                  yyyy1: o[0],
                  yyyy2: o[1]
                };
                for (var _i6 = 0, _Object$entries3 = Object.entries(c); _i6 < _Object$entries3.length; _i6++) {
                  var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
                    _e13 = _Object$entries3$_i[0],
                    _t8 = _Object$entries3$_i[1];
                  n = a(n, _(_e13), _t8);
                }
                return n;
              }
            }, {
              key: "down",
              value: function down(e) {
                this._handleUpDownActions(e, "down");
              }
            }, {
              key: "up",
              value: function up(e) {
                this._handleUpDownActions(e, "up");
              }
            }, {
              key: "selectDate",
              value: function selectDate(e) {
                var _this10 = this;
                var t,
                  i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  r = this.currentView,
                  o = this.parsedViewDate,
                  a = this.selectedDates,
                  s = i.updateTime,
                  _this$opts13 = this.opts,
                  l = _this$opts13.moveToOtherMonthsOnSelect,
                  c = _this$opts13.moveToOtherYearsOnSelect,
                  d = _this$opts13.multipleDates,
                  u = _this$opts13.range,
                  p = _this$opts13.autoClose,
                  h = a.length;
                if (Array.isArray(e)) return e.forEach(function (e) {
                  _this10.selectDate(e, i);
                }), new Promise(function (e) {
                  setTimeout(e);
                });
                if ((e = E(e)) instanceof Date) {
                  if (r === n.days && e.getMonth() !== o.month && l && (t = new Date(e.getFullYear(), e.getMonth(), 1)), r === n.years && e.getFullYear() !== o.year && c && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !u) {
                    if (h === d) return;
                    this._checkIfDateIsSelected(e) || a.push(e);
                  } else if (u) switch (h) {
                    case 1:
                      a.push(e), this.rangeDateTo || (this.rangeDateTo = e), f(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                      break;
                    case 2:
                      this.selectedDates = [e], this.rangeDateFrom = e, this.rangeDateTo = "";
                      break;
                    default:
                      this.selectedDates = [e], this.rangeDateFrom = e;
                  } else this.selectedDates = [e];
                  return this.trigger(n.eventChangeSelectedDate, {
                    action: n.actionSelectDate,
                    silent: null == i ? void 0 : i.silent,
                    date: e,
                    updateTime: s
                  }), this._updateLastSelectedDate(e), p && !this.timepickerIsActive && this.visible && (d || u ? u && 1 === h && this.hide() : this.hide()), new Promise(function (e) {
                    setTimeout(e);
                  });
                }
              }
            }, {
              key: "unselectDate",
              value: function unselectDate(e) {
                var _this11 = this;
                var t = this.selectedDates,
                  i = this;
                if ((e = E(e)) instanceof Date) return t.some(function (r, o) {
                  if (p(r, e)) return t.splice(o, 1), i.selectedDates.length ? i._updateLastSelectedDate(i.selectedDates[i.selectedDates.length - 1]) : (i.rangeDateFrom = "", i.rangeDateTo = "", i._updateLastSelectedDate(!1)), _this11.trigger(n.eventChangeSelectedDate, {
                    action: n.actionUnselectDate,
                    date: e
                  }), !0;
                });
              }
            }, {
              key: "replaceDate",
              value: function replaceDate(e, t) {
                var _this12 = this;
                var i = this.selectedDates.find(function (t) {
                    return p(t, e, _this12.currentView);
                  }),
                  r = this.selectedDates.indexOf(i);
                r < 0 || p(this.selectedDates[r], t, this.currentView) || (this.selectedDates[r] = t, this.trigger(n.eventChangeSelectedDate, {
                  action: n.actionSelectDate,
                  date: t,
                  updateTime: !0
                }), this._updateLastSelectedDate(t));
              }
            }, {
              key: "clear",
              value: function clear() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.trigger(n.eventChangeSelectedDate, {
                  action: n.actionUnselectDate,
                  silent: e.silent
                }), new Promise(function (e) {
                  setTimeout(e);
                });
              }
            }, {
              key: "show",
              value: function show() {
                var _this$opts14 = this.opts,
                  e = _this$opts14.onShow,
                  t = _this$opts14.isMobile;
                this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
              }
            }, {
              key: "hide",
              value: function hide() {
                var _this13 = this;
                var _this$opts15 = this.opts,
                  e = _this$opts15.onHide,
                  t = _this$opts15.isMobile,
                  n = this._hasTransition();
                this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition(function (t) {
                  !_this13.customHide && (t && n || !t && !n) && _this13._finishHide(), e && e(t);
                }), t && V.classList.remove("-active-");
              }
            }, {
              key: "_triggerOnSelect",
              value: function _triggerOnSelect() {
                var _this14 = this;
                var e = [],
                  t = [],
                  n = this.selectedDates,
                  i = this.locale,
                  _this$opts16 = this.opts,
                  r = _this$opts16.onSelect,
                  o = _this$opts16.multipleDates,
                  a = _this$opts16.range,
                  s = o || a,
                  l = "function" == typeof i.dateFormat;
                n.length && (e = n.map(m), t = l ? o ? i.dateFormat(e) : e.map(function (e) {
                  return i.dateFormat(e);
                }) : e.map(function (e) {
                  return _this14.formatDate(e, i.dateFormat);
                })), r({
                  date: s ? e : e[0],
                  formattedDate: s ? t : t[0],
                  datepicker: this
                });
              }
            }, {
              key: "_handleAlreadySelectedDates",
              value: function _handleAlreadySelectedDates(e, t) {
                var _this$opts17 = this.opts,
                  n = _this$opts17.range,
                  i = _this$opts17.toggleSelected;
                n ? i ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : i && this.unselectDate(t), i || this._updateLastSelectedDate(e);
              }
            }, {
              key: "_handleUpDownActions",
              value: function _handleUpDownActions(e, t) {
                if (!((e = E(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                var n = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                n > 2 && (n = 2), n < 0 && (n = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[n]);
              }
            }, {
              key: "_handleRangeOnFocus",
              value: function _handleRangeOnFocus() {
                1 === this.selectedDates.length && (f(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
              }
            }, {
              key: "getCell",
              value: function getCell(e) {
                var _d4;
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.day;
                if (!((e = E(e)) instanceof Date)) return;
                var _l14 = l(e),
                  i = _l14.year,
                  r = _l14.month,
                  o = _l14.date,
                  a = '[data-year="'.concat(i, '"]'),
                  s = '[data-month="'.concat(r, '"]'),
                  c = '[data-date="'.concat(o, '"]'),
                  d = (_d4 = {}, _defineProperty(_d4, n.day, "".concat(a).concat(s).concat(c)), _defineProperty(_d4, n.month, "".concat(a).concat(s)), _defineProperty(_d4, n.year, "".concat(a)), _d4);
                return this.views[this.currentView].$el.querySelector(d[t]);
              }
            }, {
              key: "_showMobileOverlay",
              value: function _showMobileOverlay() {
                V.classList.add("-active-");
              }
            }, {
              key: "_hasTransition",
              value: function _hasTransition() {
                return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(function (e, t) {
                  return parseFloat(t) + e;
                }, 0) > 0;
              }
            }, {
              key: "shouldUpdateDOM",
              get: function get() {
                return this.visible || this.treatAsInline;
              }
            }, {
              key: "parsedViewDate",
              get: function get() {
                return l(this.viewDate);
              }
            }, {
              key: "currentViewSingular",
              get: function get() {
                return this.currentView.slice(0, -1);
              }
            }, {
              key: "curDecade",
              get: function get() {
                return d(this.viewDate);
              }
            }, {
              key: "viewIndex",
              get: function get() {
                return this.viewIndexes.indexOf(this.currentView);
              }
            }, {
              key: "isFinalView",
              get: function get() {
                return this.currentView === n.years;
              }
            }, {
              key: "hasSelectedDates",
              get: function get() {
                return this.selectedDates.length > 0;
              }
            }, {
              key: "isMinViewReached",
              get: function get() {
                return this.currentView === this.opts.minView || this.currentView === n.days;
              }
            }, {
              key: "$container",
              get: function get() {
                return this.$customContainer || F;
              }
            }], [{
              key: "replacer",
              value: function replacer(e, t, n) {
                return e.replace(t, function (e, t, i, r) {
                  return t + n + r;
                });
              }
            }]);
            return H;
          }();
          var q;
          return $(H, "defaults", i), $(H, "version", "3.3.1"), $(H, "defaultContainerId", "air-datepicker-global-container"), q = H.prototype, Object.assign(q, G), t["default"];
        }();
      },
      282: function _(e, t, n) {
        "use strict";

        n.d(t, {
          Z: function Z() {
            return o;
          }
        });
        var i = n(645),
          r = n.n(i)()(function (e) {
            return e[1];
          });
        r.push([e.id, '.air-datepicker-cell.-day-.-other-month-,.air-datepicker-cell.-year-.-other-decade-{color:var(--adp-color-other-month)}.air-datepicker-cell.-day-.-other-month-:hover,.air-datepicker-cell.-year-.-other-decade-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-,.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-day-.-other-month-,.-selected-.air-datepicker-cell.-year-.-other-decade-{background:var(--adp-background-color-selected-other-month);color:#fff}.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-,.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-day-.-other-month-,.-in-range-.air-datepicker-cell.-year-.-other-decade-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-,.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-day-.-other-month-:empty,.air-datepicker-cell.-year-.-other-decade-:empty{background:none;border:none}.air-datepicker-cell{align-items:center;border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;position:relative;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{color:var(--adp-color-disabled);cursor:default}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{background-color:var(--adp-cell-background-color-in-range);border:1px solid var(--adp-cell-border-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{background-color:var(--adp-cell-background-color-in-range);border:1px solid var(--adp-cell-border-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{border:none}.air-datepicker-cell.-selected-,.air-datepicker-cell.-selected-.-current-{background:var(--adp-cell-background-color-selected);color:#fff}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7,var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{align-items:center;color:var(--adp-day-name-color);display:flex;flex:1;font-size:.8em;justify-content:center;text-align:center;text-transform:uppercase}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-auto-rows:var(--adp-day-cell-height);grid-template-columns:repeat(7,var(--adp-day-cell-width))}.air-datepicker-body--cells.-months-{grid-auto-rows:var(--adp-month-cell-height);grid-template-columns:repeat(3,1fr)}.air-datepicker-body--cells.-years-{grid-auto-rows:var(--adp-year-cell-height);grid-template-columns:repeat(4,1fr)}.air-datepicker-nav{border-bottom:1px solid var(--adp-border-color-inner);box-sizing:content-box;display:flex;justify-content:space-between;min-height:var(--adp-nav-height);padding:var(--adp-padding)}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--action,.air-datepicker-nav--title{align-items:center;cursor:pointer;display:flex;justify-content:center}.air-datepicker-nav--action{border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--adp-nav-action-size)}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{height:32px;width:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{color:var(--adp-nav-color-secondary);font-style:normal;margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{background:none;cursor:default}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{background:hsla(0,0%,100%,0);border:none;border-radius:var(--adp-btn-border-radius);color:var(--adp-btn-color);cursor:pointer;display:inline-flex;height:var(--adp-btn-height)}.air-datepicker-button:focus,.air-datepicker-button:hover{background:var(--adp-btn-background-color-hover);color:var(--adp-btn-color-hover)}.air-datepicker-button:focus{outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{align-items:center;display:flex;height:100%;justify-content:center;outline:none;width:100%}.air-datepicker-time{grid-column-gap:12px;align-items:center;display:grid;grid-template-columns:max-content 1fr;padding:0 var(--adp-time-padding-inner);position:relative}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{align-items:center;display:flex;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{line-height:1;margin:0 2px 3px}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{font-family:Century Gothic,CenturyGothic,AppleGothic,sans-serif;font-size:19px;line-height:1;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);bottom:-2px;content:"";left:-2px;opacity:0;position:absolute;right:-2px;top:-3px;z-index:-1}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{align-self:flex-end;color:var(--adp-time-day-period-color);font-size:11px;margin-bottom:1px;margin-left:6px;text-transform:uppercase}.air-datepicker-time--row{align-items:center;background:linear-gradient(to right,var(--adp-time-track-color),var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat;display:flex;font-size:11px;height:17px}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{-webkit-appearance:none;background:none;cursor:pointer;flex:1;height:100%;margin:0;padding:0;width:100%}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-moz-range-thumb{background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-ms-thumb{background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-moz-range-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-ms-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-ms-fill-lower,.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:transparent}.air-datepicker{--adp-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:"nav" "body" "timepicker" "buttons";--adp-transition-duration:.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92,196,239,.1);--adp-background-color-in-range-focused:rgba(92,196,239,.2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92,196,239,.1);--adp-cell-background-color-in-range-hover:rgba(92,196,239,.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0,0,0,.3);--adp-overlay-transition-duration:.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);border-radius:var(--adp-border-radius);box-shadow:0 4px 12px rgba(0,0,0,.15);box-sizing:content-box;color:var(--adp-color);display:grid;font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);grid-template-areas:var(--adp-grid-areas);grid-template-columns:1fr;grid-template-rows:repeat(4,max-content);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);width:var(--adp-width);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset)*-1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset)*-1))}.air-datepicker.-active-:not(.-custom-position-){opacity:1;transform:translate(0)}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;left:auto;opacity:1;position:static;right:auto;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);border:none;position:fixed;width:var(--adp-mobile-width)}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:transparent}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%,calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%,-50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{left:0;position:absolute;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size)/2);z-index:-1}.air-datepicker--pointer,.air-datepicker--pointer:after{height:var(--adp-pointer-size);position:absolute;width:var(--adp-pointer-size)}.air-datepicker--pointer:after{background:#fff;border-right:1px solid var(--adp-border-color-inline);border-top:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);box-sizing:border-box;content:""}.-top-center- .air-datepicker--pointer,.-top-left- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-center- .air-datepicker--pointer:after,.-top-left- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-bottom- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-bottom- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-top- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-center- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-center- .air-datepicker--pointer:after,.-bottom-left- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-bottom- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-top- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-bottom- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-top- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-bottom-left- .air-datepicker--pointer,.-top-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-bottom-right- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-bottom-center- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;grid-area:body;padding:var(--adp-padding)}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{border-top:1px solid var(--adp-border-color-inner);padding:var(--adp-padding)}.air-datepicker-overlay{background:var(--adp-overlay-background-color);height:0;left:0;opacity:0;position:fixed;top:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);width:0;z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{height:100%;opacity:1;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s;width:100%}', ""]);
        var o = r;
      },
      406: function _(e, t, n) {
        "use strict";

        n.d(t, {
          Z: function Z() {
            return o;
          }
        });
        var i = n(645),
          r = n.n(i)()(function (e) {
            return e[1];
          });
        r.push([e.id, '/*!\n * FilePond 4.30.4\n * Licensed under MIT, https://opensource.org/licenses/MIT/\n * Please visit https://pqina.nl/filepond/ for details.\n */.filepond--assistant{clip:rect(1px,1px,1px,1px);border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.filepond--browser.filepond--browser{font-size:0;left:1em;margin:0;opacity:0;padding:0;position:absolute;top:1.75em;width:calc(100% - 2em)}.filepond--data{border:none;contain:strict;height:0;margin:0;padding:0;visibility:hidden;width:0}.filepond--data,.filepond--drip{pointer-events:none;position:absolute}.filepond--drip{background:rgba(0,0,0,.01);border-radius:.5em;bottom:0;left:0;opacity:.1;overflow:hidden;right:0;top:0}.filepond--drip-blob{background:#292625;border-radius:50%;height:8em;margin-left:-4em;margin-top:-4em;-webkit-transform-origin:center center;transform-origin:center center;width:8em}.filepond--drip-blob,.filepond--drop-label{left:0;position:absolute;top:0;will-change:transform,opacity}.filepond--drop-label{align-items:center;color:#4f4f4f;display:flex;height:0;justify-content:center;margin:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--drop-label.filepond--drop-label label{display:block;margin:0;padding:.5em}.filepond--drop-label label{cursor:default;font-size:.875em;font-weight:400;line-height:1.5;text-align:center}.filepond--label-action{-webkit-text-decoration-skip:ink;cursor:pointer;text-decoration:underline;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;text-decoration-skip-ink:auto}.filepond--root[data-disabled] .filepond--drop-label label{opacity:.5}.filepond--file-action-button.filepond--file-action-button{border:none;font-family:inherit;font-size:1em;height:1.625em;line-height:inherit;margin:0;outline:none;padding:0;width:1.625em;will-change:transform,opacity}.filepond--file-action-button.filepond--file-action-button span{clip:rect(1px,1px,1px,1px);border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.filepond--file-action-button.filepond--file-action-button svg{height:100%;width:100%}.filepond--file-action-button.filepond--file-action-button:after{bottom:-.75em;content:"";left:-.75em;position:absolute;right:-.75em;top:-.75em}.filepond--file-action-button{background-color:rgba(0,0,0,.5);background-image:none;border-radius:50%;box-shadow:0 0 0 0 hsla(0,0%,100%,0);color:#fff;cursor:auto;transition:box-shadow .25s ease-in}.filepond--file-action-button:focus,.filepond--file-action-button:hover{box-shadow:0 0 0 .125em hsla(0,0%,100%,.9)}.filepond--file-action-button[disabled]{background-color:rgba(0,0,0,.25);color:hsla(0,0%,100%,.5)}.filepond--file-action-button[hidden]{display:none}.filepond--action-edit-item.filepond--action-edit-item{height:2em;padding:.1875em;width:2em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=center]{margin-left:-.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=bottom]{margin-bottom:-.1875em}.filepond--action-edit-item-alt{background:transparent;border:none;color:inherit;font-family:inherit;line-height:inherit;margin:0 0 0 .25em;outline:none;padding:0;pointer-events:all;position:absolute}.filepond--action-edit-item-alt svg{height:1.3125em;width:1.3125em}.filepond--action-edit-item-alt span{font-size:0;opacity:0}.filepond--file-info{align-items:flex-start;display:flex;flex:1;flex-direction:column;margin:0 .5em 0 0;min-width:0;pointer-events:none;position:static;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform,opacity}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out;white-space:nowrap}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{align-items:flex-end;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;margin:0;min-width:2.25em;pointer-events:none;position:static;text-align:right;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform,opacity}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper.filepond--file-wrapper{border:none;height:100%;margin:0;min-width:0;padding:0}.filepond--file-wrapper.filepond--file-wrapper>legend{clip:rect(1px,1px,1px,1px);border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.filepond--file{align-items:flex-start;border-radius:.5em;color:#fff;display:flex;height:100%;padding:.5625em;position:static}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:3}.filepond--file .filepond--file-action-button,.filepond--file .filepond--processing-complete-indicator,.filepond--file .filepond--progress-indicator{position:absolute}.filepond--file [data-align*=left]{left:.5625em}.filepond--file [data-align*=right]{right:.5625em}.filepond--file [data-align*=center]{left:calc(50% - .8125em)}.filepond--file [data-align*=bottom]{bottom:1.125em}.filepond--file [data-align=center]{top:calc(50% - .8125em)}.filepond--file .filepond--progress-indicator{margin-top:.1875em}.filepond--file .filepond--progress-indicator[data-align*=right]{margin-right:.1875em}.filepond--file .filepond--progress-indicator[data-align*=left]{margin-left:.1875em}[data-filepond-item-state*=error] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state=cancelled] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state~=processing] .filepond--file-status-sub{opacity:0}[data-filepond-item-state~=processing] .filepond--action-abort-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-error] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-error] .filepond--action-retry-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s linear .125s both;animation:fall .5s linear .125s both}[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--processing-complete-indicator:not([style*=hidden])~.filepond--file-status .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub{opacity:.5}[data-filepond-item-state*=error] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=invalid] .filepond--panel{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@-webkit-keyframes fall{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}70%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fall{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}70%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--hopper[data-hopper-state=drag-over]:after{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:100}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{left:0;margin:.25em;padding:0;position:absolute;right:0;top:0;will-change:transform,opacity;z-index:1}.filepond--item>.filepond--panel{z-index:-1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em rgba(0,0,0,.25)}.filepond--item>.filepond--file-wrapper,.filepond--item>.filepond--panel{transition:opacity .15s ease-out}.filepond--item[data-drag-state]{cursor:-webkit-grab;cursor:grab}.filepond--item[data-drag-state]>.filepond--panel{box-shadow:0 0 0 transparent;transition:box-shadow .125s ease-in-out}.filepond--item[data-drag-state=drag]{cursor:-webkit-grabbing;cursor:grabbing}.filepond--item[data-drag-state=drag]>.filepond--panel{box-shadow:0 .125em .3125em rgba(0,0,0,.325)}.filepond--item[data-drag-state]:not([data-drag-state=idle]){z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=error] .filepond--item-panel,[data-filepond-item-state*=invalid] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{left:0;margin:0;position:absolute;right:0;top:0;will-change:transform}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller[data-state=overflow]{-webkit-overflow-scrolling:touch;-webkit-mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent);mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent);overflow-x:hidden;overflow-y:scroll}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-clip:content-box;background-color:rgba(0,0,0,.3);border:.3125em solid transparent;border-radius:99999px}.filepond--list.filepond--list{list-style-type:none;margin:0;padding:0;position:absolute;top:0;will-change:transform}.filepond--list{left:.75em;right:.75em}.filepond--root[data-style-panel-layout~=integrated]{height:100%;margin:0;max-width:none;width:100%}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root{border-radius:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root>*,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{align-items:center;bottom:0;display:flex;height:auto;justify-content:center;z-index:7}.filepond--root[data-style-panel-layout~=circle] .filepond--item-panel,.filepond--root[data-style-panel-layout~=integrated] .filepond--item-panel{display:none}.filepond--root[data-style-panel-layout~=compact] .filepond--list-scroller,.filepond--root[data-style-panel-layout~=integrated] .filepond--list-scroller{height:100%;margin-bottom:0;margin-top:0;overflow:hidden}.filepond--root[data-style-panel-layout~=compact] .filepond--list,.filepond--root[data-style-panel-layout~=integrated] .filepond--list{height:100%;left:0;right:0}.filepond--root[data-style-panel-layout~=compact] .filepond--item,.filepond--root[data-style-panel-layout~=integrated] .filepond--item{margin:0}.filepond--root[data-style-panel-layout~=compact] .filepond--file-wrapper,.filepond--root[data-style-panel-layout~=integrated] .filepond--file-wrapper{height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{z-index:7}.filepond--root[data-style-panel-layout~=circle]{border-radius:99999rem;overflow:hidden}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel{border-radius:inherit}.filepond--root[data-style-panel-layout~=circle] .filepond--file-info,.filepond--root[data-style-panel-layout~=circle] .filepond--file-status,.filepond--root[data-style-panel-layout~=circle]>.filepond--panel>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--action-edit-item{opacity:1!important;visibility:visible!important}@media not all and (-webkit-min-device-pixel-ratio:0),not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.filepond--root[data-style-panel-layout~=circle]{will-change:transform}}}.filepond--panel-root{background-color:#f1f0ef;border-radius:.5em}.filepond--panel{height:100%!important;left:0;margin:0;pointer-events:none;position:absolute;right:0;top:0}.filepond-panel:not([data-scalable=false]){height:auto!important}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel[data-scalable=true]{background-color:transparent!important;border:none!important;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.filepond--panel-bottom,.filepond--panel-center,.filepond--panel-top{left:0;margin:0;padding:0;position:absolute;right:0;top:0}.filepond--panel-bottom,.filepond--panel-top{height:.5em}.filepond--panel-top{border-bottom:none!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.filepond--panel-top:after{background-color:inherit;bottom:-1px;content:"";height:2px;left:0;position:absolute;right:0}.filepond--panel-bottom,.filepond--panel-center{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0);-webkit-transform-origin:left top;transform-origin:left top;will-change:transform}.filepond--panel-bottom{border-top:none!important;border-top-left-radius:0!important;border-top-right-radius:0!important}.filepond--panel-bottom:before{background-color:inherit;content:"";height:2px;left:0;position:absolute;right:0;top:-1px}.filepond--panel-center{border-bottom:none!important;border-radius:0!important;border-top:none!important;height:100px!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{color:#fff;height:1.25em;margin:0;pointer-events:none;position:static;width:1.25em;will-change:transform,opacity}.filepond--progress-indicator svg{height:100%;transform-box:fill-box;vertical-align:top;width:100%}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;contain:layout style size;direction:ltr;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1rem;font-weight:450;line-height:normal;margin-bottom:1em;position:relative;text-align:left;text-rendering:optimizeLegibility}.filepond--root *{box-sizing:inherit;line-height:inherit}.filepond--root :not(text){font-size:inherit}.filepond--root[data-disabled]{pointer-events:none}.filepond--root[data-disabled] .filepond--list-scroller{pointer-events:all}.filepond--root[data-disabled] .filepond--list{pointer-events:none}.filepond--root .filepond--drop-label{min-height:4.75em}.filepond--root .filepond--list-scroller{margin-bottom:1em;margin-top:1em}.filepond--root .filepond--credits{bottom:-14px;color:inherit;font-size:11px;line-height:.85;opacity:.175;position:absolute;right:0;text-decoration:none;z-index:3}.filepond--root .filepond--credits[style]{bottom:auto;margin-top:14px;top:0}', ""]);
        var o = r;
      },
      645: function _(e) {
        "use strict";

        e.exports = function (e) {
          var t = [];
          return t.toString = function () {
            return this.map(function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }, t.i = function (e, n, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var r = {};
            if (i) for (var o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (r[a] = !0);
            }
            for (var s = 0; s < e.length; s++) {
              var l = [].concat(e[s]);
              i && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
            }
          }, t;
        };
      },
      136: function _(e, t) {
        !function (e) {
          "use strict";

          var t = function t(e) {
              return e instanceof HTMLElement;
            },
            n = function n(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                i = Object.assign({}, e),
                r = [],
                o = [],
                a = function a() {
                  var e = [].concat(o);
                  o.length = 0, e.forEach(function (e) {
                    var t = e.type,
                      n = e.data;
                    s(t, n);
                  });
                },
                s = function s(e, t, n) {
                  !n || document.hidden ? (u[e] && u[e](t), r.push({
                    type: e,
                    data: t
                  })) : o.push({
                    type: e,
                    data: t
                  });
                },
                l = function l(e) {
                  for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                  return d[e] ? (t = d)[e].apply(t, i) : null;
                },
                c = {
                  getState: function getState() {
                    return Object.assign({}, i);
                  },
                  processActionQueue: function processActionQueue() {
                    var e = [].concat(r);
                    return r.length = 0, e;
                  },
                  processDispatchQueue: a,
                  dispatch: s,
                  query: l
                },
                d = {};
              t.forEach(function (e) {
                d = Object.assign({}, e(i), {}, d);
              });
              var u = {};
              return n.forEach(function (e) {
                u = Object.assign({}, e(s, l, i), {}, u);
              }), c;
            },
            i = function i(e, t, n) {
              "function" != typeof n ? Object.defineProperty(e, t, Object.assign({}, n)) : e[t] = n;
            },
            r = function r(e, t) {
              for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
            },
            o = function o(e) {
              var t = {};
              return r(e, function (n) {
                i(t, n, e[n]);
              }), t;
            },
            a = function a(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              if (null === n) return e.getAttribute(t) || e.hasAttribute(t);
              e.setAttribute(t, n);
            },
            s = "http://www.w3.org/2000/svg",
            l = ["svg", "path"],
            c = function c(e) {
              return l.includes(e);
            },
            d = function d(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              "object" == _typeof(t) && (n = t, t = null);
              var i = c(e) ? document.createElementNS(s, e) : document.createElement(e);
              return t && (c(e) ? a(i, "class", t) : i.className = t), r(n, function (e, t) {
                a(i, e, t);
              }), i;
            },
            u = function u(e) {
              return function (t, n) {
                void 0 !== n && e.children[n] ? e.insertBefore(t, e.children[n]) : e.appendChild(t);
              };
            },
            p = function p(e, t) {
              return function (e, n) {
                return void 0 !== n ? t.splice(n, 0, e) : t.push(e), e;
              };
            },
            f = function f(e, t) {
              return function (n) {
                return t.splice(t.indexOf(n), 1), n.element.parentNode && e.removeChild(n.element), n;
              };
            },
            h = "undefined" != typeof window && void 0 !== window.document,
            m = function m() {
              return h;
            },
            g = "children" in (m() ? d("svg") : {}) ? function (e) {
              return e.children.length;
            } : function (e) {
              return e.childNodes.length;
            },
            v = function v(e, t, n, i) {
              var r = n[0] || e.left,
                o = n[1] || e.top,
                a = r + e.width,
                s = o + e.height * (i[1] || 1),
                l = {
                  element: Object.assign({}, e),
                  inner: {
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                  },
                  outer: {
                    left: r,
                    top: o,
                    right: a,
                    bottom: s
                  }
                };
              return t.filter(function (e) {
                return !e.isRectIgnored();
              }).map(function (e) {
                return e.rect;
              }).forEach(function (e) {
                b(l.inner, Object.assign({}, e.inner)), b(l.outer, Object.assign({}, e.outer));
              }), w(l.inner), l.outer.bottom += l.element.marginBottom, l.outer.right += l.element.marginRight, w(l.outer), l;
            },
            b = function b(e, t) {
              t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right);
            },
            w = function w(e) {
              e.width = e.right - e.left, e.height = e.bottom - e.top;
            },
            y = function y(e) {
              return "number" == typeof e;
            },
            E = function E(e, t, n) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .001;
              return Math.abs(e - t) < i && Math.abs(n) < i;
            },
            _ = function _() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.stiffness,
                n = void 0 === t ? .5 : t,
                i = e.damping,
                r = void 0 === i ? .75 : i,
                a = e.mass,
                s = void 0 === a ? 10 : a,
                l = null,
                c = null,
                d = 0,
                u = !1,
                p = o({
                  interpolate: function interpolate(e, t) {
                    if (!u) {
                      if (!y(l) || !y(c)) return u = !0, void (d = 0);
                      E(c += d += -(c - l) * n / s, l, d *= r) || t ? (c = l, d = 0, u = !0, p.onupdate(c), p.oncomplete(c)) : p.onupdate(c);
                    }
                  },
                  target: {
                    set: function set(e) {
                      if (y(e) && !y(c) && (c = e), null === l && (l = e, c = e), c === (l = e) || void 0 === l) return u = !0, d = 0, p.onupdate(c), void p.oncomplete(c);
                      u = !1;
                    },
                    get: function get() {
                      return l;
                    }
                  },
                  resting: {
                    get: function get() {
                      return u;
                    }
                  },
                  onupdate: function onupdate(e) {},
                  oncomplete: function oncomplete(e) {}
                });
              return p;
            },
            T = function T(e) {
              return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
            },
            D = function D() {
              var e,
                t,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = n.duration,
                r = void 0 === i ? 500 : i,
                a = n.easing,
                s = void 0 === a ? T : a,
                l = n.delay,
                c = void 0 === l ? 0 : l,
                d = null,
                u = !0,
                p = !1,
                f = null,
                h = o({
                  interpolate: function interpolate(n, i) {
                    u || null === f || (null === d && (d = n), n - d < c || ((e = n - d - c) >= r || i ? (e = 1, t = p ? 0 : 1, h.onupdate(t * f), h.oncomplete(t * f), u = !0) : (t = e / r, h.onupdate((e >= 0 ? s(p ? 1 - t : t) : 0) * f))));
                  },
                  target: {
                    get: function get() {
                      return p ? 0 : f;
                    },
                    set: function set(e) {
                      if (null === f) return f = e, h.onupdate(e), void h.oncomplete(e);
                      e < f ? (f = 1, p = !0) : (p = !1, f = e), u = !1, d = null;
                    }
                  },
                  resting: {
                    get: function get() {
                      return u;
                    }
                  },
                  onupdate: function onupdate(e) {},
                  oncomplete: function oncomplete(e) {}
                });
              return h;
            },
            I = {
              spring: _,
              tween: D
            },
            O = function O(e, t, n) {
              var i = e[t] && "object" == _typeof(e[t][n]) ? e[t][n] : e[t] || e,
                r = "string" == typeof i ? i : i.type,
                o = "object" == _typeof(i) ? Object.assign({}, i) : {};
              return I[r] ? I[r](o) : null;
            },
            k = function k(e, t, n) {
              var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
                e.forEach(function (e) {
                  var r = e,
                    o = function o() {
                      return n[e];
                    },
                    a = function a(t) {
                      return n[e] = t;
                    };
                  "object" == _typeof(e) && (r = e.key, o = e.getter || o, a = e.setter || a), t[r] && !i || (t[r] = {
                    get: o,
                    set: a
                  });
                });
              });
            },
            R = function R(e) {
              var t = e.mixinConfig,
                n = e.viewProps,
                i = e.viewInternalAPI,
                o = e.viewExternalAPI,
                a = Object.assign({}, n),
                s = [];
              return r(t, function (e, t) {
                var r = O(t);
                r && (r.onupdate = function (t) {
                  n[e] = t;
                }, r.target = a[e], k([{
                  key: e,
                  setter: function setter(e) {
                    r.target !== e && (r.target = e);
                  },
                  getter: function getter() {
                    return n[e];
                  }
                }], [i, o], n, !0), s.push(r));
              }), {
                write: function write(e) {
                  var t = document.hidden,
                    n = !0;
                  return s.forEach(function (i) {
                    i.resting || (n = !1), i.interpolate(e, t);
                  }), n;
                },
                destroy: function destroy() {}
              };
            },
            S = function S(e) {
              return function (t, n) {
                e.addEventListener(t, n);
              };
            },
            C = function C(e) {
              return function (t, n) {
                e.removeEventListener(t, n);
              };
            },
            A = function A(e) {
              e.mixinConfig, e.viewProps, e.viewInternalAPI;
              var t = e.viewExternalAPI,
                n = (e.viewState, e.view),
                i = [],
                r = S(n.element),
                o = C(n.element);
              return t.on = function (e, t) {
                i.push({
                  type: e,
                  fn: t
                }), r(e, t);
              }, t.off = function (e, t) {
                i.splice(i.findIndex(function (n) {
                  return n.type === e && n.fn === t;
                }), 1), o(e, t);
              }, {
                write: function write() {
                  return !0;
                },
                destroy: function destroy() {
                  i.forEach(function (e) {
                    o(e.type, e.fn);
                  });
                }
              };
            },
            M = function M(e) {
              return null != e;
            },
            x = {
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              translateX: 0,
              translateY: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              originX: 0,
              originY: 0
            },
            L = function L(e) {
              var t = e.mixinConfig,
                n = e.viewProps,
                i = e.viewInternalAPI,
                r = e.viewExternalAPI,
                o = e.view,
                a = Object.assign({}, n),
                s = {};
              k(t, [i, r], n);
              var l = function l() {
                  return [n.translateX || 0, n.translateY || 0];
                },
                c = function c() {
                  return [n.scaleX || 0, n.scaleY || 0];
                },
                d = function d() {
                  return o.rect ? v(o.rect, o.childViews, l(), c()) : null;
                };
              return i.rect = {
                get: d
              }, r.rect = {
                get: d
              }, t.forEach(function (e) {
                n[e] = void 0 === a[e] ? x[e] : a[e];
              }), {
                write: function write() {
                  if (P(s, n)) return N(o.element, n), Object.assign(s, Object.assign({}, n)), !0;
                },
                destroy: function destroy() {}
              };
            },
            P = function P(e, t) {
              if (Object.keys(e).length !== Object.keys(t).length) return !0;
              for (var n in t) if (t[n] !== e[n]) return !0;
              return !1;
            },
            N = function N(e, t) {
              var n = t.opacity,
                i = t.perspective,
                r = t.translateX,
                o = t.translateY,
                a = t.scaleX,
                s = t.scaleY,
                l = t.rotateX,
                c = t.rotateY,
                d = t.rotateZ,
                u = t.originX,
                p = t.originY,
                f = t.width,
                h = t.height,
                m = "",
                g = "";
              (M(u) || M(p)) && (g += "transform-origin: " + (u || 0) + "px " + (p || 0) + "px;"), M(i) && (m += "perspective(" + i + "px) "), (M(r) || M(o)) && (m += "translate3d(" + (r || 0) + "px, " + (o || 0) + "px, 0) "), (M(a) || M(s)) && (m += "scale3d(" + (M(a) ? a : 1) + ", " + (M(s) ? s : 1) + ", 1) "), M(d) && (m += "rotateZ(" + d + "rad) "), M(l) && (m += "rotateX(" + l + "rad) "), M(c) && (m += "rotateY(" + c + "rad) "), m.length && (g += "transform:" + m + ";"), M(n) && (g += "opacity:" + n + ";", 0 === n && (g += "visibility:hidden;"), n < 1 && (g += "pointer-events:none;")), M(h) && (g += "height:" + h + "px;"), M(f) && (g += "width:" + f + "px;");
              var v = e.elementCurrentStyle || "";
              g.length === v.length && g === v || (e.style.cssText = g, e.elementCurrentStyle = g);
            },
            G = {
              styles: L,
              listeners: A,
              animations: R,
              apis: function apis(e) {
                var t = e.mixinConfig,
                  n = e.viewProps,
                  i = e.viewExternalAPI;
                k(t, i, n);
              }
            },
            $ = function $() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return t.layoutCalculated || (e.paddingTop = parseInt(n.paddingTop, 10) || 0, e.marginTop = parseInt(n.marginTop, 10) || 0, e.marginRight = parseInt(n.marginRight, 10) || 0, e.marginBottom = parseInt(n.marginBottom, 10) || 0, e.marginLeft = parseInt(n.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = null === t.offsetParent, e;
            },
            B = function B() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.tag,
                n = void 0 === t ? "div" : t,
                i = e.name,
                r = void 0 === i ? null : i,
                a = e.attributes,
                s = void 0 === a ? {} : a,
                l = e.read,
                c = void 0 === l ? function () {} : l,
                h = e.write,
                m = void 0 === h ? function () {} : h,
                b = e.create,
                w = void 0 === b ? function () {} : b,
                y = e.destroy,
                E = void 0 === y ? function () {} : y,
                _ = e.filterFrameActionsForChild,
                T = void 0 === _ ? function (e, t) {
                  return t;
                } : _,
                D = e.didCreateView,
                I = void 0 === D ? function () {} : D,
                O = e.didWriteView,
                k = void 0 === O ? function () {} : O,
                R = e.ignoreRect,
                S = void 0 !== R && R,
                C = e.ignoreRectUpdate,
                A = void 0 !== C && C,
                M = e.mixins,
                x = void 0 === M ? [] : M;
              return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  i = d(n, "filepond--" + r, s),
                  a = window.getComputedStyle(i, null),
                  l = $(),
                  h = null,
                  b = !1,
                  y = [],
                  _ = [],
                  D = {},
                  O = {},
                  R = [m],
                  C = [c],
                  M = [E],
                  L = function L() {
                    return i;
                  },
                  P = function P() {
                    return y.concat();
                  },
                  N = function N() {
                    return D;
                  },
                  B = function B(e) {
                    return function (t, n) {
                      return t(e, n);
                    };
                  },
                  F = function F() {
                    return h || (h = v(l, y, [0, 0], [1, 1]));
                  },
                  V = function V() {
                    h = null, y.forEach(function (e) {
                      return e._read();
                    }), !(A && l.width && l.height) && $(l, i, a);
                    var e = {
                      root: X,
                      props: t,
                      rect: l
                    };
                    C.forEach(function (t) {
                      return t(e);
                    });
                  },
                  U = function U(e, n, i) {
                    var r = 0 === n.length;
                    return R.forEach(function (o) {
                      !1 === o({
                        props: t,
                        root: X,
                        actions: n,
                        timestamp: e,
                        shouldOptimize: i
                      }) && (r = !1);
                    }), _.forEach(function (t) {
                      !1 === t.write(e) && (r = !1);
                    }), y.filter(function (e) {
                      return !!e.element.parentNode;
                    }).forEach(function (t) {
                      t._write(e, T(t, n), i) || (r = !1);
                    }), y.forEach(function (t, o) {
                      t.element.parentNode || (X.appendChild(t.element, o), t._read(), t._write(e, T(t, n), i), r = !1);
                    }), b = r, k({
                      props: t,
                      root: X,
                      actions: n,
                      timestamp: e
                    }), r;
                  },
                  H = function H() {
                    _.forEach(function (e) {
                      return e.destroy();
                    }), M.forEach(function (e) {
                      e({
                        root: X,
                        props: t
                      });
                    }), y.forEach(function (e) {
                      return e._destroy();
                    });
                  },
                  q = {
                    element: {
                      get: L
                    },
                    style: {
                      get: function get() {
                        return a;
                      }
                    },
                    childViews: {
                      get: P
                    }
                  },
                  z = Object.assign({}, q, {
                    rect: {
                      get: F
                    },
                    ref: {
                      get: N
                    },
                    is: function is(e) {
                      return r === e;
                    },
                    appendChild: u(i),
                    createChildView: B(e),
                    linkView: function linkView(e) {
                      return y.push(e), e;
                    },
                    unlinkView: function unlinkView(e) {
                      y.splice(y.indexOf(e), 1);
                    },
                    appendChildView: p(i, y),
                    removeChildView: f(i, y),
                    registerWriter: function registerWriter(e) {
                      return R.push(e);
                    },
                    registerReader: function registerReader(e) {
                      return C.push(e);
                    },
                    registerDestroyer: function registerDestroyer(e) {
                      return M.push(e);
                    },
                    invalidateLayout: function invalidateLayout() {
                      return i.layoutCalculated = !1;
                    },
                    dispatch: e.dispatch,
                    query: e.query
                  }),
                  Y = {
                    element: {
                      get: L
                    },
                    childViews: {
                      get: P
                    },
                    rect: {
                      get: F
                    },
                    resting: {
                      get: function get() {
                        return b;
                      }
                    },
                    isRectIgnored: function isRectIgnored() {
                      return S;
                    },
                    _read: V,
                    _write: U,
                    _destroy: H
                  },
                  j = Object.assign({}, q, {
                    rect: {
                      get: function get() {
                        return l;
                      }
                    }
                  });
                Object.keys(x).sort(function (e, t) {
                  return "styles" === e ? 1 : "styles" === t ? -1 : 0;
                }).forEach(function (e) {
                  var n = G[e]({
                    mixinConfig: x[e],
                    viewProps: t,
                    viewState: O,
                    viewInternalAPI: z,
                    viewExternalAPI: Y,
                    view: o(j)
                  });
                  n && _.push(n);
                });
                var X = o(z);
                w({
                  root: X,
                  props: t
                });
                var W = g(i);
                return y.forEach(function (e, t) {
                  X.appendChild(e.element, W + t);
                }), I(X), o(Y);
              };
            },
            F = function F(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60,
                i = "__framePainter";
              if (window[i]) return window[i].readers.push(e), void window[i].writers.push(t);
              window[i] = {
                readers: [e],
                writers: [t]
              };
              var r = window[i],
                o = 1e3 / n,
                a = null,
                s = null,
                l = null,
                c = null,
                d = function d() {
                  document.hidden ? (l = function l() {
                    return window.setTimeout(function () {
                      return u(performance.now());
                    }, o);
                  }, c = function c() {
                    return window.clearTimeout(s);
                  }) : (l = function l() {
                    return window.requestAnimationFrame(u);
                  }, c = function c() {
                    return window.cancelAnimationFrame(s);
                  });
                };
              document.addEventListener("visibilitychange", function () {
                c && c(), d(), u(performance.now());
              });
              var u = function e(t) {
                s = l(e), a || (a = t);
                var n = t - a;
                n <= o || (a = t - n % o, r.readers.forEach(function (e) {
                  return e();
                }), r.writers.forEach(function (e) {
                  return e(t);
                }));
              };
              return d(), u(performance.now()), {
                pause: function pause() {
                  c(s);
                }
              };
            },
            V = function V(e, t) {
              return function (n) {
                var i = n.root,
                  r = n.props,
                  o = n.actions,
                  a = void 0 === o ? [] : o,
                  s = n.timestamp,
                  l = n.shouldOptimize;
                a.filter(function (t) {
                  return e[t.type];
                }).forEach(function (t) {
                  return e[t.type]({
                    root: i,
                    props: r,
                    action: t.data,
                    timestamp: s,
                    shouldOptimize: l
                  });
                }), t && t({
                  root: i,
                  props: r,
                  actions: a,
                  timestamp: s,
                  shouldOptimize: l
                });
              };
            },
            U = function U(e, t) {
              return t.parentNode.insertBefore(e, t);
            },
            H = function H(e, t) {
              return t.parentNode.insertBefore(e, t.nextSibling);
            },
            q = function q(e) {
              return Array.isArray(e);
            },
            z = function z(e) {
              return null == e;
            },
            Y = function Y(e) {
              return e.trim();
            },
            j = function j(e) {
              return "" + e;
            },
            X = function X(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
              return z(e) ? [] : q(e) ? e : j(e).split(t).map(Y).filter(function (e) {
                return e.length;
              });
            },
            W = function W(e) {
              return "boolean" == typeof e;
            },
            K = function K(e) {
              return W(e) ? e : "true" === e;
            },
            Q = function Q(e) {
              return "string" == typeof e;
            },
            Z = function Z(e) {
              return y(e) ? e : Q(e) ? j(e).replace(/[a-z]+/gi, "") : 0;
            },
            J = function J(e) {
              return parseInt(Z(e), 10);
            },
            ee = function ee(e) {
              return parseFloat(Z(e));
            },
            te = function te(e) {
              return y(e) && isFinite(e) && Math.floor(e) === e;
            },
            ne = function ne(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
              if (te(e)) return e;
              var n = j(e).trim();
              return /MB$/i.test(n) ? (n = n.replace(/MB$i/, "").trim(), J(n) * t * t) : /KB/i.test(n) ? (n = n.replace(/KB$i/, "").trim(), J(n) * t) : J(n);
            },
            ie = function ie(e) {
              return "function" == typeof e;
            },
            re = function re(e) {
              for (var t = self, n = e.split("."), i = null; i = n.shift();) if (!(t = t[i])) return null;
              return t;
            },
            oe = {
              process: "POST",
              patch: "PATCH",
              revert: "DELETE",
              fetch: "GET",
              restore: "GET",
              load: "GET"
            },
            ae = function ae(e) {
              var t = {};
              return t.url = Q(e) ? e : e.url || "", t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0, t.headers = e.headers ? e.headers : {}, r(oe, function (n) {
                t[n] = se(n, e[n], oe[n], t.timeout, t.headers);
              }), t.process = e.process || Q(e) || e.url ? t.process : null, t.remove = e.remove || null, delete t.headers, t;
            },
            se = function se(e, t, n, i, r) {
              if (null === t) return null;
              if ("function" == typeof t) return t;
              var o = {
                url: "GET" === n || "PATCH" === n ? "?" + e + "=" : "",
                method: n,
                headers: r,
                withCredentials: !1,
                timeout: i,
                onload: null,
                ondata: null,
                onerror: null
              };
              if (Q(t)) return o.url = t, o;
              if (Object.assign(o, t), Q(o.headers)) {
                var a = o.headers.split(/:(.+)/);
                o.headers = {
                  header: a[0],
                  value: a[1]
                };
              }
              return o.withCredentials = K(o.withCredentials), o;
            },
            le = function le(e) {
              return null === e;
            },
            ce = function ce(e) {
              return "object" == _typeof(e) && null !== e;
            },
            de = function de(e) {
              return ce(e) && Q(e.url) && ce(e.process) && ce(e.revert) && ce(e.restore) && ce(e.fetch);
            },
            ue = function ue(e) {
              return q(e) ? "array" : le(e) ? "null" : te(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : de(e) ? "api" : _typeof(e);
            },
            pe = function pe(e) {
              return e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",');
            },
            fe = {
              array: X,
              "boolean": K,
              "int": function int(e) {
                return "bytes" === ue(e) ? ne(e) : J(e);
              },
              number: ee,
              "float": ee,
              bytes: ne,
              string: function string(e) {
                return ie(e) ? e : j(e);
              },
              "function": function _function(e) {
                return re(e);
              },
              serverapi: function serverapi(e) {
                return ae(e);
              },
              object: function object(e) {
                try {
                  return JSON.parse(pe(e));
                } catch (e) {
                  return null;
                }
              }
            },
            he = function he(e, t) {
              return fe[t](e);
            },
            me = function me(e, t, n) {
              if (e === t) return e;
              var i = ue(e);
              if (i !== n) {
                var r = he(e, n);
                if (i = ue(r), null === r) throw 'Trying to assign value with incorrect type to "' + option + '", allowed type: "' + n + '"';
                e = r;
              }
              return e;
            },
            ge = function ge(e, t) {
              var n = e;
              return {
                enumerable: !0,
                get: function get() {
                  return n;
                },
                set: function set(i) {
                  n = me(i, e, t);
                }
              };
            },
            ve = function ve(e) {
              var t = {};
              return r(e, function (n) {
                var i = e[n];
                t[n] = ge(i[0], i[1]);
              }), o(t);
            },
            be = function be(e) {
              return {
                items: [],
                listUpdateTimeout: null,
                itemUpdateTimeout: null,
                processingQueue: [],
                options: ve(e)
              };
            },
            we = function we(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
              return e.split(/(?=[A-Z])/).map(function (e) {
                return e.toLowerCase();
              }).join(t);
            },
            ye = function ye(e, t) {
              var n = {};
              return r(t, function (t) {
                n[t] = {
                  get: function get() {
                    return e.getState().options[t];
                  },
                  set: function set(n) {
                    e.dispatch("SET_" + we(t, "_").toUpperCase(), {
                      value: n
                    });
                  }
                };
              }), n;
            },
            Ee = function Ee(e) {
              return function (t, n, i) {
                var o = {};
                return r(e, function (e) {
                  var n = we(e, "_").toUpperCase();
                  o["SET_" + n] = function (r) {
                    try {
                      i.options[e] = r.value;
                    } catch (e) {}
                    t("DID_SET_" + n, {
                      value: i.options[e]
                    });
                  };
                }), o;
              };
            },
            _e = function _e(e) {
              return function (t) {
                var n = {};
                return r(e, function (e) {
                  n["GET_" + we(e, "_").toUpperCase()] = function (n) {
                    return t.options[e];
                  };
                }), n;
              };
            },
            Te = {
              API: 1,
              DROP: 2,
              BROWSE: 3,
              PASTE: 4,
              NONE: 5
            },
            De = function De() {
              return Math.random().toString(36).substring(2, 11);
            };
          function Ie(e) {
            this.wrapped = e;
          }
          function Oe(e) {
            var t, n;
            function i(e, i) {
              return new Promise(function (o, a) {
                var s = {
                  key: e,
                  arg: i,
                  resolve: o,
                  reject: a,
                  next: null
                };
                n ? n = n.next = s : (t = n = s, r(e, i));
              });
            }
            function r(t, n) {
              try {
                var i = e[t](n),
                  a = i.value,
                  s = a instanceof Ie;
                Promise.resolve(s ? a.wrapped : a).then(function (e) {
                  s ? r("next", e) : o(i.done ? "return" : "normal", e);
                }, function (e) {
                  r("throw", e);
                });
              } catch (e) {
                o("throw", e);
              }
            }
            function o(e, i) {
              switch (e) {
                case "return":
                  t.resolve({
                    value: i,
                    done: !0
                  });
                  break;
                case "throw":
                  t.reject(i);
                  break;
                default:
                  t.resolve({
                    value: i,
                    done: !1
                  });
              }
              (t = t.next) ? r(t.key, t.arg) : n = null;
            }
            this._invoke = i, "function" != typeof e["return"] && (this["return"] = void 0);
          }
          function ke(e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          }
          function Re(e, t) {
            if (null == e) return {};
            var n,
              i,
              r = ke(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
          }
          function Se(e) {
            return Ce(e) || Ae(e) || Me();
          }
          function Ce(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          }
          function Ae(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
          }
          function Me() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }
          "function" == typeof Symbol && Symbol.asyncIterator && (Oe.prototype[Symbol.asyncIterator] = function () {
            return this;
          }), Oe.prototype.next = function (e) {
            return this._invoke("next", e);
          }, Oe.prototype["throw"] = function (e) {
            return this._invoke("throw", e);
          }, Oe.prototype["return"] = function (e) {
            return this._invoke("return", e);
          };
          var xe = function xe(e, t) {
              return e.splice(t, 1);
            },
            Le = function Le(e, t) {
              t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
            },
            Pe = function Pe() {
              var e = [],
                t = function t(_t9, n) {
                  xe(e, e.findIndex(function (e) {
                    return e.event === _t9 && (e.cb === n || !n);
                  }));
                },
                n = function n(t, _n7, i) {
                  e.filter(function (e) {
                    return e.event === t;
                  }).map(function (e) {
                    return e.cb;
                  }).forEach(function (e) {
                    return Le(function () {
                      return e.apply(void 0, Se(_n7));
                    }, i);
                  });
                };
              return {
                fireSync: function fireSync(e) {
                  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                  n(e, i, !0);
                },
                fire: function fire(e) {
                  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                  n(e, i, !1);
                },
                on: function on(t, n) {
                  e.push({
                    event: t,
                    cb: n
                  });
                },
                onOnce: function onOnce(n, i) {
                  e.push({
                    event: n,
                    cb: function cb() {
                      t(n, i), i.apply(void 0, arguments);
                    }
                  });
                },
                off: t
              };
            },
            Ne = function Ne(e, t, n) {
              Object.getOwnPropertyNames(e).filter(function (e) {
                return !n.includes(e);
              }).forEach(function (n) {
                return Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              });
            },
            Ge = ["fire", "process", "revert", "load", "on", "off", "onOnce", "retryLoad", "extend", "archive", "archived", "release", "released", "requestProcessing", "freeze"],
            $e = function $e(e) {
              var t = {};
              return Ne(e, t, Ge), t;
            },
            Be = function Be(e) {
              e.forEach(function (t, n) {
                t.released && xe(e, n);
              });
            },
            Fe = {
              INIT: 1,
              IDLE: 2,
              PROCESSING_QUEUED: 9,
              PROCESSING: 3,
              PROCESSING_COMPLETE: 5,
              PROCESSING_ERROR: 6,
              PROCESSING_REVERT_ERROR: 10,
              LOADING: 7,
              LOAD_ERROR: 8
            },
            Ve = {
              INPUT: 1,
              LIMBO: 2,
              LOCAL: 3
            },
            Ue = function Ue(e) {
              return /[^0-9]+/.exec(e);
            },
            He = function He() {
              return Ue(1.1.toLocaleString())[0];
            },
            qe = function qe() {
              var e = He(),
                t = 1e3.toLocaleString();
              return t !== 1e3.toString() ? Ue(t)[0] : "." === e ? "," : ".";
            },
            ze = {
              BOOLEAN: "boolean",
              INT: "int",
              NUMBER: "number",
              STRING: "string",
              ARRAY: "array",
              OBJECT: "object",
              FUNCTION: "function",
              ACTION: "action",
              SERVER_API: "serverapi",
              REGEX: "regex"
            },
            Ye = [],
            je = function je(e, t, n) {
              return new Promise(function (i, r) {
                var o = Ye.filter(function (t) {
                  return t.key === e;
                }).map(function (e) {
                  return e.cb;
                });
                if (0 !== o.length) {
                  var a = o.shift();
                  o.reduce(function (e, t) {
                    return e.then(function (e) {
                      return t(e, n);
                    });
                  }, a(t, n)).then(function (e) {
                    return i(e);
                  })["catch"](function (e) {
                    return r(e);
                  });
                } else i(t);
              });
            },
            Xe = function Xe(e, t, n) {
              return Ye.filter(function (t) {
                return t.key === e;
              }).map(function (e) {
                return e.cb(t, n);
              });
            },
            We = function We(e, t) {
              return Ye.push({
                key: e,
                cb: t
              });
            },
            Ke = function Ke(e) {
              return Object.assign(Je, e);
            },
            Qe = function Qe() {
              return Object.assign({}, Je);
            },
            Ze = function Ze(e) {
              r(e, function (e, t) {
                Je[e] && (Je[e][0] = me(t, Je[e][0], Je[e][1]));
              });
            },
            Je = {
              id: [null, ze.STRING],
              name: ["filepond", ze.STRING],
              disabled: [!1, ze.BOOLEAN],
              className: [null, ze.STRING],
              required: [!1, ze.BOOLEAN],
              captureMethod: [null, ze.STRING],
              allowSyncAcceptAttribute: [!0, ze.BOOLEAN],
              allowDrop: [!0, ze.BOOLEAN],
              allowBrowse: [!0, ze.BOOLEAN],
              allowPaste: [!0, ze.BOOLEAN],
              allowMultiple: [!1, ze.BOOLEAN],
              allowReplace: [!0, ze.BOOLEAN],
              allowRevert: [!0, ze.BOOLEAN],
              allowRemove: [!0, ze.BOOLEAN],
              allowProcess: [!0, ze.BOOLEAN],
              allowReorder: [!1, ze.BOOLEAN],
              allowDirectoriesOnly: [!1, ze.BOOLEAN],
              storeAsFile: [!1, ze.BOOLEAN],
              forceRevert: [!1, ze.BOOLEAN],
              maxFiles: [null, ze.INT],
              checkValidity: [!1, ze.BOOLEAN],
              itemInsertLocationFreedom: [!0, ze.BOOLEAN],
              itemInsertLocation: ["before", ze.STRING],
              itemInsertInterval: [75, ze.INT],
              dropOnPage: [!1, ze.BOOLEAN],
              dropOnElement: [!0, ze.BOOLEAN],
              dropValidation: [!1, ze.BOOLEAN],
              ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], ze.ARRAY],
              instantUpload: [!0, ze.BOOLEAN],
              maxParallelUploads: [2, ze.INT],
              allowMinimumUploadDuration: [!0, ze.BOOLEAN],
              chunkUploads: [!1, ze.BOOLEAN],
              chunkForce: [!1, ze.BOOLEAN],
              chunkSize: [5e6, ze.INT],
              chunkRetryDelays: [[500, 1e3, 3e3], ze.ARRAY],
              server: [null, ze.SERVER_API],
              fileSizeBase: [1e3, ze.INT],
              labelFileSizeBytes: ["bytes", ze.STRING],
              labelFileSizeKilobytes: ["KB", ze.STRING],
              labelFileSizeMegabytes: ["MB", ze.STRING],
              labelFileSizeGigabytes: ["GB", ze.STRING],
              labelDecimalSeparator: [He(), ze.STRING],
              labelThousandsSeparator: [qe(), ze.STRING],
              labelIdle: ['Drag & Drop your files or <span class="filepond--label-action">Browse</span>', ze.STRING],
              labelInvalidField: ["Field contains invalid files", ze.STRING],
              labelFileWaitingForSize: ["Waiting for size", ze.STRING],
              labelFileSizeNotAvailable: ["Size not available", ze.STRING],
              labelFileCountSingular: ["file in list", ze.STRING],
              labelFileCountPlural: ["files in list", ze.STRING],
              labelFileLoading: ["Loading", ze.STRING],
              labelFileAdded: ["Added", ze.STRING],
              labelFileLoadError: ["Error during load", ze.STRING],
              labelFileRemoved: ["Removed", ze.STRING],
              labelFileRemoveError: ["Error during remove", ze.STRING],
              labelFileProcessing: ["Uploading", ze.STRING],
              labelFileProcessingComplete: ["Upload complete", ze.STRING],
              labelFileProcessingAborted: ["Upload cancelled", ze.STRING],
              labelFileProcessingError: ["Error during upload", ze.STRING],
              labelFileProcessingRevertError: ["Error during revert", ze.STRING],
              labelTapToCancel: ["tap to cancel", ze.STRING],
              labelTapToRetry: ["tap to retry", ze.STRING],
              labelTapToUndo: ["tap to undo", ze.STRING],
              labelButtonRemoveItem: ["Remove", ze.STRING],
              labelButtonAbortItemLoad: ["Abort", ze.STRING],
              labelButtonRetryItemLoad: ["Retry", ze.STRING],
              labelButtonAbortItemProcessing: ["Cancel", ze.STRING],
              labelButtonUndoItemProcessing: ["Undo", ze.STRING],
              labelButtonRetryItemProcessing: ["Retry", ze.STRING],
              labelButtonProcessItem: ["Upload", ze.STRING],
              iconRemove: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>', ze.STRING],
              iconProcess: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>', ze.STRING],
              iconRetry: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>', ze.STRING],
              iconUndo: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>', ze.STRING],
              iconDone: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>', ze.STRING],
              oninit: [null, ze.FUNCTION],
              onwarning: [null, ze.FUNCTION],
              onerror: [null, ze.FUNCTION],
              onactivatefile: [null, ze.FUNCTION],
              oninitfile: [null, ze.FUNCTION],
              onaddfilestart: [null, ze.FUNCTION],
              onaddfileprogress: [null, ze.FUNCTION],
              onaddfile: [null, ze.FUNCTION],
              onprocessfilestart: [null, ze.FUNCTION],
              onprocessfileprogress: [null, ze.FUNCTION],
              onprocessfileabort: [null, ze.FUNCTION],
              onprocessfilerevert: [null, ze.FUNCTION],
              onprocessfile: [null, ze.FUNCTION],
              onprocessfiles: [null, ze.FUNCTION],
              onremovefile: [null, ze.FUNCTION],
              onpreparefile: [null, ze.FUNCTION],
              onupdatefiles: [null, ze.FUNCTION],
              onreorderfiles: [null, ze.FUNCTION],
              beforeDropFile: [null, ze.FUNCTION],
              beforeAddFile: [null, ze.FUNCTION],
              beforeRemoveFile: [null, ze.FUNCTION],
              beforePrepareFile: [null, ze.FUNCTION],
              stylePanelLayout: [null, ze.STRING],
              stylePanelAspectRatio: [null, ze.STRING],
              styleItemPanelAspectRatio: [null, ze.STRING],
              styleButtonRemoveItemPosition: ["left", ze.STRING],
              styleButtonProcessItemPosition: ["right", ze.STRING],
              styleLoadIndicatorPosition: ["right", ze.STRING],
              styleProgressIndicatorPosition: ["right", ze.STRING],
              styleButtonRemoveItemAlign: [!1, ze.BOOLEAN],
              files: [[], ze.ARRAY],
              credits: [["https://pqina.nl/", "Powered by PQINA"], ze.ARRAY]
            },
            et = function et(e, t) {
              return z(t) ? e[0] || null : te(t) ? e[t] || null : ("object" == _typeof(t) && (t = t.id), e.find(function (e) {
                return e.id === t;
              }) || null);
            },
            tt = function tt(e) {
              if (z(e)) return e;
              if (/:/.test(e)) {
                var t = e.split(":");
                return t[1] / t[0];
              }
              return parseFloat(e);
            },
            nt = function nt(e) {
              return e.filter(function (e) {
                return !e.archived;
              });
            },
            it = {
              EMPTY: 0,
              IDLE: 1,
              ERROR: 2,
              BUSY: 3,
              READY: 4
            },
            rt = null,
            ot = function ot() {
              if (null === rt) try {
                var e = new DataTransfer();
                e.items.add(new File(["hello world"], "This_Works.txt"));
                var t = document.createElement("input");
                t.setAttribute("type", "file"), t.files = e.files, rt = 1 === t.files.length;
              } catch (e) {
                rt = !1;
              }
              return rt;
            },
            at = [Fe.LOAD_ERROR, Fe.PROCESSING_ERROR, Fe.PROCESSING_REVERT_ERROR],
            st = [Fe.LOADING, Fe.PROCESSING, Fe.PROCESSING_QUEUED, Fe.INIT],
            lt = [Fe.PROCESSING_COMPLETE],
            ct = function ct(e) {
              return at.includes(e.status);
            },
            dt = function dt(e) {
              return st.includes(e.status);
            },
            ut = function ut(e) {
              return lt.includes(e.status);
            },
            pt = function pt(e) {
              return ce(e.options.server) && (ce(e.options.server.process) || ie(e.options.server.process));
            },
            ft = function ft(e) {
              return {
                GET_STATUS: function GET_STATUS() {
                  var t = nt(e.items),
                    n = it.EMPTY,
                    i = it.ERROR,
                    r = it.BUSY,
                    o = it.IDLE,
                    a = it.READY;
                  return 0 === t.length ? n : t.some(ct) ? i : t.some(dt) ? r : t.some(ut) ? a : o;
                },
                GET_ITEM: function GET_ITEM(t) {
                  return et(e.items, t);
                },
                GET_ACTIVE_ITEM: function GET_ACTIVE_ITEM(t) {
                  return et(nt(e.items), t);
                },
                GET_ACTIVE_ITEMS: function GET_ACTIVE_ITEMS() {
                  return nt(e.items);
                },
                GET_ITEMS: function GET_ITEMS() {
                  return e.items;
                },
                GET_ITEM_NAME: function GET_ITEM_NAME(t) {
                  var n = et(e.items, t);
                  return n ? n.filename : null;
                },
                GET_ITEM_SIZE: function GET_ITEM_SIZE(t) {
                  var n = et(e.items, t);
                  return n ? n.fileSize : null;
                },
                GET_STYLES: function GET_STYLES() {
                  return Object.keys(e.options).filter(function (e) {
                    return /^style/.test(e);
                  }).map(function (t) {
                    return {
                      name: t,
                      value: e.options[t]
                    };
                  });
                },
                GET_PANEL_ASPECT_RATIO: function GET_PANEL_ASPECT_RATIO() {
                  return /circle/.test(e.options.stylePanelLayout) ? 1 : tt(e.options.stylePanelAspectRatio);
                },
                GET_ITEM_PANEL_ASPECT_RATIO: function GET_ITEM_PANEL_ASPECT_RATIO() {
                  return e.options.styleItemPanelAspectRatio;
                },
                GET_ITEMS_BY_STATUS: function GET_ITEMS_BY_STATUS(t) {
                  return nt(e.items).filter(function (e) {
                    return e.status === t;
                  });
                },
                GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
                  return nt(e.items).length;
                },
                SHOULD_UPDATE_FILE_INPUT: function SHOULD_UPDATE_FILE_INPUT() {
                  return e.options.storeAsFile && ot() && !pt(e);
                },
                IS_ASYNC: function IS_ASYNC() {
                  return pt(e);
                },
                GET_FILE_SIZE_LABELS: function GET_FILE_SIZE_LABELS(e) {
                  return {
                    labelBytes: e("GET_LABEL_FILE_SIZE_BYTES") || void 0,
                    labelKilobytes: e("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
                    labelMegabytes: e("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
                    labelGigabytes: e("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
                  };
                }
              };
            },
            ht = function ht(e) {
              var t = nt(e.items).length;
              if (!e.options.allowMultiple) return 0 === t;
              var n = e.options.maxFiles;
              return null === n || t < n;
            },
            mt = function mt(e, t, n) {
              return Math.max(Math.min(n, e), t);
            },
            gt = function gt(e, t, n) {
              return e.splice(t, 0, n);
            },
            vt = function vt(e, t, n) {
              return z(t) ? null : void 0 === n ? (e.push(t), t) : (n = mt(n, 0, e.length), gt(e, n, t), t);
            },
            bt = function bt(e) {
              return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e);
            },
            wt = function wt(e) {
              return e.split("/").pop().split("?").shift();
            },
            yt = function yt(e) {
              return e.split(".").pop();
            },
            Et = function Et(e) {
              if ("string" != typeof e) return "";
              var t = e.split("/").pop();
              return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? "jpeg" === t ? "jpg" : t : "";
            },
            _t = function _t(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              return (t + e).slice(-t.length);
            },
            Tt = function Tt() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
              return e.getFullYear() + "-" + _t(e.getMonth() + 1, "00") + "-" + _t(e.getDate(), "00") + "_" + _t(e.getHours(), "00") + "-" + _t(e.getMinutes(), "00") + "-" + _t(e.getSeconds(), "00");
            },
            Dt = function Dt(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = "string" == typeof n ? e.slice(0, e.size, n) : e.slice(0, e.size, e.type);
              return r.lastModifiedDate = new Date(), e._relativePath && (r._relativePath = e._relativePath), Q(t) || (t = Tt()), t && null === i && yt(t) ? r.name = t : (i = i || Et(r.type), r.name = t + (i ? "." + i : "")), r;
            },
            It = function It() {
              return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            },
            Ot = function Ot(e, t) {
              var n = It();
              if (n) {
                var i = new n();
                return i.append(e), i.getBlob(t);
              }
              return new Blob([e], {
                type: t
              });
            },
            kt = function kt(e, t) {
              for (var n = new ArrayBuffer(e.length), i = new Uint8Array(n), r = 0; r < e.length; r++) i[r] = e.charCodeAt(r);
              return Ot(n, t);
            },
            Rt = function Rt(e) {
              return (/^data:(.+);/.exec(e) || [])[1] || null;
            },
            St = function St(e) {
              return e.split(",")[1].replace(/\s/g, "");
            },
            Ct = function Ct(e) {
              return atob(St(e));
            },
            At = function At(e) {
              var t = Rt(e),
                n = Ct(e);
              return kt(n, t);
            },
            Mt = function Mt(e, t, n) {
              return Dt(At(e), t, null, n);
            },
            xt = function xt(e) {
              if (!/^content-disposition:/i.test(e)) return null;
              var t = e.split(/filename=|filename\*=.+''/).splice(1).map(function (e) {
                return e.trim().replace(/^["']|[;"']{0,2}$/g, "");
              }).filter(function (e) {
                return e.length;
              });
              return t.length ? decodeURI(t[t.length - 1]) : null;
            },
            Lt = function Lt(e) {
              if (/content-length:/i.test(e)) {
                var t = e.match(/[0-9]+/)[0];
                return t ? parseInt(t, 10) : null;
              }
              return null;
            },
            Pt = function Pt(e) {
              return /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null;
            },
            Nt = function Nt(e) {
              var t = {
                  source: null,
                  name: null,
                  size: null
                },
                n = e.split("\n"),
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (var a, s = n[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                  var l = a.value,
                    c = xt(l);
                  if (c) t.name = c;else {
                    var d = Lt(l);
                    if (d) t.size = d;else {
                      var u = Pt(l);
                      u && (t.source = u);
                    }
                  }
                }
              } catch (e) {
                r = !0, o = e;
              } finally {
                try {
                  i || null == s["return"] || s["return"]();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            },
            Gt = function Gt(e) {
              var t = {
                  source: null,
                  complete: !1,
                  progress: 0,
                  size: null,
                  timestamp: null,
                  duration: 0,
                  request: null
                },
                n = function n() {
                  return t.progress;
                },
                i = function i() {
                  t.request && t.request.abort && t.request.abort();
                },
                r = function r() {
                  var e = t.source;
                  a.fire("init", e), e instanceof File ? a.fire("load", e) : e instanceof Blob ? a.fire("load", Dt(e, e.name)) : bt(e) ? a.fire("load", Mt(e)) : o(e);
                },
                o = function o(n) {
                  e ? (t.timestamp = Date.now(), t.request = e(n, function (e) {
                    t.duration = Date.now() - t.timestamp, t.complete = !0, e instanceof Blob && (e = Dt(e, e.name || wt(n))), a.fire("load", e instanceof Blob ? e : e ? e.body : null);
                  }, function (e) {
                    a.fire("error", "string" == typeof e ? {
                      type: "error",
                      code: 0,
                      body: e
                    } : e);
                  }, function (e, n, i) {
                    i && (t.size = i), t.duration = Date.now() - t.timestamp, e ? (t.progress = n / i, a.fire("progress", t.progress)) : t.progress = null;
                  }, function () {
                    a.fire("abort");
                  }, function (e) {
                    var n = Nt("string" == typeof e ? e : e.headers);
                    a.fire("meta", {
                      size: t.size || n.size,
                      filename: n.name,
                      source: n.source
                    });
                  })) : a.fire("error", {
                    type: "error",
                    body: "Can't load URL",
                    code: 400
                  });
                },
                a = Object.assign({}, Pe(), {
                  setSource: function setSource(e) {
                    return t.source = e;
                  },
                  getProgress: n,
                  abort: i,
                  load: r
                });
              return a;
            },
            $t = function $t(e) {
              return /GET|HEAD/.test(e);
            },
            Bt = function Bt(e, t, n) {
              var i = {
                  onheaders: function onheaders() {},
                  onprogress: function onprogress() {},
                  onload: function onload() {},
                  ontimeout: function ontimeout() {},
                  onerror: function onerror() {},
                  onabort: function onabort() {},
                  abort: function abort() {
                    r = !0, a.abort();
                  }
                },
                r = !1,
                o = !1;
              n = Object.assign({
                method: "POST",
                headers: {},
                withCredentials: !1
              }, n), t = encodeURI(t), $t(n.method) && e && (t = "" + t + encodeURIComponent("string" == typeof e ? e : JSON.stringify(e)));
              var a = new XMLHttpRequest();
              return ($t(n.method) ? a : a.upload).onprogress = function (e) {
                r || i.onprogress(e.lengthComputable, e.loaded, e.total);
              }, a.onreadystatechange = function () {
                a.readyState < 2 || 4 === a.readyState && 0 === a.status || o || (o = !0, i.onheaders(a));
              }, a.onload = function () {
                a.status >= 200 && a.status < 300 ? i.onload(a) : i.onerror(a);
              }, a.onerror = function () {
                return i.onerror(a);
              }, a.onabort = function () {
                r = !0, i.onabort();
              }, a.ontimeout = function () {
                return i.ontimeout(a);
              }, a.open(n.method, t, !0), te(n.timeout) && (a.timeout = n.timeout), Object.keys(n.headers).forEach(function (e) {
                var t = unescape(encodeURIComponent(n.headers[e]));
                a.setRequestHeader(e, t);
              }), n.responseType && (a.responseType = n.responseType), n.withCredentials && (a.withCredentials = !0), a.send(e), i;
            },
            Ft = function Ft(e, t, n, i) {
              return {
                type: e,
                code: t,
                body: n,
                headers: i
              };
            },
            Vt = function Vt(e) {
              return function (t) {
                e(Ft("error", 0, "Timeout", t.getAllResponseHeaders()));
              };
            },
            Ut = function Ut(e) {
              return /\?/.test(e);
            },
            Ht = function Ht() {
              for (var e = "", t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
              return n.forEach(function (t) {
                e += Ut(e) && Ut(t) ? t.replace(/\?/, "&") : t;
              }), e;
            },
            qt = function qt() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
              if ("function" == typeof t) return t;
              if (!t || !Q(t.url)) return null;
              var n = t.onload || function (e) {
                  return e;
                },
                i = t.onerror || function (e) {
                  return null;
                };
              return function (r, o, a, s, l, c) {
                var d = Bt(r, Ht(e, t.url), Object.assign({}, t, {
                  responseType: "blob"
                }));
                return d.onload = function (e) {
                  var i = e.getAllResponseHeaders(),
                    a = Nt(i).name || wt(r);
                  o(Ft("load", e.status, "HEAD" === t.method ? null : Dt(n(e.response), a), i));
                }, d.onerror = function (e) {
                  a(Ft("error", e.status, i(e.response) || e.statusText, e.getAllResponseHeaders()));
                }, d.onheaders = function (e) {
                  c(Ft("headers", e.status, null, e.getAllResponseHeaders()));
                }, d.ontimeout = Vt(a), d.onprogress = s, d.onabort = l, d;
              };
            },
            zt = {
              QUEUED: 0,
              COMPLETE: 1,
              PROCESSING: 2,
              ERROR: 3,
              WAITING: 4
            },
            Yt = function Yt(e, t, n, i, r, o, a, s, l, c, d) {
              for (var u = [], p = d.chunkTransferId, f = d.chunkServer, h = d.chunkSize, m = d.chunkRetryDelays, g = {
                  serverId: p,
                  aborted: !1
                }, v = t.ondata || function (e) {
                  return e;
                }, b = t.onload || function (e, t) {
                  return "HEAD" === t ? e.getResponseHeader("Upload-Offset") : e.response;
                }, w = t.onerror || function (e) {
                  return null;
                }, y = function y(o) {
                  var s = new FormData();
                  ce(r) && s.append(n, JSON.stringify(r));
                  var l = "function" == typeof t.headers ? t.headers(i, r) : Object.assign({}, t.headers, {
                      "Upload-Length": i.size
                    }),
                    c = Object.assign({}, t, {
                      headers: l
                    }),
                    d = Bt(v(s), Ht(e, t.url), c);
                  d.onload = function (e) {
                    return o(b(e, c.method));
                  }, d.onerror = function (e) {
                    return a(Ft("error", e.status, w(e.response) || e.statusText, e.getAllResponseHeaders()));
                  }, d.ontimeout = Vt(a);
                }, E = function E(n) {
                  var i = Ht(e, f.url, g.serverId),
                    r = {
                      headers: "function" == typeof t.headers ? t.headers(g.serverId) : Object.assign({}, t.headers),
                      method: "HEAD"
                    },
                    o = Bt(null, i, r);
                  o.onload = function (e) {
                    return n(b(e, r.method));
                  }, o.onerror = function (e) {
                    return a(Ft("error", e.status, w(e.response) || e.statusText, e.getAllResponseHeaders()));
                  }, o.ontimeout = Vt(a);
                }, _ = Math.floor(i.size / h), T = 0; T <= _; T++) {
                var D = T * h,
                  I = i.slice(D, D + h, "application/offset+octet-stream");
                u[T] = {
                  index: T,
                  size: I.size,
                  offset: D,
                  data: I,
                  file: i,
                  progress: 0,
                  retries: Se(m),
                  status: zt.QUEUED,
                  error: null,
                  request: null,
                  timeout: null
                };
              }
              var O = function O() {
                  return o(g.serverId);
                },
                k = function k(e) {
                  return e.status === zt.QUEUED || e.status === zt.ERROR;
                },
                R = function R(t) {
                  if (!g.aborted) if (t = t || u.find(k)) {
                    t.status = zt.PROCESSING, t.progress = null;
                    var n = f.ondata || function (e) {
                        return e;
                      },
                      r = f.onerror || function (e) {
                        return null;
                      },
                      o = Ht(e, f.url, g.serverId),
                      s = "function" == typeof f.headers ? f.headers(t) : Object.assign({}, f.headers, {
                        "Content-Type": "application/offset+octet-stream",
                        "Upload-Offset": t.offset,
                        "Upload-Length": i.size,
                        "Upload-Name": i.name
                      }),
                      c = t.request = Bt(n(t.data), o, Object.assign({}, f, {
                        headers: s
                      }));
                    c.onload = function () {
                      t.status = zt.COMPLETE, t.request = null, A();
                    }, c.onprogress = function (e, n, i) {
                      t.progress = e ? n : null, C();
                    }, c.onerror = function (e) {
                      t.status = zt.ERROR, t.request = null, t.error = r(e.response) || e.statusText, S(t) || a(Ft("error", e.status, r(e.response) || e.statusText, e.getAllResponseHeaders()));
                    }, c.ontimeout = function (e) {
                      t.status = zt.ERROR, t.request = null, S(t) || Vt(a)(e);
                    }, c.onabort = function () {
                      t.status = zt.QUEUED, t.request = null, l();
                    };
                  } else u.every(function (e) {
                    return e.status === zt.COMPLETE;
                  }) && O();
                },
                S = function S(e) {
                  return 0 !== e.retries.length && (e.status = zt.WAITING, clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                    R(e);
                  }, e.retries.shift()), !0);
                },
                C = function C() {
                  var e = u.reduce(function (e, t) {
                    return null === e || null === t.progress ? null : e + t.progress;
                  }, 0);
                  if (null === e) return s(!1, 0, 0);
                  var t = u.reduce(function (e, t) {
                    return e + t.size;
                  }, 0);
                  s(!0, e, t);
                },
                A = function A() {
                  u.filter(function (e) {
                    return e.status === zt.PROCESSING;
                  }).length >= 1 || R();
                },
                M = function M() {
                  u.forEach(function (e) {
                    clearTimeout(e.timeout), e.request && e.request.abort();
                  });
                };
              return g.serverId ? E(function (e) {
                g.aborted || (u.filter(function (t) {
                  return t.offset < e;
                }).forEach(function (e) {
                  e.status = zt.COMPLETE, e.progress = e.size;
                }), A());
              }) : y(function (e) {
                g.aborted || (c(e), g.serverId = e, A());
              }), {
                abort: function abort() {
                  g.aborted = !0, M();
                }
              };
            },
            jt = function jt(e, t, n, i) {
              return function (r, o, a, s, l, c, d) {
                if (r) {
                  var u = i.chunkUploads,
                    p = u && r.size > i.chunkSize,
                    f = u && (p || i.chunkForce);
                  if (r instanceof Blob && f) return Yt(e, t, n, r, o, a, s, l, c, d, i);
                  var h = t.ondata || function (e) {
                      return e;
                    },
                    m = t.onload || function (e) {
                      return e;
                    },
                    g = t.onerror || function (e) {
                      return null;
                    },
                    v = "function" == typeof t.headers ? t.headers(r, o) || {} : Object.assign({}, t.headers),
                    b = Object.assign({}, t, {
                      headers: v
                    }),
                    w = new FormData();
                  ce(o) && w.append(n, JSON.stringify(o)), (r instanceof Blob ? [{
                    name: null,
                    file: r
                  }] : r).forEach(function (e) {
                    w.append(n, e.file, null === e.name ? e.file.name : "" + e.name + e.file.name);
                  });
                  var y = Bt(h(w), Ht(e, t.url), b);
                  return y.onload = function (e) {
                    a(Ft("load", e.status, m(e.response), e.getAllResponseHeaders()));
                  }, y.onerror = function (e) {
                    s(Ft("error", e.status, g(e.response) || e.statusText, e.getAllResponseHeaders()));
                  }, y.ontimeout = Vt(s), y.onprogress = l, y.onabort = c, y;
                }
              };
            },
            Xt = function Xt() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 ? arguments[3] : void 0;
              return "function" == typeof t ? function () {
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                return t.apply(void 0, [n].concat(r, [i]));
              } : t && Q(t.url) ? jt(e, t, n, i) : null;
            },
            Wt = function Wt() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
              if ("function" == typeof t) return t;
              if (!t || !Q(t.url)) return function (e, t) {
                return t();
              };
              var n = t.onload || function (e) {
                  return e;
                },
                i = t.onerror || function (e) {
                  return null;
                };
              return function (r, o, a) {
                var s = Bt(r, e + t.url, t);
                return s.onload = function (e) {
                  o(Ft("load", e.status, n(e.response), e.getAllResponseHeaders()));
                }, s.onerror = function (e) {
                  a(Ft("error", e.status, i(e.response) || e.statusText, e.getAllResponseHeaders()));
                }, s.ontimeout = Vt(a), s;
              };
            },
            Kt = function Kt() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
              return e + Math.random() * (t - e);
            },
            Qt = function Qt(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                r = null,
                o = Date.now();
              return t > 0 && function a() {
                var s = Date.now() - o,
                  l = Kt(n, i);
                s + l > t && (l = s + l - t);
                var c = s / t;
                c >= 1 || document.hidden ? e(1) : (e(c), r = setTimeout(a, l));
              }(), {
                clear: function clear() {
                  clearTimeout(r);
                }
              };
            },
            Zt = function Zt(e, t) {
              var n = {
                  complete: !1,
                  perceivedProgress: 0,
                  perceivedPerformanceUpdater: null,
                  progress: null,
                  timestamp: null,
                  perceivedDuration: 0,
                  duration: 0,
                  request: null,
                  response: null
                },
                i = t.allowMinimumUploadDuration,
                r = function r(t, _r3) {
                  var o = function o() {
                      0 !== n.duration && null !== n.progress && c.fire("progress", c.getProgress());
                    },
                    a = function a() {
                      n.complete = !0, c.fire("load-perceived", n.response.body);
                    };
                  c.fire("start"), n.timestamp = Date.now(), n.perceivedPerformanceUpdater = Qt(function (e) {
                    n.perceivedProgress = e, n.perceivedDuration = Date.now() - n.timestamp, o(), n.response && 1 === n.perceivedProgress && !n.complete && a();
                  }, i ? Kt(750, 1500) : 0), n.request = e(t, _r3, function (e) {
                    n.response = ce(e) ? e : {
                      type: "load",
                      code: 200,
                      body: "" + e,
                      headers: {}
                    }, n.duration = Date.now() - n.timestamp, n.progress = 1, c.fire("load", n.response.body), (!i || i && 1 === n.perceivedProgress) && a();
                  }, function (e) {
                    n.perceivedPerformanceUpdater.clear(), c.fire("error", ce(e) ? e : {
                      type: "error",
                      code: 0,
                      body: "" + e
                    });
                  }, function (e, t, i) {
                    n.duration = Date.now() - n.timestamp, n.progress = e ? t / i : null, o();
                  }, function () {
                    n.perceivedPerformanceUpdater.clear(), c.fire("abort", n.response ? n.response.body : null);
                  }, function (e) {
                    c.fire("transfer", e);
                  });
                },
                o = function o() {
                  n.request && (n.perceivedPerformanceUpdater.clear(), n.request.abort && n.request.abort(), n.complete = !0);
                },
                a = function a() {
                  o(), n.complete = !1, n.perceivedProgress = 0, n.progress = 0, n.timestamp = null, n.perceivedDuration = 0, n.duration = 0, n.request = null, n.response = null;
                },
                s = i ? function () {
                  return n.progress ? Math.min(n.progress, n.perceivedProgress) : null;
                } : function () {
                  return n.progress || null;
                },
                l = i ? function () {
                  return Math.min(n.duration, n.perceivedDuration);
                } : function () {
                  return n.duration;
                },
                c = Object.assign({}, Pe(), {
                  process: r,
                  abort: o,
                  getProgress: s,
                  getDuration: l,
                  reset: a
                });
              return c;
            },
            Jt = function Jt(e) {
              return e.substring(0, e.lastIndexOf(".")) || e;
            },
            en = function en(e) {
              var t = [e.name, e.size, e.type];
              return e instanceof Blob || bt(e) ? t[0] = e.name || Tt() : bt(e) ? (t[1] = e.length, t[2] = Rt(e)) : Q(e) && (t[0] = wt(e), t[1] = 0, t[2] = "application/octet-stream"), {
                name: t[0],
                size: t[1],
                type: t[2]
              };
            },
            tn = function tn(e) {
              return !!(e instanceof File || e instanceof Blob && e.name);
            },
            nn = function e(t) {
              if (!ce(t)) return t;
              var n = q(t) ? [] : {};
              for (var i in t) if (t.hasOwnProperty(i)) {
                var r = t[i];
                n[i] = r && ce(r) ? e(r) : r;
              }
              return n;
            },
            rn = function rn() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = De(),
                r = {
                  archived: !1,
                  frozen: !1,
                  released: !1,
                  source: null,
                  file: n,
                  serverFileReference: t,
                  transferId: null,
                  processingAborted: !1,
                  status: t ? Fe.PROCESSING_COMPLETE : Fe.INIT,
                  activeLoader: null,
                  activeProcessor: null
                },
                a = null,
                s = {},
                l = function l(e) {
                  return r.status = e;
                },
                c = function c(e) {
                  if (!r.released && !r.frozen) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    T.fire.apply(T, [e].concat(n));
                  }
                },
                d = function d() {
                  return yt(r.file.name);
                },
                u = function u() {
                  return r.file.type;
                },
                p = function p() {
                  return r.file.size;
                },
                f = function f() {
                  return r.file;
                },
                h = function h(t, n, i) {
                  r.source = t, T.fireSync("init"), r.file ? T.fireSync("load-skip") : (r.file = en(t), n.on("init", function () {
                    c("load-init");
                  }), n.on("meta", function (t) {
                    r.file.size = t.size, r.file.filename = t.filename, t.source && (e = Ve.LIMBO, r.serverFileReference = t.source, r.status = Fe.PROCESSING_COMPLETE), c("load-meta");
                  }), n.on("progress", function (e) {
                    l(Fe.LOADING), c("load-progress", e);
                  }), n.on("error", function (e) {
                    l(Fe.LOAD_ERROR), c("load-request-error", e);
                  }), n.on("abort", function () {
                    l(Fe.INIT), c("load-abort");
                  }), n.on("load", function (t) {
                    r.activeLoader = null;
                    var n = function n(t) {
                        r.file = tn(t) ? t : r.file, e === Ve.LIMBO && r.serverFileReference ? l(Fe.PROCESSING_COMPLETE) : l(Fe.IDLE), c("load");
                      },
                      o = function o(e) {
                        r.file = t, c("load-meta"), l(Fe.LOAD_ERROR), c("load-file-error", e);
                      };
                    r.serverFileReference ? n(t) : i(t, n, o);
                  }), n.setSource(t), r.activeLoader = n, n.load());
                },
                m = function m() {
                  r.activeLoader && r.activeLoader.load();
                },
                g = function g() {
                  r.activeLoader ? r.activeLoader.abort() : (l(Fe.INIT), c("load-abort"));
                },
                v = function e(t, n) {
                  if (r.processingAborted) r.processingAborted = !1;else if (l(Fe.PROCESSING), a = null, r.file instanceof Blob) {
                    t.on("load", function (e) {
                      r.transferId = null, r.serverFileReference = e;
                    }), t.on("transfer", function (e) {
                      r.transferId = e;
                    }), t.on("load-perceived", function (e) {
                      r.activeProcessor = null, r.transferId = null, r.serverFileReference = e, l(Fe.PROCESSING_COMPLETE), c("process-complete", e);
                    }), t.on("start", function () {
                      c("process-start");
                    }), t.on("error", function (e) {
                      r.activeProcessor = null, l(Fe.PROCESSING_ERROR), c("process-error", e);
                    }), t.on("abort", function (e) {
                      r.activeProcessor = null, r.serverFileReference = e, l(Fe.IDLE), c("process-abort"), a && a();
                    }), t.on("progress", function (e) {
                      c("process-progress", e);
                    });
                    var i = function i(e) {
                        r.archived || t.process(e, Object.assign({}, s));
                      },
                      o = console.error;
                    n(r.file, i, o), r.activeProcessor = t;
                  } else T.on("load", function () {
                    e(t, n);
                  });
                },
                b = function b() {
                  r.processingAborted = !1, l(Fe.PROCESSING_QUEUED);
                },
                w = function w() {
                  return new Promise(function (e) {
                    if (!r.activeProcessor) return r.processingAborted = !0, l(Fe.IDLE), c("process-abort"), void e();
                    a = function a() {
                      e();
                    }, r.activeProcessor.abort();
                  });
                },
                y = function y(e, t) {
                  return new Promise(function (n, i) {
                    var o = null !== r.serverFileReference ? r.serverFileReference : r.transferId;
                    null !== o ? (e(o, function () {
                      r.serverFileReference = null, r.transferId = null, n();
                    }, function (e) {
                      t ? (l(Fe.PROCESSING_REVERT_ERROR), c("process-revert-error"), i(e)) : n();
                    }), l(Fe.IDLE), c("process-revert")) : n();
                  });
                },
                E = function E(e, t, n) {
                  var i = e.split("."),
                    r = i[0],
                    o = i.pop(),
                    a = s;
                  i.forEach(function (e) {
                    return a = a[e];
                  }), JSON.stringify(a[o]) !== JSON.stringify(t) && (a[o] = t, c("metadata-update", {
                    key: r,
                    value: s[r],
                    silent: n
                  }));
                },
                _ = function _(e) {
                  return nn(e ? s[e] : s);
                },
                T = Object.assign({
                  id: {
                    get: function get() {
                      return i;
                    }
                  },
                  origin: {
                    get: function get() {
                      return e;
                    },
                    set: function set(t) {
                      return e = t;
                    }
                  },
                  serverId: {
                    get: function get() {
                      return r.serverFileReference;
                    }
                  },
                  transferId: {
                    get: function get() {
                      return r.transferId;
                    }
                  },
                  status: {
                    get: function get() {
                      return r.status;
                    }
                  },
                  filename: {
                    get: function get() {
                      return r.file.name;
                    }
                  },
                  filenameWithoutExtension: {
                    get: function get() {
                      return Jt(r.file.name);
                    }
                  },
                  fileExtension: {
                    get: d
                  },
                  fileType: {
                    get: u
                  },
                  fileSize: {
                    get: p
                  },
                  file: {
                    get: f
                  },
                  relativePath: {
                    get: function get() {
                      return r.file._relativePath;
                    }
                  },
                  source: {
                    get: function get() {
                      return r.source;
                    }
                  },
                  getMetadata: _,
                  setMetadata: function setMetadata(e, t, n) {
                    if (ce(e)) {
                      var i = e;
                      return Object.keys(i).forEach(function (e) {
                        E(e, i[e], t);
                      }), e;
                    }
                    return E(e, t, n), t;
                  },
                  extend: function extend(e, t) {
                    return D[e] = t;
                  },
                  abortLoad: g,
                  retryLoad: m,
                  requestProcessing: b,
                  abortProcessing: w,
                  load: h,
                  process: v,
                  revert: y
                }, Pe(), {
                  freeze: function freeze() {
                    return r.frozen = !0;
                  },
                  release: function release() {
                    return r.released = !0;
                  },
                  released: {
                    get: function get() {
                      return r.released;
                    }
                  },
                  archive: function archive() {
                    return r.archived = !0;
                  },
                  archived: {
                    get: function get() {
                      return r.archived;
                    }
                  }
                }),
                D = o(T);
              return D;
            },
            on = function on(e, t) {
              return z(t) ? 0 : Q(t) ? e.findIndex(function (e) {
                return e.id === t;
              }) : -1;
            },
            an = function an(e, t) {
              var n = on(e, t);
              if (!(n < 0)) return e[n] || null;
            },
            sn = function sn(e, t, n, i, r, o) {
              var a = Bt(null, e, {
                method: "GET",
                responseType: "blob"
              });
              return a.onload = function (n) {
                var i = n.getAllResponseHeaders(),
                  r = Nt(i).name || wt(e);
                t(Ft("load", n.status, Dt(n.response, r), i));
              }, a.onerror = function (e) {
                n(Ft("error", e.status, e.statusText, e.getAllResponseHeaders()));
              }, a.onheaders = function (e) {
                o(Ft("headers", e.status, null, e.getAllResponseHeaders()));
              }, a.ontimeout = Vt(n), a.onprogress = i, a.onabort = r, a;
            },
            ln = function ln(e) {
              return 0 === e.indexOf("//") && (e = location.protocol + e), e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0];
            },
            cn = function cn(e) {
              return (e.indexOf(":") > -1 || e.indexOf("//") > -1) && ln(location.href) !== ln(e);
            },
            dn = function dn(e) {
              return function () {
                return ie(e) ? e.apply(void 0, arguments) : e;
              };
            },
            un = function un(e) {
              return !tn(e.file);
            },
            pn = function pn(e, t) {
              clearTimeout(t.listUpdateTimeout), t.listUpdateTimeout = setTimeout(function () {
                e("DID_UPDATE_ITEMS", {
                  items: nt(t.items)
                });
              }, 0);
            },
            fn = function fn(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
              return new Promise(function (t) {
                if (!e) return t(!0);
                var i = e.apply(void 0, n);
                return null == i ? t(!0) : "boolean" == typeof i ? t(i) : void ("function" == typeof i.then && i.then(t));
              });
            },
            hn = function hn(e, t) {
              e.items.sort(function (e, n) {
                return t($e(e), $e(n));
              });
            },
            mn = function mn(e, t) {
              return function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  i = n.query,
                  r = n.success,
                  o = void 0 === r ? function () {} : r,
                  a = n.failure,
                  s = void 0 === a ? function () {} : a,
                  l = Re(n, ["query", "success", "failure"]),
                  c = et(e.items, i);
                c ? t(c, o, s, l || {}) : s({
                  error: Ft("error", 0, "Item not found"),
                  file: null
                });
              };
            },
            gn = function gn(e, t, n) {
              return {
                ABORT_ALL: function ABORT_ALL() {
                  nt(n.items).forEach(function (e) {
                    e.freeze(), e.abortLoad(), e.abortProcessing();
                  });
                },
                DID_SET_FILES: function DID_SET_FILES(t) {
                  var i = t.value,
                    r = (void 0 === i ? [] : i).map(function (e) {
                      return {
                        source: e.source ? e.source : e,
                        options: e.options
                      };
                    }),
                    o = nt(n.items);
                  o.forEach(function (t) {
                    r.find(function (e) {
                      return e.source === t.source || e.source === t.file;
                    }) || e("REMOVE_ITEM", {
                      query: t,
                      remove: !1
                    });
                  }), o = nt(n.items), r.forEach(function (t, n) {
                    o.find(function (e) {
                      return e.source === t.source || e.file === t.source;
                    }) || e("ADD_ITEM", Object.assign({}, t, {
                      interactionMethod: Te.NONE,
                      index: n
                    }));
                  });
                },
                DID_UPDATE_ITEM_METADATA: function DID_UPDATE_ITEM_METADATA(i) {
                  var r = i.id,
                    o = i.action,
                    a = i.change;
                  a.silent || (clearTimeout(n.itemUpdateTimeout), n.itemUpdateTimeout = setTimeout(function () {
                    var i = an(n.items, r);
                    if (t("IS_ASYNC")) {
                      i.origin === Ve.LOCAL && e("DID_LOAD_ITEM", {
                        id: i.id,
                        error: null,
                        serverFileReference: i.source
                      });
                      var s = function s() {
                          setTimeout(function () {
                            e("REQUEST_ITEM_PROCESSING", {
                              query: r
                            });
                          }, 32);
                        },
                        l = function l(e) {
                          i.revert(Wt(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(e ? s : function () {})["catch"](function () {});
                        },
                        c = function c(e) {
                          i.abortProcessing().then(e ? s : function () {});
                        };
                      return i.status === Fe.PROCESSING_COMPLETE ? l(n.options.instantUpload) : i.status === Fe.PROCESSING ? c(n.options.instantUpload) : void (n.options.instantUpload && s());
                    }
                    je("SHOULD_PREPARE_OUTPUT", !1, {
                      item: i,
                      query: t,
                      action: o,
                      change: a
                    }).then(function (n) {
                      var o = t("GET_BEFORE_PREPARE_FILE");
                      o && (n = o(i, n)), n && e("REQUEST_PREPARE_OUTPUT", {
                        query: r,
                        item: i,
                        success: function success(t) {
                          e("DID_PREPARE_OUTPUT", {
                            id: r,
                            file: t
                          });
                        }
                      }, !0);
                    });
                  }, 0));
                },
                MOVE_ITEM: function MOVE_ITEM(e) {
                  var t = e.query,
                    i = e.index,
                    r = et(n.items, t);
                  if (r) {
                    var o = n.items.indexOf(r);
                    o !== (i = mt(i, 0, n.items.length - 1)) && n.items.splice(i, 0, n.items.splice(o, 1)[0]);
                  }
                },
                SORT: function SORT(i) {
                  var r = i.compare;
                  hn(n, r), e("DID_SORT_ITEMS", {
                    items: t("GET_ACTIVE_ITEMS")
                  });
                },
                ADD_ITEMS: function ADD_ITEMS(n) {
                  var i = n.items,
                    r = n.index,
                    o = n.interactionMethod,
                    a = n.success,
                    s = void 0 === a ? function () {} : a,
                    l = n.failure,
                    c = void 0 === l ? function () {} : l,
                    d = r;
                  if (-1 === r || void 0 === r) {
                    var u = t("GET_ITEM_INSERT_LOCATION"),
                      p = t("GET_TOTAL_ITEMS");
                    d = "before" === u ? 0 : p;
                  }
                  var f = t("GET_IGNORED_FILES"),
                    h = function h(e) {
                      return tn(e) ? !f.includes(e.name.toLowerCase()) : !z(e);
                    },
                    m = i.filter(h).map(function (t) {
                      return new Promise(function (n, i) {
                        e("ADD_ITEM", {
                          interactionMethod: o,
                          source: t.source || t,
                          success: n,
                          failure: i,
                          index: d++,
                          options: t.options || {}
                        });
                      });
                    });
                  Promise.all(m).then(s)["catch"](c);
                },
                ADD_ITEM: function ADD_ITEM(i) {
                  var r = i.source,
                    o = i.index,
                    a = void 0 === o ? -1 : o,
                    s = i.interactionMethod,
                    l = i.success,
                    c = void 0 === l ? function () {} : l,
                    d = i.failure,
                    u = void 0 === d ? function () {} : d,
                    p = i.options,
                    f = void 0 === p ? {} : p;
                  if (z(r)) u({
                    error: Ft("error", 0, "No source"),
                    file: null
                  });else if (!tn(r) || !n.options.ignoredFiles.includes(r.name.toLowerCase())) {
                    if (!ht(n)) {
                      if (n.options.allowMultiple || !n.options.allowMultiple && !n.options.allowReplace) {
                        var h = Ft("warning", 0, "Max files");
                        return e("DID_THROW_MAX_FILES", {
                          source: r,
                          error: h
                        }), void u({
                          error: h,
                          file: null
                        });
                      }
                      var m = nt(n.items)[0];
                      if (m.status === Fe.PROCESSING_COMPLETE || m.status === Fe.PROCESSING_REVERT_ERROR) {
                        var g = t("GET_FORCE_REVERT");
                        if (m.revert(Wt(n.options.server.url, n.options.server.revert), g).then(function () {
                          g && e("ADD_ITEM", {
                            source: r,
                            index: a,
                            interactionMethod: s,
                            success: c,
                            failure: u,
                            options: f
                          });
                        })["catch"](function () {}), g) return;
                      }
                      e("REMOVE_ITEM", {
                        query: m.id
                      });
                    }
                    var v = "local" === f.type ? Ve.LOCAL : "limbo" === f.type ? Ve.LIMBO : Ve.INPUT,
                      b = rn(v, v === Ve.INPUT ? null : r, f.file);
                    Object.keys(f.metadata || {}).forEach(function (e) {
                      b.setMetadata(e, f.metadata[e]);
                    }), Xe("DID_CREATE_ITEM", b, {
                      query: t,
                      dispatch: e
                    });
                    var w = t("GET_ITEM_INSERT_LOCATION");
                    n.options.itemInsertLocationFreedom || (a = "before" === w ? -1 : n.items.length), vt(n.items, b, a), ie(w) && r && hn(n, w);
                    var y = b.id;
                    b.on("init", function () {
                      e("DID_INIT_ITEM", {
                        id: y
                      });
                    }), b.on("load-init", function () {
                      e("DID_START_ITEM_LOAD", {
                        id: y
                      });
                    }), b.on("load-meta", function () {
                      e("DID_UPDATE_ITEM_META", {
                        id: y
                      });
                    }), b.on("load-progress", function (t) {
                      e("DID_UPDATE_ITEM_LOAD_PROGRESS", {
                        id: y,
                        progress: t
                      });
                    }), b.on("load-request-error", function (t) {
                      var i = dn(n.options.labelFileLoadError)(t);
                      if (t.code >= 400 && t.code < 500) return e("DID_THROW_ITEM_INVALID", {
                        id: y,
                        error: t,
                        status: {
                          main: i,
                          sub: t.code + " (" + t.body + ")"
                        }
                      }), void u({
                        error: t,
                        file: $e(b)
                      });
                      e("DID_THROW_ITEM_LOAD_ERROR", {
                        id: y,
                        error: t,
                        status: {
                          main: i,
                          sub: n.options.labelTapToRetry
                        }
                      });
                    }), b.on("load-file-error", function (t) {
                      e("DID_THROW_ITEM_INVALID", {
                        id: y,
                        error: t.status,
                        status: t.status
                      }), u({
                        error: t.status,
                        file: $e(b)
                      });
                    }), b.on("load-abort", function () {
                      e("REMOVE_ITEM", {
                        query: y
                      });
                    }), b.on("load-skip", function () {
                      e("COMPLETE_LOAD_ITEM", {
                        query: y,
                        item: b,
                        data: {
                          source: r,
                          success: c
                        }
                      });
                    }), b.on("load", function () {
                      var i = function i(_i7) {
                        _i7 ? (b.on("metadata-update", function (t) {
                          e("DID_UPDATE_ITEM_METADATA", {
                            id: y,
                            change: t
                          });
                        }), je("SHOULD_PREPARE_OUTPUT", !1, {
                          item: b,
                          query: t
                        }).then(function (i) {
                          var o = t("GET_BEFORE_PREPARE_FILE");
                          o && (i = o(b, i));
                          var a = function a() {
                            e("COMPLETE_LOAD_ITEM", {
                              query: y,
                              item: b,
                              data: {
                                source: r,
                                success: c
                              }
                            }), pn(e, n);
                          };
                          i ? e("REQUEST_PREPARE_OUTPUT", {
                            query: y,
                            item: b,
                            success: function success(t) {
                              e("DID_PREPARE_OUTPUT", {
                                id: y,
                                file: t
                              }), a();
                            }
                          }, !0) : a();
                        })) : e("REMOVE_ITEM", {
                          query: y
                        });
                      };
                      je("DID_LOAD_ITEM", b, {
                        query: t,
                        dispatch: e
                      }).then(function () {
                        fn(t("GET_BEFORE_ADD_FILE"), $e(b)).then(i);
                      })["catch"](function (t) {
                        if (!t || !t.error || !t.status) return i(!1);
                        e("DID_THROW_ITEM_INVALID", {
                          id: y,
                          error: t.error,
                          status: t.status
                        });
                      });
                    }), b.on("process-start", function () {
                      e("DID_START_ITEM_PROCESSING", {
                        id: y
                      });
                    }), b.on("process-progress", function (t) {
                      e("DID_UPDATE_ITEM_PROCESS_PROGRESS", {
                        id: y,
                        progress: t
                      });
                    }), b.on("process-error", function (t) {
                      e("DID_THROW_ITEM_PROCESSING_ERROR", {
                        id: y,
                        error: t,
                        status: {
                          main: dn(n.options.labelFileProcessingError)(t),
                          sub: n.options.labelTapToRetry
                        }
                      });
                    }), b.on("process-revert-error", function (t) {
                      e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
                        id: y,
                        error: t,
                        status: {
                          main: dn(n.options.labelFileProcessingRevertError)(t),
                          sub: n.options.labelTapToRetry
                        }
                      });
                    }), b.on("process-complete", function (t) {
                      e("DID_COMPLETE_ITEM_PROCESSING", {
                        id: y,
                        error: null,
                        serverFileReference: t
                      }), e("DID_DEFINE_VALUE", {
                        id: y,
                        value: t
                      });
                    }), b.on("process-abort", function () {
                      e("DID_ABORT_ITEM_PROCESSING", {
                        id: y
                      });
                    }), b.on("process-revert", function () {
                      e("DID_REVERT_ITEM_PROCESSING", {
                        id: y
                      }), e("DID_DEFINE_VALUE", {
                        id: y,
                        value: null
                      });
                    }), e("DID_ADD_ITEM", {
                      id: y,
                      index: a,
                      interactionMethod: s
                    }), pn(e, n);
                    var E = n.options.server || {},
                      _ = E.url,
                      T = E.load,
                      D = E.restore,
                      I = E.fetch;
                    b.load(r, Gt(v === Ve.INPUT ? Q(r) && cn(r) && I ? qt(_, I) : sn : v === Ve.LIMBO ? qt(_, D) : qt(_, T)), function (e, n, i) {
                      je("LOAD_FILE", e, {
                        query: t
                      }).then(n)["catch"](i);
                    });
                  }
                },
                REQUEST_PREPARE_OUTPUT: function REQUEST_PREPARE_OUTPUT(e) {
                  var n = e.item,
                    i = e.success,
                    r = e.failure,
                    o = void 0 === r ? function () {} : r,
                    a = {
                      error: Ft("error", 0, "Item not found"),
                      file: null
                    };
                  if (n.archived) return o(a);
                  je("PREPARE_OUTPUT", n.file, {
                    query: t,
                    item: n
                  }).then(function (e) {
                    je("COMPLETE_PREPARE_OUTPUT", e, {
                      query: t,
                      item: n
                    }).then(function (e) {
                      if (n.archived) return o(a);
                      i(e);
                    });
                  });
                },
                COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(i) {
                  var r = i.item,
                    o = i.data,
                    a = o.success,
                    s = o.source,
                    l = t("GET_ITEM_INSERT_LOCATION");
                  if (ie(l) && s && hn(n, l), e("DID_LOAD_ITEM", {
                    id: r.id,
                    error: null,
                    serverFileReference: r.origin === Ve.INPUT ? null : s
                  }), a($e(r)), r.origin !== Ve.LOCAL) return r.origin === Ve.LIMBO ? (e("DID_COMPLETE_ITEM_PROCESSING", {
                    id: r.id,
                    error: null,
                    serverFileReference: s
                  }), void e("DID_DEFINE_VALUE", {
                    id: r.id,
                    value: r.serverId || s
                  })) : void (t("IS_ASYNC") && n.options.instantUpload && e("REQUEST_ITEM_PROCESSING", {
                    query: r.id
                  }));
                  e("DID_LOAD_LOCAL_ITEM", {
                    id: r.id
                  });
                },
                RETRY_ITEM_LOAD: mn(n, function (e) {
                  e.retryLoad();
                }),
                REQUEST_ITEM_PREPARE: mn(n, function (t, n, i) {
                  e("REQUEST_PREPARE_OUTPUT", {
                    query: t.id,
                    item: t,
                    success: function success(i) {
                      e("DID_PREPARE_OUTPUT", {
                        id: t.id,
                        file: i
                      }), n({
                        file: t,
                        output: i
                      });
                    },
                    failure: i
                  }, !0);
                }),
                REQUEST_ITEM_PROCESSING: mn(n, function (i, r, o) {
                  if (i.status === Fe.IDLE || i.status === Fe.PROCESSING_ERROR) i.status !== Fe.PROCESSING_QUEUED && (i.requestProcessing(), e("DID_REQUEST_ITEM_PROCESSING", {
                    id: i.id
                  }), e("PROCESS_ITEM", {
                    query: i,
                    success: r,
                    failure: o
                  }, !0));else {
                    var a = function a() {
                        return e("REQUEST_ITEM_PROCESSING", {
                          query: i,
                          success: r,
                          failure: o
                        });
                      },
                      s = function s() {
                        return document.hidden ? a() : setTimeout(a, 32);
                      };
                    i.status === Fe.PROCESSING_COMPLETE || i.status === Fe.PROCESSING_REVERT_ERROR ? i.revert(Wt(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(s)["catch"](function () {}) : i.status === Fe.PROCESSING && i.abortProcessing().then(s);
                  }
                }),
                PROCESS_ITEM: mn(n, function (i, r, o) {
                  var a = t("GET_MAX_PARALLEL_UPLOADS");
                  if (t("GET_ITEMS_BY_STATUS", Fe.PROCESSING).length !== a) {
                    if (i.status !== Fe.PROCESSING) {
                      var s = function t() {
                        var i = n.processingQueue.shift();
                        if (i) {
                          var r = i.id,
                            o = i.success,
                            a = i.failure,
                            s = et(n.items, r);
                          s && !s.archived ? e("PROCESS_ITEM", {
                            query: r,
                            success: o,
                            failure: a
                          }, !0) : t();
                        }
                      };
                      i.onOnce("process-complete", function () {
                        r($e(i)), s();
                        var o = n.options.server;
                        if (n.options.instantUpload && i.origin === Ve.LOCAL && ie(o.remove)) {
                          var a = function a() {};
                          i.origin = Ve.LIMBO, n.options.server.remove(i.source, a, a);
                        }
                        t("GET_ITEMS_BY_STATUS", Fe.PROCESSING_COMPLETE).length === n.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL");
                      }), i.onOnce("process-error", function (e) {
                        o({
                          error: e,
                          file: $e(i)
                        }), s();
                      });
                      var l = n.options;
                      i.process(Zt(Xt(l.server.url, l.server.process, l.name, {
                        chunkTransferId: i.transferId,
                        chunkServer: l.server.patch,
                        chunkUploads: l.chunkUploads,
                        chunkForce: l.chunkForce,
                        chunkSize: l.chunkSize,
                        chunkRetryDelays: l.chunkRetryDelays
                      }), {
                        allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
                      }), function (n, r, o) {
                        je("PREPARE_OUTPUT", n, {
                          query: t,
                          item: i
                        }).then(function (t) {
                          e("DID_PREPARE_OUTPUT", {
                            id: i.id,
                            file: t
                          }), r(t);
                        })["catch"](o);
                      });
                    }
                  } else n.processingQueue.push({
                    id: i.id,
                    success: r,
                    failure: o
                  });
                }),
                RETRY_ITEM_PROCESSING: mn(n, function (t) {
                  e("REQUEST_ITEM_PROCESSING", {
                    query: t
                  });
                }),
                REQUEST_REMOVE_ITEM: mn(n, function (n) {
                  fn(t("GET_BEFORE_REMOVE_FILE"), $e(n)).then(function (t) {
                    t && e("REMOVE_ITEM", {
                      query: n
                    });
                  });
                }),
                RELEASE_ITEM: mn(n, function (e) {
                  e.release();
                }),
                REMOVE_ITEM: mn(n, function (i, r, o, a) {
                  var s = function s() {
                      var t = i.id;
                      an(n.items, t).archive(), e("DID_REMOVE_ITEM", {
                        error: null,
                        id: t,
                        item: i
                      }), pn(e, n), r($e(i));
                    },
                    l = n.options.server;
                  i.origin === Ve.LOCAL && l && ie(l.remove) && !1 !== a.remove ? (e("DID_START_ITEM_REMOVE", {
                    id: i.id
                  }), l.remove(i.source, function () {
                    return s();
                  }, function (t) {
                    e("DID_THROW_ITEM_REMOVE_ERROR", {
                      id: i.id,
                      error: Ft("error", 0, t, null),
                      status: {
                        main: dn(n.options.labelFileRemoveError)(t),
                        sub: n.options.labelTapToRetry
                      }
                    });
                  })) : ((a.revert && i.origin !== Ve.LOCAL && null !== i.serverId || n.options.chunkUploads && i.file.size > n.options.chunkSize || n.options.chunkUploads && n.options.chunkForce) && i.revert(Wt(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")), s());
                }),
                ABORT_ITEM_LOAD: mn(n, function (e) {
                  e.abortLoad();
                }),
                ABORT_ITEM_PROCESSING: mn(n, function (t) {
                  t.serverId ? e("REVERT_ITEM_PROCESSING", {
                    id: t.id
                  }) : t.abortProcessing().then(function () {
                    n.options.instantUpload && e("REMOVE_ITEM", {
                      query: t.id
                    });
                  });
                }),
                REQUEST_REVERT_ITEM_PROCESSING: mn(n, function (i) {
                  if (n.options.instantUpload) {
                    var r = function r(t) {
                        t && e("REVERT_ITEM_PROCESSING", {
                          query: i
                        });
                      },
                      o = t("GET_BEFORE_REMOVE_FILE");
                    if (!o) return r(!0);
                    var a = o($e(i));
                    return null == a ? r(!0) : "boolean" == typeof a ? r(a) : void ("function" == typeof a.then && a.then(r));
                  }
                  e("REVERT_ITEM_PROCESSING", {
                    query: i
                  });
                }),
                REVERT_ITEM_PROCESSING: mn(n, function (i) {
                  i.revert(Wt(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(function () {
                    (n.options.instantUpload || un(i)) && e("REMOVE_ITEM", {
                      query: i.id
                    });
                  })["catch"](function () {});
                }),
                SET_OPTIONS: function SET_OPTIONS(t) {
                  var n = t.options,
                    i = Object.keys(n),
                    r = vn.filter(function (e) {
                      return i.includes(e);
                    });
                  [].concat(Se(r), Se(Object.keys(n).filter(function (e) {
                    return !r.includes(e);
                  }))).forEach(function (t) {
                    e("SET_" + we(t, "_").toUpperCase(), {
                      value: n[t]
                    });
                  });
                }
              };
            },
            vn = ["server"],
            bn = function bn(e) {
              return e;
            },
            wn = function wn(e) {
              return document.createElement(e);
            },
            yn = function yn(e, t) {
              var n = e.childNodes[0];
              n ? t !== n.nodeValue && (n.nodeValue = t) : (n = document.createTextNode(t), e.appendChild(n));
            },
            En = function En(e, t, n, i) {
              var r = (i % 360 - 90) * Math.PI / 180;
              return {
                x: e + n * Math.cos(r),
                y: t + n * Math.sin(r)
              };
            },
            _n = function _n(e, t, n, i, r, o) {
              var a = En(e, t, n, r),
                s = En(e, t, n, i);
              return ["M", a.x, a.y, "A", n, n, 0, o, 0, s.x, s.y].join(" ");
            },
            Tn = function Tn(e, t, n, i, r) {
              var o = 1;
              return r > i && r - i <= .5 && (o = 0), i > r && i - r >= .5 && (o = 0), _n(e, t, n, 360 * Math.min(.9999, i), 360 * Math.min(.9999, r), o);
            },
            Dn = function Dn(e) {
              var t = e.root,
                n = e.props;
              n.spin = !1, n.progress = 0, n.opacity = 0;
              var i = d("svg");
              t.ref.path = d("path", {
                "stroke-width": 2,
                "stroke-linecap": "round"
              }), i.appendChild(t.ref.path), t.ref.svg = i, t.appendChild(i);
            },
            In = function In(e) {
              var t = e.root,
                n = e.props;
              if (0 !== n.opacity) {
                n.align && (t.element.dataset.align = n.align);
                var i = parseInt(a(t.ref.path, "stroke-width"), 10),
                  r = .5 * t.rect.element.width,
                  o = 0,
                  s = 0;
                n.spin ? (o = 0, s = .5) : (o = 0, s = n.progress);
                var l = Tn(r, r, r - i, o, s);
                a(t.ref.path, "d", l), a(t.ref.path, "stroke-opacity", n.spin || n.progress > 0 ? 1 : 0);
              }
            },
            On = B({
              tag: "div",
              name: "progress-indicator",
              ignoreRectUpdate: !0,
              ignoreRect: !0,
              create: Dn,
              write: In,
              mixins: {
                apis: ["progress", "spin", "align"],
                styles: ["opacity"],
                animations: {
                  opacity: {
                    type: "tween",
                    duration: 500
                  },
                  progress: {
                    type: "spring",
                    stiffness: .95,
                    damping: .65,
                    mass: 10
                  }
                }
              }
            }),
            kn = function kn(e) {
              var t = e.root,
                n = e.props;
              t.element.innerHTML = (n.icon || "") + "<span>" + n.label + "</span>", n.isDisabled = !1;
            },
            Rn = function Rn(e) {
              var t = e.root,
                n = e.props,
                i = n.isDisabled,
                r = t.query("GET_DISABLED") || 0 === n.opacity;
              r && !i ? (n.isDisabled = !0, a(t.element, "disabled", "disabled")) : !r && i && (n.isDisabled = !1, t.element.removeAttribute("disabled"));
            },
            Sn = B({
              tag: "button",
              attributes: {
                type: "button"
              },
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              name: "file-action-button",
              mixins: {
                apis: ["label"],
                styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
                animations: {
                  scaleX: "spring",
                  scaleY: "spring",
                  translateX: "spring",
                  translateY: "spring",
                  opacity: {
                    type: "tween",
                    duration: 250
                  }
                },
                listeners: !0
              },
              create: kn,
              write: Rn
            }),
            Cn = function Cn(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = i.labelBytes,
                o = void 0 === r ? "bytes" : r,
                a = i.labelKilobytes,
                s = void 0 === a ? "KB" : a,
                l = i.labelMegabytes,
                c = void 0 === l ? "MB" : l,
                d = i.labelGigabytes,
                u = void 0 === d ? "GB" : d,
                p = n,
                f = n * n,
                h = n * n * n;
              return (e = Math.round(Math.abs(e))) < p ? e + " " + o : e < f ? Math.floor(e / p) + " " + s : e < h ? An(e / f, 1, t) + " " + c : An(e / h, 2, t) + " " + u;
            },
            An = function An(e, t, n) {
              return e.toFixed(t).split(".").filter(function (e) {
                return "0" !== e;
              }).join(n);
            },
            Mn = function Mn(e) {
              var t = e.root,
                n = e.props,
                i = wn("span");
              i.className = "filepond--file-info-main", a(i, "aria-hidden", "true"), t.appendChild(i), t.ref.fileName = i;
              var r = wn("span");
              r.className = "filepond--file-info-sub", t.appendChild(r), t.ref.fileSize = r, yn(r, t.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), yn(i, bn(t.query("GET_ITEM_NAME", n.id)));
            },
            xn = function xn(e) {
              var t = e.root,
                n = e.props;
              yn(t.ref.fileSize, Cn(t.query("GET_ITEM_SIZE", n.id), ".", t.query("GET_FILE_SIZE_BASE"), t.query("GET_FILE_SIZE_LABELS", t.query))), yn(t.ref.fileName, bn(t.query("GET_ITEM_NAME", n.id)));
            },
            Ln = function Ln(e) {
              var t = e.root,
                n = e.props;
              te(t.query("GET_ITEM_SIZE", n.id)) ? xn({
                root: t,
                props: n
              }) : yn(t.ref.fileSize, t.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
            },
            Pn = B({
              name: "file-info",
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              write: V({
                DID_LOAD_ITEM: xn,
                DID_UPDATE_ITEM_META: xn,
                DID_THROW_ITEM_LOAD_ERROR: Ln,
                DID_THROW_ITEM_INVALID: Ln
              }),
              didCreateView: function didCreateView(e) {
                Xe("CREATE_VIEW", Object.assign({}, e, {
                  view: e
                }));
              },
              create: Mn,
              mixins: {
                styles: ["translateX", "translateY"],
                animations: {
                  translateX: "spring",
                  translateY: "spring"
                }
              }
            }),
            Nn = function Nn(e) {
              return Math.round(100 * e);
            },
            Gn = function Gn(e) {
              var t = e.root,
                n = wn("span");
              n.className = "filepond--file-status-main", t.appendChild(n), t.ref.main = n;
              var i = wn("span");
              i.className = "filepond--file-status-sub", t.appendChild(i), t.ref.sub = i, $n({
                root: t,
                action: {
                  progress: null
                }
              });
            },
            $n = function $n(e) {
              var t = e.root,
                n = e.action,
                i = null === n.progress ? t.query("GET_LABEL_FILE_LOADING") : t.query("GET_LABEL_FILE_LOADING") + " " + Nn(n.progress) + "%";
              yn(t.ref.main, i), yn(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
            },
            Bn = function Bn(e) {
              var t = e.root,
                n = e.action,
                i = null === n.progress ? t.query("GET_LABEL_FILE_PROCESSING") : t.query("GET_LABEL_FILE_PROCESSING") + " " + Nn(n.progress) + "%";
              yn(t.ref.main, i), yn(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
            },
            Fn = function Fn(e) {
              var t = e.root;
              yn(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING")), yn(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
            },
            Vn = function Vn(e) {
              var t = e.root;
              yn(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_ABORTED")), yn(t.ref.sub, t.query("GET_LABEL_TAP_TO_RETRY"));
            },
            Un = function Un(e) {
              var t = e.root;
              yn(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), yn(t.ref.sub, t.query("GET_LABEL_TAP_TO_UNDO"));
            },
            Hn = function Hn(e) {
              var t = e.root;
              yn(t.ref.main, ""), yn(t.ref.sub, "");
            },
            qn = function qn(e) {
              var t = e.root,
                n = e.action;
              yn(t.ref.main, n.status.main), yn(t.ref.sub, n.status.sub);
            },
            zn = B({
              name: "file-status",
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              write: V({
                DID_LOAD_ITEM: Hn,
                DID_REVERT_ITEM_PROCESSING: Hn,
                DID_REQUEST_ITEM_PROCESSING: Fn,
                DID_ABORT_ITEM_PROCESSING: Vn,
                DID_COMPLETE_ITEM_PROCESSING: Un,
                DID_UPDATE_ITEM_PROCESS_PROGRESS: Bn,
                DID_UPDATE_ITEM_LOAD_PROGRESS: $n,
                DID_THROW_ITEM_LOAD_ERROR: qn,
                DID_THROW_ITEM_INVALID: qn,
                DID_THROW_ITEM_PROCESSING_ERROR: qn,
                DID_THROW_ITEM_PROCESSING_REVERT_ERROR: qn,
                DID_THROW_ITEM_REMOVE_ERROR: qn
              }),
              didCreateView: function didCreateView(e) {
                Xe("CREATE_VIEW", Object.assign({}, e, {
                  view: e
                }));
              },
              create: Gn,
              mixins: {
                styles: ["translateX", "translateY", "opacity"],
                animations: {
                  opacity: {
                    type: "tween",
                    duration: 250
                  },
                  translateX: "spring",
                  translateY: "spring"
                }
              }
            }),
            Yn = {
              AbortItemLoad: {
                label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
                action: "ABORT_ITEM_LOAD",
                className: "filepond--action-abort-item-load",
                align: "LOAD_INDICATOR_POSITION"
              },
              RetryItemLoad: {
                label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
                action: "RETRY_ITEM_LOAD",
                icon: "GET_ICON_RETRY",
                className: "filepond--action-retry-item-load",
                align: "BUTTON_PROCESS_ITEM_POSITION"
              },
              RemoveItem: {
                label: "GET_LABEL_BUTTON_REMOVE_ITEM",
                action: "REQUEST_REMOVE_ITEM",
                icon: "GET_ICON_REMOVE",
                className: "filepond--action-remove-item",
                align: "BUTTON_REMOVE_ITEM_POSITION"
              },
              ProcessItem: {
                label: "GET_LABEL_BUTTON_PROCESS_ITEM",
                action: "REQUEST_ITEM_PROCESSING",
                icon: "GET_ICON_PROCESS",
                className: "filepond--action-process-item",
                align: "BUTTON_PROCESS_ITEM_POSITION"
              },
              AbortItemProcessing: {
                label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
                action: "ABORT_ITEM_PROCESSING",
                className: "filepond--action-abort-item-processing",
                align: "BUTTON_PROCESS_ITEM_POSITION"
              },
              RetryItemProcessing: {
                label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
                action: "RETRY_ITEM_PROCESSING",
                icon: "GET_ICON_RETRY",
                className: "filepond--action-retry-item-processing",
                align: "BUTTON_PROCESS_ITEM_POSITION"
              },
              RevertItemProcessing: {
                label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
                action: "REQUEST_REVERT_ITEM_PROCESSING",
                icon: "GET_ICON_UNDO",
                className: "filepond--action-revert-item-processing",
                align: "BUTTON_PROCESS_ITEM_POSITION"
              }
            },
            jn = [];
          r(Yn, function (e) {
            jn.push(e);
          });
          var Xn,
            Wn = function Wn(e) {
              if ("right" === ti(e)) return 0;
              var t = e.ref.buttonRemoveItem.rect.element;
              return t.hidden ? null : t.width + t.left;
            },
            Kn = function Kn(e) {
              return e.ref.buttonAbortItemLoad.rect.element.width;
            },
            Qn = function Qn(e) {
              return Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4);
            },
            Zn = function Zn(e) {
              return Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2);
            },
            Jn = function Jn(e) {
              return e.query("GET_STYLE_LOAD_INDICATOR_POSITION");
            },
            ei = function ei(e) {
              return e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION");
            },
            ti = function ti(e) {
              return e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION");
            },
            ni = {
              buttonAbortItemLoad: {
                opacity: 0
              },
              buttonRetryItemLoad: {
                opacity: 0
              },
              buttonRemoveItem: {
                opacity: 0
              },
              buttonProcessItem: {
                opacity: 0
              },
              buttonAbortItemProcessing: {
                opacity: 0
              },
              buttonRetryItemProcessing: {
                opacity: 0
              },
              buttonRevertItemProcessing: {
                opacity: 0
              },
              loadProgressIndicator: {
                opacity: 0,
                align: Jn
              },
              processProgressIndicator: {
                opacity: 0,
                align: ei
              },
              processingCompleteIndicator: {
                opacity: 0,
                scaleX: .75,
                scaleY: .75
              },
              info: {
                translateX: 0,
                translateY: 0,
                opacity: 0
              },
              status: {
                translateX: 0,
                translateY: 0,
                opacity: 0
              }
            },
            ii = {
              buttonRemoveItem: {
                opacity: 1
              },
              buttonProcessItem: {
                opacity: 1
              },
              info: {
                translateX: Wn
              },
              status: {
                translateX: Wn
              }
            },
            ri = {
              buttonAbortItemProcessing: {
                opacity: 1
              },
              processProgressIndicator: {
                opacity: 1
              },
              status: {
                opacity: 1
              }
            },
            oi = {
              DID_THROW_ITEM_INVALID: {
                buttonRemoveItem: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                },
                status: {
                  translateX: Wn,
                  opacity: 1
                }
              },
              DID_START_ITEM_LOAD: {
                buttonAbortItemLoad: {
                  opacity: 1
                },
                loadProgressIndicator: {
                  opacity: 1
                },
                status: {
                  opacity: 1
                }
              },
              DID_THROW_ITEM_LOAD_ERROR: {
                buttonRetryItemLoad: {
                  opacity: 1
                },
                buttonRemoveItem: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                },
                status: {
                  opacity: 1
                }
              },
              DID_START_ITEM_REMOVE: {
                processProgressIndicator: {
                  opacity: 1,
                  align: ti
                },
                info: {
                  translateX: Wn
                },
                status: {
                  opacity: 0
                }
              },
              DID_THROW_ITEM_REMOVE_ERROR: {
                processProgressIndicator: {
                  opacity: 0,
                  align: ti
                },
                buttonRemoveItem: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                },
                status: {
                  opacity: 1,
                  translateX: Wn
                }
              },
              DID_LOAD_ITEM: ii,
              DID_LOAD_LOCAL_ITEM: {
                buttonRemoveItem: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                },
                status: {
                  translateX: Wn
                }
              },
              DID_START_ITEM_PROCESSING: ri,
              DID_REQUEST_ITEM_PROCESSING: ri,
              DID_UPDATE_ITEM_PROCESS_PROGRESS: ri,
              DID_COMPLETE_ITEM_PROCESSING: {
                buttonRevertItemProcessing: {
                  opacity: 1
                },
                info: {
                  opacity: 1
                },
                status: {
                  opacity: 1
                }
              },
              DID_THROW_ITEM_PROCESSING_ERROR: {
                buttonRemoveItem: {
                  opacity: 1
                },
                buttonRetryItemProcessing: {
                  opacity: 1
                },
                status: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                }
              },
              DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
                buttonRevertItemProcessing: {
                  opacity: 1
                },
                status: {
                  opacity: 1
                },
                info: {
                  opacity: 1
                }
              },
              DID_ABORT_ITEM_PROCESSING: {
                buttonRemoveItem: {
                  opacity: 1
                },
                buttonProcessItem: {
                  opacity: 1
                },
                info: {
                  translateX: Wn
                },
                status: {
                  opacity: 1
                }
              },
              DID_REVERT_ITEM_PROCESSING: ii
            },
            ai = B({
              create: function create(e) {
                var t = e.root;
                t.element.innerHTML = t.query("GET_ICON_DONE");
              },
              name: "processing-complete-indicator",
              ignoreRect: !0,
              mixins: {
                styles: ["scaleX", "scaleY", "opacity"],
                animations: {
                  scaleX: "spring",
                  scaleY: "spring",
                  opacity: {
                    type: "tween",
                    duration: 250
                  }
                }
              }
            }),
            si = function si(e) {
              var t,
                n = e.root,
                i = e.props,
                o = Object.keys(Yn).reduce(function (e, t) {
                  return e[t] = Object.assign({}, Yn[t]), e;
                }, {}),
                a = i.id,
                s = n.query("GET_ALLOW_REVERT"),
                l = n.query("GET_ALLOW_REMOVE"),
                c = n.query("GET_ALLOW_PROCESS"),
                d = n.query("GET_INSTANT_UPLOAD"),
                u = n.query("IS_ASYNC"),
                p = n.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
              u ? c && !s ? t = function t(e) {
                return !/RevertItemProcessing/.test(e);
              } : !c && s ? t = function t(e) {
                return !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(e);
              } : c || s || (t = function t(e) {
                return !/Process/.test(e);
              }) : t = function t(e) {
                return !/Process/.test(e);
              };
              var f = t ? jn.filter(t) : jn.concat();
              if (d && s && (o.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", o.RevertItemProcessing.icon = "GET_ICON_REMOVE"), u && !s) {
                var h = oi.DID_COMPLETE_ITEM_PROCESSING;
                h.info.translateX = Zn, h.info.translateY = Qn, h.status.translateY = Qn, h.processingCompleteIndicator = {
                  opacity: 1,
                  scaleX: 1,
                  scaleY: 1
                };
              }
              if (u && !c && (["DID_START_ITEM_PROCESSING", "DID_REQUEST_ITEM_PROCESSING", "DID_UPDATE_ITEM_PROCESS_PROGRESS", "DID_THROW_ITEM_PROCESSING_ERROR"].forEach(function (e) {
                oi[e].status.translateY = Qn;
              }), oi.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = Kn), p && s) {
                o.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
                var m = oi.DID_COMPLETE_ITEM_PROCESSING;
                m.info.translateX = Wn, m.status.translateY = Qn, m.processingCompleteIndicator = {
                  opacity: 1,
                  scaleX: 1,
                  scaleY: 1
                };
              }
              l || (o.RemoveItem.disabled = !0), r(o, function (e, t) {
                var i = n.createChildView(Sn, {
                  label: n.query(t.label),
                  icon: n.query(t.icon),
                  opacity: 0
                });
                f.includes(e) && n.appendChildView(i), t.disabled && (i.element.setAttribute("disabled", "disabled"), i.element.setAttribute("hidden", "hidden")), i.element.dataset.align = n.query("GET_STYLE_" + t.align), i.element.classList.add(t.className), i.on("click", function (e) {
                  e.stopPropagation(), t.disabled || n.dispatch(t.action, {
                    query: a
                  });
                }), n.ref["button" + e] = i;
              }), n.ref.processingCompleteIndicator = n.appendChildView(n.createChildView(ai)), n.ref.processingCompleteIndicator.element.dataset.align = n.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"), n.ref.info = n.appendChildView(n.createChildView(Pn, {
                id: a
              })), n.ref.status = n.appendChildView(n.createChildView(zn, {
                id: a
              }));
              var g = n.appendChildView(n.createChildView(On, {
                opacity: 0,
                align: n.query("GET_STYLE_LOAD_INDICATOR_POSITION")
              }));
              g.element.classList.add("filepond--load-indicator"), n.ref.loadProgressIndicator = g;
              var v = n.appendChildView(n.createChildView(On, {
                opacity: 0,
                align: n.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
              }));
              v.element.classList.add("filepond--process-indicator"), n.ref.processProgressIndicator = v, n.ref.activeStyles = [];
            },
            li = function li(e) {
              var t = e.root,
                n = e.actions,
                i = e.props;
              ci({
                root: t,
                actions: n,
                props: i
              });
              var o = n.concat().filter(function (e) {
                return /^DID_/.test(e.type);
              }).reverse().find(function (e) {
                return oi[e.type];
              });
              if (o) {
                t.ref.activeStyles = [];
                var a = oi[o.type];
                r(ni, function (e, n) {
                  var i = t.ref[e];
                  r(n, function (n, r) {
                    var o = a[e] && void 0 !== a[e][n] ? a[e][n] : r;
                    t.ref.activeStyles.push({
                      control: i,
                      key: n,
                      value: o
                    });
                  });
                });
              }
              t.ref.activeStyles.forEach(function (e) {
                var n = e.control,
                  i = e.key,
                  r = e.value;
                n[i] = "function" == typeof r ? r(t) : r;
              });
            },
            ci = V({
              DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(e) {
                var t = e.root,
                  n = e.action;
                t.ref.buttonAbortItemProcessing.label = n.value;
              },
              DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(e) {
                var t = e.root,
                  n = e.action;
                t.ref.buttonAbortItemLoad.label = n.value;
              },
              DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(e) {
                var t = e.root,
                  n = e.action;
                t.ref.buttonAbortItemRemoval.label = n.value;
              },
              DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(e) {
                var t = e.root;
                t.ref.processProgressIndicator.spin = !0, t.ref.processProgressIndicator.progress = 0;
              },
              DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(e) {
                var t = e.root;
                t.ref.loadProgressIndicator.spin = !0, t.ref.loadProgressIndicator.progress = 0;
              },
              DID_START_ITEM_REMOVE: function DID_START_ITEM_REMOVE(e) {
                var t = e.root;
                t.ref.processProgressIndicator.spin = !0, t.ref.processProgressIndicator.progress = 0;
              },
              DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(e) {
                var t = e.root,
                  n = e.action;
                t.ref.loadProgressIndicator.spin = !1, t.ref.loadProgressIndicator.progress = n.progress;
              },
              DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(e) {
                var t = e.root,
                  n = e.action;
                t.ref.processProgressIndicator.spin = !1, t.ref.processProgressIndicator.progress = n.progress;
              }
            }),
            di = B({
              create: si,
              write: li,
              didCreateView: function didCreateView(e) {
                Xe("CREATE_VIEW", Object.assign({}, e, {
                  view: e
                }));
              },
              name: "file"
            }),
            ui = function ui(e) {
              var t = e.root,
                n = e.props;
              t.ref.fileName = wn("legend"), t.appendChild(t.ref.fileName), t.ref.file = t.appendChildView(t.createChildView(di, {
                id: n.id
              })), t.ref.data = !1;
            },
            pi = function pi(e) {
              var t = e.root,
                n = e.props;
              yn(t.ref.fileName, bn(t.query("GET_ITEM_NAME", n.id)));
            },
            fi = B({
              create: ui,
              ignoreRect: !0,
              write: V({
                DID_LOAD_ITEM: pi
              }),
              didCreateView: function didCreateView(e) {
                Xe("CREATE_VIEW", Object.assign({}, e, {
                  view: e
                }));
              },
              tag: "fieldset",
              name: "file-wrapper"
            }),
            hi = {
              type: "spring",
              damping: .6,
              mass: 7
            },
            mi = function mi(e) {
              var t = e.root,
                n = e.props;
              [{
                name: "top"
              }, {
                name: "center",
                props: {
                  translateY: null,
                  scaleY: null
                },
                mixins: {
                  animations: {
                    scaleY: hi
                  },
                  styles: ["translateY", "scaleY"]
                }
              }, {
                name: "bottom",
                props: {
                  translateY: null
                },
                mixins: {
                  animations: {
                    translateY: hi
                  },
                  styles: ["translateY"]
                }
              }].forEach(function (e) {
                gi(t, e, n.name);
              }), t.element.classList.add("filepond--" + n.name), t.ref.scalable = null;
            },
            gi = function gi(e, t, n) {
              var i = B({
                  name: "panel-" + t.name + " filepond--" + n,
                  mixins: t.mixins,
                  ignoreRectUpdate: !0
                }),
                r = e.createChildView(i, t.props);
              e.ref[t.name] = e.appendChildView(r);
            },
            vi = function vi(e) {
              var t = e.root,
                n = e.props;
              if (null !== t.ref.scalable && n.scalable === t.ref.scalable || (t.ref.scalable = !W(n.scalable) || n.scalable, t.element.dataset.scalable = t.ref.scalable), n.height) {
                var i = t.ref.top.rect.element,
                  r = t.ref.bottom.rect.element,
                  o = Math.max(i.height + r.height, n.height);
                t.ref.center.translateY = i.height, t.ref.center.scaleY = (o - i.height - r.height) / 100, t.ref.bottom.translateY = o - r.height;
              }
            },
            bi = B({
              name: "panel",
              read: function read(e) {
                var t = e.root;
                return e.props.heightCurrent = t.ref.bottom.translateY;
              },
              write: vi,
              create: mi,
              ignoreRect: !0,
              mixins: {
                apis: ["height", "heightCurrent", "scalable"]
              }
            }),
            wi = function wi(e) {
              var t = e.map(function (e) {
                  return e.id;
                }),
                n = void 0;
              return {
                setIndex: function setIndex(e) {
                  n = e;
                },
                getIndex: function getIndex() {
                  return n;
                },
                getItemIndex: function getItemIndex(e) {
                  return t.indexOf(e.id);
                }
              };
            },
            yi = {
              type: "spring",
              stiffness: .75,
              damping: .45,
              mass: 10
            },
            Ei = "spring",
            _i = {
              DID_START_ITEM_LOAD: "busy",
              DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
              DID_THROW_ITEM_INVALID: "load-invalid",
              DID_THROW_ITEM_LOAD_ERROR: "load-error",
              DID_LOAD_ITEM: "idle",
              DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
              DID_START_ITEM_REMOVE: "busy",
              DID_START_ITEM_PROCESSING: "busy processing",
              DID_REQUEST_ITEM_PROCESSING: "busy processing",
              DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
              DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
              DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
              DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
              DID_ABORT_ITEM_PROCESSING: "cancelled",
              DID_REVERT_ITEM_PROCESSING: "idle"
            },
            Ti = function Ti(e) {
              var t = e.root,
                n = e.props;
              if (t.ref.handleClick = function (e) {
                return t.dispatch("DID_ACTIVATE_ITEM", {
                  id: n.id
                });
              }, t.element.id = "filepond--item-" + n.id, t.element.addEventListener("click", t.ref.handleClick), t.ref.container = t.appendChildView(t.createChildView(fi, {
                id: n.id
              })), t.ref.panel = t.appendChildView(t.createChildView(bi, {
                name: "item-panel"
              })), t.ref.panel.height = null, n.markedForRemoval = !1, t.query("GET_ALLOW_REORDER")) {
                t.element.dataset.dragState = "idle";
                var i = function i(e) {
                  if (e.isPrimary) {
                    var i = !1,
                      r = {
                        x: e.pageX,
                        y: e.pageY
                      };
                    n.dragOrigin = {
                      x: t.translateX,
                      y: t.translateY
                    }, n.dragCenter = {
                      x: e.offsetX,
                      y: e.offsetY
                    };
                    var o = wi(t.query("GET_ACTIVE_ITEMS"));
                    t.dispatch("DID_GRAB_ITEM", {
                      id: n.id,
                      dragState: o
                    });
                    var a = function a(e) {
                        e.isPrimary && (e.stopPropagation(), e.preventDefault(), n.dragOffset = {
                          x: e.pageX - r.x,
                          y: e.pageY - r.y
                        }, n.dragOffset.x * n.dragOffset.x + n.dragOffset.y * n.dragOffset.y > 16 && !i && (i = !0, t.element.removeEventListener("click", t.ref.handleClick)), t.dispatch("DID_DRAG_ITEM", {
                          id: n.id,
                          dragState: o
                        }));
                      },
                      s = function e(s) {
                        s.isPrimary && (document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", e), n.dragOffset = {
                          x: s.pageX - r.x,
                          y: s.pageY - r.y
                        }, t.dispatch("DID_DROP_ITEM", {
                          id: n.id,
                          dragState: o
                        }), i && setTimeout(function () {
                          return t.element.addEventListener("click", t.ref.handleClick);
                        }, 0));
                      };
                    document.addEventListener("pointermove", a), document.addEventListener("pointerup", s);
                  }
                };
                t.element.addEventListener("pointerdown", i);
              }
            },
            Di = V({
              DID_UPDATE_PANEL_HEIGHT: function DID_UPDATE_PANEL_HEIGHT(e) {
                var t = e.root,
                  n = e.action;
                t.height = n.height;
              }
            }),
            Ii = V({
              DID_GRAB_ITEM: function DID_GRAB_ITEM(e) {
                var t = e.root;
                e.props.dragOrigin = {
                  x: t.translateX,
                  y: t.translateY
                };
              },
              DID_DRAG_ITEM: function DID_DRAG_ITEM(e) {
                e.root.element.dataset.dragState = "drag";
              },
              DID_DROP_ITEM: function DID_DROP_ITEM(e) {
                var t = e.root,
                  n = e.props;
                n.dragOffset = null, n.dragOrigin = null, t.element.dataset.dragState = "drop";
              }
            }, function (e) {
              var t = e.root,
                n = e.actions,
                i = e.props,
                r = e.shouldOptimize;
              "drop" === t.element.dataset.dragState && t.scaleX <= 1 && (t.element.dataset.dragState = "idle");
              var o = n.concat().filter(function (e) {
                return /^DID_/.test(e.type);
              }).reverse().find(function (e) {
                return _i[e.type];
              });
              o && o.type !== i.currentState && (i.currentState = o.type, t.element.dataset.filepondItemState = _i[i.currentState] || "");
              var a = t.query("GET_ITEM_PANEL_ASPECT_RATIO") || t.query("GET_PANEL_ASPECT_RATIO");
              a ? r || (t.height = t.rect.element.width * a) : (Di({
                root: t,
                actions: n,
                props: i
              }), !t.height && t.ref.container.rect.element.height > 0 && (t.height = t.ref.container.rect.element.height)), r && (t.ref.panel.height = null), t.ref.panel.height = t.height;
            }),
            Oi = B({
              create: Ti,
              write: Ii,
              destroy: function destroy(e) {
                var t = e.root,
                  n = e.props;
                t.element.removeEventListener("click", t.ref.handleClick), t.dispatch("RELEASE_ITEM", {
                  query: n.id
                });
              },
              tag: "li",
              name: "item",
              mixins: {
                apis: ["id", "interactionMethod", "markedForRemoval", "spawnDate", "dragCenter", "dragOrigin", "dragOffset"],
                styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
                animations: {
                  scaleX: Ei,
                  scaleY: Ei,
                  translateX: yi,
                  translateY: yi,
                  opacity: {
                    type: "tween",
                    duration: 150
                  }
                }
              }
            }),
            ki = function ki(e, t) {
              return Math.max(1, Math.floor((e + 1) / t));
            },
            Ri = function Ri(e, t, n) {
              if (n) {
                var i = e.rect.element.width,
                  r = t.length,
                  o = null;
                if (0 === r || n.top < t[0].rect.element.top) return -1;
                var a = t[0].rect.element,
                  s = a.marginLeft + a.marginRight,
                  l = a.width + s,
                  c = ki(i, l);
                if (1 === c) {
                  for (var d = 0; d < r; d++) {
                    var u = t[d],
                      p = u.rect.outer.top + .5 * u.rect.element.height;
                    if (n.top < p) return d;
                  }
                  return r;
                }
                for (var f = a.marginTop + a.marginBottom, h = a.height + f, m = 0; m < r; m++) {
                  var g = m % c * l,
                    v = Math.floor(m / c) * h,
                    b = v - a.marginTop,
                    w = g + l,
                    y = v + h + a.marginBottom;
                  if (n.top < y && n.top > b) {
                    if (n.left < w) return m;
                    o = m !== r - 1 ? m : null;
                  }
                }
                return null !== o ? o : r;
              }
            },
            Si = {
              height: 0,
              width: 0,
              get getHeight() {
                return this.height;
              },
              set setHeight(e) {
                0 !== this.height && 0 !== e || (this.height = e);
              },
              get getWidth() {
                return this.width;
              },
              set setWidth(e) {
                0 !== this.width && 0 !== e || (this.width = e);
              },
              setDimensions: function setDimensions(e, t) {
                0 !== this.height && 0 !== e || (this.height = e), 0 !== this.width && 0 !== t || (this.width = t);
              }
            },
            Ci = function Ci(e) {
              var t = e.root;
              a(t.element, "role", "list"), t.ref.lastItemSpanwDate = Date.now();
            },
            Ai = function Ai(e) {
              var t = e.root,
                n = e.action,
                i = n.id,
                r = n.index,
                o = n.interactionMethod;
              t.ref.addIndex = r;
              var a = Date.now(),
                s = a,
                l = 1;
              if (o !== Te.NONE) {
                l = 0;
                var c = t.query("GET_ITEM_INSERT_INTERVAL"),
                  d = a - t.ref.lastItemSpanwDate;
                s = d < c ? a + (c - d) : a;
              }
              t.ref.lastItemSpanwDate = s, t.appendChildView(t.createChildView(Oi, {
                spawnDate: s,
                id: i,
                opacity: l,
                interactionMethod: o
              }), r);
            },
            Mi = function Mi(e, t, n) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
              e.dragOffset ? (e.translateX = null, e.translateY = null, e.translateX = e.dragOrigin.x + e.dragOffset.x, e.translateY = e.dragOrigin.y + e.dragOffset.y, e.scaleX = 1.025, e.scaleY = 1.025) : (e.translateX = t, e.translateY = n, Date.now() > e.spawnDate && (0 === e.opacity && xi(e, t, n, i, r), e.scaleX = 1, e.scaleY = 1, e.opacity = 1));
            },
            xi = function xi(e, t, n, i, r) {
              e.interactionMethod === Te.NONE ? (e.translateX = null, e.translateX = t, e.translateY = null, e.translateY = n) : e.interactionMethod === Te.DROP ? (e.translateX = null, e.translateX = t - 20 * i, e.translateY = null, e.translateY = n - 10 * r, e.scaleX = .8, e.scaleY = .8) : e.interactionMethod === Te.BROWSE ? (e.translateY = null, e.translateY = n - 30) : e.interactionMethod === Te.API && (e.translateX = null, e.translateX = t - 30, e.translateY = null);
            },
            Li = function Li(e) {
              var t = e.root,
                n = e.action.id,
                i = t.childViews.find(function (e) {
                  return e.id === n;
                });
              i && (i.scaleX = .9, i.scaleY = .9, i.opacity = 0, i.markedForRemoval = !0);
            },
            Pi = function Pi(e) {
              return e.rect.element.height + .5 * e.rect.element.marginBottom + .5 * e.rect.element.marginTop;
            },
            Ni = function Ni(e) {
              return e.rect.element.width + .5 * e.rect.element.marginLeft + .5 * e.rect.element.marginRight;
            },
            Gi = function Gi(e) {
              var t = e.root,
                n = e.action,
                i = n.id,
                r = n.dragState,
                o = t.query("GET_ITEM", {
                  id: i
                }),
                a = t.childViews.find(function (e) {
                  return e.id === i;
                }),
                s = t.childViews.length,
                l = r.getItemIndex(o);
              if (a) {
                var c = {
                    x: a.dragOrigin.x + a.dragOffset.x + a.dragCenter.x,
                    y: a.dragOrigin.y + a.dragOffset.y + a.dragCenter.y
                  },
                  d = Pi(a),
                  u = Ni(a),
                  p = Math.floor(t.rect.outer.width / u);
                p > s && (p = s);
                var f = Math.floor(s / p + 1);
                Si.setHeight = d * f, Si.setWidth = u * p;
                var h = {
                    y: Math.floor(c.y / d),
                    x: Math.floor(c.x / u),
                    getGridIndex: function getGridIndex() {
                      return c.y > Si.getHeight || c.y < 0 || c.x > Si.getWidth || c.x < 0 ? l : this.y * p + this.x;
                    },
                    getColIndex: function getColIndex() {
                      for (var e = t.query("GET_ACTIVE_ITEMS"), n = t.childViews.filter(function (e) {
                          return e.rect.element.height;
                        }), i = e.map(function (e) {
                          return n.find(function (t) {
                            return t.id === e.id;
                          });
                        }), r = i.findIndex(function (e) {
                          return e === a;
                        }), o = Pi(a), s = i.length, l = s, d = 0, u = 0, p = 0; p < s; p++) if (d = (u = d) + Pi(i[p]), c.y < d) {
                        if (r > p) {
                          if (c.y < u + o) {
                            l = p;
                            break;
                          }
                          continue;
                        }
                        l = p;
                        break;
                      }
                      return l;
                    }
                  },
                  m = p > 1 ? h.getGridIndex() : h.getColIndex();
                t.dispatch("MOVE_ITEM", {
                  query: a,
                  index: m
                });
                var g = r.getIndex();
                if (void 0 === g || g !== m) {
                  if (r.setIndex(m), void 0 === g) return;
                  t.dispatch("DID_REORDER_ITEMS", {
                    items: t.query("GET_ACTIVE_ITEMS"),
                    origin: l,
                    target: m
                  });
                }
              }
            },
            $i = V({
              DID_ADD_ITEM: Ai,
              DID_REMOVE_ITEM: Li,
              DID_DRAG_ITEM: Gi
            }),
            Bi = function Bi(e) {
              var t = e.root,
                n = e.props,
                i = e.actions,
                r = e.shouldOptimize;
              $i({
                root: t,
                props: n,
                actions: i
              });
              var o = n.dragCoordinates,
                a = t.rect.element.width,
                s = t.childViews.filter(function (e) {
                  return e.rect.element.height;
                }),
                l = t.query("GET_ACTIVE_ITEMS").map(function (e) {
                  return s.find(function (t) {
                    return t.id === e.id;
                  });
                }).filter(function (e) {
                  return e;
                }),
                c = o ? Ri(t, l, o) : null,
                d = t.ref.addIndex || null;
              t.ref.addIndex = null;
              var u = 0,
                p = 0,
                f = 0;
              if (0 !== l.length) {
                var h = l[0].rect.element,
                  m = h.marginTop + h.marginBottom,
                  g = h.marginLeft + h.marginRight,
                  v = h.width + g,
                  b = h.height + m,
                  w = ki(a, v);
                if (1 === w) {
                  var y = 0,
                    E = 0;
                  l.forEach(function (e, t) {
                    if (c) {
                      var n = t - c;
                      E = -2 === n ? .25 * -m : -1 === n ? .75 * -m : 0 === n ? .75 * m : 1 === n ? .25 * m : 0;
                    }
                    r && (e.translateX = null, e.translateY = null), e.markedForRemoval || Mi(e, 0, y + E);
                    var i = (e.rect.element.height + m) * (e.markedForRemoval ? e.opacity : 1);
                    y += i;
                  });
                } else {
                  var _ = 0,
                    T = 0;
                  l.forEach(function (e, t) {
                    t === c && (u = 1), t === d && (f += 1), e.markedForRemoval && e.opacity < .5 && (p -= 1);
                    var n = t + f + u + p,
                      i = n % w,
                      o = Math.floor(n / w),
                      a = i * v,
                      s = o * b,
                      l = Math.sign(a - _),
                      h = Math.sign(s - T);
                    _ = a, T = s, e.markedForRemoval || (r && (e.translateX = null, e.translateY = null), Mi(e, a, s, l, h));
                  });
                }
              }
            },
            Fi = function Fi(e, t) {
              return t.filter(function (t) {
                return !t.data || !t.data.id || e.id === t.data.id;
              });
            },
            Vi = B({
              create: Ci,
              write: Bi,
              tag: "ul",
              name: "list",
              didWriteView: function didWriteView(e) {
                var t = e.root;
                t.childViews.filter(function (e) {
                  return e.markedForRemoval && 0 === e.opacity && e.resting;
                }).forEach(function (e) {
                  e._destroy(), t.removeChildView(e);
                });
              },
              filterFrameActionsForChild: Fi,
              mixins: {
                apis: ["dragCoordinates"]
              }
            }),
            Ui = function Ui(e) {
              var t = e.root,
                n = e.props;
              t.ref.list = t.appendChildView(t.createChildView(Vi)), n.dragCoordinates = null, n.overflowing = !1;
            },
            Hi = function Hi(e) {
              var t = e.root,
                n = e.props,
                i = e.action;
              t.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (n.dragCoordinates = {
                left: i.position.scopeLeft - t.ref.list.rect.element.left,
                top: i.position.scopeTop - (t.rect.outer.top + t.rect.element.marginTop + t.rect.element.scrollTop)
              });
            },
            qi = V({
              DID_DRAG: Hi,
              DID_END_DRAG: function DID_END_DRAG(e) {
                e.props.dragCoordinates = null;
              }
            }),
            zi = function zi(e) {
              var t = e.root,
                n = e.props,
                i = e.actions;
              if (qi({
                root: t,
                props: n,
                actions: i
              }), t.ref.list.dragCoordinates = n.dragCoordinates, n.overflowing && !n.overflow && (n.overflowing = !1, t.element.dataset.state = "", t.height = null), n.overflow) {
                var r = Math.round(n.overflow);
                r !== t.height && (n.overflowing = !0, t.element.dataset.state = "overflow", t.height = r);
              }
            },
            Yi = B({
              create: Ui,
              write: zi,
              name: "list-scroller",
              mixins: {
                apis: ["overflow", "dragCoordinates"],
                styles: ["height", "translateY"],
                animations: {
                  translateY: "spring"
                }
              }
            }),
            ji = function ji(e, t, n) {
              n ? a(e, t, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "") : e.removeAttribute(t);
            },
            Xi = function Xi(e) {
              if (e && "" !== e.value) {
                try {
                  e.value = "";
                } catch (e) {}
                if (e.value) {
                  var t = wn("form"),
                    n = e.parentNode,
                    i = e.nextSibling;
                  t.appendChild(e), t.reset(), i ? n.insertBefore(e, i) : n.appendChild(e);
                }
              }
            },
            Wi = function Wi(e) {
              var t = e.root,
                n = e.props;
              t.element.id = "filepond--browser-" + n.id, a(t.element, "name", t.query("GET_NAME")), a(t.element, "aria-controls", "filepond--assistant-" + n.id), a(t.element, "aria-labelledby", "filepond--drop-label-" + n.id), Ki({
                root: t,
                action: {
                  value: t.query("GET_ACCEPTED_FILE_TYPES")
                }
              }), Qi({
                root: t,
                action: {
                  value: t.query("GET_ALLOW_MULTIPLE")
                }
              }), Zi({
                root: t,
                action: {
                  value: t.query("GET_ALLOW_DIRECTORIES_ONLY")
                }
              }), Ji({
                root: t
              }), er({
                root: t,
                action: {
                  value: t.query("GET_REQUIRED")
                }
              }), tr({
                root: t,
                action: {
                  value: t.query("GET_CAPTURE_METHOD")
                }
              }), t.ref.handleChange = function (e) {
                if (t.element.value) {
                  var i = Array.from(t.element.files).map(function (e) {
                    return e._relativePath = e.webkitRelativePath, e;
                  });
                  setTimeout(function () {
                    n.onload(i), Xi(t.element);
                  }, 250);
                }
              }, t.element.addEventListener("change", t.ref.handleChange);
            },
            Ki = function Ki(e) {
              var t = e.root,
                n = e.action;
              t.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && ji(t.element, "accept", !!n.value, n.value ? n.value.join(",") : "");
            },
            Qi = function Qi(e) {
              var t = e.root,
                n = e.action;
              ji(t.element, "multiple", n.value);
            },
            Zi = function Zi(e) {
              var t = e.root,
                n = e.action;
              ji(t.element, "webkitdirectory", n.value);
            },
            Ji = function Ji(e) {
              var t = e.root,
                n = t.query("GET_DISABLED"),
                i = t.query("GET_ALLOW_BROWSE"),
                r = n || !i;
              ji(t.element, "disabled", r);
            },
            er = function er(e) {
              var t = e.root;
              e.action.value ? 0 === t.query("GET_TOTAL_ITEMS") && ji(t.element, "required", !0) : ji(t.element, "required", !1);
            },
            tr = function tr(e) {
              var t = e.root,
                n = e.action;
              ji(t.element, "capture", !!n.value, !0 === n.value ? "" : n.value);
            },
            nr = function nr(e) {
              var t = e.root,
                n = t.element;
              t.query("GET_TOTAL_ITEMS") > 0 ? (ji(n, "required", !1), ji(n, "name", !1)) : (ji(n, "name", !0, t.query("GET_NAME")), t.query("GET_CHECK_VALIDITY") && n.setCustomValidity(""), t.query("GET_REQUIRED") && ji(n, "required", !0));
            },
            ir = function ir(e) {
              var t = e.root;
              t.query("GET_CHECK_VALIDITY") && t.element.setCustomValidity(t.query("GET_LABEL_INVALID_FIELD"));
            },
            rr = B({
              tag: "input",
              name: "browser",
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              attributes: {
                type: "file"
              },
              create: Wi,
              destroy: function destroy(e) {
                var t = e.root;
                t.element.removeEventListener("change", t.ref.handleChange);
              },
              write: V({
                DID_LOAD_ITEM: nr,
                DID_REMOVE_ITEM: nr,
                DID_THROW_ITEM_INVALID: ir,
                DID_SET_DISABLED: Ji,
                DID_SET_ALLOW_BROWSE: Ji,
                DID_SET_ALLOW_DIRECTORIES_ONLY: Zi,
                DID_SET_ALLOW_MULTIPLE: Qi,
                DID_SET_ACCEPTED_FILE_TYPES: Ki,
                DID_SET_CAPTURE_METHOD: tr,
                DID_SET_REQUIRED: er
              })
            }),
            or = {
              ENTER: 13,
              SPACE: 32
            },
            ar = function ar(e) {
              var t = e.root,
                n = e.props,
                i = wn("label");
              a(i, "for", "filepond--browser-" + n.id), a(i, "id", "filepond--drop-label-" + n.id), a(i, "aria-hidden", "true"), t.ref.handleKeyDown = function (e) {
                (e.keyCode === or.ENTER || e.keyCode === or.SPACE) && (e.preventDefault(), t.ref.label.click());
              }, t.ref.handleClick = function (e) {
                e.target === i || i.contains(e.target) || t.ref.label.click();
              }, i.addEventListener("keydown", t.ref.handleKeyDown), t.element.addEventListener("click", t.ref.handleClick), sr(i, n.caption), t.appendChild(i), t.ref.label = i;
            },
            sr = function sr(e, t) {
              e.innerHTML = t;
              var n = e.querySelector(".filepond--label-action");
              return n && a(n, "tabindex", "0"), t;
            },
            lr = B({
              name: "drop-label",
              ignoreRect: !0,
              create: ar,
              destroy: function destroy(e) {
                var t = e.root;
                t.ref.label.addEventListener("keydown", t.ref.handleKeyDown), t.element.removeEventListener("click", t.ref.handleClick);
              },
              write: V({
                DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(e) {
                  var t = e.root,
                    n = e.action;
                  sr(t.ref.label, n.value);
                }
              }),
              mixins: {
                styles: ["opacity", "translateX", "translateY"],
                animations: {
                  opacity: {
                    type: "tween",
                    duration: 150
                  },
                  translateX: "spring",
                  translateY: "spring"
                }
              }
            }),
            cr = B({
              name: "drip-blob",
              ignoreRect: !0,
              mixins: {
                styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
                animations: {
                  scaleX: "spring",
                  scaleY: "spring",
                  translateX: "spring",
                  translateY: "spring",
                  opacity: {
                    type: "tween",
                    duration: 250
                  }
                }
              }
            }),
            dr = function dr(e) {
              var t = e.root,
                n = .5 * t.rect.element.width,
                i = .5 * t.rect.element.height;
              t.ref.blob = t.appendChildView(t.createChildView(cr, {
                opacity: 0,
                scaleX: 2.5,
                scaleY: 2.5,
                translateX: n,
                translateY: i
              }));
            },
            ur = function ur(e) {
              var t = e.root,
                n = e.action;
              t.ref.blob ? (t.ref.blob.translateX = n.position.scopeLeft, t.ref.blob.translateY = n.position.scopeTop, t.ref.blob.scaleX = 1, t.ref.blob.scaleY = 1, t.ref.blob.opacity = 1) : dr({
                root: t
              });
            },
            pr = function pr(e) {
              var t = e.root;
              t.ref.blob && (t.ref.blob.opacity = 0);
            },
            fr = function fr(e) {
              var t = e.root;
              t.ref.blob && (t.ref.blob.scaleX = 2.5, t.ref.blob.scaleY = 2.5, t.ref.blob.opacity = 0);
            },
            hr = function hr(e) {
              var t = e.root,
                n = e.props,
                i = e.actions;
              mr({
                root: t,
                props: n,
                actions: i
              });
              var r = t.ref.blob;
              0 === i.length && r && 0 === r.opacity && (t.removeChildView(r), t.ref.blob = null);
            },
            mr = V({
              DID_DRAG: ur,
              DID_DROP: fr,
              DID_END_DRAG: pr
            }),
            gr = B({
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              name: "drip",
              write: hr
            }),
            vr = function vr(e, t) {
              try {
                var n = new DataTransfer();
                t.forEach(function (e) {
                  e instanceof File ? n.items.add(e) : n.items.add(new File([e], e.name, {
                    type: e.type
                  }));
                }), e.files = n.files;
              } catch (e) {
                return !1;
              }
              return !0;
            },
            br = function br(e) {
              return e.root.ref.fields = {};
            },
            wr = function wr(e, t) {
              return e.ref.fields[t];
            },
            yr = function yr(e) {
              e.query("GET_ACTIVE_ITEMS").forEach(function (t) {
                e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
              });
            },
            Er = function Er(e) {
              var t = e.root;
              return yr(t);
            },
            _r = function _r(e) {
              var t = e.root,
                n = e.action,
                i = !(t.query("GET_ITEM", n.id).origin === Ve.LOCAL) && t.query("SHOULD_UPDATE_FILE_INPUT"),
                r = wn("input");
              r.type = i ? "file" : "hidden", r.name = t.query("GET_NAME"), r.disabled = t.query("GET_DISABLED"), t.ref.fields[n.id] = r, yr(t);
            },
            Tr = function Tr(e) {
              var t = e.root,
                n = e.action,
                i = wr(t, n.id);
              if (i && (null !== n.serverFileReference && (i.value = n.serverFileReference), t.query("SHOULD_UPDATE_FILE_INPUT"))) {
                var r = t.query("GET_ITEM", n.id);
                vr(i, [r.file]);
              }
            },
            Dr = function Dr(e) {
              var t = e.root,
                n = e.action;
              t.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(function () {
                var e = wr(t, n.id);
                e && vr(e, [n.file]);
              }, 0);
            },
            Ir = function Ir(e) {
              var t = e.root;
              t.element.disabled = t.query("GET_DISABLED");
            },
            Or = function Or(e) {
              var t = e.root,
                n = e.action,
                i = wr(t, n.id);
              i && (i.parentNode && i.parentNode.removeChild(i), delete t.ref.fields[n.id]);
            },
            kr = function kr(e) {
              var t = e.root,
                n = e.action,
                i = wr(t, n.id);
              i && (null === n.value ? i.removeAttribute("value") : i.value = n.value, yr(t));
            },
            Rr = V({
              DID_SET_DISABLED: Ir,
              DID_ADD_ITEM: _r,
              DID_LOAD_ITEM: Tr,
              DID_REMOVE_ITEM: Or,
              DID_DEFINE_VALUE: kr,
              DID_PREPARE_OUTPUT: Dr,
              DID_REORDER_ITEMS: Er,
              DID_SORT_ITEMS: Er
            }),
            Sr = B({
              tag: "fieldset",
              name: "data",
              create: br,
              write: Rr,
              ignoreRect: !0
            }),
            Cr = function Cr(e) {
              return "getRootNode" in e ? e.getRootNode() : document;
            },
            Ar = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"],
            Mr = ["css", "csv", "html", "txt"],
            xr = {
              zip: "zip|compressed",
              epub: "application/epub+zip"
            },
            Lr = function Lr() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return e = e.toLowerCase(), Ar.includes(e) ? "image/" + ("jpg" === e ? "jpeg" : "svg" === e ? "svg+xml" : e) : Mr.includes(e) ? "text/" + e : xr[e] || "";
            },
            Pr = function Pr(e) {
              return new Promise(function (t, n) {
                var i = zr(e);
                if (i.length && !Nr(e)) return t(i);
                Gr(e).then(t);
              });
            },
            Nr = function Nr(e) {
              return !!e.files && e.files.length > 0;
            },
            Gr = function Gr(e) {
              return new Promise(function (t, n) {
                var i = (e.items ? Array.from(e.items) : []).filter(function (e) {
                  return $r(e);
                }).map(function (e) {
                  return Br(e);
                });
                i.length ? Promise.all(i).then(function (e) {
                  var n = [];
                  e.forEach(function (e) {
                    n.push.apply(n, e);
                  }), t(n.filter(function (e) {
                    return e;
                  }).map(function (e) {
                    return e._relativePath || (e._relativePath = e.webkitRelativePath), e;
                  }));
                })["catch"](console.error) : t(e.files ? Array.from(e.files) : []);
              });
            },
            $r = function $r(e) {
              if (Hr(e)) {
                var t = qr(e);
                if (t) return t.isFile || t.isDirectory;
              }
              return "file" === e.kind;
            },
            Br = function Br(e) {
              return new Promise(function (t, n) {
                Ur(e) ? Fr(qr(e)).then(t)["catch"](n) : t([e.getAsFile()]);
              });
            },
            Fr = function Fr(e) {
              return new Promise(function (t, n) {
                var i = [],
                  r = 0,
                  o = 0,
                  a = function a() {
                    0 === o && 0 === r && t(i);
                  },
                  s = function e(t) {
                    r++;
                    var s = t.createReader(),
                      l = function t() {
                        s.readEntries(function (n) {
                          if (0 === n.length) return r--, void a();
                          n.forEach(function (t) {
                            t.isDirectory ? e(t) : (o++, t.file(function (e) {
                              var n = Vr(e);
                              t.fullPath && (n._relativePath = t.fullPath), i.push(n), o--, a();
                            }));
                          }), t();
                        }, n);
                      };
                    l();
                  };
                s(e);
              });
            },
            Vr = function Vr(e) {
              if (e.type.length) return e;
              var t = e.lastModifiedDate,
                n = e.name,
                i = Lr(yt(e.name));
              return i.length ? ((e = e.slice(0, e.size, i)).name = n, e.lastModifiedDate = t, e) : e;
            },
            Ur = function Ur(e) {
              return Hr(e) && (qr(e) || {}).isDirectory;
            },
            Hr = function Hr(e) {
              return "webkitGetAsEntry" in e;
            },
            qr = function qr(e) {
              return e.webkitGetAsEntry();
            },
            zr = function zr(e) {
              var t = [];
              try {
                if ((t = jr(e)).length) return t;
                t = Yr(e);
              } catch (e) {}
              return t;
            },
            Yr = function Yr(e) {
              var t = e.getData("url");
              return "string" == typeof t && t.length ? [t] : [];
            },
            jr = function jr(e) {
              var t = e.getData("text/html");
              if ("string" == typeof t && t.length) {
                var n = t.match(/src\s*=\s*"(.+?)"/);
                if (n) return [n[1]];
              }
              return [];
            },
            Xr = [],
            Wr = function Wr(e) {
              return {
                pageLeft: e.pageX,
                pageTop: e.pageY,
                scopeLeft: e.offsetX || e.layerX,
                scopeTop: e.offsetY || e.layerY
              };
            },
            Kr = function Kr(e, t, n) {
              var i = Qr(t),
                r = {
                  element: e,
                  filterElement: n,
                  state: null,
                  ondrop: function ondrop() {},
                  onenter: function onenter() {},
                  ondrag: function ondrag() {},
                  onexit: function onexit() {},
                  onload: function onload() {},
                  allowdrop: function allowdrop() {}
                };
              return r.destroy = i.addListener(r), r;
            },
            Qr = function Qr(e) {
              var t = Xr.find(function (t) {
                return t.element === e;
              });
              if (t) return t;
              var n = Zr(e);
              return Xr.push(n), n;
            },
            Zr = function Zr(e) {
              var t = [],
                n = {
                  dragenter: io,
                  dragover: ro,
                  dragleave: ao,
                  drop: oo
                },
                i = {};
              r(n, function (n, r) {
                i[n] = r(e, t), e.addEventListener(n, i[n], !1);
              });
              var o = {
                element: e,
                addListener: function addListener(a) {
                  return t.push(a), function () {
                    t.splice(t.indexOf(a), 1), 0 === t.length && (Xr.splice(Xr.indexOf(o), 1), r(n, function (t) {
                      e.removeEventListener(t, i[t], !1);
                    }));
                  };
                }
              };
              return o;
            },
            Jr = function Jr(e, t) {
              return "elementFromPoint" in e || (e = document), e.elementFromPoint(t.x, t.y);
            },
            eo = function eo(e, t) {
              var n = Cr(t),
                i = Jr(n, {
                  x: e.pageX - window.pageXOffset,
                  y: e.pageY - window.pageYOffset
                });
              return i === t || t.contains(i);
            },
            to = null,
            no = function no(e, t) {
              try {
                e.dropEffect = t;
              } catch (e) {}
            },
            io = function io(e, t) {
              return function (e) {
                e.preventDefault(), to = e.target, t.forEach(function (t) {
                  var n = t.element,
                    i = t.onenter;
                  eo(e, n) && (t.state = "enter", i(Wr(e)));
                });
              };
            },
            ro = function ro(e, t) {
              return function (e) {
                e.preventDefault();
                var n = e.dataTransfer;
                Pr(n).then(function (i) {
                  var r = !1;
                  t.some(function (t) {
                    var o = t.filterElement,
                      a = t.element,
                      s = t.onenter,
                      l = t.onexit,
                      c = t.ondrag,
                      d = t.allowdrop;
                    no(n, "copy");
                    var u = d(i);
                    if (u) {
                      if (eo(e, a)) {
                        if (r = !0, null === t.state) return t.state = "enter", void s(Wr(e));
                        if (t.state = "over", o && !u) return void no(n, "none");
                        c(Wr(e));
                      } else o && !r && no(n, "none"), t.state && (t.state = null, l(Wr(e)));
                    } else no(n, "none");
                  });
                });
              };
            },
            oo = function oo(e, t) {
              return function (e) {
                e.preventDefault();
                var n = e.dataTransfer;
                Pr(n).then(function (n) {
                  t.forEach(function (t) {
                    var i = t.filterElement,
                      r = t.element,
                      o = t.ondrop,
                      a = t.onexit,
                      s = t.allowdrop;
                    if (t.state = null, !i || eo(e, r)) return s(n) ? void o(Wr(e), n) : a(Wr(e));
                  });
                });
              };
            },
            ao = function ao(e, t) {
              return function (e) {
                to === e.target && t.forEach(function (t) {
                  var n = t.onexit;
                  t.state = null, n(Wr(e));
                });
              };
            },
            so = function so(e, t, n) {
              e.classList.add("filepond--hopper");
              var i = n.catchesDropsOnPage,
                r = n.requiresDropOnElement,
                o = n.filterItems,
                a = void 0 === o ? function (e) {
                  return e;
                } : o,
                s = Kr(e, i ? document.documentElement : e, r),
                l = "",
                c = "";
              s.allowdrop = function (e) {
                return t(a(e));
              }, s.ondrop = function (e, n) {
                var i = a(n);
                t(i) ? (c = "drag-drop", d.onload(i, e)) : d.ondragend(e);
              }, s.ondrag = function (e) {
                d.ondrag(e);
              }, s.onenter = function (e) {
                c = "drag-over", d.ondragstart(e);
              }, s.onexit = function (e) {
                c = "drag-exit", d.ondragend(e);
              };
              var d = {
                updateHopperState: function updateHopperState() {
                  l !== c && (e.dataset.hopperState = c, l = c);
                },
                onload: function onload() {},
                ondragstart: function ondragstart() {},
                ondrag: function ondrag() {},
                ondragend: function ondragend() {},
                destroy: function destroy() {
                  s.destroy();
                }
              };
              return d;
            },
            lo = !1,
            co = [],
            uo = function uo(e) {
              var t = document.activeElement;
              if (t && /textarea|input/i.test(t.nodeName)) {
                for (var n = !1, i = t; i !== document.body;) {
                  if (i.classList.contains("filepond--root")) {
                    n = !0;
                    break;
                  }
                  i = i.parentNode;
                }
                if (!n) return;
              }
              Pr(e.clipboardData).then(function (e) {
                e.length && co.forEach(function (t) {
                  return t(e);
                });
              });
            },
            po = function po(e) {
              co.includes(e) || (co.push(e), lo || (lo = !0, document.addEventListener("paste", uo)));
            },
            fo = function fo(e) {
              xe(co, co.indexOf(e)), 0 === co.length && (document.removeEventListener("paste", uo), lo = !1);
            },
            ho = function ho() {
              var e = function e(_e14) {
                  t.onload(_e14);
                },
                t = {
                  destroy: function destroy() {
                    fo(e);
                  },
                  onload: function onload() {}
                };
              return po(e), t;
            },
            mo = function mo(e) {
              var t = e.root,
                n = e.props;
              t.element.id = "filepond--assistant-" + n.id, a(t.element, "role", "status"), a(t.element, "aria-live", "polite"), a(t.element, "aria-relevant", "additions");
            },
            go = null,
            vo = null,
            bo = [],
            wo = function wo(e, t) {
              e.element.textContent = t;
            },
            yo = function yo(e) {
              e.element.textContent = "";
            },
            Eo = function Eo(e, t, n) {
              var i = e.query("GET_TOTAL_ITEMS");
              wo(e, n + " " + t + ", " + i + " " + (1 === i ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL"))), clearTimeout(vo), vo = setTimeout(function () {
                yo(e);
              }, 1500);
            },
            _o = function _o(e) {
              return e.element.parentNode.contains(document.activeElement);
            },
            To = function To(e) {
              var t = e.root,
                n = e.action;
              if (_o(t)) {
                t.element.textContent = "";
                var i = t.query("GET_ITEM", n.id);
                bo.push(i.filename), clearTimeout(go), go = setTimeout(function () {
                  Eo(t, bo.join(", "), t.query("GET_LABEL_FILE_ADDED")), bo.length = 0;
                }, 750);
              }
            },
            Do = function Do(e) {
              var t = e.root,
                n = e.action;
              if (_o(t)) {
                var i = n.item;
                Eo(t, i.filename, t.query("GET_LABEL_FILE_REMOVED"));
              }
            },
            Io = function Io(e) {
              var t = e.root,
                n = e.action,
                i = t.query("GET_ITEM", n.id).filename,
                r = t.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
              wo(t, i + " " + r);
            },
            Oo = function Oo(e) {
              var t = e.root,
                n = e.action,
                i = t.query("GET_ITEM", n.id).filename,
                r = t.query("GET_LABEL_FILE_PROCESSING_ABORTED");
              wo(t, i + " " + r);
            },
            ko = function ko(e) {
              var t = e.root,
                n = e.action,
                i = t.query("GET_ITEM", n.id).filename;
              wo(t, n.status.main + " " + i + " " + n.status.sub);
            },
            Ro = B({
              create: mo,
              ignoreRect: !0,
              ignoreRectUpdate: !0,
              write: V({
                DID_LOAD_ITEM: To,
                DID_REMOVE_ITEM: Do,
                DID_COMPLETE_ITEM_PROCESSING: Io,
                DID_ABORT_ITEM_PROCESSING: Oo,
                DID_REVERT_ITEM_PROCESSING: Oo,
                DID_THROW_ITEM_REMOVE_ERROR: ko,
                DID_THROW_ITEM_LOAD_ERROR: ko,
                DID_THROW_ITEM_INVALID: ko,
                DID_THROW_ITEM_PROCESSING_ERROR: ko
              }),
              tag: "span",
              name: "assistant"
            }),
            So = function So(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
              return e.replace(new RegExp(t + ".", "g"), function (e) {
                return e.charAt(1).toUpperCase();
              });
            },
            Co = function Co(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = Date.now(),
                r = null;
              return function () {
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                clearTimeout(r);
                var l = Date.now() - i,
                  c = function c() {
                    i = Date.now(), e.apply(void 0, a);
                  };
                l < t ? n || (r = setTimeout(c, t - l)) : c();
              };
            },
            Ao = 1e6,
            Mo = function Mo(e) {
              return e.preventDefault();
            },
            xo = function xo(e) {
              var t = e.root,
                n = e.props,
                i = t.query("GET_ID");
              i && (t.element.id = i);
              var r = t.query("GET_CLASS_NAME");
              r && r.split(" ").filter(function (e) {
                return e.length;
              }).forEach(function (e) {
                t.element.classList.add(e);
              }), t.ref.label = t.appendChildView(t.createChildView(lr, Object.assign({}, n, {
                translateY: null,
                caption: t.query("GET_LABEL_IDLE")
              }))), t.ref.list = t.appendChildView(t.createChildView(Yi, {
                translateY: null
              })), t.ref.panel = t.appendChildView(t.createChildView(bi, {
                name: "panel-root"
              })), t.ref.assistant = t.appendChildView(t.createChildView(Ro, Object.assign({}, n))), t.ref.data = t.appendChildView(t.createChildView(Sr, Object.assign({}, n))), t.ref.measure = wn("div"), t.ref.measure.style.height = "100%", t.element.appendChild(t.ref.measure), t.ref.bounds = null, t.query("GET_STYLES").filter(function (e) {
                return !z(e.value);
              }).map(function (e) {
                var n = e.name,
                  i = e.value;
                t.element.dataset[n] = i;
              }), t.ref.widthPrevious = null, t.ref.widthUpdated = Co(function () {
                t.ref.updateHistory = [], t.dispatch("DID_RESIZE_ROOT");
              }, 250), t.ref.previousAspectRatio = null, t.ref.updateHistory = [];
              var o = window.matchMedia("(pointer: fine) and (hover: hover)").matches,
                a = ("PointerEvent" in window);
              t.query("GET_ALLOW_REORDER") && a && !o && (t.element.addEventListener("touchmove", Mo, {
                passive: !1
              }), t.element.addEventListener("gesturestart", Mo));
              var s = t.query("GET_CREDITS");
              if (2 === s.length) {
                var l = document.createElement("a");
                l.className = "filepond--credits", l.setAttribute("aria-hidden", "true"), l.href = s[0], l.tabindex = -1, l.target = "_blank", l.rel = "noopener noreferrer", l.textContent = s[1], t.element.appendChild(l), t.ref.credits = l;
              }
            },
            Lo = function Lo(e) {
              var t = e.root,
                n = e.props,
                i = e.actions;
              if (Ho({
                root: t,
                props: n,
                actions: i
              }), i.filter(function (e) {
                return /^DID_SET_STYLE_/.test(e.type);
              }).filter(function (e) {
                return !z(e.data.value);
              }).map(function (e) {
                var n = e.type,
                  i = e.data,
                  r = So(n.substring(8).toLowerCase(), "_");
                t.element.dataset[r] = i.value, t.invalidateLayout();
              }), !t.rect.element.hidden) {
                t.rect.element.width !== t.ref.widthPrevious && (t.ref.widthPrevious = t.rect.element.width, t.ref.widthUpdated());
                var r = t.ref.bounds;
                r || (r = t.ref.bounds = Go(t), t.element.removeChild(t.ref.measure), t.ref.measure = null);
                var o = t.ref,
                  a = o.hopper,
                  s = o.label,
                  l = o.list,
                  c = o.panel;
                a && a.updateHopperState();
                var d = t.query("GET_PANEL_ASPECT_RATIO"),
                  u = t.query("GET_ALLOW_MULTIPLE"),
                  p = t.query("GET_TOTAL_ITEMS"),
                  f = p === (u ? t.query("GET_MAX_FILES") || Ao : 1),
                  h = i.find(function (e) {
                    return "DID_ADD_ITEM" === e.type;
                  });
                if (f && h) {
                  var m = h.data.interactionMethod;
                  s.opacity = 0, u ? s.translateY = -40 : m === Te.API ? s.translateX = 40 : m === Te.BROWSE ? s.translateY = 40 : s.translateY = 30;
                } else f || (s.opacity = 1, s.translateX = 0, s.translateY = 0);
                var g = Po(t),
                  v = No(t),
                  b = s.rect.element.height,
                  w = !u || f ? 0 : b,
                  y = f ? l.rect.element.marginTop : 0,
                  E = 0 === p ? 0 : l.rect.element.marginBottom,
                  _ = w + y + v.visual + E,
                  T = w + y + v.bounds + E;
                if (l.translateY = Math.max(0, w - l.rect.element.marginTop) - g.top, d) {
                  var D = t.rect.element.width,
                    I = D * d;
                  d !== t.ref.previousAspectRatio && (t.ref.previousAspectRatio = d, t.ref.updateHistory = []);
                  var O = t.ref.updateHistory;
                  O.push(D);
                  var k = 2;
                  if (O.length > 2 * k) for (var R = O.length, S = R - 10, C = 0, A = R; A >= S; A--) if (O[A] === O[A - 2] && C++, C >= k) return;
                  c.scalable = !1, c.height = I;
                  var M = I - w - (E - g.bottom) - (f ? y : 0);
                  v.visual > M ? l.overflow = M : l.overflow = null, t.height = I;
                } else if (r.fixedHeight) {
                  c.scalable = !1;
                  var x = r.fixedHeight - w - (E - g.bottom) - (f ? y : 0);
                  v.visual > x ? l.overflow = x : l.overflow = null;
                } else if (r.cappedHeight) {
                  var L = _ >= r.cappedHeight,
                    P = Math.min(r.cappedHeight, _);
                  c.scalable = !0, c.height = L ? P : P - g.top - g.bottom;
                  var N = P - w - (E - g.bottom) - (f ? y : 0);
                  _ > r.cappedHeight && v.visual > N ? l.overflow = N : l.overflow = null, t.height = Math.min(r.cappedHeight, T - g.top - g.bottom);
                } else {
                  var G = p > 0 ? g.top + g.bottom : 0;
                  c.scalable = !0, c.height = Math.max(b, _ - G), t.height = Math.max(b, T - G);
                }
                t.ref.credits && c.heightCurrent && (t.ref.credits.style.transform = "translateY(" + c.heightCurrent + "px)");
              }
            },
            Po = function Po(e) {
              var t = e.ref.list.childViews[0].childViews[0];
              return t ? {
                top: t.rect.element.marginTop,
                bottom: t.rect.element.marginBottom
              } : {
                top: 0,
                bottom: 0
              };
            },
            No = function No(e) {
              var t = 0,
                n = 0,
                i = e.ref.list,
                r = i.childViews[0],
                o = r.childViews.filter(function (e) {
                  return e.rect.element.height;
                }),
                a = e.query("GET_ACTIVE_ITEMS").map(function (e) {
                  return o.find(function (t) {
                    return t.id === e.id;
                  });
                }).filter(function (e) {
                  return e;
                });
              if (0 === a.length) return {
                visual: t,
                bounds: n
              };
              var s = r.rect.element.width,
                l = Ri(r, a, i.dragCoordinates),
                c = a[0].rect.element,
                d = c.marginTop + c.marginBottom,
                u = c.marginLeft + c.marginRight,
                p = c.width + u,
                f = c.height + d,
                h = void 0 !== l && l >= 0 ? 1 : 0,
                m = a.find(function (e) {
                  return e.markedForRemoval && e.opacity < .45;
                }) ? -1 : 0,
                g = a.length + h + m,
                v = ki(s, p);
              return 1 === v ? a.forEach(function (e) {
                var i = e.rect.element.height + d;
                n += i, t += i * e.opacity;
              }) : (n = Math.ceil(g / v) * f, t = n), {
                visual: t,
                bounds: n
              };
            },
            Go = function Go(e) {
              var t = e.ref.measureHeight || null;
              return {
                cappedHeight: parseInt(e.style.maxHeight, 10) || null,
                fixedHeight: 0 === t ? null : t
              };
            },
            $o = function $o(e, t) {
              var n = e.query("GET_ALLOW_REPLACE"),
                i = e.query("GET_ALLOW_MULTIPLE"),
                r = e.query("GET_TOTAL_ITEMS"),
                o = e.query("GET_MAX_FILES"),
                a = t.length;
              return !i && a > 1 ? (e.dispatch("DID_THROW_MAX_FILES", {
                source: t,
                error: Ft("warning", 0, "Max files")
              }), !0) : !(!i && n || !(te(o = i ? o : 1) && r + a > o) || (e.dispatch("DID_THROW_MAX_FILES", {
                source: t,
                error: Ft("warning", 0, "Max files")
              }), 0));
            },
            Bo = function Bo(e, t, n) {
              var i = e.childViews[0];
              return Ri(i, t, {
                left: n.scopeLeft - i.rect.element.left,
                top: n.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
              });
            },
            Fo = function Fo(e) {
              var t = e.query("GET_ALLOW_DROP"),
                n = e.query("GET_DISABLED"),
                i = t && !n;
              if (i && !e.ref.hopper) {
                var r = so(e.element, function (t) {
                  var n = e.query("GET_BEFORE_DROP_FILE") || function () {
                    return !0;
                  };
                  return !e.query("GET_DROP_VALIDATION") || t.every(function (t) {
                    return Xe("ALLOW_HOPPER_ITEM", t, {
                      query: e.query
                    }).every(function (e) {
                      return !0 === e;
                    }) && n(t);
                  });
                }, {
                  filterItems: function filterItems(t) {
                    var n = e.query("GET_IGNORED_FILES");
                    return t.filter(function (e) {
                      return !tn(e) || !n.includes(e.name.toLowerCase());
                    });
                  },
                  catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
                  requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT")
                });
                r.onload = function (t, n) {
                  var i = e.ref.list.childViews[0].childViews.filter(function (e) {
                      return e.rect.element.height;
                    }),
                    r = e.query("GET_ACTIVE_ITEMS").map(function (e) {
                      return i.find(function (t) {
                        return t.id === e.id;
                      });
                    }).filter(function (e) {
                      return e;
                    });
                  je("ADD_ITEMS", t, {
                    dispatch: e.dispatch
                  }).then(function (t) {
                    if ($o(e, t)) return !1;
                    e.dispatch("ADD_ITEMS", {
                      items: t,
                      index: Bo(e.ref.list, r, n),
                      interactionMethod: Te.DROP
                    });
                  }), e.dispatch("DID_DROP", {
                    position: n
                  }), e.dispatch("DID_END_DRAG", {
                    position: n
                  });
                }, r.ondragstart = function (t) {
                  e.dispatch("DID_START_DRAG", {
                    position: t
                  });
                }, r.ondrag = Co(function (t) {
                  e.dispatch("DID_DRAG", {
                    position: t
                  });
                }), r.ondragend = function (t) {
                  e.dispatch("DID_END_DRAG", {
                    position: t
                  });
                }, e.ref.hopper = r, e.ref.drip = e.appendChildView(e.createChildView(gr));
              } else !i && e.ref.hopper && (e.ref.hopper.destroy(), e.ref.hopper = null, e.removeChildView(e.ref.drip));
            },
            Vo = function Vo(e, t) {
              var n = e.query("GET_ALLOW_BROWSE"),
                i = e.query("GET_DISABLED"),
                r = n && !i;
              r && !e.ref.browser ? e.ref.browser = e.appendChildView(e.createChildView(rr, Object.assign({}, t, {
                onload: function onload(t) {
                  je("ADD_ITEMS", t, {
                    dispatch: e.dispatch
                  }).then(function (t) {
                    if ($o(e, t)) return !1;
                    e.dispatch("ADD_ITEMS", {
                      items: t,
                      index: -1,
                      interactionMethod: Te.BROWSE
                    });
                  });
                }
              })), 0) : !r && e.ref.browser && (e.removeChildView(e.ref.browser), e.ref.browser = null);
            },
            Uo = function Uo(e) {
              var t = e.query("GET_ALLOW_PASTE"),
                n = e.query("GET_DISABLED"),
                i = t && !n;
              i && !e.ref.paster ? (e.ref.paster = ho(), e.ref.paster.onload = function (t) {
                je("ADD_ITEMS", t, {
                  dispatch: e.dispatch
                }).then(function (t) {
                  if ($o(e, t)) return !1;
                  e.dispatch("ADD_ITEMS", {
                    items: t,
                    index: -1,
                    interactionMethod: Te.PASTE
                  });
                });
              }) : !i && e.ref.paster && (e.ref.paster.destroy(), e.ref.paster = null);
            },
            Ho = V({
              DID_SET_ALLOW_BROWSE: function DID_SET_ALLOW_BROWSE(e) {
                var t = e.root,
                  n = e.props;
                Vo(t, n);
              },
              DID_SET_ALLOW_DROP: function DID_SET_ALLOW_DROP(e) {
                var t = e.root;
                Fo(t);
              },
              DID_SET_ALLOW_PASTE: function DID_SET_ALLOW_PASTE(e) {
                var t = e.root;
                Uo(t);
              },
              DID_SET_DISABLED: function DID_SET_DISABLED(e) {
                var t = e.root,
                  n = e.props;
                Fo(t), Uo(t), Vo(t, n), t.query("GET_DISABLED") ? t.element.dataset.disabled = "disabled" : t.element.removeAttribute("data-disabled");
              }
            }),
            qo = B({
              name: "root",
              read: function read(e) {
                var t = e.root;
                t.ref.measure && (t.ref.measureHeight = t.ref.measure.offsetHeight);
              },
              create: xo,
              write: Lo,
              destroy: function destroy(e) {
                var t = e.root;
                t.ref.paster && t.ref.paster.destroy(), t.ref.hopper && t.ref.hopper.destroy(), t.element.removeEventListener("touchmove", Mo), t.element.removeEventListener("gesturestart", Mo);
              },
              mixins: {
                styles: ["height"]
              }
            }),
            zo = function zo() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = null,
                i = Qe(),
                r = n(be(i), [ft, _e(i)], [gn, Ee(i)]);
              r.dispatch("SET_OPTIONS", {
                options: e
              });
              var a = function a() {
                document.hidden || r.dispatch("KICK");
              };
              document.addEventListener("visibilitychange", a);
              var s = null,
                l = !1,
                c = !1,
                d = null,
                u = null,
                p = function p() {
                  l || (l = !0), clearTimeout(s), s = setTimeout(function () {
                    l = !1, d = null, u = null, c && (c = !1, r.dispatch("DID_STOP_RESIZE"));
                  }, 500);
                };
              window.addEventListener("resize", p);
              var f = qo(r, {
                  id: De()
                }),
                h = !1,
                m = !1,
                g = {
                  _read: function _read() {
                    l && (u = window.innerWidth, d || (d = u), c || u === d || (r.dispatch("DID_START_RESIZE"), c = !0)), m && h && (h = null === f.element.offsetParent), h || (f._read(), m = f.rect.element.hidden);
                  },
                  _write: function _write(e) {
                    var t = r.processActionQueue().filter(function (e) {
                      return !/^SET_/.test(e.type);
                    });
                    h && !t.length || (E(t), h = f._write(e, t, c), Be(r.query("GET_ITEMS")), h && r.processDispatchQueue());
                  }
                },
                v = function v(e) {
                  return function (t) {
                    var n = {
                      type: e
                    };
                    if (!t) return n;
                    if (t.hasOwnProperty("error") && (n.error = t.error ? Object.assign({}, t.error) : null), t.status && (n.status = Object.assign({}, t.status)), t.file && (n.output = t.file), t.source) n.file = t.source;else if (t.item || t.id) {
                      var i = t.item ? t.item : r.query("GET_ITEM", t.id);
                      n.file = i ? $e(i) : null;
                    }
                    return t.items && (n.items = t.items.map($e)), /progress/.test(e) && (n.progress = t.progress), t.hasOwnProperty("origin") && t.hasOwnProperty("target") && (n.origin = t.origin, n.target = t.target), n;
                  };
                },
                b = {
                  DID_DESTROY: v("destroy"),
                  DID_INIT: v("init"),
                  DID_THROW_MAX_FILES: v("warning"),
                  DID_INIT_ITEM: v("initfile"),
                  DID_START_ITEM_LOAD: v("addfilestart"),
                  DID_UPDATE_ITEM_LOAD_PROGRESS: v("addfileprogress"),
                  DID_LOAD_ITEM: v("addfile"),
                  DID_THROW_ITEM_INVALID: [v("error"), v("addfile")],
                  DID_THROW_ITEM_LOAD_ERROR: [v("error"), v("addfile")],
                  DID_THROW_ITEM_REMOVE_ERROR: [v("error"), v("removefile")],
                  DID_PREPARE_OUTPUT: v("preparefile"),
                  DID_START_ITEM_PROCESSING: v("processfilestart"),
                  DID_UPDATE_ITEM_PROCESS_PROGRESS: v("processfileprogress"),
                  DID_ABORT_ITEM_PROCESSING: v("processfileabort"),
                  DID_COMPLETE_ITEM_PROCESSING: v("processfile"),
                  DID_COMPLETE_ITEM_PROCESSING_ALL: v("processfiles"),
                  DID_REVERT_ITEM_PROCESSING: v("processfilerevert"),
                  DID_THROW_ITEM_PROCESSING_ERROR: [v("error"), v("processfile")],
                  DID_REMOVE_ITEM: v("removefile"),
                  DID_UPDATE_ITEMS: v("updatefiles"),
                  DID_ACTIVATE_ITEM: v("activatefile"),
                  DID_REORDER_ITEMS: v("reorderfiles")
                },
                w = function w(e) {
                  var t = Object.assign({
                    pond: L
                  }, e);
                  delete t.type, f.element.dispatchEvent(new CustomEvent("FilePond:" + e.type, {
                    detail: t,
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0
                  }));
                  var n = [];
                  e.hasOwnProperty("error") && n.push(e.error), e.hasOwnProperty("file") && n.push(e.file);
                  var i = ["type", "error", "file"];
                  Object.keys(e).filter(function (e) {
                    return !i.includes(e);
                  }).forEach(function (t) {
                    return n.push(e[t]);
                  }), L.fire.apply(L, [e.type].concat(n));
                  var o = r.query("GET_ON" + e.type.toUpperCase());
                  o && o.apply(void 0, n);
                },
                E = function E(e) {
                  e.length && e.filter(function (e) {
                    return b[e.type];
                  }).forEach(function (e) {
                    var t = b[e.type];
                    (Array.isArray(t) ? t : [t]).forEach(function (t) {
                      "DID_INIT_ITEM" === e.type ? w(t(e.data)) : setTimeout(function () {
                        w(t(e.data));
                      }, 0);
                    });
                  });
                },
                _ = function _(e) {
                  return r.dispatch("SET_OPTIONS", {
                    options: e
                  });
                },
                T = function T(e) {
                  return r.query("GET_ACTIVE_ITEM", e);
                },
                D = function D(e) {
                  return new Promise(function (t, n) {
                    r.dispatch("REQUEST_ITEM_PREPARE", {
                      query: e,
                      success: function success(e) {
                        t(e);
                      },
                      failure: function failure(e) {
                        n(e);
                      }
                    });
                  });
                },
                I = function I(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return new Promise(function (n, i) {
                    R([{
                      source: e,
                      options: t
                    }], {
                      index: t.index
                    }).then(function (e) {
                      return n(e && e[0]);
                    })["catch"](i);
                  });
                },
                O = function O(e) {
                  return e.file && e.id;
                },
                k = function k(e, t) {
                  return "object" != _typeof(e) || O(e) || t || (t = e, e = void 0), r.dispatch("REMOVE_ITEM", Object.assign({}, t, {
                    query: e
                  })), null === r.query("GET_ACTIVE_ITEM", e);
                },
                R = function R() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return new Promise(function (e, n) {
                    var i = [],
                      o = {};
                    if (q(t[0])) i.push.apply(i, t[0]), Object.assign(o, t[1] || {});else {
                      var a = t[t.length - 1];
                      "object" != _typeof(a) || a instanceof Blob || Object.assign(o, t.pop()), i.push.apply(i, t);
                    }
                    r.dispatch("ADD_ITEMS", {
                      items: i,
                      index: o.index,
                      interactionMethod: Te.API,
                      success: e,
                      failure: n
                    });
                  });
                },
                S = function S() {
                  return r.query("GET_ACTIVE_ITEMS");
                },
                C = function C(e) {
                  return new Promise(function (t, n) {
                    r.dispatch("REQUEST_ITEM_PROCESSING", {
                      query: e,
                      success: function success(e) {
                        t(e);
                      },
                      failure: function failure(e) {
                        n(e);
                      }
                    });
                  });
                },
                A = function A() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  var i = Array.isArray(t[0]) ? t[0] : t,
                    r = i.length ? i : S();
                  return Promise.all(r.map(D));
                },
                M = function M() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  var i = Array.isArray(t[0]) ? t[0] : t;
                  if (!i.length) {
                    var r = S().filter(function (e) {
                      return !(e.status === Fe.IDLE && e.origin === Ve.LOCAL) && e.status !== Fe.PROCESSING && e.status !== Fe.PROCESSING_COMPLETE && e.status !== Fe.PROCESSING_REVERT_ERROR;
                    });
                    return Promise.all(r.map(C));
                  }
                  return Promise.all(i.map(C));
                },
                x = function x() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  var i,
                    r = Array.isArray(t[0]) ? t[0] : t;
                  "object" == _typeof(r[r.length - 1]) ? i = r.pop() : Array.isArray(t[0]) && (i = t[1]);
                  var o = S();
                  return r.length ? r.map(function (e) {
                    return y(e) ? o[e] ? o[e].id : null : e;
                  }).filter(function (e) {
                    return e;
                  }).map(function (e) {
                    return k(e, i);
                  }) : Promise.all(o.map(function (e) {
                    return k(e, i);
                  }));
                },
                L = Object.assign({}, Pe(), {}, g, {}, ye(r, i), {
                  setOptions: _,
                  addFile: I,
                  addFiles: R,
                  getFile: T,
                  processFile: C,
                  prepareFile: D,
                  removeFile: k,
                  moveFile: function moveFile(e, t) {
                    return r.dispatch("MOVE_ITEM", {
                      query: e,
                      index: t
                    });
                  },
                  getFiles: S,
                  processFiles: M,
                  removeFiles: x,
                  prepareFiles: A,
                  sort: function sort(e) {
                    return r.dispatch("SORT", {
                      compare: e
                    });
                  },
                  browse: function browse() {
                    var e = f.element.querySelector("input[type=file]");
                    e && e.click();
                  },
                  destroy: function destroy() {
                    L.fire("destroy", f.element), r.dispatch("ABORT_ALL"), f._destroy(), window.removeEventListener("resize", p), document.removeEventListener("visibilitychange", a), r.dispatch("DID_DESTROY");
                  },
                  insertBefore: function insertBefore(e) {
                    return U(f.element, e);
                  },
                  insertAfter: function insertAfter(e) {
                    return H(f.element, e);
                  },
                  appendTo: function appendTo(e) {
                    return e.appendChild(f.element);
                  },
                  replaceElement: function replaceElement(e) {
                    U(f.element, e), e.parentNode.removeChild(e), t = e;
                  },
                  restoreElement: function restoreElement() {
                    t && (H(t, f.element), f.element.parentNode.removeChild(f.element), t = null);
                  },
                  isAttachedTo: function isAttachedTo(e) {
                    return f.element === e || t === e;
                  },
                  element: {
                    get: function get() {
                      return f.element;
                    }
                  },
                  status: {
                    get: function get() {
                      return r.query("GET_STATUS");
                    }
                  }
                });
              return r.dispatch("DID_INIT"), o(L);
            },
            Yo = function Yo() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {};
              return r(Qe(), function (e, n) {
                t[e] = n[0];
              }), zo(Object.assign({}, t, {}, e));
            },
            jo = function jo(e) {
              return e.charAt(0).toLowerCase() + e.slice(1);
            },
            Xo = function Xo(e) {
              return So(e.replace(/^data-/, ""));
            },
            Wo = function e(t, n) {
              r(n, function (n, i) {
                r(t, function (e, r) {
                  var o = new RegExp(n);
                  if (o.test(e) && (delete t[e], !1 !== i)) if (Q(i)) t[i] = r;else {
                    var a = i.group;
                    ce(i) && !t[a] && (t[a] = {}), t[a][jo(e.replace(o, ""))] = r;
                  }
                }), i.mapping && e(t[i.group], i.mapping);
              });
            },
            Ko = function Ko(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = [];
              r(e.attributes, function (t) {
                n.push(e.attributes[t]);
              });
              var i = n.filter(function (e) {
                return e.name;
              }).reduce(function (t, n) {
                var i = a(e, n.name);
                return t[Xo(n.name)] = i === n.name || i, t;
              }, {});
              return Wo(i, t), i;
            },
            Qo = function Qo(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
                  "^class$": "className",
                  "^multiple$": "allowMultiple",
                  "^capture$": "captureMethod",
                  "^webkitdirectory$": "allowDirectoriesOnly",
                  "^server": {
                    group: "server",
                    mapping: {
                      "^process": {
                        group: "process"
                      },
                      "^revert": {
                        group: "revert"
                      },
                      "^fetch": {
                        group: "fetch"
                      },
                      "^restore": {
                        group: "restore"
                      },
                      "^load": {
                        group: "load"
                      }
                    }
                  },
                  "^type$": !1,
                  "^files$": !1
                };
              Xe("SET_ATTRIBUTE_TO_OPTION_MAP", n);
              var i = Object.assign({}, t),
                r = Ko("FIELDSET" === e.nodeName ? e.querySelector("input[type=file]") : e, n);
              Object.keys(r).forEach(function (e) {
                ce(r[e]) ? (ce(i[e]) || (i[e] = {}), Object.assign(i[e], r[e])) : i[e] = r[e];
              }), i.files = (t.files || []).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map(function (e) {
                return {
                  source: e.value,
                  options: {
                    type: e.dataset.type
                  }
                };
              }));
              var o = Yo(i);
              return e.files && Array.from(e.files).forEach(function (e) {
                o.addFile(e);
              }), o.replaceElement(e), o;
            },
            Zo = function Zo() {
              return t(arguments.length <= 0 ? void 0 : arguments[0]) ? Qo.apply(void 0, arguments) : Yo.apply(void 0, arguments);
            },
            Jo = ["fire", "_read", "_write"],
            ea = function ea(e) {
              var t = {};
              return Ne(e, t, Jo), t;
            },
            ta = function ta(e, t) {
              return e.replace(/(?:{([a-zA-Z]+)})/g, function (e, n) {
                return t[n];
              });
            },
            na = function na(e) {
              var t = new Blob(["(", e.toString(), ")()"], {
                  type: "application/javascript"
                }),
                n = URL.createObjectURL(t),
                i = new Worker(n);
              return {
                transfer: function transfer(e, t) {},
                post: function post(e, t, n) {
                  var r = De();
                  i.onmessage = function (e) {
                    e.data.id === r && t(e.data.message);
                  }, i.postMessage({
                    id: r,
                    message: e
                  }, n);
                },
                terminate: function terminate() {
                  i.terminate(), URL.revokeObjectURL(n);
                }
              };
            },
            ia = function ia(e) {
              return new Promise(function (t, n) {
                var i = new Image();
                i.onload = function () {
                  t(i);
                }, i.onerror = function (e) {
                  n(e);
                }, i.src = e;
              });
            },
            ra = function ra(e, t) {
              var n = e.slice(0, e.size, e.type);
              return n.lastModifiedDate = e.lastModifiedDate, n.name = t, n;
            },
            oa = function oa(e) {
              return ra(e, e.name);
            },
            aa = [],
            sa = function sa(e) {
              if (!aa.includes(e)) {
                aa.push(e);
                var t = e({
                  addFilter: We,
                  utils: {
                    Type: ze,
                    forin: r,
                    isString: Q,
                    isFile: tn,
                    toNaturalFileSize: Cn,
                    replaceInString: ta,
                    getExtensionFromFilename: yt,
                    getFilenameWithoutExtension: Jt,
                    guesstimateMimeType: Lr,
                    getFileFromBlob: Dt,
                    getFilenameFromURL: wt,
                    createRoute: V,
                    createWorker: na,
                    createView: B,
                    createItemAPI: $e,
                    loadImage: ia,
                    copyFile: oa,
                    renameFile: ra,
                    createBlob: Ot,
                    applyFilterChain: je,
                    text: yn,
                    getNumericAspectRatioFromString: tt
                  },
                  views: {
                    fileActionButton: Sn
                  }
                });
                Ke(t.options);
              }
            },
            la = function la() {
              return "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
            },
            ca = function ca() {
              return "Promise" in window;
            },
            da = function da() {
              return "slice" in Blob.prototype;
            },
            ua = function ua() {
              return "URL" in window && "createObjectURL" in window.URL;
            },
            pa = function pa() {
              return "visibilityState" in document;
            },
            fa = function fa() {
              return "performance" in window;
            },
            ha = function ha() {
              return "supports" in (window.CSS || {});
            },
            ma = function ma() {
              return /MSIE|Trident/.test(window.navigator.userAgent);
            },
            ga = (Xn = m() && !la() && pa() && ca() && da() && ua() && fa() && (ha() || ma()), function () {
              return Xn;
            }),
            va = {
              apps: []
            },
            ba = "filepond",
            wa = function wa() {};
          if (e.Status = {}, e.FileStatus = {}, e.FileOrigin = {}, e.OptionTypes = {}, e.create = wa, e.destroy = wa, e.parse = wa, e.find = wa, e.registerPlugin = wa, e.getOptions = wa, e.setOptions = wa, ga()) {
            F(function () {
              va.apps.forEach(function (e) {
                return e._read();
              });
            }, function (e) {
              va.apps.forEach(function (t) {
                return t._write(e);
              });
            });
            var ya = function t() {
              document.dispatchEvent(new CustomEvent("FilePond:loaded", {
                detail: {
                  supported: ga,
                  create: e.create,
                  destroy: e.destroy,
                  parse: e.parse,
                  find: e.find,
                  registerPlugin: e.registerPlugin,
                  setOptions: e.setOptions
                }
              })), document.removeEventListener("DOMContentLoaded", t);
            };
            "loading" !== document.readyState ? setTimeout(function () {
              return ya();
            }, 0) : document.addEventListener("DOMContentLoaded", ya);
            var Ea = function Ea() {
              return r(Qe(), function (t, n) {
                e.OptionTypes[t] = n[1];
              });
            };
            e.Status = Object.assign({}, it), e.FileOrigin = Object.assign({}, Ve), e.FileStatus = Object.assign({}, Fe), e.OptionTypes = {}, Ea(), e.create = function () {
              var t = Zo.apply(void 0, arguments);
              return t.on("destroy", e.destroy), va.apps.push(t), ea(t);
            }, e.destroy = function (e) {
              var t = va.apps.findIndex(function (t) {
                return t.isAttachedTo(e);
              });
              return t >= 0 && (va.apps.splice(t, 1)[0].restoreElement(), !0);
            }, e.parse = function (t) {
              return Array.from(t.querySelectorAll("." + ba)).filter(function (e) {
                return !va.apps.find(function (t) {
                  return t.isAttachedTo(e);
                });
              }).map(function (t) {
                return e.create(t);
              });
            }, e.find = function (e) {
              var t = va.apps.find(function (t) {
                return t.isAttachedTo(e);
              });
              return t ? ea(t) : null;
            }, e.registerPlugin = function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              t.forEach(sa), Ea();
            }, e.getOptions = function () {
              var e = {};
              return r(Qe(), function (t, n) {
                e[t] = n[0];
              }), e;
            }, e.setOptions = function (t) {
              return ce(t) && (va.apps.forEach(function (e) {
                e.setOptions(t);
              }), Ze(t)), e.getOptions();
            };
          }
          e.supported = ga, Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }(t);
      },
      379: function _(e, t, n) {
        "use strict";

        var i,
          r = function r() {
            return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
          },
          o = function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
                e[t] = n;
              }
              return e[t];
            };
          }(),
          a = [];
        function s(e) {
          for (var t = -1, n = 0; n < a.length; n++) if (a[n].identifier === e) {
            t = n;
            break;
          }
          return t;
        }
        function l(e, t) {
          for (var n = {}, i = [], r = 0; r < e.length; r++) {
            var o = e[r],
              l = t.base ? o[0] + t.base : o[0],
              c = n[l] || 0,
              d = "".concat(l, " ").concat(c);
            n[l] = c + 1;
            var u = s(d),
              p = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
              };
            -1 !== u ? (a[u].references++, a[u].updater(p)) : a.push({
              identifier: d,
              updater: g(p, t),
              references: 1
            }), i.push(d);
          }
          return i;
        }
        function c(e) {
          var t = document.createElement("style"),
            i = e.attributes || {};
          if (void 0 === i.nonce) {
            var r = n.nc;
            r && (i.nonce = r);
          }
          if (Object.keys(i).forEach(function (e) {
            t.setAttribute(e, i[e]);
          }), "function" == typeof e.insert) e.insert(t);else {
            var a = o(e.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(t);
          }
          return t;
        }
        var d,
          u = (d = [], function (e, t) {
            return d[e] = t, d.filter(Boolean).join("\n");
          });
        function p(e, t, n, i) {
          var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
          if (e.styleSheet) e.styleSheet.cssText = u(t, r);else {
            var o = document.createTextNode(r),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
          }
        }
        function f(e, t, n) {
          var i = n.css,
            r = n.media,
            o = n.sourceMap;
          if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = i;else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i));
          }
        }
        var h = null,
          m = 0;
        function g(e, t) {
          var n, i, r;
          if (t.singleton) {
            var o = m++;
            n = h || (h = c(t)), i = p.bind(null, n, o, !1), r = p.bind(null, n, o, !0);
          } else n = c(t), i = f.bind(null, n, t), r = function r() {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            }(n);
          };
          return i(e), function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
              i(e = t);
            } else r();
          };
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
          var n = l(e = e || [], t);
          return function (e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
              for (var i = 0; i < n.length; i++) {
                var r = s(n[i]);
                a[r].references--;
              }
              for (var o = l(e, t), c = 0; c < n.length; c++) {
                var d = s(n[c]);
                0 === a[d].references && (a[d].updater(), a.splice(d, 1));
              }
              n = o;
            }
          };
        };
      },
      455: function _(e) {
        e.exports = function () {
          "use strict";

          var e = {
            awaitingPromise: new WeakMap(),
            promise: new WeakMap(),
            innerParams: new WeakMap(),
            domCache: new WeakMap()
          };
          var t = "swal2-",
            n = function n(e) {
              var n = {};
              for (var _i8 in e) n[e[_i8]] = t + e[_i8];
              return n;
            },
            i = n(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
            r = n(["success", "warning", "info", "question", "error"]),
            o = "SweetAlert2:",
            a = function a(e) {
              var t = [];
              for (var _n8 = 0; _n8 < e.length; _n8++) -1 === t.indexOf(e[_n8]) && t.push(e[_n8]);
              return t;
            },
            s = function s(e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            l = function l(e) {
              console.warn("".concat(o, " ").concat("object" == _typeof(e) ? e.join(" ") : e));
            },
            c = function c(e) {
              console.error("".concat(o, " ").concat(e));
            },
            d = [],
            u = function u(e) {
              d.includes(e) || (d.push(e), l(e));
            },
            p = function p(e, t) {
              u("\"".concat(e, "\" is deprecated and will be removed in the next major release. Please use \"").concat(t, "\" instead."));
            },
            f = function f(e) {
              return "function" == typeof e ? e() : e;
            },
            h = function h(e) {
              return e && "function" == typeof e.toPromise;
            },
            m = function m(e) {
              return h(e) ? e.toPromise() : Promise.resolve(e);
            },
            g = function g(e) {
              return e && Promise.resolve(e) === e;
            },
            v = function v() {
              return document.body.querySelector(".".concat(i.container));
            },
            b = function b(e) {
              var t = v();
              return t ? t.querySelector(e) : null;
            },
            w = function w(e) {
              return b(".".concat(e));
            },
            y = function y() {
              return w(i.popup);
            },
            E = function E() {
              return w(i.icon);
            },
            _ = function _() {
              return w(i["icon-content"]);
            },
            T = function T() {
              return w(i.title);
            },
            D = function D() {
              return w(i["html-container"]);
            },
            I = function I() {
              return w(i.image);
            },
            O = function O() {
              return w(i["progress-steps"]);
            },
            k = function k() {
              return w(i["validation-message"]);
            },
            R = function R() {
              return b(".".concat(i.actions, " .").concat(i.confirm));
            },
            S = function S() {
              return b(".".concat(i.actions, " .").concat(i.deny));
            },
            C = function C() {
              return w(i["input-label"]);
            },
            A = function A() {
              return b(".".concat(i.loader));
            },
            M = function M() {
              return b(".".concat(i.actions, " .").concat(i.cancel));
            },
            x = function x() {
              return w(i.actions);
            },
            L = function L() {
              return w(i.footer);
            },
            P = function P() {
              return w(i["timer-progress-bar"]);
            },
            N = function N() {
              return w(i.close);
            },
            G = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
            $ = function $() {
              var e = Array.from(y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
                  var n = parseInt(e.getAttribute("tabindex")),
                    i = parseInt(t.getAttribute("tabindex"));
                  return n > i ? 1 : n < i ? -1 : 0;
                }),
                t = Array.from(y().querySelectorAll(G)).filter(function (e) {
                  return "-1" !== e.getAttribute("tabindex");
                });
              return a(e.concat(t)).filter(function (e) {
                return re(e);
              });
            },
            B = function B() {
              return q(document.body, i.shown) && !q(document.body, i["toast-shown"]) && !q(document.body, i["no-backdrop"]);
            },
            F = function F() {
              return y() && q(y(), i.toast);
            },
            V = function V() {
              return y().hasAttribute("data-loading");
            },
            U = {
              previousBodyPadding: null
            },
            H = function H(e, t) {
              if (e.textContent = "", t) {
                var _n9 = new DOMParser().parseFromString(t, "text/html");
                Array.from(_n9.querySelector("head").childNodes).forEach(function (t) {
                  e.appendChild(t);
                }), Array.from(_n9.querySelector("body").childNodes).forEach(function (t) {
                  t instanceof HTMLVideoElement || t instanceof HTMLAudioElement ? e.appendChild(t.cloneNode(!0)) : e.appendChild(t);
                });
              }
            },
            q = function q(e, t) {
              if (!t) return !1;
              var n = t.split(/\s+/);
              for (var _t10 = 0; _t10 < n.length; _t10++) if (!e.classList.contains(n[_t10])) return !1;
              return !0;
            },
            z = function z(e, t) {
              Array.from(e.classList).forEach(function (n) {
                Object.values(i).includes(n) || Object.values(r).includes(n) || Object.values(t.showClass).includes(n) || e.classList.remove(n);
              });
            },
            Y = function Y(e, t, n) {
              if (z(e, t), t.customClass && t.customClass[n]) {
                if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return void l("Invalid type of customClass.".concat(n, "! Expected string or iterable object, got \"").concat(_typeof(t.customClass[n]), "\""));
                K(e, t.customClass[n]);
              }
            },
            j = function j(e, t) {
              if (!t) return null;
              switch (t) {
                case "select":
                case "textarea":
                case "file":
                  return e.querySelector(".".concat(i.popup, " > .").concat(i[t]));
                case "checkbox":
                  return e.querySelector(".".concat(i.popup, " > .").concat(i.checkbox, " input"));
                case "radio":
                  return e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:checked")) || e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:first-child"));
                case "range":
                  return e.querySelector(".".concat(i.popup, " > .").concat(i.range, " input"));
                default:
                  return e.querySelector(".".concat(i.popup, " > .").concat(i.input));
              }
            },
            X = function X(e) {
              if (e.focus(), "file" !== e.type) {
                var _t11 = e.value;
                e.value = "", e.value = _t11;
              }
            },
            W = function W(e, t, n) {
              e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function (t) {
                Array.isArray(e) ? e.forEach(function (e) {
                  n ? e.classList.add(t) : e.classList.remove(t);
                }) : n ? e.classList.add(t) : e.classList.remove(t);
              }));
            },
            K = function K(e, t) {
              W(e, t, !0);
            },
            Q = function Q(e, t) {
              W(e, t, !1);
            },
            Z = function Z(e, t) {
              var n = Array.from(e.children);
              for (var _e15 = 0; _e15 < n.length; _e15++) {
                var _i9 = n[_e15];
                if (_i9 instanceof HTMLElement && q(_i9, t)) return _i9;
              }
            },
            J = function J(e, t, n) {
              n === "".concat(parseInt(n)) && (n = parseInt(n)), n || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t);
            },
            ee = function ee(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
              e.style.display = t;
            },
            te = function te(e) {
              e.style.display = "none";
            },
            ne = function ne(e, t, n, i) {
              var r = e.querySelector(t);
              r && (r.style[n] = i);
            },
            ie = function ie(e, t) {
              t ? ee(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex") : te(e);
            },
            re = function re(e) {
              return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length));
            },
            oe = function oe() {
              return !re(R()) && !re(S()) && !re(M());
            },
            ae = function ae(e) {
              return !!(e.scrollHeight > e.clientHeight);
            },
            se = function se(e) {
              var t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                i = parseFloat(t.getPropertyValue("transition-duration") || "0");
              return n > 0 || i > 0;
            },
            le = function le(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              var n = P();
              re(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function () {
                n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%";
              }, 10));
            },
            ce = function ce() {
              var e = P(),
                t = parseInt(window.getComputedStyle(e).width);
              e.style.removeProperty("transition"), e.style.width = "100%";
              var n = t / parseInt(window.getComputedStyle(e).width) * 100;
              e.style.removeProperty("transition"), e.style.width = "".concat(n, "%");
            },
            de = 100,
            ue = {},
            pe = function pe() {
              ue.previousActiveElement instanceof HTMLElement ? (ue.previousActiveElement.focus(), ue.previousActiveElement = null) : document.body && document.body.focus();
            },
            fe = function fe(e) {
              return new Promise(function (t) {
                if (!e) return t();
                var n = window.scrollX,
                  i = window.scrollY;
                ue.restoreFocusTimeout = setTimeout(function () {
                  pe(), t();
                }, de), window.scrollTo(n, i);
              });
            },
            he = function he() {
              return "undefined" == typeof window || "undefined" == typeof document;
            },
            me = "\n <div aria-labelledby=\"".concat(i.title, "\" aria-describedby=\"").concat(i["html-container"], "\" class=\"").concat(i.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(i.close, "\"></button>\n   <ul class=\"").concat(i["progress-steps"], "\"></ul>\n   <div class=\"").concat(i.icon, "\"></div>\n   <img class=\"").concat(i.image, "\" />\n   <h2 class=\"").concat(i.title, "\" id=\"").concat(i.title, "\"></h2>\n   <div class=\"").concat(i["html-container"], "\" id=\"").concat(i["html-container"], "\"></div>\n   <input class=\"").concat(i.input, "\" />\n   <input type=\"file\" class=\"").concat(i.file, "\" />\n   <div class=\"").concat(i.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(i.select, "\"></select>\n   <div class=\"").concat(i.radio, "\"></div>\n   <label for=\"").concat(i.checkbox, "\" class=\"").concat(i.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(i.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(i.textarea, "\"></textarea>\n   <div class=\"").concat(i["validation-message"], "\" id=\"").concat(i["validation-message"], "\"></div>\n   <div class=\"").concat(i.actions, "\">\n     <div class=\"").concat(i.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(i.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(i.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(i.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(i.footer, "\"></div>\n   <div class=\"").concat(i["timer-progress-bar-container"], "\">\n     <div class=\"").concat(i["timer-progress-bar"], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, ""),
            ge = function ge() {
              var e = v();
              return !!e && (e.remove(), Q([document.documentElement, document.body], [i["no-backdrop"], i["toast-shown"], i["has-column"]]), !0);
            },
            ve = function ve() {
              ue.currentInstance.resetValidationMessage();
            },
            be = function be() {
              var e = y(),
                t = Z(e, i.input),
                n = Z(e, i.file),
                r = e.querySelector(".".concat(i.range, " input")),
                o = e.querySelector(".".concat(i.range, " output")),
                a = Z(e, i.select),
                s = e.querySelector(".".concat(i.checkbox, " input")),
                l = Z(e, i.textarea);
              t.oninput = ve, n.onchange = ve, a.onchange = ve, s.onchange = ve, l.oninput = ve, r.oninput = function () {
                ve(), o.value = r.value;
              }, r.onchange = function () {
                ve(), o.value = r.value;
              };
            },
            we = function we(e) {
              return "string" == typeof e ? document.querySelector(e) : e;
            },
            ye = function ye(e) {
              var t = y();
              t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
            },
            Ee = function Ee(e) {
              "rtl" === window.getComputedStyle(e).direction && K(v(), i.rtl);
            },
            _e = function _e(e) {
              var t = ge();
              if (he()) return void c("SweetAlert2 requires document to initialize");
              var n = document.createElement("div");
              n.className = i.container, t && K(n, i["no-transition"]), H(n, me);
              var r = we(e.target);
              r.appendChild(n), ye(e), Ee(r), be();
            },
            Te = function Te(e, t) {
              e instanceof HTMLElement ? t.appendChild(e) : "object" == _typeof(e) ? De(e, t) : e && H(t, e);
            },
            De = function De(e, t) {
              e.jquery ? Ie(t, e) : H(t, e.toString());
            },
            Ie = function Ie(e, t) {
              if (e.textContent = "", 0 in t) for (var _n10 = 0; (_n10 in t); _n10++) e.appendChild(t[_n10].cloneNode(!0));else e.appendChild(t.cloneNode(!0));
            },
            Oe = function () {
              if (he()) return !1;
              var e = document.createElement("div"),
                t = {
                  WebkitAnimation: "webkitAnimationEnd",
                  animation: "animationend"
                };
              for (var _n11 in t) if (Object.prototype.hasOwnProperty.call(t, _n11) && void 0 !== e.style[_n11]) return t[_n11];
              return !1;
            }(),
            ke = function ke() {
              var e = document.createElement("div");
              e.className = i["scrollbar-measure"], document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            },
            Re = function Re(e, t) {
              var n = x(),
                i = A();
              t.showConfirmButton || t.showDenyButton || t.showCancelButton ? ee(n) : te(n), Y(n, t, "actions"), Se(n, i, t), H(i, t.loaderHtml), Y(i, t, "loader");
            };
          function Se(e, t, n) {
            var i = R(),
              r = S(),
              o = M();
            Ae(i, "confirm", n), Ae(r, "deny", n), Ae(o, "cancel", n), Ce(i, r, o, n), n.reverseButtons && (n.toast ? (e.insertBefore(o, i), e.insertBefore(r, i)) : (e.insertBefore(o, t), e.insertBefore(r, t), e.insertBefore(i, t)));
          }
          function Ce(e, t, n, r) {
            r.buttonsStyling ? (K([e, t, n], i.styled), r.confirmButtonColor && (e.style.backgroundColor = r.confirmButtonColor, K(e, i["default-outline"])), r.denyButtonColor && (t.style.backgroundColor = r.denyButtonColor, K(t, i["default-outline"])), r.cancelButtonColor && (n.style.backgroundColor = r.cancelButtonColor, K(n, i["default-outline"]))) : Q([e, t, n], i.styled);
          }
          function Ae(e, t, n) {
            ie(e, n["show".concat(s(t), "Button")], "inline-block"), H(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = i[t], Y(e, n, "".concat(t, "Button")), K(e, n["".concat(t, "ButtonClass")]);
          }
          var Me = function Me(e, t) {
              var n = N();
              H(n, t.closeButtonHtml), Y(n, t, "closeButton"), ie(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
            },
            xe = function xe(e, t) {
              var n = v();
              n && (Le(n, t.backdrop), Pe(n, t.position), Ne(n, t.grow), Y(n, t, "container"));
            };
          function Le(e, t) {
            "string" == typeof t ? e.style.background = t : t || K([document.documentElement, document.body], i["no-backdrop"]);
          }
          function Pe(e, t) {
            t in i ? K(e, i[t]) : (l('The "position" parameter is not valid, defaulting to "center"'), K(e, i.center));
          }
          function Ne(e, t) {
            if (t && "string" == typeof t) {
              var _n12 = "grow-".concat(t);
              _n12 in i && K(e, i[_n12]);
            }
          }
          var Ge = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            $e = function $e(t, n) {
              var r = y(),
                o = e.innerParams.get(t),
                a = !o || n.input !== o.input;
              Ge.forEach(function (e) {
                var t = Z(r, i[e]);
                Ve(e, n.inputAttributes), t.className = i[e], a && te(t);
              }), n.input && (a && Be(n), Ue(n));
            },
            Be = function Be(e) {
              if (!je[e.input]) return void c("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(e.input, "\""));
              var t = ze(e.input),
                n = je[e.input](t, e);
              ee(t), setTimeout(function () {
                X(n);
              });
            },
            Fe = function Fe(e) {
              for (var _t12 = 0; _t12 < e.attributes.length; _t12++) {
                var _n13 = e.attributes[_t12].name;
                ["type", "value", "style"].includes(_n13) || e.removeAttribute(_n13);
              }
            },
            Ve = function Ve(e, t) {
              var n = j(y(), e);
              if (n) {
                Fe(n);
                for (var _e16 in t) n.setAttribute(_e16, t[_e16]);
              }
            },
            Ue = function Ue(e) {
              var t = ze(e.input);
              "object" == _typeof(e.customClass) && K(t, e.customClass.input);
            },
            He = function He(e, t) {
              e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder);
            },
            qe = function qe(e, t, n) {
              if (n.inputLabel) {
                e.id = i.input;
                var _r4 = document.createElement("label"),
                  _o3 = i["input-label"];
                _r4.setAttribute("for", e.id), _r4.className = _o3, "object" == _typeof(n.customClass) && K(_r4, n.customClass.inputLabel), _r4.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", _r4);
              }
            },
            ze = function ze(e) {
              return Z(y(), i[e] || i.input);
            },
            Ye = function Ye(e, t) {
              ["string", "number"].includes(_typeof(t)) ? e.value = "".concat(t) : g(t) || l("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(t), "\""));
            },
            je = {};
          je.text = je.email = je.password = je.number = je.tel = je.url = function (e, t) {
            return Ye(e, t.inputValue), qe(e, e, t), He(e, t), e.type = t.input, e;
          }, je.file = function (e, t) {
            return qe(e, e, t), He(e, t), e;
          }, je.range = function (e, t) {
            var n = e.querySelector("input"),
              i = e.querySelector("output");
            return Ye(n, t.inputValue), n.type = t.input, Ye(i, t.inputValue), qe(n, e, t), e;
          }, je.select = function (e, t) {
            if (e.textContent = "", t.inputPlaceholder) {
              var _n14 = document.createElement("option");
              H(_n14, t.inputPlaceholder), _n14.value = "", _n14.disabled = !0, _n14.selected = !0, e.appendChild(_n14);
            }
            return qe(e, e, t), e;
          }, je.radio = function (e) {
            return e.textContent = "", e;
          }, je.checkbox = function (e, t) {
            var n = j(y(), "checkbox");
            n.value = "1", n.id = i.checkbox, n.checked = Boolean(t.inputValue);
            var r = e.querySelector("span");
            return H(r, t.inputPlaceholder), n;
          }, je.textarea = function (e, t) {
            Ye(e, t.inputValue), He(e, t), qe(e, e, t);
            var n = function n(e) {
              return parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight);
            };
            return setTimeout(function () {
              if ("MutationObserver" in window) {
                var _t13 = parseInt(window.getComputedStyle(y()).width);
                new MutationObserver(function () {
                  var i = e.offsetWidth + n(e);
                  y().style.width = i > _t13 ? "".concat(i, "px") : null;
                }).observe(e, {
                  attributes: !0,
                  attributeFilter: ["style"]
                });
              }
            }), e;
          };
          var Xe = function Xe(e, t) {
              var n = D();
              Y(n, t, "htmlContainer"), t.html ? (Te(t.html, n), ee(n, "block")) : t.text ? (n.textContent = t.text, ee(n, "block")) : te(n), $e(e, t);
            },
            We = function We(e, t) {
              var n = L();
              ie(n, t.footer), t.footer && Te(t.footer, n), Y(n, t, "footer");
            },
            Ke = function Ke(t, n) {
              var i = e.innerParams.get(t),
                o = E();
              if (i && n.icon === i.icon) return tt(o, n), void Qe(o, n);
              if (n.icon || n.iconHtml) {
                if (n.icon && -1 === Object.keys(r).indexOf(n.icon)) return c("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(n.icon, "\"")), void te(o);
                ee(o), tt(o, n), Qe(o, n), K(o, n.showClass.icon);
              } else te(o);
            },
            Qe = function Qe(e, t) {
              for (var _n15 in r) t.icon !== _n15 && Q(e, r[_n15]);
              K(e, r[t.icon]), nt(e, t), Ze(), Y(e, t, "icon");
            },
            Ze = function Ze() {
              var e = y(),
                t = window.getComputedStyle(e).getPropertyValue("background-color"),
                n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
              for (var _e17 = 0; _e17 < n.length; _e17++) n[_e17].style.backgroundColor = t;
            },
            Je = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
            et = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
            tt = function tt(e, t) {
              var n,
                i = e.innerHTML;
              t.iconHtml ? n = it(t.iconHtml) : "success" === t.icon ? (n = Je, i = i.replace(/ style=".*?"/g, "")) : n = "error" === t.icon ? et : it({
                question: "?",
                warning: "!",
                info: "i"
              }[t.icon]), i.trim() !== n.trim() && H(e, n);
            },
            nt = function nt(e, t) {
              if (t.iconColor) {
                e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
                for (var _i10 = 0, _arr2 = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i10 < _arr2.length; _i10++) {
                  var _n16 = _arr2[_i10];
                  ne(e, _n16, "backgroundColor", t.iconColor);
                }
                ne(e, ".swal2-success-ring", "borderColor", t.iconColor);
              }
            },
            it = function it(e) {
              return "<div class=\"".concat(i["icon-content"], "\">").concat(e, "</div>");
            },
            rt = function rt(e, t) {
              var n = I();
              t.imageUrl ? (ee(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), J(n, "width", t.imageWidth), J(n, "height", t.imageHeight), n.className = i.image, Y(n, t, "image")) : te(n);
            },
            ot = function ot(e, t) {
              var n = v(),
                i = y();
              t.toast ? (J(n, "width", t.width), i.style.width = "100%", i.insertBefore(A(), E())) : J(i, "width", t.width), J(i, "padding", t.padding), t.color && (i.style.color = t.color), t.background && (i.style.background = t.background), te(k()), at(i, t);
            },
            at = function at(e, t) {
              e.className = "".concat(i.popup, " ").concat(re(e) ? t.showClass.popup : ""), t.toast ? (K([document.documentElement, document.body], i["toast-shown"]), K(e, i.toast)) : K(e, i.modal), Y(e, t, "popup"), "string" == typeof t.customClass && K(e, t.customClass), t.icon && K(e, i["icon-".concat(t.icon)]);
            },
            st = function st(e, t) {
              var n = O();
              t.progressSteps && 0 !== t.progressSteps.length ? (ee(n), n.textContent = "", t.currentProgressStep >= t.progressSteps.length && l("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(function (e, r) {
                var o = lt(e);
                if (n.appendChild(o), r === t.currentProgressStep && K(o, i["active-progress-step"]), r !== t.progressSteps.length - 1) {
                  var _e18 = ct(t);
                  n.appendChild(_e18);
                }
              })) : te(n);
            },
            lt = function lt(e) {
              var t = document.createElement("li");
              return K(t, i["progress-step"]), H(t, e), t;
            },
            ct = function ct(e) {
              var t = document.createElement("li");
              return K(t, i["progress-step-line"]), e.progressStepsDistance && J(t, "width", e.progressStepsDistance), t;
            },
            dt = function dt(e, t) {
              var n = T();
              ie(n, t.title || t.titleText, "block"), t.title && Te(t.title, n), t.titleText && (n.innerText = t.titleText), Y(n, t, "title");
            },
            ut = function ut(e, t) {
              ot(e, t), xe(e, t), st(e, t), Ke(e, t), rt(e, t), dt(e, t), Me(e, t), Xe(e, t), Re(e, t), We(e, t), "function" == typeof t.didRender && t.didRender(y());
            };
          function pt() {
            var t = e.innerParams.get(this);
            if (!t) return;
            var n = e.domCache.get(this);
            te(n.loader), F() ? t.icon && ee(E()) : ft(n), Q([n.popup, n.actions], i.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1;
          }
          var ft = function ft(e) {
            var t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
            t.length ? ee(t[0], "inline-block") : oe() && te(e.actions);
          };
          function ht(t) {
            var n = e.innerParams.get(t || this),
              i = e.domCache.get(t || this);
            return i ? j(i.popup, n.input) : null;
          }
          var mt = function mt() {
              return re(y());
            },
            gt = function gt() {
              return R() && R().click();
            },
            vt = function vt() {
              return S() && S().click();
            },
            bt = function bt() {
              return M() && M().click();
            },
            wt = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer"
            }),
            yt = function yt(e) {
              e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
                capture: e.keydownListenerCapture
              }), e.keydownHandlerAdded = !1);
            },
            Et = function Et(e, t, n, i) {
              yt(t), n.toast || (t.keydownHandler = function (t) {
                return It(e, t, i);
              }, t.keydownTarget = n.keydownListenerCapture ? window : y(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
              }), t.keydownHandlerAdded = !0);
            },
            _t = function _t(e, t, n) {
              var i = $();
              if (i.length) return (t += n) === i.length ? t = 0 : -1 === t && (t = i.length - 1), i[t].focus();
              y().focus();
            },
            Tt = ["ArrowRight", "ArrowDown"],
            Dt = ["ArrowLeft", "ArrowUp"],
            It = function It(t, n, i) {
              var r = e.innerParams.get(t);
              r && (n.isComposing || 229 === n.keyCode || (r.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key ? Ot(t, n, r) : "Tab" === n.key ? kt(n, r) : [].concat(Tt, Dt).includes(n.key) ? Rt(n.key) : "Escape" === n.key && St(n, r, i)));
            },
            Ot = function Ot(e, t, n) {
              if (f(n.allowEnterKey) && t.target && e.getInput() && t.target instanceof HTMLElement && t.target.outerHTML === e.getInput().outerHTML) {
                if (["textarea", "file"].includes(n.input)) return;
                gt(), t.preventDefault();
              }
            },
            kt = function kt(e, t) {
              var n = e.target,
                i = $();
              var r = -1;
              for (var _e19 = 0; _e19 < i.length; _e19++) if (n === i[_e19]) {
                r = _e19;
                break;
              }
              e.shiftKey ? _t(t, r, -1) : _t(t, r, 1), e.stopPropagation(), e.preventDefault();
            },
            Rt = function Rt(e) {
              var t = R(),
                n = S(),
                i = M();
              if (document.activeElement instanceof HTMLElement && ![t, n, i].includes(document.activeElement)) return;
              var r = Tt.includes(e) ? "nextElementSibling" : "previousElementSibling";
              var o = document.activeElement;
              for (var _e20 = 0; _e20 < x().children.length; _e20++) {
                if (o = o[r], !o) return;
                if (o instanceof HTMLButtonElement && re(o)) break;
              }
              o instanceof HTMLButtonElement && o.focus();
            },
            St = function St(e, t, n) {
              f(t.allowEscapeKey) && (e.preventDefault(), n(wt.esc));
            };
          var Ct = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap()
          };
          var At = function At() {
              Array.from(document.body.children).forEach(function (e) {
                e === v() || e.contains(v()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
              });
            },
            Mt = function Mt() {
              Array.from(document.body.children).forEach(function (e) {
                e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden");
              });
            },
            xt = function xt() {
              if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !q(document.body, i.iosfix)) {
                var _e21 = document.body.scrollTop;
                document.body.style.top = -1 * _e21 + "px", K(document.body, i.iosfix), Pt(), Lt();
              }
            },
            Lt = function Lt() {
              var e = navigator.userAgent,
                t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
                n = !!e.match(/WebKit/i);
              if (t && n && !e.match(/CriOS/i)) {
                var _e22 = 44;
                y().scrollHeight > window.innerHeight - _e22 && (v().style.paddingBottom = "".concat(_e22, "px"));
              }
            },
            Pt = function Pt() {
              var e = v();
              var t;
              e.ontouchstart = function (e) {
                t = Nt(e);
              }, e.ontouchmove = function (e) {
                t && (e.preventDefault(), e.stopPropagation());
              };
            },
            Nt = function Nt(e) {
              var t = e.target,
                n = v();
              return !(Gt(e) || $t(e) || t !== n && (ae(n) || !(t instanceof HTMLElement) || "INPUT" === t.tagName || "TEXTAREA" === t.tagName || ae(D()) && D().contains(t)));
            },
            Gt = function Gt(e) {
              return e.touches && e.touches.length && "stylus" === e.touches[0].touchType;
            },
            $t = function $t(e) {
              return e.touches && e.touches.length > 1;
            },
            Bt = function Bt() {
              if (q(document.body, i.iosfix)) {
                var _e23 = parseInt(document.body.style.top, 10);
                Q(document.body, i.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * _e23;
              }
            },
            Ft = function Ft() {
              null === U.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (U.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(U.previousBodyPadding + ke(), "px"));
            },
            Vt = function Vt() {
              null !== U.previousBodyPadding && (document.body.style.paddingRight = "".concat(U.previousBodyPadding, "px"), U.previousBodyPadding = null);
            };
          function Ut(e, t, n, i) {
            F() ? Zt(e, i) : (fe(n).then(function () {
              return Zt(e, i);
            }), yt(ue)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), B() && (Vt(), Bt(), Mt()), Ht();
          }
          function Ht() {
            Q([document.documentElement, document.body], [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]]);
          }
          function qt(e) {
            e = Wt(e);
            var t = Ct.swalPromiseResolve.get(this),
              n = Yt(this);
            this.isAwaitingPromise() ? e.isDismissed || (Xt(this), t(e)) : n && t(e);
          }
          function zt() {
            return !!e.awaitingPromise.get(this);
          }
          var Yt = function Yt(t) {
            var n = y();
            if (!n) return !1;
            var i = e.innerParams.get(t);
            if (!i || q(n, i.hideClass.popup)) return !1;
            Q(n, i.showClass.popup), K(n, i.hideClass.popup);
            var r = v();
            return Q(r, i.showClass.backdrop), K(r, i.hideClass.backdrop), Kt(t, n, i), !0;
          };
          function jt(e) {
            var t = Ct.swalPromiseReject.get(this);
            Xt(this), t && t(e);
          }
          var Xt = function Xt(t) {
              t.isAwaitingPromise() && (e.awaitingPromise["delete"](t), e.innerParams.get(t) || t._destroy());
            },
            Wt = function Wt(e) {
              return void 0 === e ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
              } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
              }, e);
            },
            Kt = function Kt(e, t, n) {
              var i = v(),
                r = Oe && se(t);
              "function" == typeof n.willClose && n.willClose(t), r ? Qt(e, t, i, n.returnFocus, n.didClose) : Ut(e, i, n.returnFocus, n.didClose);
            },
            Qt = function Qt(e, t, n, i, r) {
              ue.swalCloseEventFinishedCallback = Ut.bind(null, e, n, i, r), t.addEventListener(Oe, function (e) {
                e.target === t && (ue.swalCloseEventFinishedCallback(), delete ue.swalCloseEventFinishedCallback);
              });
            },
            Zt = function Zt(e, t) {
              setTimeout(function () {
                "function" == typeof t && t.bind(e.params)(), e._destroy();
              });
            };
          function Jt(t, n, i) {
            var r = e.domCache.get(t);
            n.forEach(function (e) {
              r[e].disabled = i;
            });
          }
          function en(e, t) {
            if (e) if ("radio" === e.type) {
              var _n17 = e.parentNode.parentNode.querySelectorAll("input");
              for (var _e24 = 0; _e24 < _n17.length; _e24++) _n17[_e24].disabled = t;
            } else e.disabled = t;
          }
          function tn() {
            Jt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          }
          function nn() {
            Jt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          }
          function rn() {
            en(this.getInput(), !1);
          }
          function on() {
            en(this.getInput(), !0);
          }
          function an(t) {
            var n = e.domCache.get(this),
              r = e.innerParams.get(this);
            H(n.validationMessage, t), n.validationMessage.className = i["validation-message"], r.customClass && r.customClass.validationMessage && K(n.validationMessage, r.customClass.validationMessage), ee(n.validationMessage);
            var o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", i["validation-message"]), X(o), K(o, i.inputerror));
          }
          function sn() {
            var t = e.domCache.get(this);
            t.validationMessage && te(t.validationMessage);
            var n = this.getInput();
            n && (n.removeAttribute("aria-invalid"), n.removeAttribute("aria-describedby"), Q(n, i.inputerror));
          }
          function ln() {
            return e.domCache.get(this).progressSteps;
          }
          var cn = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0
            },
            dn = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            un = {},
            pn = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            fn = function fn(e) {
              return Object.prototype.hasOwnProperty.call(cn, e);
            },
            hn = function hn(e) {
              return -1 !== dn.indexOf(e);
            },
            mn = function mn(e) {
              return un[e];
            },
            gn = function gn(e) {
              fn(e) || l("Unknown parameter \"".concat(e, "\""));
            },
            vn = function vn(e) {
              pn.includes(e) && l("The parameter \"".concat(e, "\" is incompatible with toasts"));
            },
            bn = function bn(e) {
              mn(e) && p(e, mn(e));
            },
            wn = function wn(e) {
              !1 === e.backdrop && e.allowOutsideClick && l('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
              for (var _t14 in e) gn(_t14), e.toast && vn(_t14), bn(_t14);
            };
          function yn(t) {
            var n = y(),
              i = e.innerParams.get(this);
            if (!n || q(n, i.hideClass.popup)) return l("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            var r = En(t),
              o = Object.assign({}, i, r);
            ut(this, o), e.innerParams.set(this, o), Object.defineProperties(this, {
              params: {
                value: Object.assign({}, this.params, t),
                writable: !1,
                enumerable: !0
              }
            });
          }
          var En = function En(e) {
            var t = {};
            return Object.keys(e).forEach(function (n) {
              hn(n) ? t[n] = e[n] : l("Invalid parameter to update: ".concat(n));
            }), t;
          };
          function _n() {
            var t = e.domCache.get(this),
              n = e.innerParams.get(this);
            n ? (t.popup && ue.swalCloseEventFinishedCallback && (ue.swalCloseEventFinishedCallback(), delete ue.swalCloseEventFinishedCallback), "function" == typeof n.didDestroy && n.didDestroy(), Tn(this)) : Dn(this);
          }
          var Tn = function Tn(e) {
              Dn(e), delete e.params, delete ue.keydownHandler, delete ue.keydownTarget, delete ue.currentInstance;
            },
            Dn = function Dn(t) {
              t.isAwaitingPromise() ? (In(e, t), e.awaitingPromise.set(t, !0)) : (In(Ct, t), In(e, t));
            },
            In = function In(e, t) {
              for (var _n18 in e) e[_n18]["delete"](t);
            };
          var On = Object.freeze({
            __proto__: null,
            hideLoading: pt,
            disableLoading: pt,
            getInput: ht,
            close: qt,
            isAwaitingPromise: zt,
            rejectPromise: jt,
            handleAwaitingPromise: Xt,
            closePopup: qt,
            closeModal: qt,
            closeToast: qt,
            enableButtons: tn,
            disableButtons: nn,
            enableInput: rn,
            disableInput: on,
            showValidationMessage: an,
            resetValidationMessage: sn,
            getProgressSteps: ln,
            update: yn,
            _destroy: _n
          });
          var kn = function kn(e) {
              var t = y();
              t || new Xi(), t = y();
              var n = A();
              F() ? te(E()) : Rn(t, e), ee(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus();
            },
            Rn = function Rn(e, t) {
              var n = x(),
                r = A();
              !t && re(R()) && (t = R()), ee(n), t && (te(t), r.setAttribute("data-button-to-replace", t.className)), r.parentNode.insertBefore(r, t), K([e, n], i.loading);
            },
            Sn = function Sn(e, t) {
              "select" === t.input || "radio" === t.input ? Ln(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (h(t.inputValue) || g(t.inputValue)) && (kn(R()), Pn(e, t));
            },
            Cn = function Cn(e, t) {
              var n = e.getInput();
              if (!n) return null;
              switch (t.input) {
                case "checkbox":
                  return An(n);
                case "radio":
                  return Mn(n);
                case "file":
                  return xn(n);
                default:
                  return t.inputAutoTrim ? n.value.trim() : n.value;
              }
            },
            An = function An(e) {
              return e.checked ? 1 : 0;
            },
            Mn = function Mn(e) {
              return e.checked ? e.value : null;
            },
            xn = function xn(e) {
              return e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null;
            },
            Ln = function Ln(e, t) {
              var n = y(),
                i = function i(e) {
                  Nn[t.input](n, Gn(e), t);
                };
              h(t.inputOptions) || g(t.inputOptions) ? (kn(R()), m(t.inputOptions).then(function (t) {
                e.hideLoading(), i(t);
              })) : "object" == _typeof(t.inputOptions) ? i(t.inputOptions) : c("Unexpected type of inputOptions! Expected object, Map or Promise, got " + _typeof(t.inputOptions));
            },
            Pn = function Pn(e, t) {
              var n = e.getInput();
              te(n), m(t.inputValue).then(function (i) {
                n.value = "number" === t.input ? "".concat(parseFloat(i) || 0) : "".concat(i), ee(n), n.focus(), e.hideLoading();
              })["catch"](function (t) {
                c("Error in inputValue promise: ".concat(t)), n.value = "", ee(n), n.focus(), e.hideLoading();
              });
            },
            Nn = {
              select: function select(e, t, n) {
                var r = Z(e, i.select),
                  o = function o(e, t, i) {
                    var r = document.createElement("option");
                    r.value = i, H(r, t), r.selected = $n(i, n.inputValue), e.appendChild(r);
                  };
                t.forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  if (Array.isArray(n)) {
                    var _e25 = document.createElement("optgroup");
                    _e25.label = t, _e25.disabled = !1, r.appendChild(_e25), n.forEach(function (t) {
                      return o(_e25, t[1], t[0]);
                    });
                  } else o(r, n, t);
                }), r.focus();
              },
              radio: function radio(e, t, n) {
                var r = Z(e, i.radio);
                t.forEach(function (e) {
                  var t = e[0],
                    o = e[1],
                    a = document.createElement("input"),
                    s = document.createElement("label");
                  a.type = "radio", a.name = i.radio, a.value = t, $n(t, n.inputValue) && (a.checked = !0);
                  var l = document.createElement("span");
                  H(l, o), l.className = i.label, s.appendChild(a), s.appendChild(l), r.appendChild(s);
                });
                var o = r.querySelectorAll("input");
                o.length && o[0].focus();
              }
            },
            Gn = function Gn(e) {
              var t = [];
              return "undefined" != typeof Map && e instanceof Map ? e.forEach(function (e, n) {
                var i = e;
                "object" == _typeof(i) && (i = Gn(i)), t.push([n, i]);
              }) : Object.keys(e).forEach(function (n) {
                var i = e[n];
                "object" == _typeof(i) && (i = Gn(i)), t.push([n, i]);
              }), t;
            },
            $n = function $n(e, t) {
              return t && t.toString() === e.toString();
            },
            Bn = function Bn(t) {
              var n = e.innerParams.get(t);
              t.disableButtons(), n.input ? Un(t, "confirm") : jn(t, !0);
            },
            Fn = function Fn(t) {
              var n = e.innerParams.get(t);
              t.disableButtons(), n.returnInputValueOnDeny ? Un(t, "deny") : qn(t, !1);
            },
            Vn = function Vn(e, t) {
              e.disableButtons(), t(wt.cancel);
            },
            Un = function Un(t, n) {
              var i = e.innerParams.get(t);
              if (!i.input) return void c("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(s(n)));
              var r = Cn(t, i);
              i.inputValidator ? Hn(t, r, n) : t.getInput().checkValidity() ? "deny" === n ? qn(t, r) : jn(t, r) : (t.enableButtons(), t.showValidationMessage(i.validationMessage));
            },
            Hn = function Hn(t, n, i) {
              var r = e.innerParams.get(t);
              t.disableInput(), Promise.resolve().then(function () {
                return m(r.inputValidator(n, r.validationMessage));
              }).then(function (e) {
                t.enableButtons(), t.enableInput(), e ? t.showValidationMessage(e) : "deny" === i ? qn(t, n) : jn(t, n);
              });
            },
            qn = function qn(t, n) {
              var i = e.innerParams.get(t || void 0);
              i.showLoaderOnDeny && kn(S()), i.preDeny ? (e.awaitingPromise.set(t || void 0, !0), Promise.resolve().then(function () {
                return m(i.preDeny(n, i.validationMessage));
              }).then(function (e) {
                !1 === e ? (t.hideLoading(), Xt(t)) : t.close({
                  isDenied: !0,
                  value: void 0 === e ? n : e
                });
              })["catch"](function (e) {
                return Yn(t || void 0, e);
              })) : t.close({
                isDenied: !0,
                value: n
              });
            },
            zn = function zn(e, t) {
              e.close({
                isConfirmed: !0,
                value: t
              });
            },
            Yn = function Yn(e, t) {
              e.rejectPromise(t);
            },
            jn = function jn(t, n) {
              var i = e.innerParams.get(t || void 0);
              i.showLoaderOnConfirm && kn(), i.preConfirm ? (t.resetValidationMessage(), e.awaitingPromise.set(t || void 0, !0), Promise.resolve().then(function () {
                return m(i.preConfirm(n, i.validationMessage));
              }).then(function (e) {
                re(k()) || !1 === e ? (t.hideLoading(), Xt(t)) : zn(t, void 0 === e ? n : e);
              })["catch"](function (e) {
                return Yn(t || void 0, e);
              })) : zn(t, n);
            },
            Xn = function Xn(t, n, i) {
              e.innerParams.get(t).toast ? Wn(t, n, i) : (Zn(n), Jn(n), ei(t, n, i));
            },
            Wn = function Wn(t, n, i) {
              n.popup.onclick = function () {
                var n = e.innerParams.get(t);
                n && (Kn(n) || n.timer || n.input) || i(wt.close);
              };
            },
            Kn = function Kn(e) {
              return e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
            };
          var Qn = !1;
          var Zn = function Zn(e) {
              e.popup.onmousedown = function () {
                e.container.onmouseup = function (t) {
                  e.container.onmouseup = void 0, t.target === e.container && (Qn = !0);
                };
              };
            },
            Jn = function Jn(e) {
              e.container.onmousedown = function () {
                e.popup.onmouseup = function (t) {
                  e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (Qn = !0);
                };
              };
            },
            ei = function ei(t, n, i) {
              n.container.onclick = function (r) {
                var o = e.innerParams.get(t);
                Qn ? Qn = !1 : r.target === n.container && f(o.allowOutsideClick) && i(wt.backdrop);
              };
            },
            ti = function ti(e) {
              return "object" == _typeof(e) && e.jquery;
            },
            ni = function ni(e) {
              return e instanceof Element || ti(e);
            },
            ii = function ii(e) {
              var t = {};
              return "object" != _typeof(e[0]) || ni(e[0]) ? ["title", "html", "icon"].forEach(function (n, i) {
                var r = e[i];
                "string" == typeof r || ni(r) ? t[n] = r : void 0 !== r && c("Unexpected type of ".concat(n, "! Expected \"string\" or \"Element\", got ").concat(_typeof(r)));
              }) : Object.assign(t, e[0]), t;
            };
          function ri() {
            var e = this;
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return _construct(e, n);
          }
          function oi(e) {
            var t = /*#__PURE__*/function (_this15) {
              _inherits(t, _this15);
              var _super = _createSuper(t);
              function t() {
                _classCallCheck(this, t);
                return _super.apply(this, arguments);
              }
              _createClass(t, [{
                key: "_main",
                value: function _main(_t15, n) {
                  return _get(_getPrototypeOf(t.prototype), "_main", this).call(this, _t15, Object.assign({}, e, n));
                }
              }]);
              return t;
            }(this);
            return t;
          }
          var ai = function ai() {
              return ue.timeout && ue.timeout.getTimerLeft();
            },
            si = function si() {
              if (ue.timeout) return ce(), ue.timeout.stop();
            },
            li = function li() {
              if (ue.timeout) {
                var _e26 = ue.timeout.start();
                return le(_e26), _e26;
              }
            },
            ci = function ci() {
              var e = ue.timeout;
              return e && (e.running ? si() : li());
            },
            di = function di(e) {
              if (ue.timeout) {
                var _t16 = ue.timeout.increase(e);
                return le(_t16, !0), _t16;
              }
            },
            ui = function ui() {
              return ue.timeout && ue.timeout.isRunning();
            };
          var pi = !1;
          var fi = {};
          function hi() {
            fi[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this, pi || (document.body.addEventListener("click", mi), pi = !0);
          }
          var mi = function mi(e) {
            for (var _t17 = e.target; _t17 && _t17 !== document; _t17 = _t17.parentNode) for (var _e27 in fi) {
              var _n19 = _t17.getAttribute(_e27);
              if (_n19) return void fi[_e27].fire({
                template: _n19
              });
            }
          };
          var gi = Object.freeze({
            __proto__: null,
            isValidParameter: fn,
            isUpdatableParameter: hn,
            isDeprecatedParameter: mn,
            argsToParams: ii,
            getContainer: v,
            getPopup: y,
            getTitle: T,
            getHtmlContainer: D,
            getImage: I,
            getIcon: E,
            getIconContent: _,
            getInputLabel: C,
            getCloseButton: N,
            getActions: x,
            getConfirmButton: R,
            getDenyButton: S,
            getCancelButton: M,
            getLoader: A,
            getFooter: L,
            getTimerProgressBar: P,
            getFocusableElements: $,
            getValidationMessage: k,
            isLoading: V,
            isVisible: mt,
            clickConfirm: gt,
            clickDeny: vt,
            clickCancel: bt,
            fire: ri,
            mixin: oi,
            showLoading: kn,
            enableLoading: kn,
            getTimerLeft: ai,
            stopTimer: si,
            resumeTimer: li,
            toggleTimer: ci,
            increaseTimer: di,
            isTimerRunning: ui,
            bindClickHandler: hi
          });
          var vi = /*#__PURE__*/function () {
            function vi(e, t) {
              _classCallCheck(this, vi);
              this.callback = e, this.remaining = t, this.running = !1, this.start();
            }
            _createClass(vi, [{
              key: "start",
              value: function start() {
                return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
              }
            }, {
              key: "stop",
              value: function stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining;
              }
            }, {
              key: "increase",
              value: function increase(e) {
                var t = this.running;
                return t && this.stop(), this.remaining += e, t && this.start(), this.remaining;
              }
            }, {
              key: "getTimerLeft",
              value: function getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining;
              }
            }, {
              key: "isRunning",
              value: function isRunning() {
                return this.running;
              }
            }]);
            return vi;
          }();
          var bi = ["swal-title", "swal-html", "swal-footer"],
            wi = function wi(e) {
              var t = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
              if (!t) return {};
              var n = t.content;
              return ki(n), Object.assign(yi(n), Ei(n), _i(n), Ti(n), Di(n), Ii(n), Oi(n, bi));
            },
            yi = function yi(e) {
              var t = {};
              return Array.from(e.querySelectorAll("swal-param")).forEach(function (e) {
                Ri(e, ["name", "value"]);
                var n = e.getAttribute("name"),
                  i = e.getAttribute("value");
                "boolean" == typeof cn[n] ? t[n] = "false" !== i : "object" == _typeof(cn[n]) ? t[n] = JSON.parse(i) : t[n] = i;
              }), t;
            },
            Ei = function Ei(e) {
              var t = {};
              return Array.from(e.querySelectorAll("swal-function-param")).forEach(function (e) {
                var n = e.getAttribute("name"),
                  i = e.getAttribute("value");
                t[n] = new Function("return ".concat(i))();
              }), t;
            },
            _i = function _i(e) {
              var t = {};
              return Array.from(e.querySelectorAll("swal-button")).forEach(function (e) {
                Ri(e, ["type", "color", "aria-label"]);
                var n = e.getAttribute("type");
                t["".concat(n, "ButtonText")] = e.innerHTML, t["show".concat(s(n), "Button")] = !0, e.hasAttribute("color") && (t["".concat(n, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (t["".concat(n, "ButtonAriaLabel")] = e.getAttribute("aria-label"));
              }), t;
            },
            Ti = function Ti(e) {
              var t = {},
                n = e.querySelector("swal-image");
              return n && (Ri(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
            },
            Di = function Di(e) {
              var t = {},
                n = e.querySelector("swal-icon");
              return n && (Ri(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
            },
            Ii = function Ii(e) {
              var t = {},
                n = e.querySelector("swal-input");
              n && (Ri(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
              var i = Array.from(e.querySelectorAll("swal-input-option"));
              return i.length && (t.inputOptions = {}, i.forEach(function (e) {
                Ri(e, ["value"]);
                var n = e.getAttribute("value"),
                  i = e.innerHTML;
                t.inputOptions[n] = i;
              })), t;
            },
            Oi = function Oi(e, t) {
              var n = {};
              for (var _i11 in t) {
                var _r5 = t[_i11],
                  _o4 = e.querySelector(_r5);
                _o4 && (Ri(_o4, []), n[_r5.replace(/^swal-/, "")] = _o4.innerHTML.trim());
              }
              return n;
            },
            ki = function ki(e) {
              var t = bi.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
              Array.from(e.children).forEach(function (e) {
                var n = e.tagName.toLowerCase();
                t.includes(n) || l("Unrecognized element <".concat(n, ">"));
              });
            },
            Ri = function Ri(e, t) {
              Array.from(e.attributes).forEach(function (n) {
                -1 === t.indexOf(n.name) && l(["Unrecognized attribute \"".concat(n.name, "\" on <").concat(e.tagName.toLowerCase(), ">."), t.length ? "Allowed attributes are: ".concat(t.join(", ")) : "To set the value, use HTML within the element."]);
              });
            },
            Si = 10,
            Ci = function Ci(e) {
              var t = v(),
                n = y();
              "function" == typeof e.willOpen && e.willOpen(n);
              var r = window.getComputedStyle(document.body).overflowY;
              Li(t, n, e), setTimeout(function () {
                Mi(t, n);
              }, Si), B() && (xi(t, e.scrollbarPadding, r), At()), F() || ue.previousActiveElement || (ue.previousActiveElement = document.activeElement), "function" == typeof e.didOpen && setTimeout(function () {
                return e.didOpen(n);
              }), Q(t, i["no-transition"]);
            },
            Ai = function Ai(e) {
              var t = y();
              if (e.target !== t) return;
              var n = v();
              t.removeEventListener(Oe, Ai), n.style.overflowY = "auto";
            },
            Mi = function Mi(e, t) {
              Oe && se(t) ? (e.style.overflowY = "hidden", t.addEventListener(Oe, Ai)) : e.style.overflowY = "auto";
            },
            xi = function xi(e, t, n) {
              xt(), t && "hidden" !== n && Ft(), setTimeout(function () {
                e.scrollTop = 0;
              });
            },
            Li = function Li(e, t, n) {
              K(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), ee(t, "grid"), setTimeout(function () {
                K(t, n.showClass.popup), t.style.removeProperty("opacity");
              }, Si), K([document.documentElement, document.body], i.shown), n.heightAuto && n.backdrop && !n.toast && K([document.documentElement, document.body], i["height-auto"]);
            };
          var Pi = {
            email: function email(e, t) {
              return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address");
            },
            url: function url(e, t) {
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL");
            }
          };
          function Ni(e) {
            e.inputValidator || Object.keys(Pi).forEach(function (t) {
              e.input === t && (e.inputValidator = Pi[t]);
            });
          }
          function Gi(e) {
            (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (l('Target parameter is not valid, defaulting to "body"'), e.target = "body");
          }
          function $i(e) {
            Ni(e), e.showLoaderOnConfirm && !e.preConfirm && l("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), Gi(e), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), _e(e);
          }
          var Bi;
          var Fi = /*#__PURE__*/function () {
            function Fi() {
              _classCallCheck(this, Fi);
              if ("undefined" == typeof window) return;
              Bi = this;
              for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
              var r = Object.freeze(this.constructor.argsToParams(n));
              Object.defineProperties(this, {
                params: {
                  value: r,
                  writable: !1,
                  enumerable: !0,
                  configurable: !0
                }
              });
              var o = Bi._main(Bi.params);
              e.promise.set(this, o);
            }
            _createClass(Fi, [{
              key: "_main",
              value: function _main(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                wn(Object.assign({}, n, t)), ue.currentInstance && (ue.currentInstance._destroy(), B() && Mt()), ue.currentInstance = Bi;
                var i = Ui(t, n);
                $i(i), Object.freeze(i), ue.timeout && (ue.timeout.stop(), delete ue.timeout), clearTimeout(ue.restoreFocusTimeout);
                var r = Hi(Bi);
                return ut(Bi, i), e.innerParams.set(Bi, i), Vi(Bi, r, i);
              }
            }, {
              key: "then",
              value: function then(t) {
                return e.promise.get(this).then(t);
              }
            }, {
              key: "finally",
              value: function _finally(t) {
                return e.promise.get(this)["finally"](t);
              }
            }]);
            return Fi;
          }();
          var Vi = function Vi(e, t, n) {
              return new Promise(function (i, r) {
                var o = function o(t) {
                  e.close({
                    isDismissed: !0,
                    dismiss: t
                  });
                };
                Ct.swalPromiseResolve.set(e, i), Ct.swalPromiseReject.set(e, r), t.confirmButton.onclick = function () {
                  Bn(e);
                }, t.denyButton.onclick = function () {
                  Fn(e);
                }, t.cancelButton.onclick = function () {
                  Vn(e, o);
                }, t.closeButton.onclick = function () {
                  o(wt.close);
                }, Xn(e, t, o), Et(e, ue, n, o), Sn(e, n), Ci(n), qi(ue, n, o), zi(t, n), setTimeout(function () {
                  t.container.scrollTop = 0;
                });
              });
            },
            Ui = function Ui(e, t) {
              var n = wi(e),
                i = Object.assign({}, cn, t, n, e);
              return i.showClass = Object.assign({}, cn.showClass, i.showClass), i.hideClass = Object.assign({}, cn.hideClass, i.hideClass), i;
            },
            Hi = function Hi(t) {
              var n = {
                popup: y(),
                container: v(),
                actions: x(),
                confirmButton: R(),
                denyButton: S(),
                cancelButton: M(),
                loader: A(),
                closeButton: N(),
                validationMessage: k(),
                progressSteps: O()
              };
              return e.domCache.set(t, n), n;
            },
            qi = function qi(e, t, n) {
              var i = P();
              te(i), t.timer && (e.timeout = new vi(function () {
                n("timer"), delete e.timeout;
              }, t.timer), t.timerProgressBar && (ee(i), Y(i, t, "timerProgressBar"), setTimeout(function () {
                e.timeout && e.timeout.running && le(t.timer);
              })));
            },
            zi = function zi(e, t) {
              t.toast || (f(t.allowEnterKey) ? Yi(e, t) || _t(t, -1, 1) : ji());
            },
            Yi = function Yi(e, t) {
              return t.focusDeny && re(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && re(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !re(e.confirmButton) || (e.confirmButton.focus(), 0));
            },
            ji = function ji() {
              document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
            };
          Object.assign(Fi.prototype, On), Object.assign(Fi, gi), Object.keys(On).forEach(function (e) {
            Fi[e] = function () {
              var _Bi;
              if (Bi) return (_Bi = Bi)[e].apply(_Bi, arguments);
            };
          }), Fi.DismissReason = wt, Fi.version = "11.6.6";
          var Xi = Fi;
          return Xi["default"] = Xi, Xi;
        }(), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function (e, t) {
          var n = e.createElement("style");
          if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
            n.innerHTML = t;
          } catch (e) {
            n.innerText = t;
          }
        }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');
      }
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = t[i] = {
      id: i,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, {
      a: t
    }), t;
  }, n.d = function (e, t) {
    for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
      enumerable: !0,
      get: t[i]
    });
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.nc = void 0, function () {
    "use strict";

    var e = n(136),
      t = n(379),
      i = n.n(t),
      r = n(406),
      o = {
        insert: "head",
        singleton: !1
      };
    i()(r.Z, o);
    r.Z.locals;
    var a = n(545);
    var s = n.n(a)();
    var l = n(282),
      c = {
        insert: "head",
        singleton: !1
      };
    i()(l.Z, c);
    l.Z.locals;
    var d = n(455),
      u = document.querySelector("#goalFiles"),
      p = e.create(u, {
        labelIdle: 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
        credits: !1,
        allowMultiple: !0,
        instantUpload: !1,
        allowProcess: !0
      });
    function f(e, t) {
      Toastify({
        text: e,
        duration: 2e3,
        close: !0,
        gravity: "top",
        position: "right",
        backgroundColor: t
      }).showToast();
    }
    var h = new s("#start-date-datepicker", {
        timepicker: !0,
        inline: !0,
        altFieldDateFormat: "yyyy-MM-dd",
        altField: "#start-date-hidden",
        onSelect: function onSelect(e, t, n) {
          var i = e.date,
            r = i.getFullYear() + ("0" + (i.getMonth() + 1)).slice(-2) + ("0" + i.getDate()).slice(-2),
            o = "T" + ("0" + i.getHours()).slice(-2) + ("0" + i.getMinutes()).slice(-2) + "00Z";
          $("#start-date-hidden").val(r + o);
        }
      }),
      m = new s("#end-date-datepicker", {
        inline: !0,
        timepicker: !0
      }),
      g = (new s("#end-date", {
        isMobile: !0,
        autoClose: !0,
        dateFormat: "dd.MM.yyyy",
        onSelect: function onSelect(e, t, n) {
          var i = e.date,
            r = i.getFullYear() + ("0" + (i.getMonth() + 1)).slice(-2) + ("0" + i.getDate()).slice(-2),
            o = "T" + ("0" + i.getHours()).slice(-2) + ("0" + i.getMinutes()).slice(-2) + "00Z";
          $("#end-date-hidden").val(r + o);
        }
      }), new Date());
    g.setMinutes(0);
    new s("#remind-datepicker", {
      isMobile: !0,
      autoClose: !0,
      timepicker: !0,
      minDate: g,
      minutesStep: 30,
      dateFormat: "dd.MM.yyyy",
      altFieldDateFormat: "yyyy-MM-dd HH:mm:00",
      altField: "#remind-date-hidden"
    });
    $("#repeatGoalC").change(function (e) {
      $("#recurring").hasClass("d-none") ? $("#recurring").removeClass("d-none") : $("#recurring").addClass("d-none");
    }), document.addEventListener("DOMContentLoaded", function () {
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": $('input[name="_token"]').val()
        }
      });
      var e = document.getElementById("calendar"),
        t = new FullCalendar.Calendar(e, {
          locale: "ru",
          firstDay: 1,
          weekNumbers: !0,
          headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          },
          initialView: "timeGridWeek",
          eventDidMount: function eventDidMount(e) {
            new Tooltip(e.el, {
              title: e.event.extendedProps.exposed,
              placement: "top",
              trigger: "hover",
              container: "#calendar"
            });
          },
          eventContent: function eventContent(e) {
            var t = document.createElement("div");
            t.className = "m-1";
            var n = document.createElement("p");
            n.className = "mb-0 font-bold";
            var i = document.createElement("p");
            i.className = "mb-2";
            var r = document.createElement("span");
            return n.innerHTML = e.timeText, t.appendChild(n), i.innerHTML = e.event.title, t.appendChild(i), 0 == e.event.extendedProps.customRrule ? 0 == e.event.extendedProps.status ? r.innerHTML = "Статус: Не выполнена" : 1 == e.event.extendedProps.status ? r.innerHTML = "Статус: Выполнена" : r.innerHTML = "Статус: Просрочена" : r.innerHTML = "Повторяющаяся задача", t.appendChild(r), {
              domNodes: [t]
            };
          },
          events: "/calendar/getGoals",
          eventTimeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            meridiem: !1
          },
          nowIndicator: !0,
          displayEventEnd: !0,
          dayMaxEventRows: !0,
          selectable: !0,
          selectMirror: !0,
          select: function select(e) {
            $("#createGoal").modal("toggle"), "dayGridMonth" === t.view.type ? m.selectDate(moment(moment(e.end).subtract(1, "days")).add(1, "h"), {
              updateTime: !0
            }) : m.selectDate(e.end, {
              updateTime: !0
            });
            var n = 0;
            h.selectDate(e.start, {
              updateTime: !0
            }), document.getElementById("allDayC").addEventListener("change", function () {
              1 == this.checked ? (h.update({
                timepicker: !1
              }), m.update({
                timepicker: !1
              }), n = 1) : (h.update({
                timepicker: !0
              }), m.update({
                timepicker: !0
              }), n = 0);
            }), document.getElementById("saveG").onclick = function () {
              var e, i;
              if (n ? (e = moment(h.selectedDates[0]).format("YYYY-MM-DD 00:00:00"), i = moment(moment(m.selectedDates[0]).add(1, "days")).format("YYYY-MM-DD 00:00:00")) : (e = moment(h.selectedDates[0]).format("YYYY-MM-DD HH:mm:ss"), i = moment(m.selectedDates[0]).format("YYYY-MM-DD HH:mm:ss")), i < e) f("Дата конца задачи не может быть меньше начала", "linear-gradient(to right, #ED213A, #93291E)");else {
                var r = $("input[name='isMySelf']").val(),
                  o = $("#user_id").val(),
                  a = $("#color").val(),
                  s = $("#rrule").val();
                if (0 != r || 0 != o) {
                  if ("#ffffff" != a) {
                    var l = $("#text").val(),
                      c = new FormData(),
                      d = p.getFiles();
                    if (d.length > 0) for (var u = 0; u < d.length; u++) c.append("filepond[]", d[u].file);
                    1 == $('input[name="remind-goal"]').prop("checked") ? c.append("remind_at", $("#remind-date-hidden").val()) : c.append("remind_at", "0"), c.append("isMySelf", r), c.append("deadline", i), c.append("start_date", e), c.append("user_id", o), c.append("text", l), c.append("color", a), c.append("allDay", n), c.append("rrule", s), $.ajax({
                      url: "/goals",
                      type: "POST",
                      contentType: !1,
                      processData: !1,
                      cache: !1,
                      data: c,
                      success: function success(e) {
                        $("#createGoal").modal("toggle"), $("#newGoal").trigger("reset"), $(".user-form").addClass("show"), $("input[name='isMySelf']").val(0), 1 == r && (t.refetchEvents(), document.getElementById("newGoal").reset(), $(".user-form").hasClass("show") || $(".user-form").addClass("show"), $("#group_id").select2(), $("#user_id").select2(), $("#user_id").attr("disabled", "disabled"), p.removeFiles(), h.update({
                          timepicker: !0
                        }), m.update({
                          timepicker: !0
                        }), $("#remind-rules").css("display", "none"), $("#remind-datepicker").attr("disabled", "yes"), $("#remind-datepicker").val(""), $("#remind-date-hidden").val($("#tomorrow").val()), $("#recurring-rules").css("display", "none"), $("span.freq-selection").text("день(я,ей)"), $("#monthday-select,#bymonth-select,#weekday-select").hide(), $('input[name="interval"]').val("1"), $('input[name="count"]').val("1"), $('select[name="freq"]').val("daily"), $('input[id="until-select"]').prop("checked", !1), $('input[id="end-no"]').prop("checked", !0).change()), f("Задача успешно создана 👌", "linear-gradient(to right, #00B560, #00914D)"), t.unselect();
                      },
                      error: function error(e) {
                        e.responseJSON.errors && ($("#userError").html(e.responseJSON.errors.user_id), $("#textError").html(e.responseJSON.errors.text));
                      }
                    });
                  } else f("Белый цвет запрещен 😢", "linear-gradient(to right, #ED213A, #93291E)");
                } else f("Выберите для кого создается задача!", "linear-gradient(to right, #ED213A, #93291E)");
              }
            };
          },
          editable: !0,
          eventDrop: function eventDrop(e) {
            var t,
              n,
              i = e.event.id;
            e.event.allDay ? (t = moment(e.event.start).format("YYYY-MM-DD"), n = moment(e.event.end).format("YYYY-MM-DD")) : (t = moment(e.event.start).format("YYYY-MM-DD HH:mm:ss"), n = moment(e.event.end).format("YYYY-MM-DD HH:mm:ss")), $.ajax({
              url: "/calendar/goal-update/" + i,
              type: "PATCH",
              data: {
                start_date: t,
                deadline: n
              },
              success: function success(e) {
                f("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
              },
              error: function error(e) {
                f("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
              }
            });
          },
          eventClick: function eventClick(e) {
            var n = e.event.id;
            $.ajax({
              url: "/calendar/getGoal/" + n,
              type: "GET",
              success: function success(e) {
                $("#idGoal").html(e.id), $("#textGoal").html(e.title), $("#startGoal").html(moment(e.start).format("DD.MM.YYYY г. / HH:mm")), $("#endGoal").html(moment(e.end).format("DD.MM.YYYY г. / HH:mm")), $("#exposedGoal").html(e.exposed), $("#userGoal").html(e.user), $("#clientGoal").html(e.client), 0 == e.files ? $("#files").html("<span class='text-danger'>Файлы не были загружены</span>") : $("#files").html("<a class='btn btn-success download-zip mt-2' attr-id='" + e.id + "'>Скачать</a>"), 1 == e.status ? ($("#status-goal").html("Выполнено"), $("#status-goal").hasClass("bg-danger") && ($("#status-goal").removeClass("bg-danger"), $("#status-goal").addClass("bg-success")), $("#completeGoal").attr("disabled", "disabled"), $("#completeGoal").addClass("disabled")) : 0 == e.status ? ($("#status-goal").html("Не выполнено"), $("#status-goal").hasClass("bg-success") && ($("#status-goal").removeClass("bg-success"), $("#status-goal").addClass("bg-danger")), $("#completeGoal").removeAttr("disabled"), $("#completeGoal").hasClass("disabled") && $("#completeGoal").removeClass("disabled")) : ($("#status-goal").html("Просрочена"), $("#status-goal").hasClass("bg-success") && ($("#status-goal").removeClass("bg-success"), $("#status-goal").addClass("bg-danger")), $("#completeGoal").attr("disabled", "disabled"), $("#completeGoal").addClass("disabled")), $(".action-goal").each(function (t) {
                  $(this).attr("attr-id", e.id);
                }), $("#viewGoal").modal("toggle");
              },
              error: function error(e) {
                f("Неожиданная ошибка, при просмотре задачи. Обратитесь к администратору 😢", "linear-gradient(to right, #ED213A, #93291E)");
              }
            }), document.getElementById("deleteGoal").onclick = function () {
              var e = this;
              d.fire({
                title: "Вы действительно хотите удалить задачу? 🥺",
                text: "Данное действие невозможно отменить!",
                icon: "question",
                showCancelButton: !0,
                confirmButtonColor: "#31ce36",
                cancelButtonColor: "#f25961",
                confirmButtonText: "Удалить",
                cancelButtonText: "Отмена"
              }).then(function (n) {
                if (n.isConfirmed) {
                  var i = $(e).attr("attr-id");
                  $.ajax({
                    url: "/calendar/goal-delete/" + i,
                    type: "DELETE",
                    success: function success(e) {
                      t.refetchEvents(), $("#viewGoal").modal("toggle"), f("Задача успешно удалена 👌", "linear-gradient(to right, #00B560, #00914D)");
                    },
                    error: function error(e) {
                      f(e.responseJSON.error, "linear-gradient(to right, #ED213A, #93291E)");
                    }
                  });
                }
              });
            }, document.getElementById("completeGoal").onclick = function () {
              var e = $(this).attr("attr-id");
              $.ajax({
                url: "/goals/complete/" + e,
                type: "POST",
                success: function success(e) {
                  f("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)"), $("#status-goal").html("Выполнено"), $("#status-goal").hasClass("bg-danger") && ($("#status-goal").removeClass("bg-danger"), $("#status-goal").addClass("bg-success")), $("#completeGoal").attr("disabled", "disabled"), $("#completeGoal").addClass("disabled"), t.refetchEvents();
                },
                error: function error(e) {
                  f("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                }
              });
            };
          },
          eventResizableFromStart: !0,
          eventDurationEditable: !0,
          eventResize: function eventResize(e) {
            var t = e.event.id,
              n = moment(e.event.start).format("YYYY-MM-DD HH:mm:ss"),
              i = moment(e.event.end).format("YYYY-MM-DD HH:mm:ss");
            $.ajax({
              url: "/calendar/goal-update/" + t,
              type: "PATCH",
              data: {
                start_date: n,
                deadline: i
              },
              success: function success(e) {
                f("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
              },
              error: function error(e) {
                f("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
              }
            });
          }
        });
      t.render(), console.log($(".fc-toolbar-chunk")[2]), $(window).width() < 500 && (t.changeView("timeGridDay"), $(".fc-today-button").css("display", "none"), $(".fc-toolbar-chunk").each(function (e) {
        2 == e && $(this).css("display", "none");
      }), t.setOption("height", 800)), $("#createGoalWithoutCalendar").click(function () {
        var e = new Date();
        t.select(e);
      }), $('input[name="remind-goal"]').change(function () {
        1 == $(this).prop("checked") ? $("#remind-rules").slideDown() : $("#remind-rules").hide();
      }), $('input[name="remind-rules"]').change(function () {
        var e = $(this).val();
        $('input[name="remind-rules"]').each(function () {
          $(this).val() === e && ($("#remind-date-hidden").val(e), "another" === $(this).val() ? $("#remind-datepicker").removeAttr("disabled") : ($("#remind-datepicker").attr("disabled", "yes"), $("#remind-datepicker").val("")));
        });
      });
    });
  }();
})();
/******/ })()
;