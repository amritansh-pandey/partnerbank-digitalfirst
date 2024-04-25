import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import ChangePin from '../../assets/images/passcode.svg'
import Terms from '../../assets/images/terms&conditions.svg'
import Damage from '../../assets/images/damage.svg'
import Support from '../../assets/images/support.svg'
import setting_data from '../../assets/data/settings'
import ChevronRight from '../../assets/images/chevron-right-black.svg'
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import SuccessAlert from '../../components/Alerts/SuccessAlert';
import { Link } from 'react-router-dom';

function SettingsDone() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

       
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    }, 1500);
  
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);



  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Manage card"}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
        <div className='card-setting-list-container'>
          <div className='card-setting-main-item'>
            <div className='card-setting-main-item-title'>
              <span className='subheading2'>Card alerts & controls</span>
            </div>
            <div className='card-setting-sub-item-list'>
              {setting_data.map(item => (
                 <Link to={item.navigationUrl} >
                <div key={item.id}>
                  <div className='card-setting-sub-item-container'>
                    <div className='card-setting-sub-item-info'>
                      <img src={item.profileImg} alt={item.name} />
                      <div className='sub-item-info'>
                        <span className='body2'>{item.name}</span>
                        <span className='caption'>{item.detail2}</span>
                      </div>
                    </div>
                    <div>
                      <img src={ChevronRight} />
                    </div>
                  </div>

                </div>
                </Link>
              ))}
            </div>
          </div>


          <div className='card-setting-main-item'>
            <div className='card-setting-main-item-title'>
              <span className='subheading2'>Physical card settings</span>
            </div>
            <div className='card-setting-sub-item-list'>

              <div>
                <div className='card-setting-sub-item-container'>
                <Link to="/change-passcode" style={{ textDecoration: 'none' }}>
                  <div className='card-setting-sub-item-info'>
                    <img src={ChangePin} alt="Change card PIN" />
                    <div>
                      <span className='body2'>Change card PIN</span>
                    </div>
                  </div>
                  </Link>
                  <div>
                    <img src={ChevronRight} />
                  </div>
                </div>

              </div>
             
              <div>
                <div className='card-setting-sub-item-container'>
                  <div className='card-setting-sub-item-info'>
                    <img src={Damage} alt="Change card PIN" />
                    <div>
                      <span className='body2'>Damaged or lost card</span>
                    </div>
                  </div>
                  <div>
                    <img src={ChevronRight} />
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className='card-setting-main-item'>
            <div className='card-setting-main-item-title'>
              <span className='subheading2'>General enquiries</span>
            </div>
            <div className='card-setting-sub-item-list'>

              <div>
                <div className='card-setting-sub-item-container'>
                  <div className='card-setting-sub-item-info'>
                    <img src={Terms} alt="Change card PIN" />
                    <div>
                      <span className='body2'>Terms and conditions</span>
                    </div>
                  </div>
                  <div>
                    <img src={ChevronRight} />
                  </div>
                </div>

              </div>


              <div>
                <div className='card-setting-sub-item-container2'>
                  <div className='card-setting-sub-item-info'>
                    <img src={Support} alt="Change card PIN" />
                    <div>
                      <span className='body2'>Partner Bank help and support</span>
                    </div>
                  </div>
                  <div>
                    <img src={ChevronRight} />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <div style={{ height: "200px" }}></div>
        {showSuccessAlert && (
          <div className='success-alert-container-absolute'>
            <div className={`fade-in`} style={{ animationDuration: '0.5s' }}>
              <SuccessAlert
               text={"Changes saved successfully."}
              />
            </div>
          </div>
        )}
      </div>
      <BottomNavigationDefault />
    </div>
  );
}

export default SettingsDone;