"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payboxDarkTheme = void 0;
var styles_1 = require("@mui/material/styles");
var baseFont = '"Inter", "Roboto", "Helvetica", "Arial", sans-serif';
exports.payboxDarkTheme = (0, styles_1.createTheme)({
    typography: {
        fontFamily: baseFont,
        h1: {
            fontSize: '6rem',
            fontWeight: 300,
            lineHeight: 1.167,
            letterSpacing: '-1.5px'
        },
        h2: {
            fontSize: '3.75rem',
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: '-0.5px'
        },
        h3: {
            fontSize: '3rem',
            fontWeight: 400,
            lineHeight: 1.167,
            letterSpacing: '0px'
        },
        h4: {
            fontSize: '2.125rem',
            fontWeight: 400,
            lineHeight: 1.235,
            letterSpacing: '0.25px'
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 400,
            lineHeight: 1.334,
            letterSpacing: '0px'
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: '0.15px'
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: '0.15px'
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57,
            letterSpacing: '0.1px'
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.5px'
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: '0.25px'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
            letterSpacing: '0.4px'
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 2.66,
            letterSpacing: '1px',
            textTransform: 'uppercase'
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'none'
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            dark: '#5d99c6',
            light: '#e3f2fd',
            contrastText: '#000000'
        },
        secondary: {
            main: '#ce93d8',
            dark: '#9c64a6',
            light: '#f3e5f5',
            contrastText: '#000000'
        },
        error: {
            main: '#f44336',
            dark: '#ba000d',
            light: '#e57373',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#ff9800',
            dark: '#c66900',
            light: '#ffb74d',
            contrastText: '#000000'
        },
        info: {
            main: '#29b6f6',
            dark: '#0288d1',
            light: '#81d4fa',
            contrastText: '#000000'
        },
        success: {
            main: '#66bb6a',
            dark: '#338a3e',
            light: '#a5d6a7',
            contrastText: '#000000'
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
            disabled: '#888888'
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    }
});
