"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var TableData = function TableData(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.id), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title weight capitalize"
  }, props.mainData.firstname), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title weight"
  }, props.mainData.lastname), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.createdAt), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.department), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.birthdate), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.street), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.city), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.state), /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-title"
  }, props.mainData.zip));
};
var _default = TableData;
exports["default"] = _default;