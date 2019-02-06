import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./MuiTheme";


export default ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</MuiThemeProvider>,
  document.getElementById('root') || document.createElement('div'),
);
