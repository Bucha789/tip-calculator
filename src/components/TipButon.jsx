import React from 'react'
import './css/TipButton.css'
export default function TipButon({percent}) {
  return (
    <>
      <button className='tip__button'>{percent}%</button>
    </>
  )
}
