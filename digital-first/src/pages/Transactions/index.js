import React from 'react'
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4'
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css'
import DonutChart from '../../components/Charts/Donut';

function Transactions() {
  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon size={24} className="icon-black" />}
        pageTitle={"Transactions"} />


<div className='donut-container'>
<DonutChart />
</div>



    </div>
  )
}

export default Transactions;