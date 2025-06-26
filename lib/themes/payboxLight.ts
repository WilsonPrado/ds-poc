import { createTheme } from '@mui/material/styles'

const baseFont = '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'

export const payboxLightTheme = createTheme({
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
    mode: 'light',
    primary: {
      main: '#1976d2',
      dark: '#115293',
      light: '#4791db',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#9c27b0',
      dark: '#6a0080',
      light: '#ba68c8',
      contrastText: '#ffffff'
    },
    error: {
      main: '#d32f2f',
      dark: '#9a0007',
      light: '#ef5350',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#ed6c02',
      dark: '#b53d00',
      light: '#ff9800',
      contrastText: '#000000'
    },
    info: {
      main: '#0288d1',
      dark: '#01579b',
      light: '#03a9f4',
      contrastText: '#ffffff'
    },
    success: {
      main: '#2e7d32',
      dark: '#005005',
      light: '#4caf50',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      disabled: '#9e9e9e'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
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
})
