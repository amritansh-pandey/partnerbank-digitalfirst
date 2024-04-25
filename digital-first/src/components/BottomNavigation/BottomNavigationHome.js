import React, { useState } from "react";
import "./style.css";
import HomeActive from "../../assets/icons/home-primary.svg";
import SendBlack from "../../assets/icons/paper-airplane.svg";
import ChevronUpWhite from "../../assets/icons/chevron-up-white.svg";
import PayBills from "../../assets/icons/document-text.svg";
import Rewards from "../../assets/icons/gift.svg";
import { Link } from "react-router-dom";
import CustomHeightBottomSheet from "../BottomSheet/CustomHeightBottomSheet"; 
import BottomMenu from "../BottomMenu";
const BottomNavigationHome = ({ brand, theme, lang = "en" }) => {

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  
  const handleOpenBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setBottomSheetOpen(false);
  };


  return (
    <div className="bottom_navigation_container">
      <div className="bottom_navigation">
        <Link to="old-home" style={{ textDecoration: "none" }}>
          <div className="bottom_navigation_button">
            <div>
              <img src={HomeActive} alt="home" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text_active">Home</span>
            </div>
          </div>
        </Link>

        <Link to="/send-money" style={{ textDecoration: "none" }}>
          <div className="bottom_navigation_button">
            <div>
              <img src={SendBlack} alt="transfer" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Send</span>
            </div>
          </div>
        </Link>

        <div className="bottom_navigation_button" onClick={handleOpenBottomSheet}>
          <div className="menu-bg">
            <img src={ChevronUpWhite} alt="money_transfer" className="bottom-nav-icon32" />
          </div>
        </div>

        <Link to="/paybill" style={{ textDecoration: "none" }}>
          <div className="bottom_navigation_button">
            <div>
              <img src={PayBills} alt="billpay" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Pay bills</span>
            </div>
          </div>
        </Link>

        <Link to="/rewards" style={{ textDecoration: "none" }}>
          <div className="bottom_navigation_button">
            <div>
              <img src={Rewards} alt="spend" className="" />
            </div>
            <div>
              <span className="bottom_navigation_text">Rewards</span>
            </div>
          </div>
        </Link>
      </div>

      <CustomHeightBottomSheet
        show={bottomSheetOpen}
        title="Accounts"
        onClose={handleCloseBottomSheet}
      >
      <BottomMenu />

    
      </CustomHeightBottomSheet>
    </div>
  );
}

export default BottomNavigationHome;