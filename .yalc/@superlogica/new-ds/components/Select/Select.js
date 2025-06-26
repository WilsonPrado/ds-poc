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
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Select = function (_a) {
    var label = _a.label, _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.id, id = _c === void 0 ? 'ds-select' : _c, children = _a.children, props = __rest(_a, ["label", "options", "id", "children"]);
    var labelId = "".concat(id, "-label");
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, { fullWidth: true, children: [label && (0, jsx_runtime_1.jsx)(material_1.InputLabel, { id: labelId, children: label }), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ labelId: labelId, id: id, label: label }, props, { children: options.length > 0
                    ? options.map(function (opt) { return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: opt.value, children: opt.label }, opt.value)); })
                    : children }))] }));
};
exports.Select = Select;
