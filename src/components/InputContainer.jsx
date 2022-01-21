import React from 'react'
import SelectInput from './SelectInput';
import SelectTipButtons from './SelectTipButtons';
import './css/InputContainer.css';
export default function InputContainer() {
  return (
    <div className='main-inputs__container'>
      <SelectInput type='Bill' />
      <SelectTipButtons />
      <SelectInput type='Number of people' />
    </div>
  )
}
