// TransactionList.jsx

import React from 'react';
import transactionsData from '../../assets/data/transaction';
import './style.css';
import TransactionListItem from './TransactionListItem'; // Import the new component

const TransactionList = () => {
  const groupedTransactions = transactionsData.reduce((grouped, transaction) => {
    const key = transaction.date || 'Uncategorized';

    grouped[key] = grouped[key] || [];
    grouped[key].push(transaction);

    return grouped;
  }, {});

  return (
    <div className='transaction-list-container'>
      {Object.entries(groupedTransactions).map(([date, transactions]) => (
        <div key={date}>
          <div className='transaction-list-heading-container'>
            <span className='title3'>{date}</span>
          </div>
          <ul>
            {transactions.map((transaction, index) => (
              <TransactionListItem key={index} transaction={transaction} />
            ))}
          </ul>
        </div>
      ))}
  
    </div>
  );
};

export default TransactionList;
