import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import billsData from '../../assets/data/bill';
import BillListItem3 from '../../components/BillList/BillListItem3';  
import AddContact from '../../assets/images/add-fill.svg';
import SearchIcon from '../../assets/images/magnifying-glass.svg';

function BillSearch() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isSearchContainerClicked, setIsSearchContainerClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBills, setFilteredBills] = useState(billsData);  // Use the updated bills data
  const navigate = useNavigate();

  useEffect(() => {
    setShouldAnimate(false);
  }, []);

  const searchContainerRef = useRef(null);

  const handleSearchContainerClick = () => {
    setIsSearchContainerClicked(true);
  };

  const handleDocumentClick = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setIsSearchContainerClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = billsData.filter((bill) =>
      bill.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBills(filtered);
  };

  const handleItemClick = (selectedBill) => {
    navigate(`/transfer-details/${selectedBill.id}`, {
      state: {
        contactName: selectedBill.name,
        contactDetail: selectedBill.detail,
        // Add more data as needed
      },
    });
  };

  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Add new biller"}
        rightIcon={<img src={InfoActive} alt="info" />}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
        <div className='send-recipient-container'>
          <div
            ref={searchContainerRef}
            className={`recipient-search-container ${isSearchContainerClicked ? 'clicked' : ''}`}
            onClick={handleSearchContainerClick}
          >
            <div>
              <img src={SearchIcon} alt="search" className="search-icon" />
            </div>
            <div>
              <input
                type='text'
                placeholder='Search contacts'
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className='search-input'
              />
            </div>
          </div>

          <div className='recipient-title-container'>
            <div>
              <span className='subheading3'>Suggested billers</span>
            </div>
           
          </div>

          <div>
            <BillListItem3 bills={filteredBills} onItemClick={handleItemClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillSearch;
