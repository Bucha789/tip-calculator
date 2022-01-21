import React from 'react'
import ResultsDisplay from './ResultsDisplay'

import './css/ResultsContainer.css';

export default function ResultsContainer({tip, total}) {
  return (
    <div className='results__container'>
      <div>
      <ResultsDisplay typeDisplay='Tip Amount' amount={tip.toFixed(2)}/>
      <ResultsDisplay typeDisplay='Total' amount={total.toFixed(2)}/>
      </div>
      <button className='button__reset'>RESET</button>
    </div>
  )
}
