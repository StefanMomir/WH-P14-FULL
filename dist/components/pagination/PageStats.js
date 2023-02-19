"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var pageStats = function pageStats(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  var pageIndex = Math.ceil(props.currentPage * props.resultsPerPage);
  var lastIndex = Math.ceil(parseInt(1) + (pageIndex - props.resultsPerPage));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-index"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Showing ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "red"
  }, " ", lastIndex, " "), " to\xA0", /*#__PURE__*/_react["default"].createElement("span", {
    className: "red"
  }, pageIndex <= props.totalResults ? pageIndex : props.totalResults), "\xA0of", /*#__PURE__*/_react["default"].createElement("span", {
    className: "red"
  }, " ", props.totalResults, " "), " entries"));
};
var _default = pageStats;
exports["default"] = _default;