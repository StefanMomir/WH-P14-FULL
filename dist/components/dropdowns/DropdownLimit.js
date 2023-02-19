"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var DropdownLimit = function DropdownLimit(_ref) {
  var _props$settingsData;
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "entries-number"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Show "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "results"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropbtn"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "limit"
  }, " ", (_props$settingsData = props.settingsData) === null || _props$settingsData === void 0 ? void 0 : _props$settingsData.map(function (l) {
    return l.limit;
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-content"
  }, props.limitData.map(function (returnMap, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "drop-element",
      key: index,
      "data-limit": returnMap.data,
      "data-page": Math.ceil(props.totalResults / props.resultsPerPage),
      onClick: function onClick(e) {
        props.handleLimit(e.target.dataset);
        props.handleReset(returnMap.data);
      }
    }, returnMap.data);
  })))), /*#__PURE__*/_react["default"].createElement("p", null, "\xA0 Results"));
};
var _default = DropdownLimit;
exports["default"] = _default;