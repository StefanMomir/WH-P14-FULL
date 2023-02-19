"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var SearchByKey = function SearchByKey(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "search"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Search:")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "keyword",
    id: "search",
    onChange: function onChange(e) {
      return props.handleFindKeyword(e.target.value);
    }
  }));
};
var _default = SearchByKey;
exports["default"] = _default;