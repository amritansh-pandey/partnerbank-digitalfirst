import React from 'react'
import Check from '../../assets/images/check-circle-green.svg'
import './style.css'

function SuccessAlert({ text }) {
    return (
        <div className='success-alert-container'>

            <img src={Check} />
            <span className='success-text'>{text}</span>
        </div>
    )
}

export default SuccessAlert