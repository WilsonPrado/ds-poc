"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var ThemeWrapper = function (_a) {
    var theme = _a.theme, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(material_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), children] }));
};
exports.ThemeWrapper = ThemeWrapper;
