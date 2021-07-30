import React from 'react'
import SelectInput from './SelectInput';
import SelectTipButtons from './SelectTipButtons';
export default function InputContainer() {
  return (
    <div className='input__container'>
      <SelectInput type='Bill' />
      <SelectTipButtons />
      <SelectInput type='Number of people' />
    </div>
  )
}
