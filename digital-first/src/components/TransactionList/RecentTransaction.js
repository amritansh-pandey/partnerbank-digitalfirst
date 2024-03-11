import React from 'react';
import transactionsData from '../../assets/data/transaction';
import './style.css';
import TransactionListItem from './TransactionListItem'; 
import { Link } from 'react-router-dom';

const RecentTransaction = () => {
 
  const groupedTransactions = transactionsData.reduce((acc, transaction) => {
   
    const criteria = transaction.category;
    if (!acc[criteria]) {
      acc[criteria] = [];
    }
    acc[criteria].push(transaction);
    return acc;
  }, {});

  return (
    <div className='transaction-list-container2'>
      {Object.entries(groupedTransactions).map(([category, transactions]) => (
        <div key={category} className='recent-view-detail-container'>
          <div className='transaction-list-heading-container2'>
            <div>
            <span className='subheading2'>Recent transactions</span>
          </div>

          <div>
          <Link to="/scan-photo-id" style={{ textDecoration: "none" }}>
            <span className='subheading4'>See all</span>
            </Link>
          </div>
          </div>
          <ul>
            {transactions.slice(0, 3).map((transaction, index) => (
              <TransactionListItem key={index} transaction={transaction} />
            ))}
            {/* If no transactions exist in the category, display a static text */}
            {transactions.length === 0 && <li>No transactions found.</li>}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecentTransaction;
