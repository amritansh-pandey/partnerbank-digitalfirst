import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import RadioButton from '../../components/RadioButton';
import DisabledButtonMedium from '../../components/Buttons/DisabledButtonMedium';


function TransactionDispute() {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigate("/transaction-dispute2", { replace: true });
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, [navigate]);



  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Dispute transaction"} />
      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>


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

            <DisabledButtonMedium text={"Continue"} />

          </div>
        </div>










      </div>



    </div>


  )
}

export default TransactionDispute;