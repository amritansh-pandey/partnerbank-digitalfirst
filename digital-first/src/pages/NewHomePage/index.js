import React, { useState, useEffect } from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import PrimaryBase from '../../components/Base/PrimaryBase';
import TopNavigation6 from '../../components/TopNavigation/TopNavigation6'
import { BellIcon } from '../../components/Icons';
import BankLogo from '../../assets/images/bank-logo.png'
import MonthlySpendCard from '../../components/Cards/MonthlySpend';
import WorldCreditCard from '../../components/Cards/WorldCreditCard';
import Rewardpoints from '../../components/Cards/Rewardpoints';
import { importImage } from '../../utils';
import AccountReady from '../../components/Cards/AccountReady';
import NewDigitalCard from '../../components/DigitalCard/NewDigitalCard';
import NewCircelNavigation from '../../components/CircleNavigations/NewCircleNavigation';
import BottomNavigationHome2 from '../../components/BottomNavigation/BottomNavigationHome2';
import { useNavigate } from 'react-router-dom';

const NewHomePage = ({ brand, theme, lang = "en" }) => {
  const cardText = 'Discover the all new Digital World Credit Card';
  const approvalText = 'Apply and get instant approval';


  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/pause", { replace: true });
    }, 4000);
  }, []);



  return (
    <div style={{ overflow: "scroll" }}>
      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
        <div className='digital-card-container'>


          <NewDigitalCard
            amount="$0.00"
          />
        </div>

        <GradientBase>

          <div>
            <TopNavigation6
              pageLogo={<img src={BankLogo} alt="Page Logo" className='page-logo' />}
              rightIcon={<BellIcon size={24} className="icon-white" />} />
          </div>

        </GradientBase>
        <PrimaryBase >
          <div className='base_gradient_container'>


            <AccountReady />


            <div style={{ height: "24px" }}></div>

            <NewCircelNavigation />


            <MonthlySpendCard
              money="$0.00"
            />


            <div>
              <WorldCreditCard
                cardImage={<img src={importImage(brand, theme, "world-card")} alt="world-card" />}
                cardText={cardText}
                approvalText={approvalText}
              />
            </div>

            <Rewardpoints
              points="0 pts"
            />
          </div>

          <div style={{ height: "32px" }}></div>
        </PrimaryBase>

      </div>
      <BottomNavigationHome2 />
    </div>
  )
}

export default NewHomePage;