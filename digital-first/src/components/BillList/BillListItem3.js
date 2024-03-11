import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ForwardArrow from '../../assets/images/chevron-right-black.svg';

function BillListItem3({ bills, onItemClick }) {
  return (
    <div>
      {bills.map((bill) => (
        <div className='bill-item-container' key={bill.id}>
          <Link to={`/add-biller/${bill.id}`} onClick={() => onItemClick(bill)}>
            <div className='bill-info-arrow'>
              <div className='bill-image-title'>
                <div className='bill-image'>
                  <img src={bill.billImg} alt='bill-logo' className='bill-logo' />
                </div>
                <div className='bill-title-container'>
                  <div className='bill-title'>
                    <span className='subheading2'>{bill.name}</span>
                  </div>
                  <div className='bill-category'>
                    <span className='caption'>{bill.type}</span>
                  </div>
                </div>
              </div>
             
            </div>
          </Link>
        </div>
      ))}
    </div> 
  );
}

export default BillListItem3;
