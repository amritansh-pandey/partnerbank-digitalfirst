<div>
<div>
  <div>
    <span className="headline1">Headline 1</span>
  </div>
  <div>
    <span className="headline2">Headline 2</span>
    <div>
      <span className="heading">Heading</span>
    </div>
    <div>
      <span className="title1">Title 1</span>
    </div>
    <div>
      <span className="title2">Titel 2</span>
    </div>
    <div>
      <span className="subheading1">Sub Heading 1</span>
    </div>
    <div>
      <span className="subheading2">Sub Heading 2</span>
    </div>
    <div>
      <span className="body1">Body 1</span>
    </div>
    <div>
      <span className="body2">Body 2</span>
    </div>
    <div>
      <span className="caption">Caption</span>
    </div>
    <div>
      <span className="regular-narrow">Regular Narrow</span>
    </div>
    <div>
      <span className="medium-narrow">Medium Narrow</span>
    </div>
  </div>
</div>

<div>
  <div className="color pallete primary"></div>
</div>
</div>



import "./style.css";
import React, {useState, useEffect} from 'react'

const brands = [
    { name: 'partnerbank', themes: ['light', 'dark'] },
    { name: 'bankpathy', themes: ['light'] },
];


   

function Splash() {
    const [selectedBrand, setSelectedBrand] = useState('partnerbank');
    const [selectedTheme, setSelectedTheme] = useState('light'); // Default theme

   
    
    const handleThemeChange = () => {
        // Toggle between 'light' and 'dark' themes
        setSelectedTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
        );
    };
    return (
        <div className="splash-background" id="splash" data-brand={selectedBrand} data-theme={selectedTheme}>
            <h1>Splash</h1>
            <button onClick={handleThemeChange}>Toggle</button>
        </div>
    )
}

export default Splash;