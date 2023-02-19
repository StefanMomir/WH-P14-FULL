"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var Table = function Table(_ref) {
  var _props$dataResult;
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  /*SET PAGINATION VARIABLES */
  var currentPageIndex = Math.ceil(props.currentPage * props.resultsPerPage);
  var previousPageIndex = Math.ceil(currentPageIndex - props.resultsPerPage);
  var dataResults = (_props$dataResult = props.dataResult) === null || _props$dataResult === void 0 ? void 0 : _props$dataResult.slice(previousPageIndex, currentPageIndex);

  /* SORTING DATA */
  var sorting = function sorting(sortBy, order) {
    if (order === "asc") {
      return function (a, b) {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      };
    } else {
      return function (a, b) {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      };
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sorting"
  }, props.sortingTitle.map(function (sort, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "sorting-container",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: props.sortBy === sort.name ? "sorting-title after" : "sorting-title",
      "data-sortby": sort.name,
      onClick: function onClick(e) {
        props.setSortBy(sort.name);
      }
    }, sort.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "sorting-button"
    }));
  }), dataResults === null || dataResults === void 0 ? void 0 : dataResults.sort(sorting(props.sortBy, props.order)).map(function (mainData, index) {
    return /*#__PURE__*/_react["default"].createElement(props.TableData, {
      mainData: mainData,
      key: index
    });
  }));
};
var _default = Table;
exports["default"] = _default;