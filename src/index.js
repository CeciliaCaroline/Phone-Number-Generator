import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default ReactDOM.render(
  <MuiThemeProvider>
  <CssBaseline />
  <App />
</MuiThemeProvider>,
  document.getElementById('root') || document.createElement('div'),
);
