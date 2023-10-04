import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginFaceID from './pages/LoginFaceID';
import Intro from './pages/Intro';
import GettingStarted from './pages/GettingStarted';
import Page404 from './pages/404Page';
import AdminSetting from './pages/AdminSetting';

function AppRoutes() {
  // Define your brands array here
  const brands = [
    { name: 'partnerbank', themes: ['light', 'dark'] },
    { name: 'bankpathy', themes: ['light'] },
    // Add more brands and their themes as needed
  ];

  // Initialize state with "PartnerBank" and "light" as defaults
  const [selectedBrand, setSelectedBrand] = useState(brands[0].name);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };
console.log(selectedBrand);
  return (
    <div id="theme" data-brand={selectedBrand} data-theme={selectedTheme} >
    <Routes >
      <Route path="/" element={<Splash />} /> {/* Default route for Splash */}
   
      <Route
        path="/admin-setting"
        element={
          <AdminSetting
            brands={brands}
            selectedBrand={selectedBrand}
            selectedTheme={selectedTheme}
            onSelectBrand={handleBrandSelect}
            onSelectTheme={handleThemeSelect}
          />
        }
      />
      <Route path="/login" element={<LoginFaceID />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="404" element={<Page404 />} />
      {/* Redirect to the brand and theme selector if the route doesn't match */}
      <Route path="*" element={<Navigate to="/admin-setting" />} />
    </Routes>
    </div>
  );
}

export default AppRoutes;