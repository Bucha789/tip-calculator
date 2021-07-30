import React from 'react'

export default function SelectInput({type}) {
  return (
    <div className='select-input__container'>
      <div className="select-input__title">
        <h3>{type}</h3>
      </div>
      <div className='input__container'>
      <span><i class="fas fa-dollar-sign"></i></span>
      <input type="number" name="bill" id="" placeholder/>
      </div>
    </div>
  )
}
