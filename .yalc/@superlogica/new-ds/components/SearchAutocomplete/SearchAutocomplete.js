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
exports.SearchAutocomplete = SearchAutocomplete;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
function SearchAutocomplete(_a) {
    var _b = _a.label, label = _b === void 0 ? 'Buscar...' : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, _d = _a.variant, variant = _d === void 0 ? 'outlined' : _d, props = __rest(_a, ["label", "loading", "startIcon", "endIcon", "variant"]);
    return ((0, jsx_runtime_1.jsx)(material_1.Autocomplete, __assign({ fullWidth: true, loading: loading, freeSolo: true, popupIcon: null, disableClearable: false }, props, { renderInput: function (params) {
            var _a, _b;
            var InputProps = params.InputProps, restParams = __rest(params, ["InputProps"]);
            var hasValue = typeof ((_a = params.inputProps) === null || _a === void 0 ? void 0 : _a.value) === 'string' &&
                ((_b = params.inputProps) === null || _b === void 0 ? void 0 : _b.value.trim()) !== '';
            return ((0, jsx_runtime_1.jsx)(material_1.TextField, __assign({}, restParams, { label: label, variant: variant, sx: {
                    '& .MuiAutocomplete-popupIndicator': {
                        display: 'none'
                    },
                    '& .MuiOutlinedInput-root': {
                        paddingRight: '16px !important'
                    }
                }, InputProps: __assign(__assign({}, InputProps), { startAdornment: startIcon ? ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "start", children: startIcon })) : undefined, endAdornment: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: "inherit", size: 20 }) })), endIcon && ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", style: { marginRight: hasValue ? 20 : 0 }, children: endIcon })), InputProps === null || InputProps === void 0 ? void 0 : InputProps.endAdornment] })) }) })));
        } })));
}
