import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationBill from '../../components/BottomNavigation/BottomnavigationBill';
import AddNewButton from '../../components/Buttons/AddNewButton';
import { useParams, useNavigate } from 'react-router-dom';
import Energy from '../../assets/images/merchants/energy.png'
import Infinity from '../../assets/images/merchants/infinity.png'
import ForwardArrow from '../../assets/images/chevron-right-black.svg'
import bills from '../../assets/data/bill';

function PayBillAdded() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const selectedItem = bills.find((item) => item.id === parseInt(id, 10));

  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Pay bill"}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

        <div className='add-new-button-background'>
          <AddNewButton
            title={'Add new biller'}
            to={"/bill-search"}
          />
        </div>

        <div className='tab-list-container'>
          <div className='upccoming-bill-tab'>
            <span>Upcoming bills</span>
          </div>
          <div className='connected-billers-tab'>
            <span>Connected billers</span>
          </div>
        </div>

        <div className='bill-list-main-container'>
          <div className='bill-list-container'>
            <div className='bill-list-title'>
              <span className='title3'>Bill schedule</span>
            </div>

            <div>
      
            <div className='bill-item-container'>
                <div className='bill-image-title'>
                  <div className='bill-image'>
                 
                    <img src={selectedItem.billImg} alt='bill-logo' className='bill-logo' />
                  </div>
                  <div className='bill-title-container'>

                    <div className='bill-title'>
                      <span className='subheading2'>{selectedItem.name}</span>
                    </div>
                    <div className='bill-category'>
                      <span className='caption'>{selectedItem.type}</span>
                    </div>

                  </div>


                </div>
                <div className='bill-amount-date-arrow'>
                  <div className=''>


                    <div className='bill-amount'>
                      <span className='subheading2'>{selectedItem.money}</span>
                    </div>

                    <div className='bill-date'>
                      <span className='due-date'>Due in 3 days</span>
                    </div>


                  </div>
                  <div className='bill-arrow'>
                    <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
                  </div>
                </div>
              </div>


              <div className='bill-item-container'>
                <div className='bill-image-title'>
                  <div className='bill-image'>
                    <img src={Energy} alt='bill-logo' className='bill-logo' />
                  </div>
                  <div className='bill-title-container'>

                    <div className='bill-title'>
                      <span className='subheading2'>Lodestar Energy</span>
                    </div>
                    <div className='bill-category'>
                      <span className='caption'>Utilities</span>
                    </div>

                  </div>


                </div>
                <div className='bill-amount-date-arrow'>
                  <div className=''>


                    <div className='bill-amount'>
                      <span className='subheading2'>$144.55</span>
                    </div>

                    <div className='bill-date'>
                      <span className='due-date'>Due in 3 days</span>
                    </div>


                  </div>
                  <div className='bill-arrow'>
                    <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
                  </div>
                </div>
              </div>



              <div className='bill-item-container'>
                <div className='bill-image-title'>
                  <div className='bill-image'>
                    <img src={Infinity} alt='bill-logo' className='bill-logo' />
                  </div>
                  <div className='bill-title-container'>

                    <div className='bill-title'>
                      <span className='subheading2'>Infinity Wireless</span>
                    </div>
                    <div className='bill-category'>
                      <span className='caption'>Utilities</span>
                    </div>

                  </div>


                </div>
                <div className='bill-amount-date-arrow'>
                  <div className=''>


                    <div className='bill-amount'>
                      <span className='subheading2'>$87.50</span>
                    </div>

                    <div className='bill-date'>
                      <span className='caption'>Due on: 15/03</span>
                    </div>


                  </div>
                  <div className='bill-arrow'>
                    <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
                  </div>
                </div>
              </div>

              <div className='bill-list-title'>
                <span className='title3'>Recently paid</span>
              </div>

              <div className='bill-item-container'>
                <div className='bill-image-title'>
                  <div className='bill-image'>
                    <img src={Infinity} alt='bill-logo' className='bill-logo' />
                  </div>
                  <div className='bill-title-container'>

                    <div className='bill-title'>
                      <span className='subheading2'>Infinity Wireless</span>
                    </div>
                    <div className='bill-category'>
                      <span className='caption'>Utilities</span>
                    </div>

                  </div>


                </div>
                <div className='bill-amount-date-arrow'>
                  <div className=''>


                    <div className='bill-amount'>
                      <span className='subheading2'>$87.50</span>
                    </div>

                    <div className='bill-date'>
                      <span className='caption'>Paid: 15/02</span>
                    </div>


                  </div>
                  <div className='bill-arrow'>
                    <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
                  </div>
                </div>
              </div>
            </div>
          </div>






        </div>




      </div>

      <BottomNavigationBill />
    </div >
  );
}


export default PayBillAdded;