import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TextField from '../../components/TextFields/TextField';
import Title2 from '../../components/Title/Title2';




function EnterDetails() {

    return (
        <div className='page-container'>

            <div className='enter-detail-page-container'>

                <Title2 text={"Enter your details"} />

                <div className='mt-16 center'>
                    <span className='subheading1'>We’ll send you a code to verify it’s you</span>
                </div>


                <div className='form-container'>

                    <div className='form-phone-container'>
                        <div className='country-container'>
                            <TextField
                                label={"Country"}
                                value={"🇺🇸+1"} />


                            <div className='mt-32 phone-container'>
                                <TextField
                                    label={"Mobile number"}
                                    value={"468-272-6821"} />
                            </div>
                        </div>
                        <div className='mt-32'>
                            <TextField
                                label={"Email"}
                                value={"mira.jansen@email.com"} />
                        </div>

                    </div>




                    <Link to="/new-homepage" style={{ textDecoration: "none" }}>
                        <button className='primary-button-medium button-text-white'>
                            Next
                        </button>
                    </Link>



                </div>

            </div>
        </div>

    );
};


export default EnterDetails;