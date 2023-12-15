import React, { useState, useEffect } from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import PrimaryBase from '../../components/Base/PrimaryBase';
import TopNavigation2 from '../../components/TopNavigation/TopNavigation2'
import { BellIcon } from '../../components/Icons';
import BankLogo from '../../assets/images/bank-logo.png'
import DigitalCard from '../../components/DigitalCard';
import CircelNavigation from '../../components/CircleNavigations/Index';
import MonthlySpendCard from '../../components/Cards/MonthlySpend';
import WorldCreditCard from '../../components/Cards/WorldCreditCard';
import Rewardpoints from '../../components/Cards/Rewardpoints';
import { Link } from 'react-router-dom';
import data from '../../assets/data/data.json';
import { importImage } from '../../utils';

const NewHomePage = ({ brand, theme, lang = "en" }) => {
  const cardText = 'Discover the all new Digital World Credit Card';
  const approvalText = 'Apply and get instant approval';


  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);



  return (
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <div className='digital-card-container'>
        <DigitalCard />
      </div>

      <GradientBase>

        <div>
          <TopNavigation2
            pageLogo={<img src={BankLogo} alt="Page Logo" className='page-logo' />}
            rightIcon={<BellIcon size={24} className="icon-white" />} />
        </div>

      </GradientBase>
      <PrimaryBase >
        <div className='base_gradient_container'>
          <CircelNavigation />
          <MonthlySpendCard />

          <Link to="/admin-setting" style={{ textDecoration: "none" }}>
            <div>
              <WorldCreditCard
                cardImage={ <img src={importImage(brand, theme, "world-card")} alt="world-card"/>}
                cardText={cardText}
                approvalText={approvalText}
              />
            </div>
          </Link>
          <Rewardpoints />
        </div>


      </PrimaryBase>
    </div>
  )
}

export default NewHomePage;