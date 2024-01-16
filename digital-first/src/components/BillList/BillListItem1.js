import React from 'react'
import './style.css'
import Energy from '../../assets/images/merchants/energy.png'
import ForwardArrow from '../../assets/images/chevron-right-black.svg'

function BillListItem1() {
  return (
    <div className='bill-item-container'>
        <div className='bill-image-title'>
            <div className='bill-image'>
                <img src={Energy} alt='bill-logo' className='bill-logo' />
            </div>
            <div className='bill-title-container'>
                
                    <div className='bill-title'>
                        <span className='subheading2'>Lodestar Energy</span>
                    </div>
                    <div className='bill-category'>
                        <span className='caption'>Utilities</span>
                    </div>
            
            </div>


        </div>
        <div className='bill-amount-date-arrow'>
            <div className=''>

          
            <div className='bill-amount'>
                <span className='subheading2'>$144.55</span>
            </div>

            <div className='bill-date'>
                <span className='caption'>Due on: 08/03</span>
            </div>

           
            </div>
            <div className='bill-arrow'>
            <img src={ForwardArrow} alt='bill-arrow' className='bill-arrow' />
            </div>
        </div>
    </div>
  )
}

export default BillListItem1