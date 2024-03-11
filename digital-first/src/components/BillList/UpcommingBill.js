import React from 'react'
import './style.css'
import BillListItem1 from './BillListItem1'
import billData from '../../assets/data/bill'

function UpcommingBill() {
    return (
        <div>

            <div className='bill-list-container'>
                <div className='bill-list-title'>
                    <span className='title3'>Bill schedule</span>
                </div>
            </div>
    
                <BillListItem1 bills={billData} />
          


        </div>
    )
}

export default UpcommingBill