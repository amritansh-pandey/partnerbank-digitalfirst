import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginFaceID from './pages/LoginFaceID';
import Intro from './pages/Intro';
import GettingStarted from './pages/GettingStarted';
import Page404 from './pages/404Page';
import AdminSetting from './pages/AdminSetting';
import NewHomePage from './pages/NewHomePage';
import EnterDetails from './pages/EnterDetails';

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
  const [selectedLang, setSelectedLang] = useState('en');

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
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
              selectedLang={selectedLang}
              onSelectBrand={handleBrandSelect}
              onSelectTheme={handleThemeSelect}
              onSelectLang={handleLangSelect}
            />
          }
        />
        <Route path="/login" element={<LoginFaceID />} />
        <Route path="/intro" element={<Intro brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/login-faceid" element={<LoginFaceID />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/enter-detail" element={<EnterDetails />} />
        <Route path="/new-homepage" element={<NewHomePage />} />
        <Route path="404" element={<Page404 />} />
        {/* Redirect to the brand and theme selector if the route doesn't match */}
        <Route path="*" element={<Navigate to="/admin-setting" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;