import React from 'react'
import './style.css'
import BillListItem2 from './BillListItem2'


function ConnectedBill() {
    return (
        <div>

            <div className='bill-list-container'>
                <div className='bill-list-title'>
                    <span className='title3'>Biller connections</span>
                </div>
            </div>

            <BillListItem2 />
        </div>
    )
}

export default ConnectedBill;