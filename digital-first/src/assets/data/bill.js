import Bill1 from '../images/merchants/gas.png'
import Bill2 from '../images/merchants/tribune.png'
import Bill3 from '../images/merchants/Muse.png'
import Bill4 from '../images/merchants/keystone.png'
import Bill5 from '../images/merchants/bank-partners.png'


const bills = [

    // { 
    // //     // "en": [
    {
        id: 1,
        billImg: Bill1,
        name: "NW Natural Gas",
        type: "Utilities",
        due: "Due on: 08/03",
        money: "€182.00",
        billid: "NW12123478910",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 2,
        billImg: Bill2,
        name: "The Tribune",
        type: "Subscription",
        due: "Due on: 08/03",
        money: "€20.50",
        billid: "TT12123478910",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 3,
        billImg: Bill3,
        name: "Muse",
        type: "Streaming",
        due: "Due on: 08/03",
        money: "€4.55",
        billid: "MU12123478910",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 4,
        billImg: Bill4,
        name: "Keystone Mutual",
        type: "Insurance",
        due: "Due on: 08/03",
        money: "€249.99",
        billid: "KM12123478910",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 5,
        billImg: Bill5,
        name: "Bank Partners",
        type: "Banking",
        due: "Due on: 08/03",
        money: "€99.50",
        billid: "BP12123478910",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    }


]
// }

//     "fr": [
//         {
           

//         }
//     ]
// }
export default bills;