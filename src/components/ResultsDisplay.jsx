import React from 'react'

export default function ResultsDisplay({typeDisplay, amount}) {
  return (
    <div className='result-display__container'>
      <div className='result-display__type'>
        <h3 className='result-display__title'>{typeDisplay}</h3>
        <p>/ person</p>
      </div>
      <div className='result-display__amount'>
        <span>$ {amount}</span>
      </div>
    </div>
  )
}
