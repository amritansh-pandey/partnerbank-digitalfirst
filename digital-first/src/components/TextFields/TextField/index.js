import React from 'react'
import '../style.css'


function TextField({ label, value, onChange }) {
  return (
    <div className="textfield-container">


<div class="input-container">
  <input
    type="text"
    id="fname"
    name="fname"
    value=""
    aria-labelledby="label-fname"
  />
  <label class="label" for="fname" id="label-fname">
    <div class="text">First Name</div>
  </label>
</div>


    </div>
  )
}

export default TextField