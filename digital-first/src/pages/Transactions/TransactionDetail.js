import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import { Link } from 'react-router-dom';
import transactionsData from '../../assets/data/transaction';


function TransactionDetail() {

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





        <div className='card-carousel-container'>

          <div className='carousel-heading-container'>
            <div>
           
            </div>

            <div>
              <Link to="/new-home" style={{ textDecoration: "none" }}>
                <div>
                  <span className='subheading4'>View analysis</span>
                </div>
              </Link>

            </div>

          </div>


        </div>



      </div>


    </div>
  )
}

export default TransactionDetail;