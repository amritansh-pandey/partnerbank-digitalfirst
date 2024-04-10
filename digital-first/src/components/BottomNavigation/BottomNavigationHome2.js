import React, { useState } from "react";
import "./style.css";
import HomeActive from "../../assets/icons/home-primary.svg";
import SendBlack from "../../assets/icons/paper-airplane.svg";
import ChevronUpWhite from "../../assets/icons/chevron-up-white.svg";
import PayBills from "../../assets/icons/document-text.svg";
import Rewards from "../../assets/icons/gift.svg";


const BottomNavigationHome2 = ({ brand, theme, lang = "en" }) => {

  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const openBottomSheet = () => {
    setShowBottomSheet(true);
  };

  const closeBottomSheet = () => {
    setShowBottomSheet(false);
  };

  return (
    <div className="bottom_navigation_container">
      <div className="bottom_navigation">
       
          <div className="bottom_navigation_button">
            <div>
              <img src={HomeActive} alt="home" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text_active">Home</span>
            </div>
          </div>
     

       
          <div className="bottom_navigation_button">
            <div>
              <img src={SendBlack} alt="transfer" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Send</span>
            </div>
          </div>
     

        <div className="bottom_navigation_button" onClick={openBottomSheet}>
          <div className="menu-bg">
            <img src={ChevronUpWhite} alt="money_transfer" className="bottom-nav-icon32" />
          </div>
        </div>

      
          <div className="bottom_navigation_button">
            <div>
              <img src={PayBills} alt="billpay" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Pay bills</span>
            </div>
          </div>
     

       
          <div className="bottom_navigation_button">
            <div>
              <img src={Rewards} alt="spend" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Rewards</span>
            </div>
          </div>
       
      </div>

  
      
    
    </div>
  );
}

export default BottomNavigationHome2;