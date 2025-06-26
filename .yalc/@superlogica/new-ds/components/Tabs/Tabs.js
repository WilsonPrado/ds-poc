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
exports.TabPanel = exports.Tab = exports.Tabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Tabs = function (props) {
    return (0, jsx_runtime_1.jsx)(material_1.Tabs, __assign({}, props));
};
exports.Tabs = Tabs;
var Tab = function (props) {
    return (0, jsx_runtime_1.jsx)(material_1.Tab, __assign({}, props));
};
exports.Tab = Tab;
var TabPanel = function (_a) {
    var children = _a.children, value = _a.value, index = _a.index, other = __rest(_a, ["children", "value", "index"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ role: "tabpanel", hidden: value !== index, id: "ds-tabpanel-".concat(index), "aria-labelledby": "ds-tab-".concat(index) }, other, { children: children })));
};
exports.TabPanel = TabPanel;
