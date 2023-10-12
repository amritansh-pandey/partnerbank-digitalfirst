import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from './AppRoutes';

function App() {

  const mcTheme = createTheme({
    typography: {
      fontFamily:
        "MarkForMC, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#FB853C",
      },
    },
  });

  return (
    <ThemeProvider theme={mcTheme}>
    <Router>
      <AppRoutes />
    </Router>
    </ThemeProvider>
  );
}

export default App;
