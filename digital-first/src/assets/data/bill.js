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
        name: "Northwest Natural Gas",
        type: "Utilities",
        due: "Due on: 08/03",
        money: "$144.55",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 2,
        billImg: Bill2,
        name: "The Tribune",
        type: "Subscription",
        due: "Due on: 08/03",
        money: "$144.55",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 3,
        billImg: Bill3,
        name: "Muse",
        type: "Streaming",
        due: "Due on: 08/03",
        money: "$144.55",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 4,
        billImg: Bill4,
        name: "Keystone Mutual",
        type: "Insurance",
        due: "Due on: 08/03",
        money: "$144.55",
        stat: Math.random() < 0.5 ? "Pending" : "Completed",
    },
    {
        id: 5,
        billImg: Bill5,
        name: "Bank Partners",
        type: "Banking",
        due: "Due on: 08/03",
        money: "$144.55",
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