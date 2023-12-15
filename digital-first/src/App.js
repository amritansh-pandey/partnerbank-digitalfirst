import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";
import AppRoutes from './AppRoutes';

function App() {



  return (
  
    <Router>
      <AppRoutes />
    </Router>

  );
}

export default App;
