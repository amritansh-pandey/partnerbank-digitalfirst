import React from 'react';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationBill from '../../components/BottomNavigation/BottomnavigationBill';
import AddNewButton from '../../components/Buttons/AddNewButton';
import { useParams, useNavigate } from 'react-router-dom';
import Energy from '../../assets/images/merchants/energy.png'
import Infinity from '../../assets/images/merchants/infinity.png'
import ForwardArrow from '../../assets/images/chevron-right-black.svg'
import bills from '../../assets/data/bill';
import TopNavigation8 from '../../components/TopNavigation/TopNavigation8';

function PayBillAddedConnected2() {


  const { id } = useParams();
  const navigate = useNavigate();

  const selectedItem = bills.find((item) => item.id === parseInt(id, 10));

  return (
    <div>
        <TopNavigation8
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Pay bill"}
        leftIconPath="/old-home" 
      />

      <div className='page-without-animation'>

        <div className='add-new-button-background'>
          <AddNewButton
            title={'Add new biller'}
            to={"/bill-search"}
          />
        </div>

        <div className='tab-list-container'>
          <div onClick={() => navigate(`/paybill-added3/${id}`)}>
            <div className='upccoming-bill-tab2'>
              <span>Upcoming bills</span>
            </div>
          </div>
          <div className='connected-billers-tab2'>
            <span>Connected billers</span>
          </div>
        </div>

        <div className='bill-list-main-container'>
          <div className='bill-list-container'>
            <div className='bill-list-title'>
              <span className='title3'>Biller connections</span>
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


                    

                  </div>
                  <div className='bill-arrow'>
                    <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
                  </div>
                </div>
              </div>

            
            </div>
          </div>






        </div>



        <div style={{height: "250px"}}></div>
      </div>

      <BottomNavigationBill />
    </div >
  );
}


export default PayBillAddedConnected2;