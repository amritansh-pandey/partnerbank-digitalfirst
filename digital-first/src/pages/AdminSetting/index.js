
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const brands = [
  { name: 'partnerbank', themes: ['light', 'dark'] },
  { name: 'bankpathy', themes: ['light'] },
];

function AdminSetting({ onSelectBrand, onSelectTheme, onSelectLang }) {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    onSelectBrand(selectedBrand.name)
    onSelectTheme(selectedTheme)
    onSelectLang(selectedLang)
  }, [selectedBrand, selectedTheme, selectedLang]);

  useEffect(() => {
    if (selectedBrand && selectedBrand.name === 'partnerbank') {
      setSelectedTheme('light');
    }
  }, [selectedBrand]);

  const handleBrandChange = (event) => {
    const brandName = event.target.value;
    const brand = brands.find((b) => b.name === brandName);
    if (brand) {
      setSelectedBrand(brand);
    }
  };

  const handleThemeChange = () => {
    setSelectedTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  };

  const handleLangChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <div className="admin-settings">
      <h1>Admin Settings</h1>

      <div className="lang-selector">
        <h2>Select a Language:</h2>
        <div className="radio-buttons">
          {["en", "fr"].map((lang) => (
            <label key={lang} className={`radio-button-label ${selectedLang === lang ? 'selected' : ''}`}>
              <input
                type="radio"
                value={lang}
                checked={selectedLang === lang}
                onChange={handleLangChange}
              />
              <span className="radio-button-text">{lang}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="brand-selector">
        <h2>Select a Brand:</h2>
        <div className="radio-buttons">
          {brands.map((brand) => (
            <label key={brand.name} className={`radio-button-label ${selectedBrand && selectedBrand.name === brand.name ? 'selected' : ''}`}>
              <input
                type="radio"
                value={brand.name}
                checked={selectedBrand && selectedBrand.name === brand.name}
                onChange={handleBrandChange}
              />
              <span className="radio-button-text">{brand.name}</span>
            </label>
          ))}
        </div>
      </div>

      {selectedBrand && (
        <div className="theme-selector">
          {selectedBrand.themes.length > 1 && (
            <>
              <h2>Choose a Theme:</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={selectedTheme === 'dark'}
                  onChange={handleThemeChange}
                />
                <span className="slider"></span>
              </label>
              <p>Selected Theme: {selectedTheme}</p>
            </>
          )}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='confirm-button'>Confirm</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AdminSetting;