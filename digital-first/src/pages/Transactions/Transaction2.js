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
import PrimaryFullWidthButton from '../../components/Buttons/PrimaryFullWidthButton';
import Logo from '../../assets/images/logo.svg';
import AppNotification from '../../components/SMSAlert/AppNotification';
import TopNavigation8 from '../../components/TopNavigation/TopNavigation8';

function Transaction2(props) {

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
  const [showAlert, setShowAlert] = useState(true);


  return (
    <div>
      <TopNavigation8
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Transactions"}
        leftIconPath="/manage-card" />


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
            <Link to="/spend-analysis2" style={{ textDecoration: "none" }}>
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
            <div className='transaction-popup-info'>
              <div className='transaction-heading-container'>
                <img src={selectedTransaction.logo} className='transaction-list-logo' alt={`${selectedTransaction.name} logo`} />
                <span className='title3'>{selectedTransaction.name}</span>
              </div>
              <div className='transaction-popup-info-container'>
                <div className='transaction-info-list-container'>
                  <span className='body3'>Order</span>
                  <span className='body2'>ETHHTGR894144114</span>
                </div>



                <div className='transaction-info-list-container'>
                  <span className='body3'>Ordered</span>
                  <span className='body2'>{selectedTransaction.day}</span>
                </div>

                <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                <div className='transaction-info-list-container'>
                  <span className='body3'>Item</span>
                  <span className='body3'>Price</span>
                </div>
                <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>


                <div className='transaction-info-list-container'>
                  <div>
                    <div>
                      <span className='body1'>{selectedTransaction.product}</span>
                    </div>
                    <div>
                      <span className='caption'>{selectedTransaction.iteminfo}</span>
                    </div>
                  </div>
                  <span className='body1'>{selectedTransaction.itemcost}</span>

                </div>

                <div className='transaction-info-list-container'>
                  <div>
                    <div>
                      <span className='body1'>{selectedTransaction.product2}</span>
                    </div>
                    <div>
                      <span className='caption'>{selectedTransaction.iteminfo2}</span>
                    </div>
                  </div>
                  <span className='body1'>{selectedTransaction.itemcost2}</span>

                </div>


                <div className='transaction-info-list-container'>
                  <div>
                    <div>
                      <span className='body1'>{selectedTransaction.product3}</span>
                    </div>
                    <div>
                      <span className='caption'>{selectedTransaction.iteminfo3}</span>
                    </div>
                  </div>
                  <span className='body1'>{selectedTransaction.itemcost3}</span>

                </div>


                <div className='transaction-info-list-container'>
                  <div>
                    <div>
                      <span className='body1'>{selectedTransaction.product4}</span>
                    </div>
                    <div>
                      <span className='caption'>{selectedTransaction.iteminfo4}</span>
                    </div>
                  </div>
                  <span className='body1'>{selectedTransaction.itemcost4}</span>

                </div>

                <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                <div className='transaction-info-list-container'>
                  <span className='body3'>Subtotal</span>
                  <span className='body3'>{selectedTransaction.subtotal}</span>
                </div>
                <div className='transaction-info-list-container'>
                  <span className='body1'>Discount</span>
                  <span className='body5'>{selectedTransaction.itemdiscount}</span>
                </div>
                <div className='transaction-info-list-container'>
                  <span className='body1'>Tax & Fees</span>
                  <span className='body1'>{selectedTransaction.tax}</span>
                </div>

                <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                <div className='transaction-info-list-container'>
                  <span className='body3'>Total</span>
                  <span className='body3'>{selectedTransaction.amount}</span>
                </div>
                <div className='transaction-info-list-container'>
                  <span className='body3'>Payment method</span>
                  <div className='card-transaction-detail'>
                    <span className='body1'>•••• 8832</span>
                    <img src={Logo} />
                  </div>

                </div>
                <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>
              </div>

              <div className='dispute-container'>
                <span className='subheading3'>Don’t recognize this transaction?</span>
                <Link to="/transaction-dispute" style={{ textDecoration: "none" }}>
                  <PrimaryFullWidthButton text={"Dispute"} />
                </Link>
              </div>

              <div style={{ marginBottom: "32px" }}  >




              </div>

            </div>
          )}
        </CustomHeightBottomSheet>

      </div>
      {showAlert && (
      <AppNotification 
      message_title="Dispute Request accepted" 
      message_text="Transaction has been disputed. We are currently investigating your dispute and will contact you shortly." 
      onClose={() => setShowAlert(false)} 
      initialSlideIn={showAlert} />
      )}
      <BottomNavigationDefault />
    </div>
  )
}

export default Transaction2;