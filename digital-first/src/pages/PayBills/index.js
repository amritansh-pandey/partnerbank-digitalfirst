
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationBill from '../../components/BottomNavigation/BottomnavigationBill';
import AddNewButton from '../../components/Buttons/AddNewButton';
import Tab from '../../components/Tab'
import UpcommingBill from '../../components/BillList/UpcommingBill';
import ConnectedBill from '../../components/BillList/ConnectedBill';


function PayBill() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);


  const tabs = ['Upcoming bills', 'Connected billers'];

  const tabContent = {
    'Upcoming bills': <UpcommingBill />,
    'Connected billers': <ConnectedBill />,
  };


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

        <div className='bill-list-container'>
          <Tab tabs={tabs} defaultTab="Upcoming bills" content={tabContent} onTabChange={(tab) => console.log(`Switched to ${tab}`)} />

        </div>

      </div>

      <BottomNavigationBill />


    </div>
  );
}

export default PayBill;


