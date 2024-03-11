import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginFaceID from './pages/LoginFaceID';
import Intro from './pages/Intro';
import GettingStarted from './pages/GettingStarted';
import Page404 from './pages/404Page';
import AdminSetting from './pages/AdminSetting';
import NewHomePage from './pages/NewHomePage';
import EnterDetails from './pages/EnterDetails';
import Authentication from './pages/Authentication';
import ScanInstruction from './pages/ScanInstruction';
import ScanPhotoID from './pages/ScanPhotoID';
import CameraScanID from './pages/CameraScanID';
import HomeAddress from './pages/HomeAddress';
import VideoSelfieRecording from './pages/VideoSelfieRecording';
import VideoSelfieCamera from './pages/VideoSelfieCamera';
import Transactions from './pages/Transactions';
import CardDetailPage from './pages/CardDetailPage';
import UploadingVideo from './pages/UploadingVideo';
import ConfirmPasscode from './pages/ConfirmPasscode';
import CreatePasscode from './pages/CreatePasscode';
import UseFaceID from './pages/UseFaceID';
import BottomNavigationDefault from './components/BottomNavigation/BottomNavigationDefault';
import OldHomePage from './pages/OldHomePage';
import SendMoney from './pages/SendMoney';
import PayBill from './pages/PayBills';
import Rewards from './pages/Rewards';
import MyGoals from './pages/MyGoals';
import UseFaceID2 from './pages/UseFaceID/UseFaceID2';
import FaceIDLoader from './pages/UseFaceID/FaceIDLoader';
import AccountReady from './pages/AccountReady';
import SelectReciept from './pages/SelectReciept';
import TransferDetails from './pages/TransferDetails';
import AmountToSend from './pages/AmountToSend';
import AmountSendConfirmation from './pages/AmountSendConfirmation';
import SentMoney from './pages/SendMoney/SentMoney';
import BillSearch from './pages/BillSearch';
import AddBiller from './pages/AddBiller';
import BillPaymentsSettings from './pages/BillPaymentsSettings';
import AddMoney from './pages/AddMoney';
import AddMoneyCard from './pages/AddMoney/AddMoneyCard';
import CardCameraScan from './pages/AddMoney/CardCameraScan';
import AddMoneyCardFilled from './pages/AddMoney/AddMoneyCardFilled';
import AddMoneyValue from './pages/AddMoney/AddMoneyValue';
import AddMoneyVerification from './pages/AddMoney/AddMoneyVerification';
import AddMoneyOTP from './pages/AddMoney/AddMoneyOTP';
import AddMoneyOTPFilled from './pages/AddMoney/AddMoneyOTPFilled';
import AddMoneyDone from './pages/AddMoney/AddMoneyDone';
import ManageCard from './pages/ManageCard/Index';
import BillAdded from './pages/BillPaymentsSettings/BillerAdded';

function AppRoutes() {
  // Define your brands array here
  const brands = [
    { name: 'partnerbank', themes: ['light', 'dark'] },
    { name: 'bankpathy', themes: ['light'] },
    // Add more brands and their themes as needed
  ];

  // Initialize state with "PartnerBank" and "light" as defaults
  const [selectedBrand, setSelectedBrand] = useState(brands[0].name);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedLang, setSelectedLang] = useState('en');

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
  };
  console.log(selectedBrand);
  return (
    <div id="theme" data-brand={selectedBrand} data-theme={selectedTheme} >
      <Routes >
        <Route path="/" element={<Splash brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} /> 

        <Route
          path="/admin-setting"
          element={
            <AdminSetting
              brands={brands}
              selectedBrand={selectedBrand}
              selectedTheme={selectedTheme}
              selectedLang={selectedLang}
              onSelectBrand={handleBrandSelect}
              onSelectTheme={handleThemeSelect}
              onSelectLang={handleLangSelect}
            />
          }
        />
        <Route path="/login" element={<LoginFaceID />} />
        <Route path="/intro" element={<Intro brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/login-faceid" element={<LoginFaceID />} />
        <Route path="/getting-started" element={<GettingStarted brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/enter-detail" element={<EnterDetails />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/scan-instructions" element={<ScanInstruction brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/scan-photo-id" element={<ScanPhotoID brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/camera-photo-id" element={<CameraScanID />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/home-address" element={<HomeAddress />} />
        <Route path="/uploadingvideo" element={<UploadingVideo />} />
        <Route path="/faceidloader" element={<FaceIDLoader />} />
        <Route path="/add-money" element={<AddMoney/>} />
        <Route path="/card-camera-scan" element={<CardCameraScan/>} />
        <Route path="/add-money-card" element={<AddMoneyCard/>} />
        <Route path="/add-money-value" element={<AddMoneyValue/>} />
        <Route path="/add-money-otp" element={<AddMoneyOTP/>} />
        <Route path="/add-money-done" element={<AddMoneyDone/>} />
        <Route path="/add-money-otp-filled" element={<AddMoneyOTPFilled/>} />
        <Route path="/add-money-verification" element={<AddMoneyVerification/>} />
        <Route path="/add-money-card-filled" element={<AddMoneyCardFilled/>} />
        <Route path="/account-ready" element={<AccountReady/>} />
        <Route path="/create-passcode" element={<CreatePasscode />} />
        <Route path="/confirm-passcode" element={<ConfirmPasscode />} />
        <Route path="/card-details" element={<CardDetailPage/>} />
        <Route path="/use-faceid" element={<UseFaceID/>} />
        <Route path="/biller-added/:id" element={<BillAdded/>} />
        <Route path="/select-recipient" element={<SelectReciept />} />
        <Route path="/transfer-details/:id" element={<TransferDetails />} />
        <Route path="/amount-send/:id" element={<AmountToSend/>} />
        <Route path="/amount-send-confrimation/:id" element={<AmountSendConfirmation/>} />
        <Route path="/amount-sent/:id" element={<SentMoney/>} />
        <Route path="/add-biller/:id" element={<AddBiller/>} />
        <Route path="/bill-payments-settings/:id" element={<BillPaymentsSettings/>} />
        <Route path="/bill-search" element={<BillSearch/>} />
        <Route path="/use-faceid2" element={<UseFaceID2/>} />
        <Route path="/manage-card" element={<ManageCard/>} />
        <Route path="/new-home" element={<NewHomePage brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/old-home" element={<OldHomePage brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/video-selfie" element={<VideoSelfieRecording brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/video-selfie-camera" element={<VideoSelfieCamera />} />
           <Route path="/send-money" element={<SendMoney />} />
           <Route path="/rewards" element={<Rewards />} />
           <Route path="/mygoals" element={<MyGoals />} />
           <Route path="/paybill" element={<PayBill />} />
        <Route path="404" element={<Page404 />} />
        {/* Redirect to the brand and theme selector if the route doesn't match */}
        <Route path="*" element={<Navigate to="/new-home" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;