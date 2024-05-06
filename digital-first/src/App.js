import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";
import AppRoutes from './AppRoutes';
import LandingPage from './LandingPage';

function App() {

  // Function to check if the screen width matches the desktop size
  const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

  return (
    <Router>
      {isDesktop() ? <LandingPage /> : <AppRoutes />}
    </Router>
  );
}

export default App;
