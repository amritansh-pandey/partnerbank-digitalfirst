import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import DonutChart from '../../components/Charts/Donut';
import { Link } from 'react-router-dom';
import LeftChevron from "../../assets/images/chevron-left-black.svg"
import RightChevron from "../../assets/images/chevron-right-black.svg"
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import SpendGraph from '../../assets/images/spend-amount.png';
import TransactionCategories from '../../components/TransactionCategory';
import TopNavigation8 from '../../components/TopNavigation/TopNavigation8';

function SpendAnalysis2(props) {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);


  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };



  return (
    <div>
      <TopNavigation8
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Spend analysis"}
        leftIconPath="/transactions" />



      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

        <div className='month-container'>
          <img src={LeftChevron} />
          <span className='title3'>May 2024</span>
          <img src={RightChevron} />
        </div>

        <div className='donut-container'>
          <DonutChart />

        </div>

<div className='spend-graph-container'>
  <img src={SpendGraph} className='spend-graph-image' />
</div>
    
    <div>
      <TransactionCategories />
    </div>

      
     

      </div>

      <BottomNavigationDefault />
    </div>
  )
}

export default SpendAnalysis2;