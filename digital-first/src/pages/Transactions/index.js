import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import DonutChart from '../../components/Charts/Donut';
import CardCarousel from '../../components/CardCarousel'
import { Link } from 'react-router-dom';
import TransactionList from '../../components/TransactionList';
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';

function Transactions(props) {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);
  return (
    <div>
       <TopNavigation4
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Transactions"} />
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
     


      <div className='donut-container'>
        <DonutChart />

      </div>


      <div className='card-carousel-container'>

        <div className='carousel-heading-container'>
          <div>
            <span className='subheading3'>Spend by category</span>
          </div>

          <div>
            {/* <Link to="/new-home" style={{ textDecoration: "none" }}> */}
              <div>
                <span className='subheading4'>View analysis</span>
              </div>
            {/* </Link> */}

          </div>

        </div>
        <CardCarousel />

      </div>

      <div>
      <TransactionList />
      </div>


      </div>

<BottomNavigationDefault />
    </div>
  )
}

export default Transactions;