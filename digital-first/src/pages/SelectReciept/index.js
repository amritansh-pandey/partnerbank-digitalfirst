import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import contactsData from '../../assets/data/contact';
import ContactSearchList from '../../components/ContactSearchList';
import AddContact from '../../assets/images/add-fill.svg';
import SearchIcon from '../../assets/images/magnifying-glass.svg';

function SelectReciept() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isSearchContainerClicked, setIsSearchContainerClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
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

    const filtered = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredContacts(filtered);
  };

  const handleItemClick = (selectedContact) => {
    navigate(`/transfer-details/${selectedContact.id}`, {
      state: {
        contactName: selectedContact.name,
        contactDetail: selectedContact.detail,
        // Add more data as needed
      },
    });
  };

  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Select recipient"}
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
              <span className='subheading3'>Contacts</span>
            </div>
            <div>
              <img src={AddContact} alt='plus' className='plus' />
            </div>
          </div>

          <div>
            <ContactSearchList contacts={filteredContacts} onItemClick={handleItemClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectReciept;
