import React, { useState } from 'react';
import './style.css';

const Tab = ({ tabs, defaultTab, onTabChange, content }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="tab-container">
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div key={tab} className={`tab-pane ${activeTab === tab ? 'active' : ''}`}>
            {content[tab]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
