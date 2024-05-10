import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginFaceID from './pages/LoginFaceID';
import Intro from './pages/Intro';
import GettingStarted from './pages/GettingStarted';
import Page404 from './pages/404Page';
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
import AppleWallet from './pages/AppleWallet';
import AppleCardTerms from './pages/AppleWallet/AppleCardTerms';
import AppleCardDone from './pages/AppleWallet/AppleCardDone';
import AddAppleCard from './pages/AppleWallet/AddAppleCard';
import AppleCardAdded from './pages/AppleWallet/AppleCardAdded';
import C2PInfo from './pages/ClickToPay';
import C2PLoader from './pages/ClickToPay/C2PLoader';
import C2PDone from './pages/ClickToPay/C2PDone';
import ViewCardDetail from './pages/ManageCard/ViewCardDetail';
import CardLock from './pages/ManageCard/CardLock';
import CardSettings from './pages/CardSettings';
import ViewCardFaceID from './pages/ManageCard/ViewCardFaceID';
import CardLockFaceID from './pages/ManageCard/CardLockFaceID';
import Pause from './pages/NewHomePage/Pause';
import SettingsDone from './pages/CardSettings/SettingsDone';
import SpendingAlerts from './pages/CardSettings/SpendingAlerts';
import ContactlessPayments from './pages/CardSettings/ContactlessPayments';
import OnlineShopingSettings from './pages/CardSettings/OnlineShopping';
import InStoreShopping from './pages/CardSettings/InStoreShopping';
import InternationalPayments from './pages/CardSettings/InternationalPayments';
import ATMSettings from './pages/CardSettings/ATMSettings';
import ChangePasscode from './pages/ChangePin';
import CreateNewPin from './pages/ChangePin/CreateNewPin';
import ConfrimPin from './pages/ChangePin/ConfirmPin';
import ChangePinConfrimation from './pages/ChangePin/ChangePinConfrimation';
import PayBillAdded from './pages/PayBills/PayBillAdded';
import BillDetails from './pages/BillPaymentsSettings/BillDetails';
import AppleCardTerms2 from './pages/AppleWallet2/AppleCardTerms2';
import AppleCardAdded2 from './pages/AppleWallet2/AppleCardAdded2';
import AppleCardDone2 from './pages/AppleWallet2/AppleCardDone2';
import AppleWallet2 from './pages/AppleWallet2';
import AddAppleCard2 from './pages/AppleWallet2/AddAppleCard2';
import NewGoal from './pages/MyGoals/NewGoal';
import NewGoal2 from './pages/MyGoals/NewGoal2';
import GoalCreated from './pages/MyGoals/GoalCreated';
import GoalDetail from './pages/MyGoals/GoalDetail';
import RewardsDetails from './pages/Rewards/RewardsDetail';
import RewardRedeemed from './pages/Rewards/RewardRedeemed';
import RewardRedeemedDone from './pages/Rewards/RewardRedeemedDone';
import PayBillAddedConnected from './pages/PayBills/PayBillAddedConnected';
import PayBillAdded2 from './pages/PayBills/PayBillAdded2';
import PayBillAdded3 from './pages/PayBills/PayBillAdded3';
import BillReviewPay from './pages/BillPaymentsSettings/BillReviewPay';
import BillPaidConfirmation from './pages/BillPaymentsSettings/BillPaidConfirmation';
import PayBillAddedConnected2 from './pages/PayBills/PayBillAddedConnected2';
import TransactionDispute from './pages/Transactions/TransactionDetail';
import TransactionDispute2 from './pages/Transactions/TransactionDispute';
import Transaction2 from './pages/Transactions/Transaction2';
import SpendAnalysis from './pages/Transactions/SpendAnalysis';
import ForgotPin from './pages/ChangePin/ForgotPin';
import CardDamage from './pages/CardDamage';
import CardDamageFaceId from './pages/CardDamage/CardDamageFaceID';
import CardCancelled from './pages/CardDamage/CardCancelled';
import CardConfirmAddress from './pages/CardDamage/CardConfirmAdress';
import CardNewConfrim from './pages/CardDamage/CardNewConfirm';
import TermsCondition from './pages/CardSettings/T&C';
import Help from './pages/CardSettings/Help';
import CardUnLockFaceID from './pages/ManageCard/CardUnLockFaceID';
import ManageCard2 from './pages/ManageCard/ManageCard2';
import HideCardFaceID from './pages/ManageCard/HideCardFaceID';
import GoalDetails2 from './pages/MyGoals/GoalDetail2';
import RewardRedeemedDone2 from './pages/Rewards/RewardRedeemedDone2';
import SpendAnalysis2 from './pages/Transactions/SpendAnalysis2';


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

      
          
     
        <Route path="/login" element={<LoginFaceID />} />
        <Route path="/apple-wallet" element={<AppleWallet />} />
        <Route path="/c2p-info" element={<C2PInfo />} />
        <Route path="/c2p-loader" element={<C2PLoader />} />
        <Route path="/c2p-done" element={<C2PDone />} />
        <Route path="/apple-wallet-terms" element={<AppleCardTerms />} />
        <Route path="/apple-wallet-card-added" element={<AppleCardAdded />} />
        <Route path="/apple-wallet-card-added-done" element={<AppleCardDone />} />
        <Route path="/apple-wallet" element={<AppleWallet />} />
        <Route path="/apple-wallet-add-card" element={<AddAppleCard />} />
        <Route path="/apple-wallet-terms2" element={<AppleCardTerms2 />} />
        <Route path="/apple-wallet-card-added2" element={<AppleCardAdded2 />} />
        <Route path="/apple-wallet-card-added-done2" element={<AppleCardDone2 />} />
        <Route path="/apple-wallet2" element={<AppleWallet2 />} />
        <Route path="/apple-wallet-add-card2" element={<AddAppleCard2 />} />
        <Route path="/card-damage" element={<CardDamage />} />
        <Route path="/card-cancelled" element={<CardCancelled />} />
        <Route path="/card-address" element={<CardConfirmAddress />} />
        <Route path="/card-new-confirm" element={<CardNewConfrim />} />
        <Route path="/card-damage-face-id" element={<CardDamageFaceId />} />
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/help&support" element={<Help />} />
        <Route path="/intro" element={<Intro brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/login-faceid" element={<LoginFaceID />} />
        <Route path="/getting-started" element={<GettingStarted brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
        <Route path="/enter-detail" element={<EnterDetails />} />
        <Route path="/spending-alerts" element={<SpendingAlerts />} />
        <Route path="/contactless-settings" element={<ContactlessPayments />} />
        <Route path="/card-setting-done" element={<SettingsDone />} />
        <Route path="/online-shopping-setting" element={<OnlineShopingSettings />} />
        <Route path="/instore-shopping-setting" element={<InStoreShopping />} />
        <Route path="/atm-settings" element={<ATMSettings />} />
        <Route path="/international-setting" element={<InternationalPayments />} />
        <Route path="/card-settings" element={<CardSettings />} />
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
        <Route path="/change-passcode" element={<ChangePasscode />} />
        <Route path="/create-pin" element={<CreateNewPin/>} />
        <Route path="/forgot-pin" element={<ForgotPin/>} />
        <Route path="/create-pin-confirmation" element={<ChangePinConfrimation/>} />
        <Route path="/confirm-pin" element={<ConfrimPin/>} />
        <Route path="/card-details" element={<CardDetailPage/>} />
        <Route path="/use-faceid" element={<UseFaceID/>} />
        <Route path="/biller-added/:id" element={<BillAdded/>} />
        <Route path="/select-recipient" element={<SelectReciept />} />
        <Route path="/pause" element={<Pause />} />
        <Route path="/transfer-details/:id" element={<TransferDetails />} />
        <Route path="/amount-send/:id" element={<AmountToSend/>} />
        <Route path="/amount-send-confrimation/:id" element={<AmountSendConfirmation/>} />
        <Route path="/amount-sent/:id" element={<SentMoney/>} />
        <Route path="/add-biller/:id" element={<AddBiller/>} />
        <Route path="/bill-payments-settings/:id" element={<BillPaymentsSettings/>} />
        <Route path="/bill-detail/:id" element={<BillDetails/>} />
        <Route path="/bill-review-pay/:id" element={<BillReviewPay/>} />
        <Route path="/bill-search" element={<BillSearch/>} />
        <Route path="/use-faceid2" element={<UseFaceID2/>} /> 
        <Route path="/manage-card" element={<ManageCard/>} />
        <Route path="/view-card-detail" element={<ViewCardDetail/>} />
        <Route path="/hide-card-detail-faceid" element={<HideCardFaceID/>} />
        <Route path="/view-card-detail-faceid" element={<ViewCardFaceID/>} />
        <Route path="/card-lock-faceid" element={<CardLockFaceID/>} />
        <Route path="/lock-card" element={<CardLock/>} />
        <Route path="/card-unlock-faceid" element={<CardUnLockFaceID/>} />
        <Route path="/manage-card2" element={<ManageCard2/>} />
        <Route path="/new-home" element={<NewHomePage brand={selectedBrand} makePageUnclickable={true}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/old-home" element={<OldHomePage brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/video-selfie" element={<VideoSelfieRecording brand={selectedBrand}
          theme={selectedTheme} lang={selectedLang} />} />
           <Route path="/video-selfie-camera" element={<VideoSelfieCamera />} />
           <Route path="/send-money" element={<SendMoney />} />
           <Route path="/rewards" element={<Rewards />} />
           <Route path="/rewardsdeatils" element={<RewardsDetails />} />
           <Route path="/rewards-successful" element={<RewardRedeemed />} />
           <Route path="/rewards-redeemed" element={<RewardRedeemedDone />} />
           <Route path="/rewards-redeemed2" element={<RewardRedeemedDone2/>} />
           <Route path="/mygoals" element={<MyGoals />} />
           <Route path="/newgoal" element={<NewGoal />} />
           <Route path="/newgoal2" element={<NewGoal2 />} />
           <Route path="/goalcreated" element={<GoalCreated />} />
           <Route path="/goaldetail/:id" element={<GoalDetail />} />
           <Route path="/goaldetail2/:id" element={<GoalDetails2 />} />
           <Route path="/transaction-dispute" element={<TransactionDispute />} />
           <Route path="/transaction2" element={<Transaction2 />} />
           <Route path="/spend-analysis2" element={<SpendAnalysis2 />} />
           <Route path="/spend-analysis" element={<SpendAnalysis />} />
           <Route path="/transaction-dispute2" element={<TransactionDispute2 />} />
           <Route path="/paybill" element={<PayBill />} />
           <Route path="/paybill-added/:id" element={<PayBillAdded />} />
           <Route path="/paybill-confrimation/:id" element={<BillPaidConfirmation />} />
           <Route path="/paybill-added2/:id" element={<PayBillAdded2 />} />
           <Route path="/paybill-added3/:id" element={<PayBillAdded3 />} />
           <Route path="/paybill-added-connected/:id" element={<PayBillAddedConnected/>} />
           <Route path="/paybill-added-connected2/:id" element={<PayBillAddedConnected2/>} />
        <Route path="404" element={<Page404 />} />
        {/* Redirect to the brand and theme selector if the route doesn't match */}
        <Route path="*" element={<Navigate to="/old-home" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;