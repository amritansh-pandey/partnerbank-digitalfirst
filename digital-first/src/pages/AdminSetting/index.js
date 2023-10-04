import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const brands = [
    { name: 'partnerbank', themes: ['light', 'dark'] },
    { name: 'bankpathy', themes: ['light'] },
];

function AdminSetting({ onSelectBrand, onSelectTheme }) {
    const [selectedBrand, setSelectedBrand] = useState(brands[0]);
    const [selectedTheme, setSelectedTheme] = useState('light'); // Default theme

    useEffect(() => {
        onSelectBrand(selectedBrand.name)
        onSelectTheme(selectedTheme)
    })

    useEffect(() => {
        // When the component mounts or when the selectedBrand changes, set the theme to 'light' for 'Partner Bank'.
        if (selectedBrand && selectedBrand.name === 'partnerbank') {
            setSelectedTheme('light');
        }
    }, [selectedBrand]);

    const handleBrandChange = (event) => {
        const brandName = event.target.value;
        const brand = brands.find((b) => b.name === brandName);
        console.log(brand);
        if (brand) {
            setSelectedBrand(brand);
        }
    };

    const handleThemeChange = () => {
        // Toggle between 'light' and 'dark' themes
        setSelectedTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
        );
    };

    return (
        <div className="admin-settings">
            <h1>Admin Settings</h1>
            <div className="brand-selector">
                <h2>Select a Brand:</h2>
                <div className="radio-buttons">
                    {brands.map((brand) => (
                        <label key={brand.name}>
                            <input
                                type="radio"
                                value={brand.name}
                                checked={selectedBrand && selectedBrand.name === brand.name}
                                onChange={handleBrandChange}
                            />
                            {brand.name}
                        </label>
                    ))}
                </div>
            </div>
            {selectedBrand && (
                <div className="theme-selector">
                    {selectedBrand.themes.length > 1 && (
                        <>
                            {/* Show theme selection if there is more than one theme */}
                            <h2>Choose a Theme:</h2>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={selectedTheme === 'dark'}
                                    onChange={handleThemeChange}
                                />
                                <span className="slider"></span>
                            </label>
                            {/* Display the selected theme */}
                            <p>Selected Theme: {selectedTheme}</p>
                        </>
                    )}
                    <Link to="/" style={{ textDecoration: "none" }}>
                     Confirm
                    </Link>
                </div>
            )}
        </div>
    );
}

export default AdminSetting;