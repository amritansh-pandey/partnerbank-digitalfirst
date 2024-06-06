import React, { useState, useEffect } from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import PrimaryBase from '../../components/Base/PrimaryBase';
import TopNavigation6 from '../../components/TopNavigation/TopNavigation6'
import { BellIcon } from '../../components/Icons';
import BankLogo from '../../assets/images/logo.png'
import DigitalCard from '../../components/DigitalCard';
import CircelNavigation from '../../components/CircleNavigations/Index';
import MonthlySpendCard from '../../components/Cards/MonthlySpend';
import WorldCreditCard from '../../components/Cards/WorldCreditCard';
import Rewardpoints from '../../components/Cards/Rewardpoints';
import { Link } from 'react-router-dom';
import data from '../../assets/data/data.json';
import { importImage } from '../../utils';
import BottomNavigationHome from '../../components/BottomNavigation/BottomNavigationHome';


const OldHomePage = ({ brand, theme, lang = "en" }) => {
  const cardText = 'Discover the all new Digital World Credit Card';
  const approvalText = 'Apply and get instant approval';


  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);



  return (
    <div>
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <div className='digital-card-container'>
        <DigitalCard
        amount="€2,640.55"
        />
      </div>

      <GradientBase>

        <div>
          <TopNavigation6
          leftIcon={""}
            pageLogo={<img src={BankLogo} alt="Page Logo" className='page-logo' />}
            rightIcon={<BellIcon size={24} className="icon-white" />} />
        </div>

      </GradientBase>
      <PrimaryBase >
        <div className='base_gradient_container'>
          <CircelNavigation />
          <Link to="/transactions" style={{ textDecoration: "none" }}>
          <MonthlySpendCard
          money="€817.44"
          />
          </Link>

         
            <div>
              <WorldCreditCard
                cardImage={ <img src={importImage(brand, theme, "world-card")} alt="world-card"/>}
                cardText={cardText}
                approvalText={approvalText}
              />
            </div>
            <Link to="/rewards" style={{ textDecoration: "none" }}>
          <Rewardpoints
          points="8,096 pts"
          />
          </Link>
        </div>

        <div style={{height:"32px"}}></div>
      </PrimaryBase>
      <BottomNavigationHome />
    </div>
     <BottomNavigationHome />
     </div>
  )
}

export default OldHomePage;