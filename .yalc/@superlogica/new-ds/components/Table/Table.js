"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePagination = exports.TableCell = exports.TableRow = exports.TableFooter = exports.TableBody = exports.TableHead = exports.Table = exports.TableContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var TableContainer = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableContainer, __assign({ component: material_1.Paper }, props, { children: children })));
};
exports.TableContainer = TableContainer;
var Table = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.Table, __assign({}, props, { children: children })));
};
exports.Table = Table;
var TableHead = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableHead, __assign({}, props, { children: children })));
};
exports.TableHead = TableHead;
var TableBody = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableBody, __assign({}, props, { children: children })));
};
exports.TableBody = TableBody;
var TableFooter = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableFooter, __assign({}, props, { children: children })));
};
exports.TableFooter = TableFooter;
var TableRow = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableRow, __assign({}, props, { children: children })));
};
exports.TableRow = TableRow;
var TableCell = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({}, props, { children: children })));
};
exports.TableCell = TableCell;
var TablePagination = function (props) { return ((0, jsx_runtime_1.jsx)(material_1.TablePagination, __assign({}, props))); };
exports.TablePagination = TablePagination;
