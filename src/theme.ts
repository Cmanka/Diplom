import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          fontFamily: 'Arial, Roboto, Helvetica, sans-serif',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Arial, Roboto, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#2c6c5a',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default theme;
