
import ABC from '../images/merchants/city-energy.png'
import GoodFood from '../images/merchants/fresh-street.png'
import Spa from '../images/merchants/spa.png'
import Apparel from '../images/merchants/trendz.png'
import StyleHome from '../images/merchants/style-home.png'
import Vacation from '../images/merchants/vacation-escape.png'
import Webflix from '../images/merchants/stream-watch.png'


const transactionsData = [
  {
    logo: ABC,
    name: 'ABC & Co.',
    duration: '11:57 PM',
    amount: '$28.50',
    date: 'Today', 
    day: '5th May 2024',
    itemcost: "$28.50",
    product: "Fruit Salad",
    iteminfo: "250g",
    itemdiscount: "-$2.00",
    tax: "$2.00",
    subtotal: "$28.50",
    address: "25 Madison Ave, New York, NY 10010, USA"
  },
  {
    logo: GoodFood,
    name: 'Good Food Club',
    duration: '02:30 PM',
    amount: '$22.50',
    date: 'Today',
    day: '6th May 2024',
    itemcost: "$2.50",
    product: "Apples",
    iteminfo: "250g",
    itemcost2: "$12.50",
    product2: "Milk",
    iteminfo2: "1l",
    itemcost3: "$3.50",
    product3: "Eggs",
    iteminfo3: "12",
    itemcost4: "$5.50",
    product4: "Chicken",
    iteminfo4: "500g",
    itemdiscount: "-$5.50",
    tax: "$4.00",
    subtotal: "$24.00",
    address: "123 Broadway, New York, NY 10010, USA"
  },
  {
    logo: Spa,
    name: 'HealthSpa',
    duration: '08:45 PM',
    amount: '$109.99',
    date: 'Yesterday',
    day: '4th May 2024',
    itemcost: "$99.99",
    product: "Spa",
    iteminfo: "1 hour session",
    tax: "$10.00",
    subtotal: "99.99",
    address: "456 Park Avenue, New York, NY 10010, USA"
  },


  {
    logo: Apparel,
    name: 'Apparel Clothes',
    duration: '10:45 AM',
    amount: '$48.00',
    date: '3rd May',
    day: '3rd May 2024',
    itemcost: "$12.50",
    product: "T-Shirt",
    iteminfo: "Red",
    itemcost2: "$32.50",
    product2: "Jeans",
    iteminfo2: "Blue, Slim Fit",
    itemdiscount: "-$2.00",
    tax: "$5.00",
    subtotal: "$45.00",
    address: "1313 Sixth Avenue, New York, NY 10010, USA"
  },


  {
    logo: StyleHome,
    name: 'StyleHome',
    duration: '08:45 PM',
    amount: "$209.99",
    date: 'Yesterday',
    day: '4th May 2024',
    itemcost: "$199.99",
    product: "Sofa",
    iteminfo: "3 Seater",
    itemdiscount: "-$20.00",
    tax: "30.00",
    subtotal: "$199.99",
    address: "456 Park Avenue, New York, NY 10010, USA"
  },

  {
    logo: Vacation,
    name: 'Premium Hotel',
    duration: '09:15 PM',
    amount: '$2500.00',
    date: '2nd May',
    day: '2nd May 2024',
    itemcost: "2399.00",
    product: "Spain Holiday Package",
    iteminfo: "All Inclusive",
    tax: "101.00",
    subtotal: "2399.00",
    address: "567 Central Park West, New York, NY 10010, USA"
  },

  {
    logo: Webflix,
    name: 'Webflix',
    duration: '07:45 AM',
    amount: '$22.99',
    date: '2nd May',
    day: '2nd May 2024',
    itemcost: "$19.99",
    product: "Monthly Subscrition",
    iteminfo: "1 Month",
    tax: "$3.00",
    subtotal: "$22.99",
    address: "789 Madison Avenue, New York, NY 10010, USA"
  },

  {
    logo: GoodFood,
    name: 'Good Food Club',
    duration: '09:15 AM',
    amount: '$40.55',
    date: '2nd May',
    day: '2nd May 2024',
    itemcost: "$2.50",
    product: "Bread",
    iteminfo: "250g",
    itemcost2: "$12.50",
    product2: "Milk",
    iteminfo2: "1l",
    itemcost3: "$12.50",
    product3: "Eggs",
    iteminfo3: "12",
    itemcost4: "$5.50",
    product4: "Chicken",
    iteminfo4: "500g",
    itemdiscount: "-$5.50",
    tax: "$4.00",
    subtotal: "$33.00",
    address: "123 Broadway, New York, NY 10010, USA"
  },

];

export default transactionsData;