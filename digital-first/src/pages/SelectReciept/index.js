
import React, { useState, useEffect, useRef } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import contactsData from '../../assets/data/contact';
import ContactSearchList from '../../components/ContactSearchList';
import AddContact from '../../assets/images/add-fill.svg';
import SearchIcon from '../../assets/images/magnifying-glass.svg'

function SelectReciept() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isSearchContainerClicked, setIsSearchContainerClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactsData);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const searchContainerRef = useRef(null);

  const handleSearchContainerClick = () => {
    setIsSearchContainerClicked(true);
  };

  const handleDocumentClick = (event) => {
    // Check if the click is outside the search container
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setIsSearchContainerClicked(false);
    }
  };

  // Attach a document click listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter contacts based on the search query
    const filtered = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredContacts(filtered);
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
            <ContactSearchList contacts={filteredContacts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectReciept;