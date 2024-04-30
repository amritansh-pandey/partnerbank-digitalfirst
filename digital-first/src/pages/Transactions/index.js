import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import DonutChart from '../../components/Charts/Donut';
import CardCarousel from '../../components/CardCarousel'
import { Link } from 'react-router-dom';
import TransactionList from '../../components/TransactionList';
import LeftChevron from "../../assets/images/chevron-left-black.svg"
import RightChevron from "../../assets/images/chevron-right-black.svg"
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import CustomHeightBottomSheet from '../../components/BottomSheet/CustomHeightBottomSheet';
import Map from "../../assets/images/map2.png"
import PrimaryFullWidthButton from '../../components/Buttons/PrimaryFullWidthButton';
import transactionsData from '../../assets/data/transaction';

function Transactions(props) {

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
      <TopNavigation4
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Transactions"} />
      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

        <div className='month-container'>
          <img src={LeftChevron} />
          <span className='title3'>May 2024</span>
          <img src={RightChevron} />
        </div>

        <div className='donut-container'>
          <DonutChart />

        </div>


        <div className='card-carousel-container'>

          <div className='carousel-heading-container'>
            <div>
              <span className='subheading3'>Spend by category</span>
            </div>

            <div>
              <Link to="/new-home" style={{ textDecoration: "none" }}>
                <div>
                  <span className='subheading4'>View analysis</span>
                </div>
              </Link>

            </div>

          </div>
          <CardCarousel />

        </div>

        <div>
          <TransactionList onTransactionClick={handleTransactionClick} />
        </div>
        <CustomHeightBottomSheet
          show={bottomSheetVisible}
          onClose={handleCloseBottomSheet}
        >

          {selectedTransaction && (
            <div>
              <div className='transaction-heading-container'>
                <img src={selectedTransaction.logo} className='transaction-list-logo' alt={`${selectedTransaction.name} logo`} />
                <span className='title3'>{selectedTransaction.name}</span>
              </div>
              <div className='transaction-popup-info-container'>
                <div>
                  <span className='body3'>Amount paid: {selectedTransaction.amount}</span>
                </div>
                <div>
                  <span className='body3'>Date: {selectedTransaction.day}</span>
                </div>
                <div>
                  <span className='body3'>Appears on Statement: ETHHTGR894144114</span>
                </div>
              </div>

              <div>
                <img src={Map} className='map-image' />
              </div>
            
                <div style={{ marginBottom: "32px" }}  >
               
                 
                    <PrimaryFullWidthButton
                      text={"View receipt"} />
              
                </div>
        
            </div>
          )}
        </CustomHeightBottomSheet>

      </div>

      <BottomNavigationDefault />
    </div>
  )
}

export default Transactions;