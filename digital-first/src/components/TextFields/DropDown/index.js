import React from 'react'
import '../style.css'
import ForwardArrow from '../../../assets/images/chevron-down-black.svg'

function DropDownField({ label, value, onChange }) {
  return (
    <div className="textfield-container">


      <div class="input-container">
        <input
          type="text"
          id={label}
          name={label}
          value={value}
          aria-labelledby={`label-${label}`}
        />
        <label class="label" for={label} id={`label-${label}`}>
          <div class="text">{label}</div>
        </label>


      </div>
      <div className='drop-down-arrow'>
        <img src={ForwardArrow} alt='arrow' className='arrow' />
      </div>

    </div>
  )
}

export default DropDownField