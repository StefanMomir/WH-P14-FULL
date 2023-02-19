"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var Dropdown = function Dropdown(_ref) {
  var _props$mapData;
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropbtn"
  }, props.titleButton), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-content"
  }, (_props$mapData = props.mapData) === null || _props$mapData === void 0 ? void 0 : _props$mapData.map(function (returnMap, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "drop-element",
      key: index,
      "data-name": props.dataName,
      "data-state": returnMap.data,
      onClick: function onClick(e) {
        props.handleData(e.target.dataset);
        props.setData(e.target.dataset.state);
      }
    }, returnMap.data);
  })));
};
var _default = Dropdown;
exports["default"] = _default;