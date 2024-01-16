import React from 'react';
import './style.css';
import CardThumbnail from "../../assets/images/digital-card.png"
import ChevRight from '../../assets/images/chevron-right-black.svg'
import Goals from '../../assets/images/goal-active.svg'
import Pie from '../../assets/images/chart-pie-active.svg'
import Settings from '../../assets/images/settings.svg'
import { Link } from "react-router-dom";


function BottomMenu() {
  return (
    <div>
         <div className="menu-bottom-sheet">
        <div className="memu-digital-card-container">
        <div className="account-detail-flex">

        <Link to="/old-home" style={{ textDecoration: "none" }}>
          <div className="menu-card-detail">
              <div>
            <img src={CardThumbnail} alt="digital-card" className="digital-card-thubnail" />
            </div>
            <div>
              <span className="body1">Digital Debit •••• 8832</span>
            </div>
            
          </div>
          </Link>
          <div>
          <img src={ChevRight} alt="chev-right"  />
          </div>
          </div>
          
          <div className="menu-heading-container"> 
          <span className='subheading2'>More options</span>
          </div>
          <Link to="/mygoals" style={{ textDecoration: "none" }}>
          <div className="account-detail-flex">
          <div className="menu-card-detail">
              <div>
            <img src={Goals} alt="digital-card" className="digital-card-thubnail" />
            </div>
            <div>
              <span className="body1">My goals</span>
            </div>
            
          </div>
          <div>
          <img src={ChevRight} alt="chev-right"  />
          </div>
          </div>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
          <div className="account-detail-flex">
          <div className="menu-card-detail">
              <div>
            <img src={Pie} alt="digital-card" className="digital-card-thubnail" />
            </div>
            <div>
              <span className="body1">Spend analysis</span>
            </div>
            
          </div>
          <div>
          <img src={ChevRight} alt="chev-right"  />
          </div>
          </div>
          </Link>
          <Link to="/admin-setting" style={{ textDecoration: "none" }}>
          <div className="account-detail-flex">
          <div className="menu-card-detail">
              <div>
            <img src={Settings} alt="digital-card" className="digital-card-thubnail" />
            </div>
            <div>
              <span className="body1">Admin settings</span>
            </div>
            
          </div>
          <div>
          <img src={ChevRight} alt="chev-right"  />
          </div>
          </div>
          </Link>
        </div>
       </div>
    </div>
  )
}

export default BottomMenu