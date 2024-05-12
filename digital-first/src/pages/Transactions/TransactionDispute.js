import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import RadioButton from '../../components/RadioButton';

import DisabledButtonMedium from '../../components/Buttons/DisabledButtonMedium';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';


function TransactionDispute2() {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Dispute transaction"} />
      <div className="page-without-animation ">


        <div className='dispute-list-heading'>
          <span className='subheading3'>Select the reason for disputing:</span>
        </div>

        <div className='dispute-list-container'>
          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I do not recognize this transaction</span>
          </div>

          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I have cancelled the ticket / reservation / order / service</span>
          </div>

          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I have returned this item</span>
          </div>

          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I have been billed more than once for this transaction</span>
          </div>

          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option5'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I have not received the ticket(s) /merchandise / goods / services</span>
          </div>

          <div className='dispute-list-item'>
            <RadioButton
              checked={selectedOption === 'option5'}
              onChange={handleOptionChange}
              value="option1"
            />
            <span className='body1'>I have been billed more than expected</span>
          </div>


          <div style={{ textAlign: "center", marginTop: "148px" }}>
            <Link to="/transaction2" style={{ textDecoration: "none" }}>
              <PrimaryButtonMedium text={"Continue"} />
            </Link>
          </div>
        </div>










      </div>



    </div>


  )
}

export default TransactionDispute2;