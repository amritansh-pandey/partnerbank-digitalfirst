import React from 'react'
import '../style.css'


function TextField({ label, value, onChange }) {
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
 

    </div>
  )
}

export default TextField