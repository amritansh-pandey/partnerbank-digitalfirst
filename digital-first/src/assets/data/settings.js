import Wireless from '../../assets/images/wireless.svg'
import OnlineShoping from '../../assets/images/online-shoping.svg'
import International from '../../assets/images/international.svg'
import Store from '../../assets/images/store.svg'
import Alerts from '../../assets/images/alert.svg'
import ATMCash from '../../assets/images/atm.svg'



const setting_data = [

    // { 
    // //     // "en": [
    {
        id: 1,
        profileImg: Alerts,
        name: "Spending alerts",
        detail1: "",
        detail2: "",
        title: "Get notified when my card is used",
        navigationUrl: "/spending-alerts"
    },
    {
        id: 2,
        profileImg: Wireless,
        name: "Contactless payments",
        detail1: "Transaction limit not set",
        detail2: "Transaction Limit: $50",
        title: "Manage transaction limits for contactless payments",
        navigationUrl: "/contactless-settings"
    },
    {
        id: 3,
        profileImg: OnlineShoping,
        name: "Online shopping",
        detail1: "Transaction Limit: $2,000",
        detail2: "Transaction Limit: $1,000",
        title: "Manage transaction limits for online shopping",
        navigationUrl: "/online-shopping-setting"
    },
    {
        id: 4,
        profileImg: Store,
        name: "In-store shopping",
        detail1: "Transaction Limit: $1,800",
        detail2: "Transaction Limit: $1,000",
        title: "Manage transaction limits for In-store shopping",
        navigationUrl: "/instore-shopping-setting"
    },
    {
        id: 5,
        profileImg: International,
        name: "International payments",
        detail1: "Transaction Limit: $1,000",
        detail2: "Transaction Limit: $1,500",
        title: "Manage transaction limits for international payments",
        navigationUrl: "/international-setting"
    },
    {
        id: 6,
        profileImg: ATMCash,
        name: "ATM withdrawal",
        detail1: "Withdrawal Limit: $1,000",
        detail2: "Withdrawal Limit: $1,500",
        title: "Manage limits for ATM withdrawal per transaction",
        navigationUrl: "/atm-settings"
    },
   


]
// }

//     "fr": [
//         {


//         }
//     ]
// }
export default setting_data;
