import React from 'react';
import './style.css'; 

const TransactionListItem = ({ transaction, onClick }) => {
  const handleClick = () => {
    onClick(transaction);
  };

  return (
    <li>
      <div className='transaction-list-item' onClick={handleClick}>
        <div>
          <img src={transaction.logo} className='transaction-list-logo' alt={`${transaction.name} logo`} />
        </div>
        <div>
          <div className='transaction-list-name-amount'>
            <div>
              <span className='body2'>{transaction.name}</span>
            </div>
            <div>
              <span className='body3'>{transaction.amount}</span>
            </div>
          </div>
          <div>
            <span className='caption'>{transaction.duration}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionListItem;
