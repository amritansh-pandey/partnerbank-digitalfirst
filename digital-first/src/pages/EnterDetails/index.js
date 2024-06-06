import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TextField from '../../components/TextFields/TextField';
import Title2 from '../../components/Title/Title2';




function EnterDetails() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
      // Disable animation after the initial render
      setShouldAnimate(false);
    }, []);
  
    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

            <div className='enter-detail-page-container'>

                <Title2 text={"Enter your details"} />

                <div className='mt-16 center'>
                    <span className='subheading1'>We’ll send you a code to verify it’s you</span>
                </div>

                <div style={{height: "96px"}}></div>
                <div className='form-container'>

                    <div className='form-phone-container'>


                        <div className='mt-32 country-container'>

                            <TextField
                                label={"Country"}
                                value={"🇺🇸+1"} />
                        </div>

                        <div className='mt-32 phone-container'>
                            <TextField
                                label={"Mobile number"}
                                value={"468-272-6821"} />
                        </div>



                    </div>

                    <div className='mt-32'>
                        <TextField
                            label={"Email"}
                            value={"Alexis.jansen@email.com"} />
                    </div>




                    <Link to="/authentication" style={{ textDecoration: "none" }}>
                        <div className='bottom-button-container'>
                            <button className='primary-button-medium button-text-white'>
                                Next
                            </button>
                        </div>

                    </Link>



                </div>

            </div>
        </div>

    );
};


export default EnterDetails;