import React from 'react'
import TextField from '../../components/TextFields/TextField';
import './style.css'

 

const TransferDetailForm = ({ contacts }) => (

    <div className='contact-list'>
        {contacts.map((contact) => (
            <div key={contact.id}>

                <div className='form-container margin24'>
 
                    <div className='mt-32'>
                        <TextField
                            label={"Full Name"}
                            value={"Full Name"} />
                    </div>


                    <div className='mt-32'>
                        <TextField
                            label={"Email ID"}
                            value={"Email ID"} />
                    </div>


                    {/* <div className='mt-32'>
                        <DropDownField
                            label={"Category"}
                            value={"Gift"} />
                    </div> */}


                    <div className='mt-32'>
                        <TextField
                            label={"Transfer from"}
                            value={"Digital Debit Card •••• 8832"} />
                    </div>


                </div>


            </div>
        ))}

    </div>
);


export default TransferDetailForm;