import React from 'react'
import './css/SelectInput.css'
export default function SelectInput({type}) {
  return (
    <div className='select-input__container'>
      <div className="select-input__title">
        <h3>{type}</h3>
      </div>
      <div className='input__container'>
      <i className="fas fa-dollar-sign"></i>
      <input type="number" name="bill" id="" />
      </div>
    </div>
  )
}
