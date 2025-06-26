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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemText = exports.ListItemIcon = exports.ListItemButton = exports.ListItem = exports.List = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var List = function (props) { return (0, jsx_runtime_1.jsx)(material_1.List, __assign({}, props)); };
exports.List = List;
var ListItem = function (props) { return (0, jsx_runtime_1.jsx)(material_1.ListItem, __assign({}, props)); };
exports.ListItem = ListItem;
var ListItemButton = function (props) { return (0, jsx_runtime_1.jsx)(material_1.ListItemButton, __assign({}, props)); };
exports.ListItemButton = ListItemButton;
var ListItemIcon = function (props) { return (0, jsx_runtime_1.jsx)(material_1.ListItemIcon, __assign({}, props)); };
exports.ListItemIcon = ListItemIcon;
var ListItemText = function (props) { return (0, jsx_runtime_1.jsx)(material_1.ListItemText, __assign({}, props)); };
exports.ListItemText = ListItemText;
