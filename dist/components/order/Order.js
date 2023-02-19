"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var Order = function Order(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "order"
  }, props.order === "asc" ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "material-symbols-outlined",
    onClick: function onClick(e) {
      props.setOrder("desc");
    }
  }, "swap_vert") : /*#__PURE__*/_react["default"].createElement("span", {
    className: "material-symbols-outlined inverse",
    onClick: function onClick(e) {
      props.setOrder("asc");
    }
  }, "swap_vert"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "order-title"
  }, props.order));
};
var _default = Order;
exports["default"] = _default;